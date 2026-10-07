<!-- 프로젝트 목적, 데이터 보존 절차, 로컬 검증과 사용자가 수행할 배포 방법을 안내합니다. -->
# NetworkAdmin

네트워크관리사 2급 용어를 실제 통신 과정과 연결하는 한국어 정적 학습 사이트입니다. 순수 HTML·CSS·JavaScript만 사용하며 설치할 프로젝트 의존성, 빌드 과정, 백엔드가 없습니다.

## 2026-10-07 작업 정리

- Phase 1~3: 원본 데이터 이전, 8개 영역 설명, 통신 지도와 웹 접속·전송 시각화 구현
- Phase 4: 검색·비교·문제풀이 구현 후, 요청에 따라 검색·문제·오답 기능 제거
- 개념 중심 개편: 경로의 용어를 누르면 설명 창을 열고 추가 정보를 펼쳐 확인
- 이번 수정: 사용 흐름 → 단일 용어 목록 → 추가 설명 순서로 재배치, 작은 글씨·중복 목록·제작 안내·불필요 범례 정리
- 웹 접속 단계는 목록 버튼으로 바로 선택 가능
- 문구 개선: 홈 7단계·8개 영역의 예시를 구체적인 주어와 동작으로 수정하고, 주요 용어 설명을 쉽게 정리. 서버 관리의 Linux·Windows 환경을 구분하고 예외 설명은 더 알아보기로 분리
- 페이지별 내용·가독성 분석·수정 전후는 [ux-ui-review.txt](ux-ui-review.txt)에 기록

## 현재 학습 방식

통신 경로를 먼저 보고, 각 지점의 용어를 누르면 같은 화면에서 설명·실제 예시·관련 개념을 확인합니다. 전체 원문과 계층 정보는 상세 페이지에서 펼쳐 볼 수 있습니다.

- 원본 83개와 보충 개념 7개, 기존 ID·원문·개념 설명 보존
- 웹 접속 단계와 4개 시각화 유지, 상세 주소와 비교표는 접어서 표시
- 검색·문제풀이·오답 기능 및 문제 데이터 제거
- 기존 Phase 1~4 구현 이후 개념 중심 UI로 개편했으며, 현재 사이트는 localStorage를 사용하지 않음

## 파일 구조

```text
index.html
README.md
ux-ui-review.txt
network admin text keyword list.txt
css/style.css
js/data.js
js/main.js
html/structure.html
html/lan.html
html/address-routing.html
html/transport.html
html/services.html
html/security.html
html/server-management.html
html/virtualization.html
```

## 로컬 실행

`index.html`을 브라우저에서 열어 볼 수 있습니다. 페이지 이동과 하위 경로 동작은 HTTP 서버로도 확인할 수 있습니다.

Python이 설치되어 있다면 저장소의 **상위 폴더**에서 다음 명령을 실행하고, 출력된 서버 주소에 저장소 폴더 이름을 붙여 접속합니다.

```bash
python -m http.server 8000
```

GitHub Pages와 같은 `/NetworkAdmin/` 경로를 확인하려면 저장소를 `NetworkAdmin` 폴더에 두고 상위 폴더에서 실행한 뒤 `http://localhost:8000/NetworkAdmin/`으로 접속합니다. Python은 선택적인 로컬 서버 도구이며 사이트 실행 의존성이 아닙니다. 서버는 Ctrl+C로 종료합니다.

## 데이터와 수정 절차

- TXT는 읽기 전용 원본 참고 자료입니다. 키워드·암기 내용·비고 3열, 논리적 항목 83개입니다.
- `data.js`는 브라우저가 사용하는 정적 데이터입니다. 원본 83개와 보충 개념 7개를 구분하며 원본 필드와 쉬운 설명을 분리합니다. 웹 실행 중 TXT를 다시 파싱하지 않습니다.
- 기존 용어 ID와 주 학습 영역 하나를 유지합니다. 다른 영역에서는 주 영역의 용어 앵커로 연결합니다.
- 원문과 설명이 다르면 시험 학습 기준·실무 및 표준 기준·차이의 이유를 구분합니다. 근거는 데이터의 공식 문서 링크로 확인할 수 있습니다.

사용자가 원본을 갱신할 때의 절차:

1. 탭 구분과 따옴표 내부 줄바꿈을 처리하는 TSV 파서를 사용합니다. 한 줄을 한 용어로 간주하거나 줄바꿈으로 단순 분리하지 않습니다.
2. Python 표준 `csv` 모듈을 쓴다면 `open(path, encoding="utf-8-sig", newline="")`과 `csv.reader(file, delimiter="\t")`를 사용합니다. 필드 내부 CRLF와 빈 비고를 보존합니다.
3. 현재 파일의 제목·빈 행·열 제목 3개 레코드를 확인한 다음, 데이터 83개 레코드가 각각 3열인지 검사합니다. 불일치하면 내용을 추측해서 채우지 않습니다.
4. 기존 ID를 보존하여 `keyword`, `originalMemory`, `originalNote`를 정확히 반영하고, 웹 설명·별칭·관련 ID를 별도로 보완합니다. 원본 변경이 의도된 경우에만 `source.sha256`도 갱신합니다.
5. 249개 원본 필드를 다시 대조하고 원본·보충 개념을 별도로 집계합니다. ID 중복, 관계 ID, 주 영역, 페이지 앵커, 용어 링크와 하위 경로 동작도 확인합니다. 파서나 패키지를 프로젝트에 추가할 필요는 없습니다.

## 검증

2026-10-07 이번 수정 확인: Chrome에서 9개 페이지의 375px·1440px 가로 넘침, 사용 흐름 우선 배치, 단계 직접 선택, 절 제목의 접근성 연결을 검사했습니다. 실행 오류는 없었습니다. 이번에는 로컬 파일로 확인했으며 하위 경로·전체 기능 검증은 반복하지 않았습니다.

이전 작업에서는 원본 249개 필드 일치와 하위 경로 동작을 확인했습니다. 화면 배치 수정에서는 원본 TXT와 data.js를 변경하지 않았습니다. 이후 문구 개선에서는 data.js의 웹 설명만 수정했으며, 변경 전후 용어 ID·키워드·원본 암기 내용·비고가 같은지 확인했습니다. 원본 TXT는 수정하지 않았습니다.

기존 데이터 검증 결과는 원본 83개·보충 7개입니다. UI 개편 후에는 변경된 클릭 설명, 펼치기, 페이지 이동과 모바일 가로 넘침을 중심으로 확인합니다. 실제 기기·스크린 리더 전체 검증과 공개 배포는 별도입니다.

## GitHub Pages 배포

저장소 연결과 `main` 브랜치는 이미 설정되어 있습니다. 아래 명령은 사용자가 변경 내용을 검토한 뒤 Git Bash에서 실행합니다.

```bash
git status --short
git diff --check
git add README.md ux-ui-review.txt index.html html js css "network admin text keyword list.txt"
git diff --cached --stat
git commit -m "Complete network study site phases 1-4"
git push origin main
```

GitHub 저장소의 **Settings → Pages → Build and deployment**에서 **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**를 선택하고 **Save**를 누릅니다. 게시 상태와 실제 주소는 Pages 화면에서 확인합니다. [GitHub 공식 배포 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

모든 내부 링크·리소스는 상대 경로입니다. 배포 후에도 용어 설명 열기, 새로고침, 지도·시각화를 확인하세요. 이 작업에서는 커밋·푸시·Pages 설정 변경·공개 배포를 실행하지 않았습니다.

문구 개선 확인: JavaScript 구문 검사와 원본 필드 보존 비교를 통과했습니다. 이번 문구 수정 후 전체 브라우저 검증은 반복하지 않았습니다.
