// 공통 UI: 원본·지도를 보존하고 학습 내용과 사용자 조작형 통신 시각화를 안전한 DOM으로 표시합니다.
(() => {
  'use strict';
  const { areas, terms, sources, walkthrough, visualizations } = window.NetworkStudy;
  const termById = new Map(terms.map(term => [term.id, term]));
  const areaById = new Map(areas.map(area => [area.id, area]));
  const counts = new Map(areas.map(area => [area.id, 0]));
  terms.filter(term => term.kind === 'original').forEach(term => {
    counts.set(term.primaryArea, counts.get(term.primaryArea) + 1);
  });
  document.querySelectorAll('[data-count-for]').forEach(element => {
    element.textContent = `원본 용어 ${counts.get(element.dataset.countFor)}개`;
  });

  if (document.body.dataset.pageArea) renderLesson(document.body.dataset.pageArea);
  else renderFlowTerms();
  setupConceptDialog();

  const map = document.querySelector('.concept-map');
  if (!map) return;
  const buttons = [...document.querySelectorAll('[data-select-area]')];
  const reset = document.getElementById('reset-map');
  const status = document.getElementById('relation-status');
  let selectedId = null;
  let journeyView = null;

  // 기존 지도의 영역 선택과 시나리오 강조를 서로 다른 모드로 명확히 표시합니다.
  document.querySelectorAll('.map-card').forEach(card => {
    const label = element('span', '현재 단계 관련', 'flow-area-label');
    label.hidden = true;
    card.append(label);
  });
  document.querySelectorAll('.route-node').forEach((node, index) => {
    const label = element('small', '현재 단계 관련', 'flow-node-label');
    label.hidden = true;
    node.append(label);
    const arrow = node.querySelector('.route-arrow');
    if (arrow) arrow.dataset.edge = walkthrough.edges[index].join('-');
  });

  // 링크 이동과 강조 동작을 분리합니다. 네이티브 버튼은 Enter·Space를 지원합니다.
  function selectArea(id) {
    clearFlowHighlight();
    map.dataset.mode = 'area';
    journeyView?.markMapMode('area');
    selectedId = id;
    const area = areas.find(item => item.id === id);
    map.classList.toggle('has-selection', Boolean(area));
    document.querySelectorAll('[data-area]').forEach(card => {
      card.classList.toggle('is-selected', card.dataset.area === id);
    });
    buttons.forEach(button => {
      const active = button.dataset.selectArea === id;
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? '관계 강조됨 −' : '관계 강조 ＋';
    });
    document.querySelectorAll('[data-node]').forEach(node => {
      node.classList.toggle('is-related', Boolean(area && area.nodes.includes(node.dataset.node)));
    });
    status.textContent = area
      ? `${area.title} · ${area.target} — ${area.relation}`
      : '각 영역에 연결된 지점과 관계를 확인해 보세요.';
    reset.disabled = !area;
  }

  // 초기화가 끝난 경우에만 동작 가능한 조작 버튼을 노출합니다.
  buttons.forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      selectArea(selectedId === button.dataset.selectArea ? null : button.dataset.selectArea);
    });
  });
  reset.hidden = false;
  reset.disabled = true;
  reset.addEventListener('click', () => {
    const previous = buttons.find(button => button.dataset.selectArea === selectedId);
    selectArea(null);
    if (previous) previous.focus();
  });

  function clearFlowHighlight() {
    map.querySelectorAll('.is-flow-area,.is-flow-node,.is-flow-edge').forEach(node => {
      node.classList.remove('is-flow-area', 'is-flow-node', 'is-flow-edge');
    });
    map.querySelectorAll('.flow-area-label,.flow-node-label').forEach(label => { label.hidden = true; });
  }

  function highlightJourney(step) {
    selectArea(null);
    map.dataset.mode = 'journey';
    map.dataset.journeyStep = step.id;
    map.querySelectorAll('[data-area]').forEach(card => {
      const active = step.areas.includes(card.dataset.area);
      card.classList.toggle('is-flow-area', active);
      card.querySelector('.flow-area-label').hidden = !active;
    });
    map.querySelectorAll('[data-node]').forEach(node => {
      const active = step.nodes.includes(node.dataset.node);
      node.classList.toggle('is-flow-node', active);
      node.querySelector('.flow-node-label').hidden = !active;
    });
    map.querySelectorAll('[data-edge]').forEach(edge => {
      edge.classList.toggle('is-flow-edge', step.edges.includes(edge.dataset.edge));
    });
    status.textContent = `웹 접속 따라가기 · ${step.title} — ${step.path}`;
    journeyView?.markMapMode('journey');
  }

  journeyView = renderJourney(highlightJourney);

  // 상세 페이지에서 지도 위치 링크로 돌아오면 같은 영역의 관계를 강조합니다.
  function selectFromHash() {
    const id = location.hash.replace(/^#area-/, '');
    if (areaById.has(id)) { document.getElementById('learning-areas').open = true; selectArea(id); }
  }
  selectFromHash();
  window.addEventListener('hashchange', selectFromHash);

  // 문자열을 HTML로 해석하지 않습니다. 원본 줄바꿈은 CSS의 pre-wrap으로 보존합니다.
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function link(text, href) {
    const node = element('a', text);
    node.setAttribute('href', href);
    return node;
  }

  function termLink(id) {
    const term = termById.get(id);
    const prefix = document.body.dataset.pageArea ? '' : 'html/';
    return link(term.keyword, `${prefix}${term.primaryArea}.html#${term.id}`);
  }

  function termLinks(ids, label) {
    const nav = element('nav', undefined, 'concept-links');
    nav.setAttribute('aria-label', label);
    ids.forEach(id => nav.append(termLink(id)));
    return nav;
  }

  function list(items, tag = 'ul') {
    const node = element(tag, undefined, 'study-list');
    items.forEach(text => node.append(element('li', text)));
    return node;
  }

  function references(ids) {
    const box = element('div', undefined, 'reference-links');
    if (!ids.length) return box;
    box.append(element('span', '확인 근거 · 공식 문서'));
    ids.forEach(id => {
      const source = sources[id];
      box.append(link(source.title, source.url));
    });
    return box;
  }

  function section(id, title) {
    const node = element('section', undefined, 'lesson-section');
    node.id = id;
    node.setAttribute('aria-labelledby', `${id}-title`);
    const heading = element('h2', title);
    heading.id = `${id}-title`;
    node.append(heading);
    return node;
  }

  // 비교표는 작은 화면에서도 셀을 줄바꿈하여 전체 페이지 가로 넘침을 방지합니다.
  function table(caption, headers, rows) {
    const node = element('table', undefined, 'study-table');
    node.append(element('caption', caption));
    const head = element('thead');
    const headerRow = element('tr');
    headers.forEach(text => {
      const th = element('th', text);
      th.scope = 'col';
      headerRow.append(th);
    });
    head.append(headerRow);
    const body = element('tbody');
    rows.forEach(row => {
      const tr = element('tr');
      row.forEach((text, i) => {
        const cell = element(i === 0 ? 'th' : 'td', text);
        if (i === 0) cell.scope = 'row';
        tr.append(cell);
      });
      body.append(tr);
    });
    node.append(head, body);
    return node;
  }

  function termCard(term) {
    const card = element('details', undefined, 'term-card');
    card.id = term.id;
    card.tabIndex = -1;
    card.dataset.kind = term.kind;
    const badge = element('span', term.kind === 'original' ? '원본 항목' : '보충 개념', `term-badge ${term.kind}`);
    const heading = element('h3', term.keyword);
    heading.id = `${term.id}-title`;
    card.setAttribute('aria-labelledby', heading.id);
    const summary = element('summary'); summary.append(heading, badge); card.append(summary);
    if (term.aliases.length) card.append(element('p', `별칭 · ${term.aliases.join(' · ')}`, 'term-aliases'));
    const categories = { layer: '계층 관련', multiple: '여러 계층 관련', model: '계층 모델', management: '운영체제·서비스 관리', configuration: '구성·운영 방식' };
    card.append(element('p', `${categories[term.osi.kind]}: ${term.osi.note}`, 'osi-note'));
    card.append(element('p', term.explanation, 'term-explanation preserve-lines'));
    card.append(element('h4', '실제 사용 예시'), element('p', term.example, 'example-text preserve-lines'));
    if (term.expansions.length) {
      card.append(element('h4', '영어 약어·명칭'), list(term.expansions));
    }
    if (term.clarification) {
      const info = term.clarification;
      const note = element('aside', undefined, 'clarification');
      note.setAttribute('aria-label', `${term.keyword}의 시험과 실무 기준`);
      const dl = element('dl');
      for (const [title, text] of [['시험 학습 기준', info.exam], ['실무·표준 기준', info.practice], ['원문과 구분하는 이유', info.reason]]) {
        dl.append(element('dt', title), element('dd', text, 'preserve-lines'));
      }
      note.append(dl, references(info.sourceIds));
      card.append(note);
    }
    if (term.kind === 'original') {
      const original = element('details', undefined, 'original-text');
      original.append(element('summary', '원본 암기 내용·비고 확인'));
      original.append(element('h4', '원본 암기 내용'), element('p', term.originalMemory, 'preserve-lines source-memory'));
      original.append(element('h4', '원본 비고'), element('p', term.originalNote, 'preserve-lines source-note'));
      if (term.originalNote === '') original.append(element('p', '원본 비고는 비어 있습니다.', 'empty-note'));
      card.append(original);
    }
    const ownSources = term.sourceIds.filter(id => !term.clarification?.sourceIds.includes(id));
    if (ownSources.length) card.append(references(ownSources));
    card.append(element('h4', '이어서 연결할 개념'), termLinks(term.relatedTerms, `${term.keyword} 관련 용어`));
    if (term.relatedAreas.length) {
      const related = element('nav', undefined, 'related-area-links');
      related.setAttribute('aria-label', `${term.keyword} 관련 영역`);
      term.relatedAreas.forEach(id => related.append(link(`${areaById.get(id).title} 영역 →`, `${id}.html`)));
      card.append(related);
    }
    card.append(link('↑ 이 영역의 용어 목록', '#term-index'));
    return card;
  }

  function renderLesson(id) {
    const area = areaById.get(id);
    const lesson = area.lesson;
    const host = document.getElementById('detail-content');
    const owned = terms.filter(term => term.primaryArea === id);


    // 기존 역할 패널에 현재 통신 지점과 전체 영역 탐색을 덧붙입니다.
    const position = element('ol', undefined, 'position-path');
    position.setAttribute('aria-label', '통신 경로에서 이 영역과 관련된 지점');
    [['computer', '내 컴퓨터'], ['lan', '집·회사 LAN'], ['router', '라우터'], ['internet', '인터넷'], ['server', '서버']].forEach(([node, title]) => {
      const active = area.nodes.includes(node);
      const item = element('li', `${title}${active ? ' · 관련' : ''}`);
      if (active) item.classList.add('is-related');
      position.append(item);
    });
    document.querySelector('.role-panel').append(position, link('전체 지도에서 이 영역 강조하기 →', `../index.html#area-${id}`));


    const problem = section('problem', '이 영역이 해결하는 문제');
    problem.append(element('p', lesson.problem));
    if (lesson.modelRows) {
      problem.append(table('OSI와 TCP/IP의 역할 대응 · 교육용 개략 비교', ['OSI', 'TCP/IP 4계층', '역할'], lesson.modelRows));
      problem.append(element('p', '같은 통신을 설명하는 두 구분입니다. 일대일로 정확히 나뉘는 구현 표준이나 추가 통신 단계가 아닙니다. ARP·TLS 등은 실제 동작과 자료의 분류 기준을 함께 확인합니다.', 'table-note'));
      problem.append(references(['osi', 'rfc1122']));
    }
    host.append(problem);

    const scenario = section('scenario', '실제 네트워크 사용 예시');
    scenario.append(element('h3', lesson.scenarioTitle));
    const steps = element('ol', undefined, 'scenario-steps');
    lesson.steps.forEach(([title, description, ids]) => {
      const step = element('li');
      step.append(element('h4', title), element('p', description), termLinks(ids, `${title}에 연결되는 개념`));
      steps.append(step);
    });
    scenario.append(steps);
    host.append(scenario);

    // 4가지 학습용 시각화는 해당 주 영역에만 추가하고 다른 영역에서는 링크합니다.
    const available = Object.entries(visualizations).filter(([, item]) => item.area === id);
    if (available.length) {
      const visualSection = section('visual-learning', '직접 조작하며 통신 과정 보기');
      visualSection.append(element('p', walkthrough.scope, 'table-note'));
      available.forEach(([key, config]) => {
        const box = element('article', undefined, 'learning-visual');
        box.id = config.id;
        box.dataset.visualization = key;
        box.tabIndex = -1;
        const heading = element('h3', config.title);
        heading.id = `${config.id}-title`;
        box.setAttribute('aria-labelledby', heading.id);
        box.append(heading);
        visualSection.append(box);
        renderVisualization(key, box);
        box.append(termLinks(config.termIds, `${config.title}의 상세 설명`), references(config.sourceIds));
      });
      host.append(visualSection);
      document.querySelector('.lesson-toc').append(link('통신 시각화', '#visual-learning'));
    }

    const concepts = section('concepts', '핵심 개념과 용어');
    // 단일 용어 목록으로 중복을 줄이고 기존 앵커를 유지합니다.
    const index = element('div'); index.id = 'term-index';
    owned.forEach(term => index.append(termCard(term)));
    concepts.append(index); host.prepend(scenario, concepts);

    const comparisons = section('comparisons', '혼동하기 쉬운 개념 비교');
    lesson.comparisons.forEach(comparison => {
      const box = element('div', undefined, 'comparison-block');
      box.append(table(comparison.title, comparison.headers, comparison.rows));
      box.append(termLinks(comparison.termIds, `${comparison.title}의 용어 설명`));
      if (comparison.sourceIds) box.append(references(comparison.sourceIds));
      comparisons.append(box);
    });
    host.append(comparisons);

    const related = section('related', '관련 영역·용어로 이어가기');
    const relatedNav = element('nav', undefined, 'concept-links');
    relatedNav.setAttribute('aria-label', '관련 학습 영역');
    lesson.related.forEach(id => relatedNav.append(link(`${areaById.get(id).title} 영역 →`, `${id}.html`)));
    related.append(relatedNav, termLinks(lesson.bridgeTerms, '다른 영역의 연결 개념'));
    host.append(related);

    const exam = section('exam', '시험용 암기 포인트');
    exam.append(list(lesson.memory));
    host.append(exam);



    // 긴 부가 설명은 접어 두고 필요할 때 펼칩니다.
    for (const sectionId of ['problem', 'visual-learning', 'comparisons', 'related', 'exam']) {
      const block = document.getElementById(sectionId); if (!block) continue;
      const heading = block.querySelector('h2'), fold = disclosure(heading.textContent);
      fold.querySelector('summary').id = heading.id;
      heading.remove(); while (block.firstChild) fold.append(block.firstChild); block.append(fold);
    }
    document.querySelector('.role-panel').hidden = true;
    document.querySelector('.lesson-toc').replaceChildren(link('사용 흐름', '#scenario'), link('핵심 용어', '#concepts'), link('개념 비교', '#comparisons'));
    // defer로 생성되는 카드에도 직접 URL·검색 결과·뒤로 가기 앵커가 도달하게 합니다.
    function revealHash() {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      const fold = target?.querySelector(':scope > details');
      if (fold) fold.open = true;
      if (target?.classList.contains('term-card') || target?.classList.contains('learning-visual')) {
        if (target.tagName === 'DETAILS') target.open = true;
        for (let p = target.parentElement; p; p = p.parentElement) if (p.tagName === 'DETAILS') p.open = true;
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }
    requestAnimationFrame(revealHash);
    window.addEventListener('hashchange', revealHash);
    document.querySelector('.lesson-toc').hidden = false;
  }
  // Phase 3 공통 단계 조작: 타이머·자동 재생 없이 버튼만으로 이동하며 포커스를 유지합니다.
  function createStepper(host, id, titles, render) {
    const controls = element('div', undefined, 'step-controls');
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', `${host.getAttribute('aria-label') || '시각화'} 단계 조작`);
    const first = element('button', '처음으로');
    const previous = element('button', '← 이전');
    const next = element('button', '다음 →');
    const state = element('p', '', 'step-state');
    state.setAttribute('role', 'status');
    state.setAttribute('aria-live', 'polite');
    state.setAttribute('aria-atomic', 'true');
    const body = element('div', undefined, 'step-body');
    body.id = `${id}-content`;
    [first, previous, next].forEach(button => {
      button.type = 'button';
      button.setAttribute('aria-controls', body.id);
    });
    first.dataset.action = 'first';
    previous.dataset.action = 'previous';
    next.dataset.action = 'next';
    controls.append(first, previous, next);
    host.append(controls, state, body);
    let index = 0;
    function set(value) {
      index = Math.max(0, Math.min(titles.length - 1, value));
      host.dataset.step = String(index);
      host.dataset.stepCount = String(titles.length);
      first.disabled = index === 0;
      previous.disabled = index === 0;
      next.disabled = index === titles.length - 1;
      state.textContent = `${index + 1} / ${titles.length} · ${titles[index]}`;
      body.replaceChildren();
      render(index, body);
    }
    first.addEventListener('click', () => set(0));
    previous.addEventListener('click', () => set(index - 1));
    next.addEventListener('click', () => set(index + 1));
    return { set, body, get index() { return index; } };
  }

  function fieldList(rows, className = 'address-fields') {
    const dl = element('dl', undefined, className);
    rows.forEach(([title, value]) => dl.append(element('dt', title), element('dd', String(value), 'preserve-lines')));
    return dl;
  }

  function disclosure(title, ...children) {
    const details = element('details', undefined, 'visual-details');
    details.append(element('summary', title), ...children);
    return details;
  }

  function choiceButtons(host, label, options, onChange) {
    const group = element('div', undefined, 'visual-choices');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', label);
    const buttons = options.map(([value, title]) => {
      const button = element('button', title);
      button.type = 'button';
      button.dataset.choice = value;
      button.setAttribute('aria-pressed', 'false');
      group.append(button);
      return button;
    });
    function select(value) {
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.choice === value)));
      onChange(value);
    }
    buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.choice)));
    host.append(group);
    return { select };
  }

  // 같은 주소 원천을 홈·TCP·서브넷 시각화가 공유합니다. 일반 전달과 NAT/PAT를 별도 계산합니다.
  function packetHop(index, reverse = false) {
    const { interfaces: n, ports: p, links, initialTTL } = walkthrough;
    const segment = links[reverse ? links.length - 1 - index : index];
    const onHomeLAN = segment.id === 'home-lan';
    return {
      linkId: segment.id,
      label: segment.label,
      from: n[reverse ? segment.to : segment.from],
      to: n[reverse ? segment.from : segment.to],
      sourceIP: reverse ? n.server.ip : (onHomeLAN ? n.pc.ip : n.homeWan.ip),
      destinationIP: reverse ? (onHomeLAN ? n.pc.ip : n.homeWan.ip) : n.server.ip,
      sourcePort: reverse ? p.webServer : (onHomeLAN ? p.webClient : p.webTranslated),
      destinationPort: reverse ? (onHomeLAN ? p.webClient : p.webTranslated) : p.webServer,
      ttl: initialTTL - index,
      natChange: reverse ? onHomeLAN : index === 1,
      reverse,
      index
    };
  }

  function packetCard(packet, title) {
    const card = element('div', undefined, 'packet-card');
    card.dataset.link = packet.linkId;
    card.dataset.ttl = String(packet.ttl);
    card.dataset.natChange = String(packet.natChange);
    card.dataset.sourceIp = packet.sourceIP;
    card.dataset.destinationIp = packet.destinationIP;
    card.dataset.sourcePort = String(packet.sourcePort);
    card.dataset.destinationPort = String(packet.destinationPort);
    card.dataset.sourceMac = packet.from.mac;
    card.dataset.destinationMac = packet.to.mac;
    card.append(element('h4', title || packet.label));
    card.append(element('p', `${packet.from.label} → ${packet.to.label}`, 'wire-caption'));
    card.append(fieldList([
      ['출발지 IP · TCP 포트', `${packet.sourceIP} : ${packet.sourcePort}`],
      ['목적지 IP · TCP 포트', `${packet.destinationIP} : ${packet.destinationPort}`],
      ['프레임 출발지 MAC', packet.from.mac],
      ['프레임 목적지 MAC', packet.to.mac],
      ['이 링크에서의 IPv4 TTL', packet.ttl]
    ]));
    const change = packet.index === 0 ? '송신 노드에서 출발 · 예시 초기 TTL 64'
      : packet.natChange ? (packet.reverse ? '역방향 NAT/PAT · 목적지 IP·포트 복원 + TTL 감소 + 새 링크 프레임' : 'NAT/PAT · 출발지 IP·포트 변환 + TTL 감소 + 새 링크 프레임')
      : '일반 라우팅 · IP·포트 유지 + TTL 감소 + 새 링크 프레임';
    card.append(element('p', change, packet.natChange ? 'nat-note' : 'forward-note'));
    return card;
  }

  function natExplanation() {
    const { interfaces: n, ports: p } = walkthrough;
    const box = element('aside', undefined, 'nat-explanation');
    box.append(element('h4', '공유기의 NAT/PAT · 일반 라우팅과 별도 기능'));
    box.append(fieldList([
      ['내부 TCP 종단', `${n.pc.ip} : ${p.webClient}`],
      ['외부에 보이는 TCP 종단', `${n.homeWan.ip} : ${p.webTranslated}`],
      ['원격 서버', `${n.server.ip} : ${p.webServer}`]
    ]));
    box.append(element('p', '이 예시의 매핑입니다. 요청에서는 출발지 IP·포트를 바꾸고, 응답에서는 그 매핑으로 목적지 IP·포트를 복원합니다. 일반 라우터의 전달 자체가 항상 IP·포트를 바꾸는 것은 아닙니다.'));
    return box;
  }

  function forwardingStrip(reverse) {
    const wrap = element('div', undefined, 'forwarding-strip');
    walkthrough.links.forEach((_, index) => wrap.append(packetCard(packetHop(index, reverse), `${index + 1}. ${packetHop(index, reverse).label}`)));
    return wrap;
  }

  function compactPath(step) {
    const path = element('ol', undefined, 'journey-path');
    path.setAttribute('aria-label', `현재 단계의 장치와 경로: ${step.path}`);
    walkthrough.nodes.forEach((node, index) => {
      const item = element('li');
      item.dataset.journeyNode = node.id;
      const active = step.nodes.includes(node.id);
      item.classList.toggle('is-current-node', active);
      item.append(element('strong', node.label));
      item.append(element('span', active ? (step.id === 'dns' && node.id === 'lan' ? '현재 대상 · LAN DNS' : '현재 단계 관련') : '이번 단계 대상 아님'));
      if (index < walkthrough.edges.length) {
        const id = walkthrough.edges[index].join('-');
        const edge = element('span', step.edges.includes(id) ? '↔ 전달·응답 경로' : '─ 이동 없음', 'journey-edge');
        edge.dataset.journeyEdge = id;
        edge.classList.toggle('is-current-edge', step.edges.includes(id));
        item.append(edge);
      }
      path.append(item);
    });
    return path;
  }

  function renderJourney(syncMap) {
    const host = document.getElementById('walkthrough-interactive');
    const modeNote = element('p', '지도에서 현재 단계를 강조합니다.', 'map-mode-note');
    const sync = element('button', '전체 지도도 현재 단계로 강조');
    sync.type = 'button';
    sync.hidden = true;
    sync.className = 'map-sync-button';
    host.append(modeNote, sync);
    const track = element('ol', undefined, 'journey-step-track');
    walkthrough.steps.forEach((step, i) => {
      const item = element('li'), button = element('button', step.title);
      button.type = 'button'; button.setAttribute('aria-controls', 'web-journey-content');
      button.addEventListener('click', () => controller.set(i));
      item.append(button); track.append(item);
    });
    host.append(track);
    const runner = element('div', undefined, 'journey-runner');
    runner.id = 'web-journey';
    runner.setAttribute('aria-label', '웹 접속 따라가기');
    host.append(runner);
    const controller = createStepper(runner, 'web-journey', walkthrough.steps.map(step => step.title), (index, body) => {
      const step = walkthrough.steps[index];
      runner.dataset.stageId = step.id;
      [...track.children].forEach((li, i) => {
        if (index === i) li.setAttribute('aria-current', 'step');
        else li.removeAttribute('aria-current');
      });
      // 전체 지도와 같은 경로 도식의 중복 표시를 생략합니다.
      body.append(element('p', step.path, 'path-explanation'));
      const facts = element('div', undefined, 'journey-facts');
      for (const [title, content] of [['지금 일어나는 일', step.now], ['필요한 이유', step.why], ['사용하는 프로토콜', step.protocols], ['관련 계층', step.layers]]) {
        const box = element('div');
        box.append(element('h3', title), Array.isArray(content) ? list(content) : element('p', content));
        facts.append(box);
      }
      body.append(facts.firstElementChild, termLinks(step.termIds, '현재 단계의 용어'));
      body.append(disclosure('필요한 이유·프로토콜·계층', facts, element('p', step.cache, 'cache-note')));
      const address = element('section', undefined, 'journey-address');
      address.setAttribute('aria-label', `${step.title}의 주소와 포트 정보`);
      address.append(element('h3', 'IP·MAC·포트로 확인하기'));
      renderJourneyAddress(address, step);
      body.append(disclosure('IP·MAC·포트 자세히 보기', address));
      const related = element('nav', undefined, 'concept-links');
      related.setAttribute('aria-label', '현재 단계의 학습 영역');
      step.areas.forEach(id => related.append(link(`관련 영역 · ${areaById.get(id).title}`, `html/${id}.html`)));
      body.append(disclosure('관련 학습 영역', related));
      syncMap(step);
    });
    sync.addEventListener('click', () => syncMap(walkthrough.steps[controller.index]));
    host.append(disclosure('예시 주소·포트와 생략한 조건 확인', list(walkthrough.assumptions), fieldList([
      ['PC', `${walkthrough.interfaces.pc.ip}/24`], ['DNS', walkthrough.interfaces.dns.ip],
      ['웹 서버', walkthrough.interfaces.server.ip], ['서버 이름', `${walkthrough.domain} · 이 도식에서만 정한 A 레코드`],
      ['MAC 표기', '02로 시작하는 가상의 로컬 관리 유니캐스트 MAC · ARP 요청의 FF:FF:FF:FF:FF:FF는 브로드캐스트'],
      ['외부 주소', '192.0.2.0/24 · 198.51.100.0/24 · 203.0.113.0/24는 문서용이며 실제 접속 대상이 아님']
    ]), references(walkthrough.sourceIds)));
    controller.set(0);
    host.hidden = false;
    return { markMapMode(mode) {
      sync.hidden = mode === 'journey';
      modeNote.textContent = mode === 'journey'
        ? '지도에서 현재 단계를 강조합니다.'
        : '전체 지도는 영역 관계 보기로 전환되었습니다. 아래 경로는 웹 접속의 현재 단계를 유지합니다. 단계 이동 또는 다시 강조 버튼으로 전체 지도도 맞출 수 있습니다.';
    } };
  }

  function renderJourneyAddress(host, step) {
    const { interfaces: n, ports: p } = walkthrough;
    if (step.addressMode === 'config') {
      host.append(fieldList([
        ['내 IPv4 주소', `${n.pc.ip}/24`], ['서브넷 마스크', walkthrough.mask],
        ['기본 게이트웨이', n.homeLan.ip], ['설정된 DNS 서버', n.dns.ip],
        ['내 MAC', n.pc.mac], ['포트·TTL', '현재 확인 과정에는 전송 중인 패킷이 없습니다.']
      ]));
    } else if (step.addressMode === 'dns') {
      host.append(element('p', '이 단계 안에서도 전달 준비를 합니다. DNS 조회를 네트워크 전달보다 먼저 끝나는 독립 동작으로 보지 마세요.', 'cache-note'));
      host.append(list([
        `1. ${n.dns.ip}에 마스크를 적용하면 PC와 같은 192.168.10.0/24입니다.`,
        `2. DNS 서버의 MAC 캐시가 없으면 ARP로 ${n.dns.ip} → ${n.dns.mac}을 먼저 확인합니다.`,
        '3. 같은 LAN으로 질의를 보내고 응답을 받습니다. 이 예시의 LAN DNS가 답을 제공하며, 상위 DNS로 조회하는 과정은 생략합니다.'
      ]));
      host.append(fieldList([
        ['질의 IPv4 · UDP 포트', `${n.pc.ip} : ${p.dnsClient} → ${n.dns.ip} : ${p.dnsServer}`],
        ['응답 IPv4 · UDP 포트', `${n.dns.ip} : ${p.dnsServer} → ${n.pc.ip} : ${p.dnsClient}`],
        ['질의 프레임 MAC', `${n.pc.mac} → ${n.dns.mac}`],
        ['응답 프레임 MAC', `${n.dns.mac} → ${n.pc.mac}`],
        ['A 레코드 답', `${walkthrough.domain} → ${n.server.ip} · 도식의 가정`],
        ['TTL·NAT', '각 송신 노드의 예시 IPv4 TTL 64 · 라우터를 지나지 않아 감소·NAT 없음. DNS 캐시 TTL과는 다른 필드입니다.']
      ]));
    } else if (step.addressMode === 'decision') {
      host.append(fieldList([
        ['내 주소 AND 마스크', `${n.pc.ip} AND ${walkthrough.mask} = 192.168.10.0`],
        ['웹 목적지 AND 같은 마스크', `${n.server.ip} AND ${walkthrough.mask} = 203.0.113.0`],
        ['다음 홉', `${n.homeLan.ip} · 두 네트워크 주소가 다르므로 기본 게이트웨이 선택`],
        ['IP 목적지', `${n.server.ip} · 게이트웨이 주소로 바꾸지 않음`],
        ['MAC·포트', '다음 홉 MAC은 필요 시 다음 단계에서 확인. 지금은 로컬 판단이므로 새 전송 없음.']
      ]));
    } else if (step.addressMode === 'arp') {
      host.append(fieldList([
        ['ARP 요청 프레임', `${n.pc.mac} → FF:FF:FF:FF:FF:FF`],
        ['ARP 요청 메시지의 주소', `송신 IPv4 ${n.pc.ip}\n찾을 IPv4 ${n.homeLan.ip} · 이는 ARP 필드이며 IP 헤더가 아님`],
        ['ARP 응답 프레임', `${n.homeLan.mac} → ${n.pc.mac}`],
        ['확인한 대응', `${n.homeLan.ip} → ${n.homeLan.mac}`],
        ['포트·TTL', 'ARP에는 TCP·UDP 포트와 IPv4 TTL이 없음'],
        ['원격 웹 서버 MAC', 'LAN에서 찾지 않습니다. 다음 이더넷 프레임의 목적지는 공유기 LAN MAC입니다.']
      ]));
    } else {
      const content = element('div');
      const labels = step.id === 'tcp' ? ['SYN · PC → 서버', 'SYN+ACK · 서버 → PC']
        : step.id === 'tls' ? ['협상 송신 · PC → 서버', '협상 응답 · 서버 → PC']
        : ['HTTP 요청 · PC → 서버', 'HTTP 응답 · 서버 → PC'];
      const choices = choiceButtons(host, '전달 방향', [['outbound', labels[0]], ['inbound', labels[1]]], direction => {
        const reverse = direction === 'inbound';
        content.dataset.direction = direction;
        content.replaceChildren(packetCard(packetHop(reverse ? 3 : 0, reverse), '홈 LAN에서 관찰한 주소'));
        content.append(natExplanation());
        content.append(disclosure('링크 4곳에서 MAC·TTL·주소 변화를 비교', element('p', '요청과 응답은 각각 초기 TTL 64로 시작하는 예시입니다. 라우터 3대를 지나 61이 됩니다. 스위치의 단순 프레임 전달은 IP TTL을 줄이지 않습니다.', 'table-note'), forwardingStrip(reverse)));
      });
      host.append(content);
      choices.select('outbound');
    }
  }
  function renderVisualization(key, host) {
    if (key === 'encapsulation') renderEncapsulation(host);
    if (key === 'handshake') renderHandshake(host);
    if (key === 'subnet') renderSubnet(host);
    if (key === 'reliability') renderReliability(host);
  }

  function renderEncapsulation(host) {
    const config = visualizations.encapsulation;
    const names = ['응용 데이터', 'TCP 세그먼트', 'IP 패킷', '이더넷 프레임', '신호'];
    host.append(element('p', '내려가기·올라가기는 한 장치 내부 처리입니다. 가운데 이동은 여러 장치와 링크를 거치는 과정입니다. 신호는 헤더를 하나 더 붙이는 계층이 아니라 매체에서의 표현입니다.', 'table-note'));
    const stepper = createStepper(host, config.id, config.steps.map(step => step[2]), (index, body) => {
      const [phase, level, title, description] = config.steps[index];
      body.append(element('h4', title), element('p', description, 'visual-explanation'));
      const grid = element('div', undefined, 'encapsulation-grid');
      for (const side of ['send', 'receive']) {
        const panel = element('div', undefined, 'layer-stack');
        panel.append(element('h4', side === 'send' ? 'PC 내부 · 캡슐화 ↓' : '서버 내부 · 역캡슐화 ↑'));
        const layers = element('ol');
        const order = side === 'send' ? [0, 1, 2, 3, 4] : [4, 3, 2, 1, 0];
        order.forEach(i => {
          const active = phase === side && level === i;
          const li = element('li', `${names[i]}${active ? ' · 현재 처리' : ''}`);
          li.classList.toggle('current-layer', active);
          li.dataset.layer = String(i);
          li.dataset.side = side;
          layers.append(li);
        });
        panel.append(layers);
        grid.append(panel);
      }
      const travel = element('div', undefined, 'between-devices');
      travel.classList.toggle('current-travel', phase === 'travel');
      travel.append(element('strong', `${phase === 'travel' ? '현재 · ' : ''}장치 간 이동`));
      travel.append(element('p', 'PC → LAN 스위치 → 공유기 → 중간·서버망 라우터 → 서버'));
      travel.append(element('p', '실선 경로: 링크를 따라 이동 · 라우터마다 프레임을 다시 구성합니다. TLS는 이 예시의 양 끝에서 처리합니다.', 'table-note'));
      grid.append(travel);
      body.append(grid);
      if (phase !== 'travel') {
        const unit = element('div', undefined, 'data-unit');
        unit.append(element('h4', `현재 다루는 단위: ${names[level]}`));
        if (level === 4) {
          unit.append(element('p', '프레임의 비트 ↔ 링크의 신호 · 실제 파형이나 캡처 값이 아닙니다.', 'signal-example'));
        } else {
          let nested = element('div', '응용 데이터 · HTTP는 TLS로 보호', 'packet-shell');
          ['응용 데이터', 'TCP 헤더', 'IPv4 헤더', '이더넷 헤더 + 트레일러'].slice(1, level + 1).forEach(label => {
            const outer = element('div', undefined, 'packet-shell');
            outer.append(element('span', label), nested);
            nested = outer;
          });
          unit.append(nested);
        }
        body.append(unit);
      }
      body.append(element('p', '한 HTTP 메시지, TLS 레코드, TCP 세그먼트가 항상 1:1로 대응하지 않습니다. 구조를 보여주기 위한 단순화입니다.', 'table-note'));
    });
    stepper.set(0);
  }

  function renderHandshake(host) {
    const config = visualizations.handshake;
    const { interfaces: n, ports: p } = walkthrough;
    host.append(element('p', '양 끝의 논리적인 TCP 교환입니다. 중간 장치는 생략했으며, 아래 주소 카드는 홈 LAN에서 관찰한 값입니다. 순서 번호는 예시이고 데이터 없는 기본 연결 설정을 가정합니다.', 'table-note'));
    const stepper = createStepper(host, config.id, config.steps.map(step => step.flag), (index, body) => {
      const current = config.steps[index];
      const diagram = element('div', undefined, 'handshake-diagram');
      const endpoints = element('div', undefined, 'tcp-endpoints');
      endpoints.append(element('strong', `PC\n${n.pc.ip} : ${p.webClient}`, 'preserve-lines'), element('strong', `웹 서버\n${n.server.ip} : ${p.webServer}`, 'preserve-lines'));
      diagram.append(endpoints);
      config.steps.forEach((message, i) => {
        const row = element('div', undefined, 'tcp-message');
        row.dataset.message = message.flag;
        row.classList.toggle('is-current-message', i === index);
        const reverse = message.from === 'server';
        const from = reverse ? '서버' : 'PC';
        const to = reverse ? 'PC' : '서버';
        row.append(element('span', `${i + 1}. ${i === index ? '현재 교환' : i < index ? '설명한 교환' : '다음 교환'}`, 'message-index'));
        row.append(element('strong', `${reverse ? '←' : '→'} ${from} → ${to}: ${message.flag}`));
        row.append(element('span', `SEQ ${message.seq}${message.ack === null ? ' · ACK 번호 사용 안 함' : ` · ACK ${message.ack}`}`));
        diagram.append(row);
      });
      body.append(diagram, element('p', current.text, 'visual-explanation'));
      body.append(element('p', 'SYN은 순서 번호 하나를 사용하므로 ACK는 상대 SYN 번호 + 1입니다. TLS 협상은 이 TCP 연결 위에서 별도로 수행합니다.', 'table-note'));
      const reverse = current.from === 'server';
      body.append(packetCard(packetHop(reverse ? 3 : 0, reverse), `${current.flag} · 홈 LAN 구간`));
      body.append(disclosure('서버가 보는 외부 IP·포트와 NAT/PAT', natExplanation(), element('p', '서버에 도착하는 TCP 연결의 상대는 198.51.100.10:62000입니다. 서버의 응답은 이 외부 종단으로 보내고 공유기가 내부 PC로 복원합니다.', 'table-note')));
    });
    stepper.set(0);
  }

  function renderSubnet(host) {
    const config = visualizations.subnet;
    const { interfaces: n, ports: p } = walkthrough;
    host.append(element('p', `PC ${n.pc.ip}/24, 마스크 ${walkthrough.mask}. 이 비교는 직접 연결된 /24 경로와 기본 경로만 있는 일반적인 구성을 가정합니다. 특수 경로·프록시 ARP는 생략합니다.`, 'table-note'));
    const local = element('div', undefined, 'subnet-local');
    const remote = element('div', undefined, 'subnet-remote');
    const summary = element('p', '', 'subnet-summary');
    const options = choiceButtons(host, '목적지 네트워크 선택', [['local', '같은 서브넷 · 직접 전달'], ['remote', '다른 서브넷 · 게이트웨이']], value => {
      host.dataset.networkCase = value;
      local.hidden = value !== 'local';
      remote.hidden = value !== 'remote';
      summary.textContent = value === 'local'
        ? `${n.peer.ip} AND ${walkthrough.mask} = 192.168.10.0 · PC와 같으므로 대상 MAC으로 직접 전달합니다.`
        : `${n.server.ip} AND ${walkthrough.mask} = 203.0.113.0 · PC와 다르므로 ${n.homeLan.ip}에 맡깁니다. IP 목적지는 웹 서버 그대로입니다.`;
      if (value === 'remote') hopControl.set(0);
    });
    local.append(element('p', 'PC → LAN 스위치 → 같은 LAN의 비교용 HTTPS 서버', 'path-explanation'));
    local.append(packetCard({ linkId: 'local-peer', label: '같은 LAN 직접 전달', from: n.pc, to: n.peer, sourceIP: n.pc.ip, destinationIP: n.peer.ip, sourcePort: p.webClient, destinationPort: p.webServer, ttl: walkthrough.initialTTL, natChange: false, reverse: false, index: 0 }));
    local.append(element('p', '대상의 MAC을 모르면 그 대상 IP로 ARP를 합니다. 스위치의 단순 프레임 전달은 IP TTL을 줄이지 않으며, 이 전달에는 게이트웨이와 NAT/PAT가 필요하지 않습니다.', 'visual-explanation'));
    const hopControl = createStepper(remote, 'subnet-forwarding', walkthrough.links.map(item => item.label), (index, body) => {
      const track = element('ol', undefined, 'hop-track');
      walkthrough.links.forEach((segment, i) => {
        const item = element('li', `${i + 1}. ${segment.label}${i === index ? ' · 현재 구간' : ''}`);
        if (i === index) item.setAttribute('aria-current', 'step');
        track.append(item);
      });
      body.append(track, packetCard(packetHop(index)));
      body.append(element('p', index === 0
        ? `원격 IP ${n.server.ip}로 보내도 홈 LAN 프레임 목적지 MAC은 공유기 ${n.homeLan.mac}입니다. 원격 서버 MAC을 LAN에서 ARP로 찾지 않습니다.`
        : index === 1
          ? '공유기가 라우팅하며 새 외부 링크의 프레임을 만듭니다. 이 장비에 구성된 NAT/PAT가 추가로 출발지 IP·포트를 변환합니다.'
          : '이 라우터는 링크 프레임과 TTL을 바꾸지만 추가 NAT/PAT는 하지 않습니다. IP 종단과 TCP 포트는 앞 구간과 같습니다.', 'visual-explanation'));
    });
    remote.append(disclosure('이 예시의 NAT/PAT 매핑', natExplanation()));
    host.append(summary, local, remote);
    options.select('remote');
  }

  function renderReliability(host) {
    const config = visualizations.reliability;
    host.append(element('p', '같은 손실 상황을 비교하는 학습용 도식입니다. TCP는 바이트 흐름, UDP는 독립 데이터그램이며 속도를 재거나 실제 패킷을 캡처한 결과가 아닙니다.', 'table-note'));
    const stepper = createStepper(host, config.id, config.steps.map(step => step.title), (index, body) => {
      const step = config.steps[index];
      const panels = element('div', undefined, 'reliability-panels');
      for (const protocol of ['tcp', 'udp']) {
        const panel = element('div');
        panel.dataset.protocol = protocol;
        panel.append(element('h4', protocol.toUpperCase()));
        panel.append(element('p', '송신 측 → 경로 → 수신 측', 'wire-caption'));
        const blocks = element('ol', undefined, 'delivery-blocks');
        step[protocol].forEach((state, i) => {
          const block = element('li', state);
          if (i === 1) block.className = 'loss-focus';
          blocks.append(block);
        });
        panel.append(blocks, element('p', step[`${protocol}Note`], 'visual-explanation'));
        panels.append(panel);
      }
      body.append(panels);
    });
    stepper.set(0);
  }

  // 통신 지점마다 대표 용어를 놓아 경로와 개념을 함께 읽게 합니다.
  function renderFlowTerms() {
    const groups = {computer:['term-033','term-050','term-018'],lan:['supp-mac','supp-switch','supp-arp'],router:['supp-gateway','supp-router','term-030'],internet:['supp-ip','term-006','term-080'],server:['supp-tls','term-056','term-007']};
    Object.entries(groups).forEach(([node, ids])=>document.querySelector('[data-node="'+node+'"]').append(termLinks(ids,node+' 관련 개념')));
  }
  // 네이티브 dialog의 Escape·포커스 복귀를 사용하고 실제 상세 링크도 보존합니다.
  function setupConceptDialog() {
    const dialog=element('dialog',undefined,'concept-dialog'); dialog.setAttribute('aria-label','용어 설명');
    const close=element('button','닫기 ×','dialog-close'),content=element('div');close.type='button';dialog.append(close,content);document.body.append(dialog);
    close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
    document.addEventListener('click',event=>{
      const a=event.target.closest('a[href]');if(!a||a.dataset.fullConcept||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
      const url=new URL(a.href,location.href),term=termById.get(url.hash.slice(1));if(!term||url.origin!==location.origin)return;
      event.preventDefault();const title=element('h2',term.keyword);title.id='concept-dialog-title';dialog.setAttribute('aria-labelledby',title.id);
      const full=termLink(term.id);full.textContent='원문·계층·세부 설명 보기 →';full.dataset.fullConcept='true';full.addEventListener('click',()=>dialog.close());
      content.replaceChildren(element('p',areaById.get(term.primaryArea).title+' · '+(term.kind==='original'?'원본 항목':'보충 개념'),'dialog-context'),title,element('p',term.explanation,'preserve-lines'),element('h3','실제로는'),element('p',term.example,'preserve-lines'),termLinks(term.relatedTerms,'이어지는 개념'),full);
      if(!dialog.open)dialog.showModal();dialog.scrollTop=0;close.focus();
    });
  }
})();
