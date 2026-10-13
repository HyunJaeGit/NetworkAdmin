// 요약 콘텐츠, 과목 선택, 미리보기 렌더링과 인쇄를 관리합니다.
(() => {
  "use strict";

  // TODO: 과목별 필수 개념과 상세 예제를 보완합니다.
  const subjects = [
    {
      id: "general",
      title: "네트워크일반",
      topics: [
        {
          title: "OSI 7계층",
          description:
            "네트워크 통신 기능을 7개 계층으로 나눈 참조 모델입니다.",
          headers: ["계층", "핵심 역할", "PDU"],
          rows: [
            ["7 응용", "네트워크 서비스 제공", "데이터"],
            ["6 표현", "형식 변환·압축·암호화", "데이터"],
            ["5 세션", "대화·세션 관리·동기화", "데이터"],
            ["4 전송", "종단 간 전달·포트 구분", "TCP 세그먼트 / UDP 데이터그램"],
            ["3 네트워크", "논리 주소·경로 선택", "패킷"],
            ["2 데이터링크", "MAC 주소·프레임 전달·오류 검출", "프레임"],
            ["1 물리", "전기·광·무선 신호 전달", "비트"]
          ],
          memory:
            "물·데·네·전·세·표·응. 비트 → 프레임 → 패킷 → 세그먼트/데이터그램."
        },
        {
          title: "TCP/IP 모델·통신 방식",
          points: [
            "TCP/IP 4계층: 네트워크 인터페이스 → 인터넷 → 전송 → 응용.",
            "캡슐화는 하위 계층으로 내려가며 제어 정보를 추가하는 과정입니다.",
            "단방향은 한쪽만, 반이중은 양방향 교대, 전이중은 양방향 동시 통신입니다.",
            "IEEE 802.3은 Ethernet, IEEE 802.11은 무선 LAN입니다.",
            "CSMA/CD는 공유 매체의 반이중 Ethernet에서 충돌을 검출합니다.",
            "CSMA/CA는 무선 LAN에서 충돌을 회피하는 방식입니다."
          ],
          memory:
            "TCP/IP 4계층. 반이중 교대 · 전이중 동시. CD 검출 · CA 회피."
        },
        {
          title: "ARQ 오류 제어",
          headers: ["방식", "특징"],
          rows: [
            ["Stop-and-Wait", "하나 전송 후 확인 응답 대기"],
            ["Go-back-N", "오류·누락 지점부터 뒤의 미확인 블록 재전송"],
            ["Selective Repeat", "오류·누락 블록만 선택 재전송"]
          ],
          memory:
            "Go-back-N은 뒤까지, Selective Repeat는 필요한 것만 재전송."
        }
      ]
    },
    {
      id: "tcpip",
      title: "TCP/IP",
      topics: [
        {
          title: "IPv4·IPv6",
          headers: ["항목", "IPv4", "IPv6"],
          rows: [
            ["주소 길이", "32비트", "128비트"],
            ["표기", "점으로 구분한 10진수", "콜론으로 구분한 16진수"],
            ["기본 헤더", "최소 20바이트", "40바이트"],
            ["브로드캐스트", "지원", "없음"]
          ],
          points: [
            "IPv4 사설 주소: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
            "대표 루프백 주소: IPv4 127.0.0.1, IPv6 ::1.",
            "IPv6의 :: 축약은 한 주소에서 한 번만 사용할 수 있습니다."
          ],
          memory:
            "IPv4 32비트 · IPv6 128비트. IPv6 기본 헤더 40바이트."
        },
        {
          title: "서브넷 계산: 192.168.10.70/26",
          description:
            "IP와 서브넷 마스크의 AND 연산으로 네트워크 주소를 구합니다.",
          steps: [
            "호스트 비트: 32 − 26 = 6.",
            "일반 호스트 수: 2⁶ − 2 = 62.",
            "마스크: 255.255.255.192. 블록 크기: 256 − 192 = 64.",
            "70은 64~127 구간이므로 네트워크 주소는 192.168.10.64.",
            "브로드캐스트 주소는 192.168.10.127.",
            "할당 가능한 주소는 192.168.10.65~126."
          ],
          memory:
            "일반 호스트 수 = 2ʰ−2. /31·/32는 문제 조건을 별도로 확인."
        },
        {
          title: "TCP·UDP",
          headers: ["항목", "TCP", "UDP"],
          rows: [
            ["연결", "연결형", "비연결형"],
            ["전달", "확인·재전송·순서 제어", "자체 전달·순서 보장 없음"],
            ["헤더", "최소 20바이트", "8바이트"],
            ["연결 설정", "SYN → SYN+ACK → ACK", "연결 설정 없음"]
          ],
          memory:
            "TCP는 연결·신뢰성. UDP는 비연결. ACK는 TCP 필드·플래그."
        },
        {
          title: "주요 서비스 포트",
          headers: ["서비스", "기본 포트", "대표 전송 프로토콜"],
          rows: [
            ["FTP 제어", "21", "TCP"],
            ["SSH / Telnet", "22 / 23", "TCP"],
            ["SMTP", "25", "TCP"],
            ["DNS", "53", "UDP 및 TCP"],
            ["DHCPv4 서버 / 클라이언트", "67 / 68", "UDP"],
            ["TFTP 초기 요청", "69", "UDP"],
            ["HTTP", "80", "TCP"],
            ["HTTPS", "443", "TCP; HTTP/3은 UDP"],
            ["POP3 / IMAP", "110 / 143", "TCP"],
            ["SNMP 요청 / Trap", "161 / 162", "UDP"]
          ],
          memory:
            "SSH 22 · DNS 53 · DHCP 67/68 · HTTP 80 · HTTPS 443."
        },
        {
          title: "주소 확인·라우팅",
          headers: ["개념", "핵심 특징"],
          rows: [
            ["ARP", "동일 링크에서 다음 홉의 IPv4 주소에 대응하는 MAC 확인"],
            ["ICMP", "오류 보고·진단"],
            ["RIP", "거리 벡터·홉 수·최대 15홉"],
            ["OSPF", "링크 상태·비용"],
            ["BGP", "경로 벡터·AS 경로·정책"]
          ],
          memory:
            "ARP IP→MAC. RIP 16홉 도달 불가. OSPF 링크 상태."
        }
      ]
    },
    {
      id: "nos",
      title: "NOS",
      topics: [
        {
          title: "Windows Server",
          headers: ["개념", "역할"],
          rows: [
            ["AD DS", "도메인 사용자·컴퓨터 등의 디렉터리 관리"],
            ["DC", "도메인 컨트롤러"],
            ["OU", "개체 구성·관리 위임·그룹 정책 적용"],
            ["IIS", "웹 서버"],
            ["DNS", "이름 해석"],
            ["DHCP", "네트워크 설정 자동 배포"]
          ],
          memory:
            "AD 디렉터리 · DC 도메인 컨트롤러 · OU 관리 단위 · IIS 웹."
        },
        {
          title: "Linux 디렉터리·계정",
          headers: ["경로", "역할"],
          rows: [
            ["/etc", "시스템 설정"],
            ["/home", "일반 사용자 홈"],
            ["/root", "root 사용자 홈"],
            ["/var/log", "로그"],
            ["/proc", "커널·프로세스 정보를 제공하는 가상 파일 시스템"],
            ["/etc/passwd", "사용자 계정 정보"],
            ["/etc/shadow", "비밀번호 해시·만료 정보"]
          ],
          memory:
            "/etc 설정 · /var/log 로그 · /proc 프로세스. root UID는 0."
        },
        {
          title: "Linux 권한·관리 명령",
          points: [
            "권한 순서: 소유자 → 그룹 → 기타 사용자.",
            "읽기 r=4, 쓰기 w=2, 실행 x=1.",
            "chmod 754 = rwxr-xr--.",
            "chmod는 권한, chown은 소유자를 변경합니다.",
            "ps는 프로세스 조회, top은 실시간 상태 확인입니다.",
            "kill은 시그널 전송입니다. 기본 TERM, -9는 KILL입니다.",
            "systemctl은 systemd 환경에서 서비스를 관리합니다."
          ],
          memory:
            "r4 · w2 · x1. 754 = rwxr-xr--. ps 조회 · top 실시간."
        }
      ]
    },
    {
      id: "equipment",
      title: "네트워크 운용기기",
      topics: [
        {
          title: "장비·계층",
          headers: ["장비", "대표 계층", "판단 기준·기능"],
          rows: [
            ["리피터 / 허브", "1계층", "신호 재생·연결"],
            ["브리지 / L2 스위치", "2계층", "MAC 주소"],
            ["라우터 / L3 스위치", "3계층", "IP 주소·라우팅"],
            ["게이트웨이", "기능·구현에 따라 다름", "통신 체계 연결·변환"]
          ],
          memory:
            "허브 신호 · L2 스위치 MAC · 라우터 IP."
        },
        {
          title: "VLAN·전송매체",
          points: [
            "VLAN은 브로드캐스트 도메인을 논리적으로 나눕니다.",
            "VLAN 간 IP 통신에는 라우팅이 필요합니다.",
            "트렁크는 여러 VLAN을 하나의 링크로 전달합니다.",
            "스위치의 STP는 Spanning Tree Protocol로 L2 루프를 방지합니다.",
            "케이블의 STP는 Shielded Twisted Pair로 차폐 꼬임쌍선입니다.",
            "1000BASE-SX는 1Gbps, 단파장, 멀티모드 광섬유입니다."
          ],
          memory:
            "VLAN 브로드캐스트 분리. STP 프로토콜과 STP 케이블 구분."
        },
        {
          title: "RAID",
          description:
            "동일 용량 S의 디스크 N개를 사용하는 기본 구성 기준입니다.",
          headers: ["수준", "방식", "사용 용량·장애 허용"],
          rows: [
            ["0", "스트라이핑", "N×S · 장애 허용 없음"],
            ["1", "미러링, 기본 2개", "S · 1개 장애 허용"],
            ["5", "분산 패리티, 최소 3개", "(N−1)×S · 1개 장애 허용"],
            ["6", "이중 패리티, 최소 4개", "(N−2)×S · 2개 장애 허용"],
            ["10", "미러링+스트라이핑", "N×S÷2 · 장애 위치에 따라 다름"]
          ],
          memory:
            "RAID 0 분산 · 1 복제 · 5 패리티 · 6 이중 패리티. RAID는 백업이 아님."
        }
      ]
    }
  ];

  const preview = document.getElementById("preview");
  const subjectSelect = document.getElementById("subject-select");
  const modeSelect = document.getElementById("mode-select");
  const printButton = document.getElementById("print-button");
  const status = document.getElementById("preview-status");

  // 문자열을 HTML로 해석하지 않고 안전하게 표시합니다.
  function createElement(tag, text, className) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }

    if (className) {
      element.className = className;
    }

    return element;
  }

  // 인쇄에서 머리글을 반복할 수 있도록 thead와 tbody를 구분합니다.
  function createTable(topic) {
    const table = createElement("table");
    const head = createElement("thead");
    const headerRow = createElement("tr");

    topic.headers.forEach((text) => {
      const cell = createElement("th", text);
      cell.scope = "col";
      headerRow.append(cell);
    });

    head.append(headerRow);

    const body = createElement("tbody");

    topic.rows.forEach((row) => {
      const tableRow = createElement("tr");

      row.forEach((text) => {
        tableRow.append(createElement("td", text));
      });

      body.append(tableRow);
    });

    table.append(head, body);
    return table;
  }

  function createList(items, ordered = false) {
    const list = createElement(ordered ? "ol" : "ul");

    items.forEach((text) => {
      list.append(createElement("li", text));
    });

    return list;
  }

  // 암기 모드는 설명·표·예제를 제외하고 암기 문장만 표시합니다.
  function createTopic(topic, memoryOnly) {
    const section = createElement("section", undefined, "topic");
    section.append(createElement("h3", topic.title));

    if (!memoryOnly) {
      if (topic.description) {
        section.append(
          createElement("p", topic.description, "topic-description")
        );
      }

      if (topic.rows) {
        section.append(createTable(topic));
      }

      if (topic.points) {
        section.append(createList(topic.points));
      }

      if (topic.steps) {
        section.append(createList(topic.steps, true));
      }
    }

    const memory = createElement("p", undefined, "memory");

    memory.append(
      createElement("strong", "암기"),
      document.createTextNode(topic.memory)
    );

    section.append(memory);
    return section;
  }

  // 선택 범위만 렌더링하여 미리보기와 실제 출력 내용을 일치시킵니다.
  function renderPreview() {
    const selectedSubjects = subjects.filter((subject) => {
      return subjectSelect.value === "all" ||
        subject.id === subjectSelect.value;
    });

    const memoryOnly = modeSelect.value === "memory";
    const subjectLabel = subjectSelect.selectedOptions[0].textContent;
    const modeLabel = memoryOnly ? "암기 포인트" : "전체 핵심 요약";
    const fragment = document.createDocumentFragment();

    const header = createElement("header", undefined, "document-header");

    header.append(
      createElement("h1", "네트워크관리사 2급 핵심 요약"),
      createElement(
        "p",
        `${subjectLabel} / ${modeLabel} · v0.1`,
        "document-meta"
      ),
      createElement(
        "p",
        "핵심 개념 초안입니다. 전체 필수 개념과 상세 예제는 보완 예정입니다.",
        "draft-note"
      )
    );

    fragment.append(header);

    selectedSubjects.forEach((subject) => {
      const article = createElement("article", undefined, "subject");
      const heading = createElement("header", undefined, "subject-header");

      heading.append(createElement("h2", subject.title));
      article.append(heading);

      subject.topics.forEach((topic) => {
        article.append(createTopic(topic, memoryOnly));
      });

      fragment.append(article);
    });

    preview.replaceChildren(fragment);
    preview.classList.toggle("memory-mode", memoryOnly);

    const topicCount = selectedSubjects.reduce((total, subject) => {
      return total + subject.topics.length;
    }, 0);

    status.textContent =
      `${selectedSubjects.length}개 과목 · ${topicCount}개 항목 · ${modeLabel}`;

    document.title =
      `네트워크관리사2급_${subjectLabel}_${modeLabel}`;
  }

  // 폰트와 화면 갱신을 기다린 후 브라우저 인쇄창을 엽니다.
  async function printSummary() {
    printButton.disabled = true;

    try {
      if (document.fonts) {
        await document.fonts.ready;
      }

      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      window.print();
    } finally {
      printButton.disabled = false;
    }
  }

  subjectSelect.addEventListener("change", renderPreview);
  modeSelect.addEventListener("change", renderPreview);
  printButton.addEventListener("click", printSummary);

  renderPreview();
  printButton.disabled = false;
})();