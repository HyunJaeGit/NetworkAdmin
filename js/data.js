// 정적 학습 데이터: 원본 암기 내용·비고(줄바꿈 포함)와 웹용 설명을 분리합니다.
// term-001~083은 최초 가져오기 순서로 부여한 고정 ID이며 재정렬해도 변경하지 않습니다.
// primaryArea는 주 학습 영역 하나이며, 엄밀한 OSI 계층 분류를 의미하지 않습니다.
// Phase 2: kind로 원본·보충을 분리하며 별칭, 예시, 관계, 계층 관련성, 공식 근거를 함께 관리합니다.
// 원본 문자열은 수정하지 않습니다. clarification은 시험 학습·실무 기준과 보완 이유입니다.
// Phase 3·4: walkthrough의 주소를 시각화가 공유하며 비교는 기존 자료를 참조합니다. practice는 직접 작성한 연습문제입니다.
window.NetworkStudy = {
  "source": {
    "file": "network admin text keyword list.txt",
    "count": 83,
    "sha256": "949b301f59459ddcd9b58a8029d71b17a74fed2364db3e01e89bbcfbe54c5e97"
  },
  "areas": [
    {
      "id": "structure",
      "title": "통신 구조",
      "tagline": "통신을 계층으로 나누어 이해하기",
      "summary": "OSI와 TCP/IP를 기준으로 데이터가 포장되어 전달되고 다시 해석되는 전체 구조를 살펴봅니다.",
      "target": "전체 통신 과정",
      "relation": "통신 규칙과 데이터 포장",
      "nodes": [
        "computer",
        "lan",
        "router",
        "internet",
        "server"
      ],
      "order": 1,
      "href": "html/structure.html",
      "lesson": {
        "problem": "계층 이름을 외웠는데 같은 데이터가 어디서 어떻게 처리되는지 연결되지 않는 문제를 해결합니다. OSI와 TCP/IP는 같은 통신을 서로 다른 역할 구분으로 설명합니다.",
        "scenarioTitle": "브라우저에서 HTTP/1.1 웹 페이지를 요청할 때",
        "steps": [
          [
            "응용 데이터 만들기",
            "브라우저가 서버에 보낼 HTTP 요청을 만듭니다.",
            [
              "term-002",
              "term-056"
            ]
          ],
          [
            "전송과 주소 정보 붙이기",
            "TCP가 전송을 관리하고 IP가 목적지까지의 전달 정보를 제공합니다.",
            [
              "term-004",
              "term-025",
              "supp-ip"
            ]
          ],
          [
            "링크로 보내고 다시 해석하기",
            "이더넷 프레임으로 다음 홉에 전달하고, 수신 측에서는 해당 계층 정보를 해석합니다.",
            [
              "term-024",
              "supp-switch"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "OSI와 TCP/IP는 이어 붙이는 단계가 아닙니다",
            "headers": [
              "구분",
              "무엇을 설명하나",
              "학습 기준"
            ],
            "rows": [
              [
                "OSI",
                "통신 기능의 7계층 참조 모델",
                "물리 → 데이터링크 → 네트워크 → 전송 → 세션 → 표현 → 응용"
              ],
              [
                "TCP/IP",
                "인터넷 프로토콜 묶음과 계층 모델",
                "네트워크 인터페이스 → 인터넷 → 전송 → 응용"
              ]
            ],
            "termIds": [
              "term-001",
              "term-023"
            ],
            "sourceIds": [
              "osi",
              "rfc1122"
            ]
          }
        ],
        "related": [
          "lan",
          "address-routing",
          "transport",
          "services"
        ],
        "bridgeTerms": [
          "supp-arp",
          "term-018",
          "term-033",
          "supp-tls"
        ],
        "memory": [
          "하위부터 물·데·네·전·세·표·응.",
          "TCP/IP 4계층은 네트워크 인터페이스 → 인터넷 → 전송 → 응용.",
          "PDU: 비트, 프레임, 패킷, TCP 세그먼트·UDP 데이터그램을 구분합니다.",
          "캡슐화는 정보 추가, 역캡슐화는 해석 후 제거입니다."
        ],
        "modelRows": [
          [
            "7 · 응용",
            "응용",
            "서비스 메시지 규칙"
          ],
          [
            "6 · 표현",
            "응용에 포함해 설명",
            "데이터 표현, 압축, 암호화 역할"
          ],
          [
            "5 · 세션",
            "응용에 포함해 설명",
            "대화와 세션 관리 역할"
          ],
          [
            "4 · 전송",
            "전송",
            "TCP·UDP와 종단 간 전달"
          ],
          [
            "3 · 네트워크",
            "인터넷",
            "IP 주소와 네트워크 사이 전달"
          ],
          [
            "2 · 데이터링크",
            "네트워크 인터페이스",
            "프레임과 링크 내 전달"
          ],
          [
            "1 · 물리",
            "네트워크 인터페이스",
            "신호와 전송 매체"
          ]
        ]
      }
    },
    {
      "id": "lan",
      "title": "물리 연결·LAN",
      "tagline": "가까운 장치들이 연결되는 방식",
      "summary": "케이블과 스위치, VLAN이 집·회사 안에서 데이터를 전달하는 방식을 연결해 봅니다.",
      "target": "내 컴퓨터 ↔ 집·회사 LAN",
      "relation": "신호 전달과 내부망 구성",
      "nodes": [
        "computer",
        "lan"
      ],
      "order": 2,
      "href": "html/lan.html",
      "lesson": {
        "problem": "케이블로 연결했다고 모든 장치가 같은 방식으로 통신하는 것은 아닙니다. 신호 전달, MAC 기반 전달, VLAN의 범위를 구분해 가까운 장치 사이의 연결을 이해합니다.",
        "scenarioTitle": "사무실 PC가 프린터로 보내는 통신",
        "steps": [
          [
            "물리 연결 확인",
            "PC와 프린터가 중앙 스위치에 연결됩니다.",
            [
              "term-049",
              "term-083"
            ]
          ],
          [
            "링크 주소 확인",
            "같은 IPv4 네트워크에서 대상 MAC을 모르면 ARP로 확인합니다.",
            [
              "supp-arp",
              "supp-mac"
            ]
          ],
          [
            "프레임 전달",
            "스위치는 같은 VLAN 안에서 목적지 MAC을 기준으로 전달합니다.",
            [
              "supp-switch",
              "term-042"
            ]
          ],
          [
            "다른 VLAN이면 라우팅",
            "다른 VLAN의 IP 목적지로 가려면 라우팅 기능이 필요합니다.",
            [
              "supp-router",
              "term-043"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "같은 약자 STP, 다른 역할",
            "headers": [
              "개념",
              "구분 기준",
              "역할"
            ],
            "rows": [
              [
                "STP 프로토콜",
                "Spanning Tree Protocol",
                "스위치의 2계층 루프 방지"
              ],
              [
                "STP 케이블",
                "Shielded Twisted Pair",
                "차폐가 있는 물리 매체"
              ],
              [
                "UTP 케이블",
                "Unshielded Twisted Pair",
                "차폐가 없는 물리 매체"
              ]
            ],
            "termIds": [
              "term-044",
              "term-083"
            ]
          },
          {
            "title": "장비는 전달 판단에 쓰는 정보로 구분",
            "headers": [
              "장비",
              "주로 보는 정보",
              "판단"
            ],
            "rows": [
              [
                "L2 스위치",
                "MAC 주소",
                "같은 LAN의 출력 포트"
              ],
              [
                "라우터",
                "목적지 IP와 라우팅표",
                "다른 네트워크로 가는 다음 홉"
              ],
              [
                "L4 장비",
                "IP와 TCP·UDP 포트 등",
                "처리할 서버나 연결의 분배"
              ]
            ],
            "termIds": [
              "supp-switch",
              "supp-router",
              "term-076"
            ],
            "sourceIds": [
              "switching",
              "balancer"
            ]
          }
        ],
        "related": [
          "address-routing",
          "transport",
          "virtualization"
        ],
        "bridgeTerms": [
          "supp-router",
          "supp-gateway",
          "term-076",
          "term-040"
        ],
        "memory": [
          "VLAN은 브로드캐스트 도메인을 논리적으로 나눕니다.",
          "트렁크는 여러 VLAN을 하나의 링크로 전달합니다.",
          "1000BASE-SX: 1Gbps, 단파장, 멀티모드 광섬유.",
          "스위치 STP와 차폐 케이블 STP의 풀명칭을 구분합니다."
        ]
      }
    },
    {
      "id": "address-routing",
      "title": "주소·경로",
      "tagline": "목적지를 찾고 다음 경로 선택하기",
      "summary": "IP 주소로 목적지를 구분하고 라우터가 다른 네트워크로 패킷을 전달하는 과정을 살펴봅니다.",
      "target": "LAN ↔ 라우터 ↔ 인터넷",
      "relation": "주소 식별과 경로 선택",
      "nodes": [
        "lan",
        "router",
        "internet"
      ],
      "order": 3,
      "href": "html/address-routing.html",
      "lesson": {
        "problem": "같은 LAN의 목적지인지 외부 네트워크인지 판단하고, 외부라면 다음에 누구에게 패킷을 맡길지 이해합니다. 주소 계산과 경로 선택은 서로 연결되지만 같은 작업은 아닙니다.",
        "scenarioTitle": "192.168.10.20/24 PC가 외부 웹 서버로 접속",
        "steps": [
          [
            "내 네트워크 범위 확인",
            "서브넷 마스크로 목적지가 같은 네트워크인지 판단합니다.",
            [
              "term-010",
              "term-011"
            ]
          ],
          [
            "다음 홉으로 전달",
            "일치하는 더 구체적인 경로가 없으면 기본 게이트웨이에 맡깁니다.",
            [
              "supp-gateway",
              "supp-arp"
            ]
          ],
          [
            "경로 선택과 전달",
            "라우터는 목적지 IP의 경로를 선택하고 IPv4 TTL을 줄여 전달합니다.",
            [
              "supp-router",
              "term-006"
            ]
          ],
          [
            "응답이 없으면 진단",
            "ICMP 메시지와 경로 정보를 함께 살펴봅니다.",
            [
              "term-012",
              "term-013"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "패킷의 크기·수명·처리 유형",
            "headers": [
              "개념",
              "구분",
              "착각하지 않기"
            ],
            "rows": [
              [
                "MTU",
                "링크가 담을 수 있는 크기",
                "항상 라우터가 분할하는 것은 아님"
              ],
              [
                "TTL",
                "IPv4 전달 수명 제한",
                "크기나 우선순위 필드가 아님"
              ],
              [
                "TOS",
                "역사적 서비스 유형 필드",
                "현재는 DSCP·ECN 구분 확인"
              ]
            ],
            "termIds": [
              "term-005",
              "term-006",
              "term-008"
            ]
          },
          {
            "title": "라우팅 프로토콜의 방식",
            "headers": [
              "프로토콜",
              "방식",
              "주요 기준"
            ],
            "rows": [
              [
                "RIP",
                "거리 벡터",
                "홉 수"
              ],
              [
                "IGRP",
                "거리 벡터",
                "대역폭·지연 등 복합 메트릭"
              ],
              [
                "OSPF",
                "링크 상태",
                "링크 정보와 비용으로 최단 경로 계산"
              ],
              [
                "BGP",
                "경로 벡터",
                "AS 경로 정보와 정책"
              ]
            ],
            "termIds": [
              "term-077",
              "term-078",
              "term-079",
              "term-080"
            ],
            "sourceIds": [
              "ospf",
              "bgp",
              "rip",
              "igrp"
            ]
          },
          {
            "title": "주소 전환 방식",
            "headers": [
              "개념",
              "동작",
              "구분"
            ],
            "rows": [
              [
                "듀얼 스택",
                "두 프로토콜 함께 운용",
                "변환 자체가 아님"
              ],
              [
                "터널링",
                "기존 패킷을 다른 패킷에 담기",
                "감싸서 전달"
              ],
              [
                "프로토콜 변환",
                "서로 다른 패킷 형식 바꾸기",
                "IPv4·IPv6 연결"
              ],
              [
                "NAT44",
                "IPv4 주소를 다른 IPv4로 바꾸기",
                "IPv6 전환 자체가 아님"
              ]
            ],
            "termIds": [
              "term-027",
              "term-028",
              "term-029",
              "term-030"
            ]
          }
        ],
        "related": [
          "lan",
          "transport",
          "services",
          "security"
        ],
        "bridgeTerms": [
          "supp-arp",
          "supp-mac",
          "term-033",
          "term-018",
          "term-081"
        ],
        "memory": [
          "IP와 마스크의 AND 연산으로 네트워크 주소를 구합니다.",
          "일반 호스트 수는 2ʰ−2이며 /31 같은 예외는 문제 조건을 확인합니다.",
          "ICMPv4: 0 응답, 8 요청, 3 도달 불가, 5 재지정, 11 시간 초과.",
          "RIP 15홉까지, 16홉은 도달 불가.",
          "BGP는 경로 벡터, OSPF는 링크 상태입니다."
        ]
      }
    },
    {
      "id": "transport",
      "title": "전송",
      "tagline": "프로그램 사이에 데이터 전달하기",
      "summary": "TCP·UDP와 포트가 양 끝의 프로그램을 연결하고 전송을 제어하는 역할을 살펴봅니다.",
      "target": "내 컴퓨터 ↔ 서버",
      "relation": "종단 간 전송과 포트 구분",
      "nodes": [
        "computer",
        "server"
      ],
      "order": 4,
      "href": "html/transport.html",
      "lesson": {
        "problem": "IP로 장치에 도착한 데이터가 어느 프로그램의 것인지, 누락과 순서를 누가 처리하는지 이해합니다. 포트는 목적 프로그램 구분, 전송 규칙은 전달 방식과 연결됩니다.",
        "scenarioTitle": "TCP 기반 파일 다운로드",
        "steps": [
          [
            "연결할 서비스 선택",
            "서버 IP뿐 아니라 목적지 포트로 통신 종단을 구분합니다.",
            [
              "term-007",
              "term-069"
            ]
          ],
          [
            "연결 준비",
            "일반적인 TCP는 세 메시지로 연결을 준비합니다.",
            [
              "term-022"
            ]
          ],
          [
            "데이터 전송과 조절",
            "순서 있는 바이트 흐름을 제공하고 수신 여유에 맞추어 전송량을 조절합니다.",
            [
              "term-018",
              "term-021"
            ]
          ],
          [
            "여러 서버로 분산",
            "L4 장비가 IP·포트 등으로 연결을 처리할 서버를 나눌 수 있습니다.",
            [
              "term-076"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "TCP와 UDP",
            "headers": [
              "기준",
              "TCP",
              "UDP"
            ],
            "rows": [
              [
                "연결",
                "연결 설정",
                "연결 설정 없음"
              ],
              [
                "전달·순서",
                "확인과 재전송 등 제공",
                "프로토콜 자체는 보장하지 않음"
              ],
              [
                "응용의 선택",
                "순서 있는 바이트 흐름",
                "데이터그램과 필요한 상위 기능 조합"
              ]
            ],
            "termIds": [
              "term-018",
              "term-019"
            ]
          },
          {
            "title": "재전송 범위로 ARQ 구분",
            "headers": [
              "방식",
              "전송과 대기",
              "재전송 범위"
            ],
            "rows": [
              [
                "Stop-and-Wait",
                "하나 보내고 확인 대기",
                "미확인 블록"
              ],
              [
                "Go-back-N",
                "여러 블록 연속 전송",
                "누락 지점부터 뒤의 미확인 블록"
              ],
              [
                "Selective Repeat",
                "여러 블록과 수신 버퍼",
                "누락되거나 오류가 난 블록만"
              ]
            ],
            "termIds": [
              "term-036",
              "term-037",
              "term-038",
              "term-039"
            ]
          },
          {
            "title": "L4와 L7 부하 분산",
            "headers": [
              "기능",
              "판단 정보",
              "예시"
            ],
            "rows": [
              [
                "L4",
                "IP와 TCP·UDP 포트 등",
                "TCP 443 연결의 서버 분산"
              ],
              [
                "L7",
                "HTTP 호스트·URL 경로 등",
                "웹 요청 내용에 따른 분기"
              ]
            ],
            "termIds": [
              "term-076",
              "term-056"
            ],
            "sourceIds": [
              "balancer"
            ]
          }
        ],
        "related": [
          "structure",
          "services",
          "security",
          "server-management"
        ],
        "bridgeTerms": [
          "term-056",
          "term-069",
          "supp-tls",
          "term-065"
        ],
        "memory": [
          "TCP 연결: SYN → SYN+ACK → ACK.",
          "UDP 헤더: 출발지 포트, 목적지 포트, 길이, 체크섬. 총 8바이트.",
          "수신 여유에 따른 흐름 제어와 재전송 오류 제어를 구분합니다.",
          "ARQ를 OSI 4계층 전용 기능으로 한정하지 않습니다."
        ]
      }
    },
    {
      "id": "services",
      "title": "서비스",
      "tagline": "이름 조회부터 웹·파일 통신까지",
      "summary": "DNS, DHCP, 웹, 메일, 파일 전송을 통해 사용자가 이용하는 통신의 목적을 이해합니다.",
      "target": "내 컴퓨터 ↔ 서버 · LAN",
      "relation": "주소 설정과 서비스 요청·응답",
      "nodes": [
        "computer",
        "lan",
        "server"
      ],
      "order": 5,
      "href": "html/services.html",
      "lesson": {
        "problem": "주소를 받는 일, 이름을 찾는 일, 실제 웹·메일·파일 데이터를 교환하는 일을 구분합니다. 모두 응용 서비스이지만 해결하는 문제와 사용하는 포트가 다릅니다.",
        "scenarioTitle": "새로 연결한 노트북에서 웹 열기",
        "steps": [
          [
            "IP 설정 받기",
            "DHCP 서버에서 주소, 마스크, 게이트웨이와 DNS 설정을 받습니다.",
            [
              "term-033",
              "term-034"
            ]
          ],
          [
            "이름으로 주소 조회",
            "DNS의 A 또는 AAAA 레코드로 목적지 주소를 찾습니다.",
            [
              "term-050",
              "term-052"
            ]
          ],
          [
            "서비스 요청 보내기",
            "목적지의 웹 서비스로 요청하고 HTTPS라면 TLS 보호를 사용합니다.",
            [
              "term-056",
              "supp-tls"
            ]
          ],
          [
            "서버에서 처리",
            "웹 서버가 바인딩 설정과 서비스 상태에 따라 요청을 처리합니다.",
            [
              "term-054",
              "term-055"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "DHCP·DNS·HTTP의 서로 다른 질문",
            "headers": [
              "서비스",
              "해결하는 질문",
              "기본 포트 학습"
            ],
            "rows": [
              [
                "DHCPv4",
                "내 IP 설정은 무엇인가?",
                "UDP 서버 67, 클라이언트 68"
              ],
              [
                "DNS",
                "이 이름에 어떤 정보가 연결되는가?",
                "53 · UDP와 TCP"
              ],
              [
                "HTTP·HTTPS",
                "웹 자원을 어떻게 요청하는가?",
                "HTTP 80, HTTPS 443"
              ]
            ],
            "termIds": [
              "term-033",
              "term-050",
              "term-056"
            ]
          },
          {
            "title": "FTP 데이터 연결의 시작 주체",
            "headers": [
              "방식",
              "포트를 알리는 쪽",
              "연결을 시작하는 쪽"
            ],
            "rows": [
              [
                "Passive",
                "서버",
                "클라이언트 → 서버"
              ],
              [
                "Active",
                "클라이언트",
                "서버 → 클라이언트"
              ]
            ],
            "termIds": [
              "term-069",
              "term-070",
              "term-071"
            ]
          }
        ],
        "related": [
          "address-routing",
          "transport",
          "security",
          "server-management"
        ],
        "bridgeTerms": [
          "supp-gateway",
          "term-007",
          "supp-tls",
          "term-055"
        ],
        "memory": [
          "SMTP TCP 25, SNMP UDP 161·알림 162, TFTP 초기 요청 UDP 69.",
          "DNS: A는 IPv4, AAAA는 IPv6, PTR은 역방향 이름 조회, SOA는 영역 관리 정보.",
          "FTP 제어는 TCP 21이며 데이터 연결은 별도입니다.",
          "IP를 설정해 주어도 DHCP 자체는 응용 계층 프로토콜입니다."
        ]
      }
    },
    {
      "id": "security",
      "title": "보안",
      "tagline": "통신의 접근과 보호 기준 세우기",
      "summary": "방화벽의 허용·차단과 VPN·IPsec의 보호가 통신 경로에 어떻게 적용되는지 살펴봅니다.",
      "target": "LAN ↔ 라우터 ↔ 인터넷 ↔ 서버",
      "relation": "접근 제어와 통신 보호",
      "nodes": [
        "lan",
        "router",
        "internet",
        "server"
      ],
      "order": 6,
      "href": "html/security.html",
      "lesson": {
        "problem": "연결이 된다는 것과 안전하게 통신한다는 것을 구분합니다. 접근 허용·차단, 통신 데이터 보호, 사설 연결 구성의 역할을 따로 이해해야 필요한 지점에 적용할 수 있습니다.",
        "scenarioTitle": "외부 직원이 회사 자원에 접근",
        "steps": [
          [
            "접근 정책 확인",
            "방화벽이 허용된 통신인지 규칙에 따라 판단합니다.",
            [
              "term-081"
            ]
          ],
          [
            "사설 연결 구성",
            "필요하면 VPN으로 회사 내부망과의 연결을 구성합니다.",
            [
              "term-047",
              "term-028"
            ]
          ],
          [
            "데이터 보호",
            "IPsec 기반 VPN이나 HTTPS의 TLS처럼 실제 보호 기술을 확인합니다.",
            [
              "term-048",
              "supp-tls"
            ]
          ],
          [
            "자원 권한 확인",
            "연결 후에도 계정 인증과 자원 접근 권한은 별도로 적용됩니다.",
            [
              "term-072",
              "term-066"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "연결·허용·보호의 역할",
            "headers": [
              "개념",
              "주요 역할",
              "구분할 점"
            ],
            "rows": [
              [
                "방화벽",
                "통과 트래픽의 허용·차단",
                "암호화를 자동 제공하는 뜻은 아님"
              ],
              [
                "VPN",
                "공용망 위의 사설 연결",
                "사용 기술에 따라 보호 방식이 다름"
              ],
              [
                "IPsec",
                "IP 통신 보호",
                "전송 모드와 터널 모드 구분"
              ],
              [
                "TLS",
                "응용 데이터 보호",
                "TCP 핸드셰이크와 별도 과정"
              ]
            ],
            "termIds": [
              "term-081",
              "term-047",
              "term-048",
              "supp-tls"
            ],
            "sourceIds": [
              "ipsec",
              "tls"
            ]
          }
        ],
        "related": [
          "address-routing",
          "transport",
          "services",
          "server-management"
        ],
        "bridgeTerms": [
          "term-028",
          "term-030",
          "term-056",
          "term-066"
        ],
        "memory": [
          "IPsec: 전송 모드는 원래 IP 헤더 뒤의 데이터, 터널 모드는 원본 IP 패킷을 감쌉니다.",
          "암호화는 ESP와 설정 기준으로 판단합니다.",
          "NAT, 방화벽, VPN은 서로 다른 기능입니다.",
          "TLS의 이름만으로 OSI 4계층 전용 프로토콜이라고 분류하지 않습니다."
        ]
      }
    },
    {
      "id": "server-management",
      "title": "서버·운영체제 관리",
      "tagline": "서비스를 실행하는 기반 관리하기",
      "summary": "Windows와 Linux의 계정, 프로세스, 권한, 서비스 설정을 서버 운영과 연결합니다.",
      "target": "서버",
      "relation": "서비스 실행과 운영 상태 관리",
      "nodes": [
        "server"
      ],
      "order": 7,
      "href": "html/server-management.html",
      "lesson": {
        "problem": "패킷이 서버에 도착한 뒤 실제 서비스를 누가 실행하고, 어떤 계정과 권한으로 요청을 처리하는지 이해합니다. 운영체제 상태와 네트워크 상태를 함께 확인하되 같은 것으로 취급하지 않습니다.",
        "scenarioTitle": "서버 연결은 되지만 웹 응답이 오지 않을 때",
        "steps": [
          [
            "서비스 실행 여부",
            "systemctl이나 프로세스 조회로 서비스가 실행 중인지 봅니다.",
            [
              "term-067",
              "term-062"
            ]
          ],
          [
            "포트·사이트 설정",
            "수신 포트와 웹사이트 바인딩을 확인합니다.",
            [
              "term-065",
              "term-055"
            ]
          ],
          [
            "자원과 로그 확인",
            "프로세스 자원 사용량과 관련 로그에서 단서를 찾습니다.",
            [
              "term-061",
              "term-068"
            ]
          ],
          [
            "계정과 권한 확인",
            "콘텐츠 접근 권한이나 도메인 계정 설정도 살펴봅니다.",
            [
              "term-066",
              "term-072"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "식별 번호의 대상",
            "headers": [
              "번호",
              "대상",
              "같이 볼 개념"
            ],
            "rows": [
              [
                "UID·GID",
                "사용자·그룹",
                "파일 소유자와 권한"
              ],
              [
                "PID·PPID",
                "프로세스·부모 프로세스",
                "ps 조회와 신호 전송"
              ]
            ],
            "termIds": [
              "term-060",
              "term-063"
            ]
          },
          {
            "title": "systemctl의 현재 동작과 자동 시작",
            "headers": [
              "명령",
              "목적",
              "유의점"
            ],
            "rows": [
              [
                "start",
                "지금 서비스 시작",
                "부팅 자동 시작 설정과 별도"
              ],
              [
                "enable",
                "부팅 시 시작하도록 설정",
                "지금 시작하려면 start 등 별도 동작 필요"
              ],
              [
                "status",
                "현재 상태 조회",
                "암호 변경 명령이 아님"
              ]
            ],
            "termIds": [
              "term-067"
            ],
            "sourceIds": [
              "systemctl"
            ]
          },
          {
            "title": "OU와 DC",
            "headers": [
              "개념",
              "정체",
              "역할"
            ],
            "rows": [
              [
                "OU",
                "논리적 관리 단위",
                "사용자·컴퓨터 등을 묶음"
              ],
              [
                "DC",
                "서버 역할",
                "인증과 디렉터리 제공"
              ]
            ],
            "termIds": [
              "term-074",
              "term-072"
            ]
          }
        ],
        "related": [
          "services",
          "transport",
          "security",
          "virtualization"
        ],
        "bridgeTerms": [
          "term-056",
          "term-007",
          "term-081",
          "term-075"
        ],
        "memory": [
          "읽기 4, 쓰기 2, 실행 1. 소유자 → 그룹 → 기타 사용자 순서입니다.",
          "/etc/passwd의 x는 일반적인 shadow 구성에서 /etc/shadow 참조를 뜻합니다.",
          "kill의 기본 SIGTERM 15는 종료 요청입니다.",
          "/usr는 일반 사용자 계정 홈 저장소가 아닙니다.",
          "start와 enable, OU와 DC를 각각 구분합니다."
        ]
      }
    },
    {
      "id": "virtualization",
      "title": "가상화·운영 구조",
      "tagline": "자원을 구성하고 운영하는 방식",
      "summary": "네트워크 기능과 가상 머신, 클라우드의 운영 구조를 실제 통신 기반과 연결합니다.",
      "target": "LAN · 라우터 · 서버",
      "relation": "기능 가상화와 자원 운영",
      "nodes": [
        "lan",
        "router",
        "server"
      ],
      "order": 8,
      "href": "html/virtualization.html",
      "lesson": {
        "problem": "네트워크의 기능과 서버 자원을 반드시 전용 물리 장비 하나에 고정해야 하는지 생각해 봅니다. 제어 방식, 기능 구현, 자원 배치와 복원은 각각 다른 운영 문제입니다.",
        "scenarioTitle": "가상 환경에 시험용 네트워크 구성",
        "steps": [
          [
            "가상 머신 준비",
            "Hyper-V 가상 머신을 만들고 변경 전 검사점 활용 여부를 판단합니다.",
            [
              "term-075"
            ]
          ],
          [
            "네트워크 기능 배치",
            "가상 방화벽 같은 소프트웨어 기능으로 연결을 구성할 수 있습니다.",
            [
              "term-041",
              "term-081"
            ]
          ],
          [
            "정책과 전달 기능 구분",
            "SDN은 제어와 전달의 구조를 다룹니다. NFV 사용 여부와는 별개입니다.",
            [
              "term-040"
            ]
          ],
          [
            "운영 위치 결정",
            "자원 소유와 배치에 따라 클라우드 모델과 자체 운영 환경을 구분합니다.",
            [
              "term-045"
            ]
          ]
        ],
        "comparisons": [
          {
            "title": "SDN·NFV·VLAN은 같은 가상화가 아닙니다",
            "headers": [
              "개념",
              "초점",
              "질문"
            ],
            "rows": [
              [
                "SDN",
                "제어 평면과 데이터 평면의 분리",
                "전달 정책을 어떻게 제어할까?"
              ],
              [
                "NFV",
                "네트워크 기능의 소프트웨어 구현",
                "기능을 어디에 배치할까?"
              ],
              [
                "VLAN",
                "논리적 LAN 분리",
                "어느 브로드캐스트 영역에 속할까?"
              ]
            ],
            "termIds": [
              "term-040",
              "term-041",
              "term-042"
            ]
          },
          {
            "title": "검사점과 백업",
            "headers": [
              "구분",
              "목적",
              "유의점"
            ],
            "rows": [
              [
                "검사점",
                "가상 머신 상태 되돌리기",
                "유형에 따라 메모리 포함 여부가 다름"
              ],
              [
                "별도 백업",
                "장애·손실에 대비한 복구",
                "검사점만으로 대체하지 않음"
              ]
            ],
            "termIds": [
              "term-075"
            ],
            "sourceIds": [
              "checkpoint"
            ]
          }
        ],
        "related": [
          "lan",
          "security",
          "server-management"
        ],
        "bridgeTerms": [
          "term-042",
          "term-081",
          "term-067"
        ],
        "memory": [
          "SDN은 제어·전달 분리, NFV는 네트워크 기능의 소프트웨어 가상화입니다.",
          "클라우드 배포 모델과 온프레미스라는 운영 위치 개념을 구분합니다.",
          "Hyper-V 검사점은 종류에 따라 저장하는 상태가 다릅니다."
        ]
      }
    }
  ],
  "terms": [
    {
      "id": "term-001",
      "keyword": "OSI 7계층",
      "originalMemory": "물데네전세표응 ('물리·데이터·네트워크·전송·세션·표현·응용')",
      "originalNote": "OSI = Open Systems Interconnection",
      "explanation": "OSI는 통신 역할을 물리부터 응용까지 일곱 계층으로 나누는 참조 모델입니다. 실제 패킷이 OSI 장치 일곱 개를 차례로 지나간다는 뜻은 아닙니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "OSI",
        "OSI 모델",
        "7계층"
      ],
      "osi": {
        "kind": "model",
        "note": "통신 역할을 나누는 7계층 참조 모델"
      },
      "expansions": [
        "OSI = Open Systems Interconnection"
      ],
      "example": "웹 요청이 실패하면 케이블 연결, IP 경로, 전송 연결, 웹 응답을 서로 다른 역할로 나누어 점검합니다.",
      "relatedTerms": [
        "term-023",
        "term-024",
        "term-025"
      ],
      "sourceIds": [
        "osi"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-002",
      "keyword": "응용 계층",
      "originalMemory": "SMTP\r\nSNMP\r\nTFTP",
      "originalNote": "SMTP = Simple Mail Transfer Protocol \r\nSNMP = Simple Network Management Protocol \r\nTFTP = Trivial File Transfer Protocol",
      "explanation": "사용자가 이용하는 통신 기능과 메시지 규칙을 다룹니다. 이메일, 이름 조회, 주소 설정도 목적은 다르지만 응용 프로토콜을 사용합니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Application Layer",
        "응용"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "Application Layer"
      ],
      "example": "메일 프로그램의 전송 요청을 SMTP로 서버에 전달합니다.",
      "relatedTerms": [
        "term-015",
        "term-016",
        "term-017",
        "term-033",
        "term-050"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-003",
      "keyword": "인터넷 계층",
      "originalMemory": "IP\r\nICMP\r\nARP",
      "originalNote": "IP = Internet Protocol\r\nICMP = Internet Control Message Protocol\r\nARP = Address Resolution Protocol; ARP 계층 분류는 교재에 따라 차이",
      "explanation": "IP 주소와 패킷 전달을 중심으로 네트워크 사이의 통신을 다룹니다. 원본은 ARP를 함께 묶지만, RFC 1122는 ARP를 링크 계층에서 다룹니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Internet Layer",
        "인터넷층"
      ],
      "osi": {
        "kind": "model",
        "note": "TCP/IP 인터넷 계층 · OSI 3계층과 대체로 대응"
      },
      "expansions": [
        "IP = Internet Protocol",
        "ICMP = Internet Control Message Protocol",
        "ARP = Address Resolution Protocol"
      ],
      "example": "다른 네트워크의 웹 서버로 가는 IP 패킷을 라우터가 다음 경로로 전달합니다.",
      "relatedTerms": [
        "term-023",
        "term-012",
        "supp-ip",
        "supp-arp"
      ],
      "clarification": {
        "exam": "원본처럼 IP·ICMP·ARP를 함께 제시한 교재의 분류를 읽되 ARP의 실제 역할도 구분합니다.",
        "practice": "RFC 1122는 ARP를 링크 계층에서 다룹니다. ARP는 IPv4와 링크 주소를 연결하므로 자료별 분류가 달라질 수 있습니다.",
        "reason": "원본의 묶음과 표준의 계층 구분이 같지 않기 때문입니다.",
        "sourceIds": [
          "rfc1122"
        ]
      },
      "sourceIds": [
        "rfc1122"
      ],
      "relatedAreas": [
        "address-routing",
        "lan"
      ]
    },
    {
      "id": "term-004",
      "keyword": "전송 계층",
      "originalMemory": "TCP\r\nUDP",
      "originalNote": "TCP = Transmission Control Protocol\r\nUDP = User Datagram Protocol",
      "explanation": "양 끝의 프로그램 사이에서 데이터를 전달합니다. 연결, 재전송, 흐름 제어 기능의 제공 여부는 사용하는 프로토콜에 따라 다릅니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Transport Layer",
        "전송층"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · TCP/IP 전송 계층"
      },
      "expansions": [
        "TCP = Transmission Control Protocol",
        "UDP = User Datagram Protocol"
      ],
      "example": "한 컴퓨터의 여러 프로그램으로 들어오는 데이터를 목적지 포트에 따라 구분합니다.",
      "relatedTerms": [
        "term-007",
        "term-018",
        "term-019"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport"
      ]
    },
    {
      "id": "term-005",
      "keyword": "MTU",
      "originalMemory": "최대 전송 단위 → 패킷 분할 기준",
      "originalNote": "Maximum Transmission Unit",
      "explanation": "한 링크로 전달할 수 있는 상위 계층 데이터의 최대 크기입니다. IP 통신에서는 링크 MTU를 넘는 IP 패킷을 어떻게 처리할지와 연결됩니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "최대 전송 단위"
      ],
      "osi": {
        "kind": "multiple",
        "note": "링크의 수용 크기와 OSI 3계층 IP 전달에 관련"
      },
      "expansions": [
        "MTU = Maximum Transmission Unit"
      ],
      "example": "경로의 링크가 허용하는 IP 패킷 크기보다 큰 패킷은 단편화 조건을 확인하거나 송신 크기를 줄여야 합니다.",
      "relatedTerms": [
        "term-012",
        "term-026",
        "term-025"
      ],
      "clarification": {
        "exam": "MTU는 크기 기준, TTL은 수명 제한으로 구분합니다.",
        "practice": "IPv4도 단편화 금지 조건에서는 라우터가 분할하지 못합니다. IPv6 라우터는 단편화하지 않으며 필요 시 송신 노드가 처리합니다.",
        "reason": "“MTU 초과 → 항상 라우터가 분할”로 오해하지 않도록 조건을 보완했습니다.",
        "sourceIds": [
          "ipv6",
          "rfc1122"
        ]
      },
      "sourceIds": [
        "ipv6",
        "rfc1122"
      ],
      "relatedAreas": [
        "structure"
      ]
    },
    {
      "id": "term-006",
      "keyword": "TTL",
      "originalMemory": "패킷이 네트워크에서 존재할 수 있는 한계, 라우터 통과 시 감소",
      "originalNote": "Time to Live",
      "explanation": "IPv4 패킷이 끝없이 순환하지 않도록 제한합니다. 라우터가 전달할 때 감소하며, 0이 되면 폐기됩니다. IPv6는 같은 목적에 Hop Limit을 사용합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Time to Live",
        "패킷 수명"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · IPv4 헤더"
      },
      "expansions": [
        "TTL = Time to Live"
      ],
      "example": "경로가 잘못되어 패킷이 순환해도 TTL이 소진되면 버려집니다.",
      "relatedTerms": [
        "term-012",
        "term-013",
        "supp-router"
      ],
      "sourceIds": [
        "ipv6"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-007",
      "keyword": "Port Number",
      "originalMemory": "어떤 애플리케이션/서비스인지 구분",
      "originalNote": "",
      "explanation": "IP 주소가 통신 대상을 가리킨다면 포트 번호는 그 안에서 통신 종단을 구분합니다. TCP와 UDP는 각각 포트 번호 공간을 사용하며, 번호만으로 실제 응용 내용을 확정할 수는 없습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "포트",
        "포트 번호",
        "Port"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · TCP·UDP 식별 정보"
      },
      "expansions": [],
      "example": "같은 서버의 웹 서비스는 기본 80번, FTP 제어 연결은 기본 21번으로 구분합니다.",
      "relatedTerms": [
        "term-018",
        "term-019",
        "term-056",
        "term-069"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-008",
      "keyword": "TOS",
      "originalMemory": "IP 패킷의 서비스 유형·우선순위 표시; 패킷 크기 기준(MTU)·수명 제한(TTL)과 구분",
      "originalNote": "Type of Service",
      "explanation": "IPv4 헤더의 서비스 유형을 나타내던 필드 이름입니다. 현재는 같은 8비트 영역을 DSCP와 ECN으로 해석하므로 옛 TOS 설명과 구분합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Type of Service",
        "서비스 유형"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · IPv4 헤더"
      },
      "expansions": [
        "TOS = Type of Service",
        "DSCP = Differentiated Services Code Point",
        "ECN = Explicit Congestion Notification"
      ],
      "example": "관리자는 음성 트래픽을 우선 처리하도록 표시와 장비 정책을 맞출 수 있습니다.",
      "relatedTerms": [
        "term-005",
        "term-006",
        "supp-ip"
      ],
      "clarification": {
        "exam": "TOS는 서비스 유형, MTU는 크기, TTL은 수명으로 구분합니다.",
        "practice": "현재 IPv4의 해당 8비트 영역은 DSCP 6비트와 ECN 2비트로 해석합니다. 표시만으로 모든 네트워크의 우선 처리가 보장되지는 않습니다.",
        "reason": "원본은 과거 TOS 명칭 중심의 암기 문구이므로 현재 필드 의미를 덧붙였습니다.",
        "sourceIds": [
          "dscp",
          "ecn"
        ]
      },
      "sourceIds": [
        "dscp",
        "ecn"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-009",
      "keyword": "IPv4 A/B/C클래스",
      "originalMemory": "첫 옥텟: A 1~126\r\nB 128~191\r\nC 192~223; 옥텟은 0~255",
      "originalNote": "Internet Protocol version 4; \r\n127은 루프백; \r\n클래스 기반 시험 기준",
      "explanation": "클래스 기반 분류에서는 첫 옥텟으로 기본 네트워크 크기를 구분합니다. 실제 주소 설계는 클래스보다 접두사 길이를 사용하는 CIDR 기준으로 이해합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "IPv4",
        "A클래스",
        "B클래스",
        "C클래스",
        "A class",
        "B class",
        "C class"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · 주소 체계"
      },
      "expansions": [
        "IPv4 = Internet Protocol version 4"
      ],
      "example": "클래스 문제에서 172로 시작하는 주소는 B 범위로 판단하지만, 실제 네트워크 크기는 설정된 접두사 길이를 확인합니다.",
      "relatedTerms": [
        "term-010",
        "term-011",
        "supp-ip"
      ],
      "clarification": {
        "exam": "클래스 문제에서는 A 1~126, B 128~191, C 192~223과 기본 마스크를 구분합니다.",
        "practice": "실제 네트워크 크기는 CIDR 접두사로 판단합니다. 클래스 범위 안에도 특수 용도 주소가 있으므로 모두 일반 호스트에 쓸 수 있다는 뜻은 아닙니다.",
        "reason": "클래스 기반 암기와 실제 주소 설계를 분리했습니다.",
        "sourceIds": [
          "cidr"
        ]
      },
      "sourceIds": [
        "cidr"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-010",
      "keyword": "서브넷 마스크",
      "originalMemory": "네트워크·호스트 영역 구분; 기본 A /8, B /16, C /24",
      "originalNote": "Subnet Mask; \r\nIP와 AND 연산 → 네트워크 주소",
      "explanation": "IP 주소에서 네트워크 부분과 호스트 부분을 구분합니다. 연속된 1의 개수로 표현하는 /24 같은 접두사 길이는 실제 네트워크 범위를 판단하는 기준입니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Subnet Mask",
        "넷마스크"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · 주소 구성"
      },
      "expansions": [],
      "example": "192.168.10.20에 255.255.255.0을 적용하면 네트워크 주소는 192.168.10.0입니다.",
      "relatedTerms": [
        "term-009",
        "term-011",
        "supp-gateway"
      ],
      "clarification": {
        "exam": "클래스의 기본 마스크를 묻는 경우 A /8, B /16, C /24를 적용합니다.",
        "practice": "설정된 접두사 길이를 사용해야 합니다. 주소의 첫 옥텟만 보고 실제 마스크를 단정하지 않습니다.",
        "reason": "원본의 “기본”은 클래스 기반 조건을 전제로 합니다.",
        "sourceIds": [
          "cidr"
        ]
      },
      "sourceIds": [
        "cidr"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-011",
      "keyword": "서브넷팅",
      "originalMemory": "n비트 빌리면 2ⁿ개 서브넷; 일반 호스트 수 2ʰ−2",
      "originalNote": "Subnetting; \r\nB클래스 6개 이상 → 3비트 차용 → /19(255.255.224.0)",
      "explanation": "주소 공간을 더 작은 네트워크로 나눕니다. 빌린 비트 수로 서브넷 개수를, 남은 호스트 비트 수로 주소 수를 계산합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Subnetting",
        "서브네팅",
        "/19"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · 주소 설계"
      },
      "expansions": [],
      "example": "/16 네트워크를 /19로 나누면 3비트를 빌려 8개 서브넷을 만들고, 각 서브넷은 일반적으로 8190개 호스트 주소를 가집니다.",
      "relatedTerms": [
        "term-009",
        "term-010",
        "term-042"
      ],
      "clarification": {
        "exam": "일반적인 IPv4 서브넷 문제는 호스트 수 2ʰ−2를 사용하되 문제 조건을 확인합니다.",
        "practice": "지점 간 링크의 /31은 두 주소를 호스트 주소로 쓰는 예외가 있습니다.",
        "reason": "원본의 일반 호스트 수 공식을 모든 접두사에 적용하지 않도록 범위를 명확히 했습니다.",
        "sourceIds": [
          "subnet31"
        ]
      },
      "sourceIds": [
        "subnet31"
      ],
      "relatedAreas": [
        "lan"
      ]
    },
    {
      "id": "term-012",
      "keyword": "ICMP",
      "originalMemory": "인터넷 계층 → IP 오류 보고·상태 진단; ping에 사용",
      "originalNote": "Internet Control Message Protocol",
      "explanation": "IP 전달 중의 오류나 상태를 알립니다. ICMP는 TCP·UDP 포트를 사용하는 프로토콜이 아니며, 메시지 유형으로 목적을 구분합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "ping",
        "핑"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · IP 제어 메시지"
      },
      "expansions": [
        "ICMP = Internet Control Message Protocol"
      ],
      "example": "ping은 Echo 요청과 응답으로 상대의 응답 여부를 확인합니다. 응답이 없다는 사실만으로 서버 고장을 단정하지 않습니다.",
      "relatedTerms": [
        "term-013",
        "term-014",
        "term-081"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-013",
      "keyword": "ICMP 메시지 유형",
      "originalMemory": "0 응답\r\n8 요청\r\n3 목적지 도달 불가\r\n5 경로 재지정\r\n11 시간 초과",
      "originalNote": "Internet Control Message Protocol; \r\nEcho Reply\r\nEcho Request\r\nDestination Unreachable\r\nRedirect\r\nTime Exceeded",
      "explanation": "ICMPv4의 대표 유형은 0 응답, 8 요청, 3 목적지 도달 불가, 5 경로 재지정, 11 시간 초과입니다. 이 번호를 ICMPv6에 그대로 적용하지 않습니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Echo Reply",
        "Echo Request",
        "Destination Unreachable",
        "Redirect",
        "Time Exceeded"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · ICMPv4 메시지"
      },
      "expansions": [
        "ICMP = Internet Control Message Protocol"
      ],
      "example": "TTL이 소진된 패킷에 대해 Time Exceeded 유형 11이 반환될 수 있습니다.",
      "relatedTerms": [
        "term-006",
        "term-012",
        "term-014"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-014",
      "keyword": "ICMP 구형 유형",
      "originalMemory": "기출: 4 혼잡 통지\r\n17 주소 마스크 요청; 현재는 폐기된 유형",
      "originalNote": "4 Source Quench(RFC 6633)\r\n17 Address Mask Request(RFC 6918); \r\nRequest for Comments",
      "explanation": "Source Quench 유형 4와 Address Mask Request 유형 17은 과거의 메시지입니다. 이름을 학습할 수 있지만 현재 사용을 권장하는 기능으로 설명하지 않습니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Source Quench",
        "Address Mask Request",
        "ICMP 4",
        "ICMP 17"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · 폐기된 ICMPv4 유형"
      },
      "expansions": [
        "ICMP = Internet Control Message Protocol",
        "RFC = Request for Comments"
      ],
      "example": "구형 문제에서 유형 4의 이름을 묻는 경우와 현재 장비의 혼잡 제어 동작을 묻는 경우를 구분합니다.",
      "relatedTerms": [
        "term-012",
        "term-013"
      ],
      "clarification": {
        "exam": "원본에 적힌 과거 유형 이름은 암기 대상으로 읽을 수 있습니다. 이 사이트는 해당 기출의 연도나 원문을 확인한 것은 아닙니다.",
        "practice": "유형 4는 RFC 6633, 유형 17은 RFC 6918에서 폐기되었습니다. 현재 장비 설정 지침으로 사용하지 않습니다.",
        "reason": "역사적 메시지 이름과 현재 유효한 프로토콜 동작을 구분했습니다.",
        "sourceIds": [
          "icmp4",
          "icmp17"
        ]
      },
      "sourceIds": [
        "icmp4",
        "icmp17"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-015",
      "keyword": "SMTP",
      "originalMemory": "응용 계층 → 이메일 전송; 기본 TCP 25",
      "originalNote": "Simple Mail Transfer Protocol; Transmission Control Protocol",
      "explanation": "이메일을 제출하거나 메일 서버 사이로 전달하는 규칙입니다. 원본의 기본 TCP 25는 특히 서버 간 메일 전송을 이해하는 기준입니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "메일 전송",
        "전자우편 전송"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "SMTP = Simple Mail Transfer Protocol"
      ],
      "example": "조직의 메일 서버가 다른 조직의 메일 서버로 메시지를 전달합니다.",
      "relatedTerms": [
        "term-002",
        "term-018",
        "term-007"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "structure",
        "transport"
      ]
    },
    {
      "id": "term-016",
      "keyword": "SNMP",
      "originalMemory": "응용 계층 → 장비 관리; Manager↔Agent; UDP 161, Trap 162",
      "originalNote": "Simple Network Management Protocol; User Datagram Protocol",
      "explanation": "관리자 역할의 Manager가 장비의 Agent와 정보를 주고받습니다. 기본 UDP 161은 관리 요청, 162는 알림 수신과 연결해 기억합니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "네트워크 관리",
        "Manager",
        "Agent",
        "Trap"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "SNMP = Simple Network Management Protocol"
      ],
      "example": "관리 시스템이 스위치 인터페이스의 상태를 조회하고, 장비는 장애 알림을 보냅니다.",
      "relatedTerms": [
        "term-019",
        "term-081",
        "supp-switch"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport",
        "security",
        "lan"
      ]
    },
    {
      "id": "term-017",
      "keyword": "TFTP",
      "originalMemory": "응용 계층 → 단순 파일 전송; UDP 69",
      "originalNote": "Trivial File Transfer Protocol; User Datagram Protocol",
      "explanation": "UDP를 사용하는 단순 파일 전송 규칙입니다. 전송 블록 확인과 재전송은 TFTP 자체가 처리하므로 UDP를 쓴다고 모든 확인 절차가 없는 것은 아닙니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "단순 파일 전송"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "TFTP = Trivial File Transfer Protocol"
      ],
      "example": "관리용 내부망에서 장비가 부팅 파일을 TFTP 서버로부터 내려받습니다.",
      "relatedTerms": [
        "term-019",
        "term-039",
        "term-069"
      ],
      "clarification": {
        "exam": "TFTP의 기본 요청 포트는 UDP 69입니다.",
        "practice": "69번은 초기 요청을 받는 포트입니다. 이후 전송에서는 양쪽이 선택한 전송 식별 포트를 사용하며 블록 확인과 재전송도 수행합니다.",
        "reason": "원본의 짧은 포트 암기를 전체 전송이 항상 69번이라는 뜻으로 넓히지 않도록 보완했습니다.",
        "sourceIds": [
          "tftp"
        ]
      },
      "sourceIds": [
        "tftp"
      ],
      "relatedAreas": [
        "transport"
      ]
    },
    {
      "id": "term-018",
      "keyword": "TCP",
      "originalMemory": "연결형·신뢰성 보장; 순서·오류·흐름 제어; 연결 전 3-way handshake",
      "originalNote": "Transmission Control Protocol",
      "explanation": "연결을 맺고 순서 있는 바이트 흐름을 제공합니다. 확인과 재전송으로 신뢰성을 제공하지만 영구적인 장애에서도 전송 성공을 보장하거나 상대 프로그램의 업무 처리를 보증하지는 않습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Transmission Control Protocol"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · TCP/IP 전송 계층"
      },
      "expansions": [
        "TCP = Transmission Control Protocol"
      ],
      "example": "FTP로 내려받는 파일의 데이터가 중간에 유실되면 TCP가 재전송을 처리합니다.",
      "relatedTerms": [
        "term-019",
        "term-021",
        "term-022",
        "term-069"
      ],
      "clarification": {
        "exam": "TCP의 연결형·신뢰성·순서·흐름 제어를 UDP와 비교합니다.",
        "practice": "신뢰성은 손실 검출과 재전송 등으로 순서 있는 바이트 흐름을 제공한다는 뜻입니다. 장애 상황에서 전송 성공이나 응용 처리 완료까지 보장하지 않습니다.",
        "reason": "“신뢰성 보장”을 무조건적인 성공 보장으로 읽지 않도록 범위를 명확히 했습니다.",
        "sourceIds": [
          "tcp"
        ]
      },
      "sourceIds": [
        "tcp"
      ],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-019",
      "keyword": "UDP",
      "originalMemory": "비연결형; 전달·순서 보장 없음; 지연에 민감한 통신에 활용",
      "originalNote": "User Datagram Protocol",
      "explanation": "연결 설정 없이 데이터그램을 보냅니다. UDP 자체에는 전달 확인, 순서 복구, 재전송 기능이 없으며 필요한 기능은 상위 프로토콜이 추가할 수 있습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "User Datagram Protocol"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · TCP/IP 전송 계층"
      },
      "expansions": [
        "UDP = User Datagram Protocol"
      ],
      "example": "DNS 질의는 UDP로 보내는 경우가 많습니다. 응답이 없을 때 다시 요청하는 처리는 응용 프로그램이 맡을 수 있습니다.",
      "relatedTerms": [
        "term-018",
        "term-020",
        "term-050"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-020",
      "keyword": "UDP 헤더",
      "originalMemory": "출발지 포트·목적지 포트·길이·체크섬; ACK 번호 없음; 8바이트",
      "originalNote": "User Datagram Protocol; \r\nACK = Acknowledgment",
      "explanation": "UDP의 기본 헤더는 8바이트입니다. TCP의 순서 번호나 ACK 번호가 없고, 체크섬은 오류 검출에 사용되며 복구 자체를 수행하지 않습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "UDP Header",
        "UDP 8바이트"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · UDP 제어 정보"
      },
      "expansions": [
        "UDP = User Datagram Protocol"
      ],
      "example": "패킷 분석 화면에서 출발지 포트, 목적지 포트, 길이, 체크섬의 네 필드를 확인합니다.",
      "relatedTerms": [
        "term-007",
        "term-019"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-021",
      "keyword": "슬라이딩 윈도우",
      "originalMemory": "응답 전 여러 데이터를 전송; 수신 여유에 따라 전송량 조절 → 흐름 제어",
      "originalNote": "Sliding Window",
      "explanation": "하나를 보낼 때마다 기다리지 않고 허용된 범위만큼 여러 데이터를 전송하는 방식입니다. TCP에서는 수신 여유를 알리는 윈도우가 흐름 제어에 사용됩니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Sliding Window",
        "흐름 제어"
      ],
      "osi": {
        "kind": "multiple",
        "note": "전송 제어 기법 · TCP에서는 OSI 4계층"
      },
      "expansions": [],
      "example": "수신 버퍼가 부족해지면 TCP 수신 윈도우가 작아져 송신자가 한꺼번에 보낼 수 있는 양이 줄어듭니다.",
      "relatedTerms": [
        "term-018",
        "term-036"
      ],
      "clarification": {
        "exam": "수신 측 여유에 따라 전송량을 조절하는 것은 흐름 제어입니다.",
        "practice": "TCP의 실제 송신량은 수신 윈도우뿐 아니라 네트워크 혼잡 제어의 영향도 받습니다.",
        "reason": "수신 버퍼 보호와 네트워크 혼잡 대응을 구분했습니다.",
        "sourceIds": [
          "tcp"
        ]
      },
      "sourceIds": [
        "tcp"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-022",
      "keyword": "TCP 3-way handshake",
      "originalMemory": "SYN → SYN+ACK → ACK; 3단계는 ACK",
      "originalNote": "Transmission Control Protocol; \r\nSYN = Synchronize\r\nACK = Acknowledgment",
      "explanation": "양쪽이 초기 순서 번호를 알리고 수신 준비를 확인하는 TCP 연결 설정 과정입니다. TLS의 보안 협상과는 다른 과정입니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "3-way handshake",
        "3웨이 핸드셰이크",
        "SYN",
        "ACK"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 4계층 · TCP 연결 설정"
      },
      "expansions": [
        "TCP = Transmission Control Protocol",
        "SYN = Synchronize",
        "ACK = Acknowledgment"
      ],
      "example": "클라이언트 SYN → 서버 SYN+ACK → 클라이언트 ACK로 일반적인 TCP 연결을 준비합니다.",
      "relatedTerms": [
        "term-018",
        "term-021",
        "term-056"
      ],
      "sourceIds": [
        "tcp"
      ],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-023",
      "keyword": "TCP/IP 4계층",
      "originalMemory": "하위부터 네트워크 인터페이스 → 인터넷 → 전송 → 응용",
      "originalNote": "Transmission Control Protocol\r\nInternet Protocol",
      "explanation": "TCP/IP는 인터넷 통신에 쓰이는 프로토콜 묶음의 이름이며 이를 계층으로 설명하는 모델도 뜻합니다. OSI 다음에 추가로 거치는 네 단계가 아니라 같은 통신을 다른 기준으로 구분한 것입니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "TCP/IP",
        "TCP IP",
        "4계층"
      ],
      "osi": {
        "kind": "model",
        "note": "인터넷 프로토콜 묶음과 4계층 모델"
      },
      "expansions": [
        "TCP = Transmission Control Protocol",
        "IP = Internet Protocol"
      ],
      "example": "같은 웹 통신을 TCP/IP로는 응용·전송·인터넷·네트워크 인터페이스의 네 역할로 설명합니다.",
      "relatedTerms": [
        "term-001",
        "term-002",
        "term-003",
        "term-004"
      ],
      "sourceIds": [
        "rfc1122",
        "osi"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-024",
      "keyword": "PDU",
      "originalMemory": "1계층 비트\r\n2계층 프레임\r\n3계층 패킷\r\n4계층 TCP 세그먼트·UDP 데이터그램",
      "originalNote": "Protocol Data Unit; TCP = Transmission Control Protocol\r\nUDP = User Datagram Protocol",
      "explanation": "계층이 다루는 데이터 단위를 뜻합니다. 학습상 물리 계층은 비트, 데이터링크는 프레임, 네트워크는 패킷, TCP는 세그먼트, UDP는 데이터그램으로 구분합니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Protocol Data Unit",
        "비트",
        "프레임",
        "패킷",
        "세그먼트",
        "데이터그램"
      ],
      "osi": {
        "kind": "multiple",
        "note": "OSI 계층별 데이터 단위"
      },
      "expansions": [
        "PDU = Protocol Data Unit"
      ],
      "example": "TCP 세그먼트를 IP 패킷에 담고 이를 이더넷 프레임으로 전달합니다.",
      "relatedTerms": [
        "term-025",
        "term-018",
        "term-019",
        "supp-ip"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport",
        "address-routing"
      ]
    },
    {
      "id": "term-025",
      "keyword": "캡슐화",
      "originalMemory": "계층을 내려가며 헤더 등 제어정보 추가; 데이터링크에서 트레일러도 추가",
      "originalNote": "Encapsulation; 수신 측 제거 = 역캡슐화",
      "explanation": "송신 측에서 상위 계층 데이터를 담고 필요한 제어 정보를 붙이는 과정입니다. 이더넷 프레임에는 헤더와 트레일러가 있으며, 수신 측은 해당 정보를 해석하고 제거합니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Encapsulation",
        "역캡슐화"
      ],
      "osi": {
        "kind": "multiple",
        "note": "여러 계층에 걸친 데이터 처리"
      },
      "expansions": [],
      "example": "HTTP 데이터를 TCP에, TCP 데이터를 IP에, IP 데이터를 이더넷 프레임에 담아 전송합니다.",
      "relatedTerms": [
        "term-024",
        "term-028",
        "supp-ip"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-026",
      "keyword": "IPv6 표기",
      "originalMemory": "128비트·16진수; 선행 0 생략; :: 한 번; 가장 긴 0구간, 동률이면 왼쪽",
      "originalNote": "Internet Protocol version 6; RFC 5952 권고: 0 필드 하나만 ::로 줄이지 않음; Request for Comments",
      "explanation": "128비트 주소를 16진수로 나타냅니다. 각 필드의 앞쪽 0을 생략하고 연속된 0 필드 구간을 ::로 압축할 수 있지만 ::는 한 주소에서 한 번만 사용합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "IPv6",
        "IPv6 주소",
        "::"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · 주소 표기"
      },
      "expansions": [
        "IPv6 = Internet Protocol version 6"
      ],
      "example": "2001:0db8:0000:0000:0000:0000:0000:0001을 2001:db8::1로 나타냅니다.",
      "relatedTerms": [
        "term-027",
        "term-029",
        "term-052"
      ],
      "clarification": {
        "exam": "선행 0 생략, ::는 한 번, 가장 긴 연속 0 구간, 동률이면 왼쪽을 기억합니다.",
        "practice": "RFC 5952의 표준화된 출력 권고는 단일 0 필드를 ::로 줄이지 않습니다. 표기 허용 여부와 권장 출력 형태를 구분합니다.",
        "reason": "원본에 적힌 권고를 모든 입력 표기의 유효성 규칙과 혼동하지 않도록 보완했습니다.",
        "sourceIds": [
          "ipv6text"
        ]
      },
      "sourceIds": [
        "ipv6text"
      ],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-027",
      "keyword": "듀얼 스택",
      "originalMemory": "IPv4·IPv6를 한 장비에서 함께 사용 → 전환 기술",
      "originalNote": "Dual Stack; Internet Protocol version 4\r\nversion 6",
      "explanation": "한 장비가 IPv4와 IPv6를 함께 사용합니다. 두 주소 체계를 모두 처리하는 것이며, 그 자체가 한 형식의 패킷을 다른 형식으로 번역한다는 뜻은 아닙니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Dual Stack"
      ],
      "osi": {
        "kind": "configuration",
        "note": "IPv4·IPv6를 함께 운용하는 구성 방식"
      },
      "expansions": [],
      "example": "웹 서버에 IPv4와 IPv6를 모두 설정하고 DNS에 A와 AAAA 레코드를 등록합니다.",
      "relatedTerms": [
        "term-026",
        "term-029",
        "term-052"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-028",
      "keyword": "터널링",
      "originalMemory": "다른 프로토콜의 패킷 안에 캡슐화해 전달 → IPv4·IPv6 전환 기술",
      "originalNote": "Tunneling; Internet Protocol version 4\r\nversion 6",
      "explanation": "기존 패킷을 다른 패킷 안에 담아 중간 네트워크를 통과시킵니다. 주소 체계 전환뿐 아니라 VPN에도 활용하며, 터널링 자체가 암호화를 의미하지는 않습니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Tunneling",
        "터널"
      ],
      "osi": {
        "kind": "multiple",
        "note": "캡슐화 방식 · 사용하는 프로토콜에 따라 계층이 달라짐"
      },
      "expansions": [],
      "example": "IPv6 패킷을 IPv4 패킷 안에 넣어 IPv4 구간을 통과시킵니다.",
      "relatedTerms": [
        "term-025",
        "term-029",
        "term-047"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "structure",
        "security"
      ]
    },
    {
      "id": "term-029",
      "keyword": "프로토콜 변환",
      "originalMemory": "IPv4와 IPv6 패킷 형식을 변환 → 서로 통신 가능",
      "originalNote": "Protocol Translation; Internet Protocol version 4\r\nversion 6",
      "explanation": "IPv4와 IPv6처럼 서로 다른 주소 체계의 패킷을 변환합니다. 두 프로토콜을 동시에 운용하는 듀얼 스택이나 원본을 감싸는 터널링과 구분합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Protocol Translation",
        "IPv4 IPv6 변환"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 중심 · 구현에 따라 전송 정보도 변환"
      },
      "expansions": [],
      "example": "IPv6 클라이언트가 IPv4 서버에 접근할 때 변환 장치가 두 주소 체계 사이를 이어 줍니다.",
      "relatedTerms": [
        "term-026",
        "term-027",
        "term-028",
        "term-030"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-030",
      "keyword": "NAT44",
      "originalMemory": "IPv4 주소를 다른 IPv4 주소로 변환; IPv4↔IPv6 전환 기술 아님",
      "originalNote": "Network Address Translation 4-to-4; Internet Protocol version 4\r\nversion 6",
      "explanation": "IPv4 주소를 다른 IPv4 주소로 바꿉니다. 가정용 공유기는 보통 포트 변환도 함께 사용해 여러 장치가 공인 주소를 공유하도록 합니다. 주소 변환만으로 보안 정책 전체를 대신하지는 못합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "NAT",
        "IPv4 주소 변환"
      ],
      "osi": {
        "kind": "multiple",
        "note": "OSI 3계층 주소 변환 · 포트 변환을 함께 쓰면 4계층도 관련"
      },
      "expansions": [
        "NAT = Network Address Translation",
        "NAT44 = IPv4-to-IPv4 Network Address Translation"
      ],
      "example": "가정 공유기가 내부 IPv4 주소를 외부 IPv4 주소로 바꾸어 인터넷으로 전달합니다.",
      "relatedTerms": [
        "term-029",
        "term-081",
        "supp-router"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-031",
      "keyword": "브로드캐스트",
      "originalMemory": "같은 브로드캐스트 도메인의 모든 호스트에게 전송 → 1:전체",
      "originalNote": "Broadcast; VLAN을 나누면 브로드캐스트 도메인도 분리",
      "explanation": "정해진 브로드캐스트 영역 안의 모든 대상에게 전달하는 방식입니다. VLAN을 나누면 영역이 분리되고, 라우터는 일반적인 LAN 브로드캐스트를 그대로 다른 네트워크로 넘기지 않습니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Broadcast",
        "방송"
      ],
      "osi": {
        "kind": "multiple",
        "note": "데이터링크 전달 범위와 IPv4 주소 체계에 관련"
      },
      "expansions": [],
      "example": "장치가 이더넷에서 ARP 요청을 브로드캐스트하면 같은 VLAN의 장치들이 요청을 받습니다.",
      "relatedTerms": [
        "term-032",
        "term-042",
        "supp-arp"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-032",
      "keyword": "유니캐스트·멀티캐스트",
      "originalMemory": "유니캐스트 1:1\r\n멀티캐스트 1:특정 그룹",
      "originalNote": "Unicast\r\nMulticast",
      "explanation": "유니캐스트는 특정 한 대상, 멀티캐스트는 특정 수신 그룹을 대상으로 합니다. 멀티캐스트를 같은 LAN의 모든 장치에 보내는 브로드캐스트와 구분합니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "유니캐스트",
        "멀티캐스트",
        "Unicast",
        "Multicast"
      ],
      "osi": {
        "kind": "multiple",
        "note": "OSI 2·3계층의 전달 대상 방식"
      },
      "expansions": [],
      "example": "웹 요청을 특정 서버 한 대로 보내는 것은 유니캐스트입니다. 그룹에 가입한 수신자에게 같은 데이터를 보내는 것은 멀티캐스트입니다.",
      "relatedTerms": [
        "term-031",
        "term-042",
        "supp-ip"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-033",
      "keyword": "DHCP",
      "originalMemory": "IP 설정 자동 제공; 수동·자동·동적 할당; 우선순위 할당은 없음",
      "originalNote": "Dynamic Host Configuration Protocol; IP = Internet Protocol; UDP 서버 67\r\n클라이언트 68",
      "explanation": "통신을 시작할 장치에 IP 설정을 제공합니다. IP 정보를 다루지만 DHCP 프로토콜 자체는 응용 계층이며, DHCPv4는 UDP 서버 67번과 클라이언트 68번을 사용합니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "동적 호스트 설정",
        "주소 자동 할당"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · IP 설정을 제공하는 응용 프로토콜"
      },
      "expansions": [
        "DHCP = Dynamic Host Configuration Protocol"
      ],
      "example": "노트북이 LAN에 연결되면 DHCP로 IPv4 주소, 서브넷 마스크, 기본 게이트웨이, DNS 서버 설정을 받을 수 있습니다.",
      "relatedTerms": [
        "term-034",
        "term-019",
        "term-050",
        "supp-gateway"
      ],
      "clarification": {
        "exam": "수동·자동·동적 할당을 구분합니다. “우선순위 할당”은 RFC 2131의 세 할당 방식에 포함되지 않습니다.",
        "practice": "DHCP는 IP 설정을 전달하는 응용 프로토콜입니다. 이 페이지의 포트 67·68 설명은 DHCPv4 기준입니다.",
        "reason": "설정 대상이 IP라는 사실과 프로토콜의 계층을 구분했습니다.",
        "sourceIds": [
          "dhcp"
        ]
      },
      "sourceIds": [
        "dhcp"
      ],
      "relatedAreas": [
        "transport",
        "address-routing"
      ]
    },
    {
      "id": "term-034",
      "keyword": "DHCP 범위·예약",
      "originalMemory": "범위 = 배포 주소 구간; 예약 = 지정 장치에 일정 IP; Windows 지연값은 ms",
      "originalNote": "Dynamic Host Configuration Protocol; IP = Internet Protocol; ms = millisecond",
      "explanation": "범위는 배포할 주소 구간이고, 예약은 특정 클라이언트에 일정한 주소를 제공하도록 정하는 설정입니다. 예약을 사용해도 클라이언트는 DHCP를 통해 설정을 받습니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "DHCP 범위",
        "DHCP 예약",
        "Scope",
        "Reservation"
      ],
      "osi": {
        "kind": "configuration",
        "note": "응용 서비스인 DHCP의 서버 구성"
      },
      "expansions": [
        "DHCP = Dynamic Host Configuration Protocol",
        "ms = millisecond"
      ],
      "example": "192.168.10.100~192.168.10.200을 배포 범위로 정하고 특정 프린터에 일정한 주소를 예약합니다.",
      "relatedTerms": [
        "term-033",
        "term-010",
        "supp-mac"
      ],
      "clarification": {
        "exam": "범위와 예약을 구분하고 원본의 Windows 지연 단위는 ms로 읽습니다.",
        "practice": "ms는 해당 범위의 응답 지연 설정 단위이며 임대 기간이나 모든 DHCP 시간 설정의 단위라는 뜻은 아닙니다.",
        "reason": "서로 다른 시간 설정을 하나의 단위로 일반화하지 않도록 보완했습니다.",
        "sourceIds": [
          "dhcpdelay"
        ]
      },
      "sourceIds": [
        "dhcpdelay"
      ],
      "relatedAreas": [
        "address-routing",
        "lan"
      ]
    },
    {
      "id": "term-035",
      "keyword": "표현 계층",
      "originalMemory": "OSI 6계층 → 데이터 표현 변환·암호화/복호화·압축",
      "originalNote": "Presentation Layer; OSI = Open Systems Interconnection",
      "explanation": "데이터 표현 변환, 암호화와 복호화, 압축 등의 역할을 설명합니다. 실제 인터넷 프로그램에서 이 기능들이 반드시 독립된 한 계층 모듈로 구현되는 것은 아닙니다.",
      "primaryArea": "structure",
      "kind": "original",
      "aliases": [
        "Presentation Layer",
        "표현층"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 6계층의 역할 · 실제 구현과 일대일 대응하지 않음"
      },
      "expansions": [
        "OSI = Open Systems Interconnection"
      ],
      "example": "데이터를 공통 형식으로 바꾸거나 압축하는 역할을 OSI 모델의 표현 기능으로 설명합니다.",
      "relatedTerms": [
        "term-001",
        "term-023",
        "supp-tls"
      ],
      "clarification": {
        "exam": "OSI 모델에서 표현 계층의 역할에 암호화·복호화·압축을 포함해 기억합니다.",
        "practice": "TLS 등 실제 기술을 OSI 6계층에만 고정하지 않습니다. TLS는 인터넷 응용의 데이터를 보호하는 실제 프로토콜입니다.",
        "reason": "모델의 역할 분류와 구현된 프로토콜의 위치를 구분했습니다.",
        "sourceIds": [
          "osi",
          "tls"
        ]
      },
      "sourceIds": [
        "osi",
        "tls"
      ],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-036",
      "keyword": "ARQ",
      "originalMemory": "오류 검출·응답 확인 후 필요한 데이터를 재전송 → 오류 제어",
      "originalNote": "Automatic Repeat reQuest",
      "explanation": "오류나 손실을 확인한 뒤 필요한 데이터를 다시 보내는 오류 제어 방식입니다. 이 사이트에서는 전송 영역에서 학습하지만 OSI 4계층 전용 기능은 아닙니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Automatic Repeat reQuest",
        "자동 반복 요청",
        "재전송"
      ],
      "osi": {
        "kind": "multiple",
        "note": "오류 제어 기법 · 데이터링크 또는 전송 등에서 사용"
      },
      "expansions": [
        "ARQ = Automatic Repeat reQuest"
      ],
      "example": "응답을 받지 못한 데이터 블록을 다시 보내는 과정을 비교할 때 ARQ 유형을 사용합니다.",
      "relatedTerms": [
        "term-037",
        "term-038",
        "term-039",
        "term-018"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-037",
      "keyword": "Go-back-N ARQ",
      "originalMemory": "오류 블록부터 이후 전송 블록까지 재전송",
      "originalNote": "Go-back-N Automatic Repeat reQuest",
      "explanation": "손실이나 오류로 확인되지 않은 지점부터 그 뒤의 미확인 데이터까지 다시 보냅니다. 연속 전송의 효율과 재전송 낭비를 함께 생각하면 이해하기 쉽습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Go-Back-N",
        "GBN"
      ],
      "osi": {
        "kind": "multiple",
        "note": "재전송 알고리즘 · 하나의 계층에 한정하지 않음"
      },
      "expansions": [
        "ARQ = Automatic Repeat reQuest"
      ],
      "example": "1~5번을 보냈는데 3번이 손실되면 기본 방식에서는 3번부터 이미 보낸 4·5번도 다시 전송합니다.",
      "relatedTerms": [
        "term-036",
        "term-038",
        "term-039"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-038",
      "keyword": "Selective Repeat ARQ",
      "originalMemory": "오류가 난 블록만 선택적으로 재전송",
      "originalNote": "Selective Repeat Automatic Repeat reQuest",
      "explanation": "손실되거나 오류가 난 블록만 골라 재전송합니다. 수신 측이 뒤에 온 블록을 보관하고 순서를 맞추는 처리가 필요합니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Selective Repeat",
        "선택적 재전송"
      ],
      "osi": {
        "kind": "multiple",
        "note": "재전송 알고리즘 · 하나의 계층에 한정하지 않음"
      },
      "expansions": [
        "ARQ = Automatic Repeat reQuest"
      ],
      "example": "1~5번 중 3번만 손실되면 수신 측이 다른 블록을 보관하고 3번을 선택적으로 다시 받습니다.",
      "relatedTerms": [
        "term-036",
        "term-037"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-039",
      "keyword": "Stop-and-Wait ARQ",
      "originalMemory": "블록 하나 전송 → 응답 대기 → 다음 블록",
      "originalNote": "Stop-and-Wait Automatic Repeat reQuest",
      "explanation": "블록 하나를 보내고 확인을 기다립니다. 단순하지만 왕복 지연이 긴 경로에서는 기다리는 시간이 커질 수 있습니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Stop and Wait",
        "정지 대기"
      ],
      "osi": {
        "kind": "multiple",
        "note": "재전송 알고리즘 · 하나의 계층에 한정하지 않음"
      },
      "expansions": [
        "ARQ = Automatic Repeat reQuest"
      ],
      "example": "블록 1을 보낸 뒤 확인을 받아야 블록 2를 보냅니다. 응답이 늦으면 그동안 다음 데이터를 보내지 못합니다.",
      "relatedTerms": [
        "term-036",
        "term-037",
        "term-017"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-040",
      "keyword": "SDN",
      "originalMemory": "제어 평면·데이터 평면 분리; 중앙 컨트롤러로 네트워크 제어",
      "originalNote": "Software Defined Networking; NFV와 구분",
      "explanation": "어떻게 전달할지 결정하는 제어 평면과 실제 데이터를 전달하는 데이터 평면을 분리하는 접근입니다. 중앙에서 정책을 관리하는 구조를 이해하는 개념이며, 단일 OSI 프로토콜이 아닙니다.",
      "primaryArea": "virtualization",
      "kind": "original",
      "aliases": [
        "Software Defined Networking",
        "소프트웨어 정의 네트워킹"
      ],
      "osi": {
        "kind": "configuration",
        "note": "여러 계층의 전달 기능을 제어하는 운영 구조"
      },
      "expansions": [
        "SDN = Software Defined Networking"
      ],
      "example": "관리자가 중앙 제어 시스템에서 스위치의 전달 정책을 조정합니다.",
      "relatedTerms": [
        "term-041",
        "term-042",
        "supp-switch"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "lan"
      ]
    },
    {
      "id": "term-041",
      "keyword": "NFV",
      "originalMemory": "방화벽·라우터 등 네트워크 기능을 소프트웨어로 가상화 → 유연한 배포·확장",
      "originalNote": "Network Functions Virtualization; VNF = Virtual Network Function",
      "explanation": "라우터나 방화벽 같은 네트워크 기능을 소프트웨어로 구현해 유연하게 배치합니다. 제어 구조를 바꾸는 SDN과 함께 쓰일 수 있지만 같은 개념은 아닙니다.",
      "primaryArea": "virtualization",
      "kind": "original",
      "aliases": [
        "네트워크 기능 가상화",
        "VNF"
      ],
      "osi": {
        "kind": "configuration",
        "note": "장비 기능을 소프트웨어로 배치하는 가상화 방식"
      },
      "expansions": [
        "NFV = Network Functions Virtualization",
        "VNF = Virtual Network Function"
      ],
      "example": "전용 방화벽 장비 대신 서버 위의 가상 방화벽 기능을 배치합니다.",
      "relatedTerms": [
        "term-040",
        "term-075",
        "term-081"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-042",
      "keyword": "VLAN",
      "originalMemory": "하나의 물리 스위치에서 논리적 브로드캐스트 도메인 분리",
      "originalNote": "Virtual Local Area Network",
      "explanation": "물리 스위치를 공유하면서 논리적인 LAN과 브로드캐스트 영역을 나눕니다. 서로 다른 VLAN 사이의 IP 통신에는 라우팅 기능이 필요합니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Virtual LAN",
        "가상 LAN"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 2계층 · 논리적 LAN 분리"
      },
      "expansions": [
        "VLAN = Virtual Local Area Network"
      ],
      "example": "같은 스위치에 연결된 사무실 PC와 게스트 장치를 서로 다른 VLAN에 둡니다.",
      "relatedTerms": [
        "term-031",
        "term-043",
        "supp-switch",
        "supp-router"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-043",
      "keyword": "트렁크",
      "originalMemory": "하나의 링크로 여러 VLAN의 트래픽 전달; 스위치 간 연결에 활용",
      "originalNote": "Trunk; VLAN = Virtual Local Area Network; IEEE 802.1Q 태깅",
      "explanation": "여러 VLAN의 데이터를 하나의 링크로 전달합니다. 802.1Q 태그 등으로 어느 VLAN의 데이터인지 구분하며, 트렁크 자체가 VLAN 사이를 라우팅하지는 않습니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Trunk",
        "802.1Q"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 2계층 · VLAN 전달 방식"
      },
      "expansions": [
        "VLAN = Virtual Local Area Network"
      ],
      "example": "두 스위치 사이의 링크 하나로 사무실 VLAN과 게스트 VLAN의 트래픽을 함께 전달합니다.",
      "relatedTerms": [
        "term-042",
        "term-044"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-044",
      "keyword": "STP",
      "originalMemory": "스위치의 중복 경로를 제어 → 2계층 루프 방지",
      "originalNote": "Spanning Tree Protocol; 케이블 STP와 구분",
      "explanation": "스위치의 중복 연결에서 루프가 생기지 않도록 전달 경로를 제어합니다. 차폐 케이블을 뜻하는 STP와 같은 약자를 쓰지만 전혀 다른 개념입니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Spanning Tree Protocol",
        "스패닝 트리"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 2계층 · 스위치 경로 제어"
      },
      "expansions": [
        "STP = Spanning Tree Protocol"
      ],
      "example": "스위치를 이중으로 연결했을 때 일부 경로의 전달을 막아 프레임이 끝없이 순환하지 않게 합니다.",
      "relatedTerms": [
        "term-043",
        "term-083",
        "supp-switch"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-045",
      "keyword": "클라우드 배포 모델",
      "originalMemory": "퍼블릭·프라이빗·하이브리드; 온프레미스는 자체 구축·운영 환경",
      "originalNote": "Public\r\nPrivate\r\nHybrid\r\nOn-premises",
      "explanation": "퍼블릭, 프라이빗, 하이브리드는 클라우드 배포 모델을 구분하는 말입니다. 온프레미스는 자체 시설에서 운영하는 환경이며, 자체 서버실이 있다고 모두 프라이빗 클라우드인 것은 아닙니다.",
      "primaryArea": "virtualization",
      "kind": "original",
      "aliases": [
        "퍼블릭",
        "프라이빗",
        "하이브리드",
        "온프레미스",
        "Public",
        "Private",
        "Hybrid",
        "On-premises"
      ],
      "osi": {
        "kind": "configuration",
        "note": "자원 소유·배치·운영 방식 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "내부 시스템을 사설 클라우드에 두고 외부 클라우드 자원과 연계하는 구성을 하이브리드로 이해합니다.",
      "relatedTerms": [
        "term-041",
        "term-075"
      ],
      "clarification": {
        "exam": "원본의 퍼블릭·프라이빗·하이브리드 구분과 온프레미스의 의미를 기억합니다.",
        "practice": "NIST의 배포 모델에는 커뮤니티 클라우드도 있습니다. 프라이빗 클라우드는 반드시 자체 시설에만 있어야 하는 것은 아닙니다.",
        "reason": "원본 목록은 주요 예시이며 표준의 전체 목록이나 배치 장소를 완전히 정의하지 않습니다.",
        "sourceIds": [
          "cloud"
        ]
      },
      "sourceIds": [
        "cloud"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-046",
      "keyword": "1000BASE-SX",
      "originalMemory": "1Gbps 기가비트 이더넷; 단파장·멀티모드 광섬유",
      "originalNote": "SX = Short Wavelength; Gbps = gigabits per second",
      "explanation": "단파장과 멀티모드 광섬유를 사용하는 1Gbps 이더넷 규격입니다. 속도 표기뿐 아니라 케이블과 광 모듈의 규격이 맞는지 확인해야 합니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "기가비트 이더넷",
        "SX"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 1계층 중심 · 이더넷 물리 연결 규격"
      },
      "expansions": [
        "SX = Short Wavelength",
        "Gbps = gigabits per second"
      ],
      "example": "건물 내 스위치 사이를 호환되는 멀티모드 광섬유와 1000BASE-SX 광 모듈로 연결합니다.",
      "relatedTerms": [
        "term-082",
        "supp-switch"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-047",
      "keyword": "VPN",
      "originalMemory": "공용망을 이용해 사설망처럼 통신 → 터널링·보안 기술 활용",
      "originalNote": "Virtual Private Network",
      "explanation": "공용망 위에서 사설망처럼 연결하는 방식입니다. 터널, 인증, 암호화의 조합은 구현에 따라 다르므로 VPN이라는 이름만으로 모든 보안 기능이 동일하다고 보지는 않습니다.",
      "primaryArea": "security",
      "kind": "original",
      "aliases": [
        "가상 사설망",
        "Virtual Private Network"
      ],
      "osi": {
        "kind": "multiple",
        "note": "구성 방식 · 사용하는 터널과 보안 기술에 따라 여러 계층 관련"
      },
      "expansions": [
        "VPN = Virtual Private Network"
      ],
      "example": "외부 직원이 VPN으로 회사 내부 자원에 접속하거나 두 지사의 네트워크를 연결합니다.",
      "relatedTerms": [
        "term-028",
        "term-048",
        "supp-tls"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-048",
      "keyword": "IPsec",
      "originalMemory": "네트워크 계층 보안; 전송 모드 = 페이로드 보호\r\n터널 모드 = 원본 IP 패킷 캡슐화",
      "originalNote": "Internet Protocol Security; IP = Internet Protocol; 암호화는 ESP 기준",
      "explanation": "IP 통신을 보호하는 기술 묶음입니다. 전송 모드는 원래 IP 헤더 뒤의 데이터를, 터널 모드는 원본 IP 패킷 전체를 새 패킷 안에 담아 보호하는 방식으로 구분합니다.",
      "primaryArea": "security",
      "kind": "original",
      "aliases": [
        "IP Security",
        "전송 모드",
        "터널 모드",
        "ESP"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · IP 통신 보호"
      },
      "expansions": [
        "IPsec = Internet Protocol Security",
        "ESP = Encapsulating Security Payload"
      ],
      "example": "두 지사 게이트웨이가 IPsec 터널을 구성해 원래 IP 패킷을 새 IP 패킷 안에서 보호합니다.",
      "relatedTerms": [
        "term-047",
        "term-028",
        "supp-gateway"
      ],
      "clarification": {
        "exam": "전송 모드와 터널 모드를 무엇을 감싸는지로 구분합니다.",
        "practice": "IPsec 전체가 항상 암호화를 제공하는 것은 아닙니다. 암호화는 ESP 및 선택한 보안 설정을 기준으로 설명합니다.",
        "reason": "원본 비고의 ESP 조건을 본문에서도 명확히 했습니다.",
        "sourceIds": [
          "ipsec"
        ]
      },
      "sourceIds": [
        "ipsec"
      ],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-049",
      "keyword": "성형 토폴로지",
      "originalMemory": "중앙 장비 중심 연결; 단말 고장은 해당 단말, 중앙 장비 고장은 전체 영향",
      "originalNote": "Star Topology",
      "explanation": "중앙 장비를 중심으로 단말을 연결하는 형태입니다. 일반적인 단일 중앙 장비 구성에서는 단말 측 장애는 해당 단말에, 중앙 장비 장애는 연결된 전체 단말에 영향을 줍니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Star Topology",
        "스타형",
        "성형"
      ],
      "osi": {
        "kind": "configuration",
        "note": "물리적 연결 모양 · 단일 프로토콜 계층 아님"
      },
      "expansions": [],
      "example": "PC들이 중앙 스위치에 각각 연결되어 있으면 PC 한 대의 케이블 단절과 중앙 스위치 고장의 영향 범위가 다릅니다.",
      "relatedTerms": [
        "supp-switch",
        "term-082",
        "term-083"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-050",
      "keyword": "DNS",
      "originalMemory": "도메인 이름과 IP 주소 등의 정보 조회; 기본 53번 포트",
      "originalNote": "Domain Name System; IP = Internet Protocol",
      "explanation": "이름에 연결된 주소와 여러 자원 레코드를 조회하는 분산 시스템입니다. 기본 포트는 53이며 UDP와 TCP를 모두 사용합니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "도메인 이름 시스템",
        "이름 조회"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "DNS = Domain Name System"
      ],
      "example": "브라우저가 example.com에 연결하기 전에 해당 이름의 IP 주소 정보를 조회합니다.",
      "relatedTerms": [
        "term-051",
        "term-052",
        "term-053",
        "term-033"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-051",
      "keyword": "PTR 레코드",
      "originalMemory": "역방향 조회 → IP 주소에서 이름 조회",
      "originalNote": "Pointer; IP = Internet Protocol",
      "explanation": "역방향 DNS에서 주소에 대응하는 이름을 제공할 때 사용하는 레코드입니다. A 레코드를 만들었다고 PTR이 자동으로 항상 만들어지는 것은 아닙니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "PTR",
        "Pointer",
        "역방향 조회"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · DNS 자원 레코드"
      },
      "expansions": [
        "PTR = Pointer"
      ],
      "example": "관리자가 서버 IP 주소의 역방향 DNS를 조회하여 설정된 이름을 확인합니다.",
      "relatedTerms": [
        "term-050",
        "term-052"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-052",
      "keyword": "A·AAAA 레코드",
      "originalMemory": "A = 이름→IPv4 주소\r\nAAAA = 이름→IPv6 주소",
      "originalNote": "A = Address; AAAA = IPv6 Address 레코드(문자별 풀명칭 없음)",
      "explanation": "A는 이름에 IPv4 주소를, AAAA는 이름에 IPv6 주소를 연결합니다. IP 주소를 담아도 레코드 조회 자체는 DNS 응용 계층의 동작입니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "A",
        "AAAA",
        "A 레코드",
        "AAAA 레코드",
        "Address Record"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · IP 주소를 담는 DNS 레코드"
      },
      "expansions": [
        "A = Address",
        "AAAA = IPv6 주소 레코드 이름 · 문자별 풀명칭 없음"
      ],
      "example": "example.com의 A에 IPv4를, AAAA에 IPv6 주소를 등록합니다.",
      "relatedTerms": [
        "term-050",
        "term-026",
        "term-027",
        "term-051"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "term-053",
      "keyword": "SOA 레코드",
      "originalMemory": "DNS 영역의 권한·관리 정보; 주 서버·일련번호 등",
      "originalNote": "Start of Authority; DNS = Domain Name System",
      "explanation": "DNS 영역의 권한과 관리 정보를 담습니다. 서버 주소를 직접 나열하는 A 레코드와 달리 주 서버, 관리 연락처, 일련번호와 타이머 등의 정보를 다룹니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "SOA",
        "Start of Authority"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · DNS 영역 관리 정보"
      },
      "expansions": [
        "SOA = Start of Authority"
      ],
      "example": "영역을 관리할 때 주 서버 정보와 일련번호를 확인하여 변경 관리에 활용합니다.",
      "relatedTerms": [
        "term-050",
        "term-052"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-054",
      "keyword": "IIS",
      "originalMemory": "Windows 웹 서버; 홈 디렉터리 변경·가상 디렉터리·기본 문서 설정 가능",
      "originalNote": "Internet Information Services",
      "explanation": "Windows에서 웹사이트 등을 제공하는 서버 소프트웨어입니다. 콘텐츠 위치와 사이트 설정을 관리하는 일은 프로토콜 계층 자체와 구분합니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Internet Information Services",
        "Windows 웹 서버"
      ],
      "osi": {
        "kind": "management",
        "note": "서버 소프트웨어 관리 · 제공하는 HTTP는 응용 계층"
      },
      "expansions": [
        "IIS = Internet Information Services"
      ],
      "example": "Windows 서버에서 사이트의 홈 디렉터리와 기본 문서를 지정해 웹 페이지를 제공합니다.",
      "relatedTerms": [
        "term-055",
        "term-056",
        "term-057"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-055",
      "keyword": "IIS 바인딩",
      "originalMemory": "프로토콜·IP 주소·포트·호스트 이름으로 웹사이트 연결 설정",
      "originalNote": "Internet Information Services; IP = Internet Protocol; 같은 IP에서도 여러 사이트 운영 가능",
      "explanation": "어떤 프로토콜, IP 주소, 포트, 호스트 이름의 요청을 사이트가 받을지 정합니다. DNS에 이름을 등록하는 작업과 웹 서버의 바인딩 설정은 별도입니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "IIS binding",
        "웹사이트 바인딩"
      ],
      "osi": {
        "kind": "configuration",
        "note": "웹 서버 구성 · 주소·포트·호스트 이름과 연결"
      },
      "expansions": [
        "IIS = Internet Information Services"
      ],
      "example": "같은 IP의 여러 사이트를 호스트 이름이 다른 바인딩으로 구분해 제공합니다.",
      "relatedTerms": [
        "term-054",
        "term-007",
        "term-050",
        "term-056"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport",
        "services"
      ]
    },
    {
      "id": "term-056",
      "keyword": "HTTP·HTTPS",
      "originalMemory": "웹 통신 기본 포트 HTTP 80\r\nHTTPS 443",
      "originalNote": "Hypertext Transfer Protocol\r\nHypertext Transfer Protocol Secure",
      "explanation": "HTTP는 웹 요청과 응답의 규칙이며 HTTPS는 TLS로 보호하는 HTTP 통신입니다. 기본 포트 80과 443을 구분하되, 모든 웹 통신이 TCP만 사용하는 것은 아닙니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "HTTP",
        "HTTPS",
        "웹 통신",
        "HTTP 80",
        "HTTPS 443"
      ],
      "osi": {
        "kind": "multiple",
        "note": "HTTP는 OSI 7계층 · HTTPS는 TLS 보호와 함께 동작"
      },
      "expansions": [
        "HTTP = Hypertext Transfer Protocol",
        "HTTPS = Hypertext Transfer Protocol Secure"
      ],
      "example": "HTTP/1.1 기반 HTTPS 접속에서는 TCP 연결 후 TLS로 통신을 보호하고 웹 요청과 응답을 주고받습니다.",
      "relatedTerms": [
        "term-007",
        "term-018",
        "term-054",
        "supp-tls"
      ],
      "clarification": {
        "exam": "HTTP 기본 80, HTTPS 기본 443을 구분합니다.",
        "practice": "HTTP/1.1·HTTP/2의 일반적인 전송은 TCP지만 HTTP/3는 QUIC을 사용합니다. HTTPS 전체를 TCP 전용으로 일반화하지 않습니다.",
        "reason": "기본 포트와 실제 전송 프로토콜을 구분했습니다.",
        "sourceIds": [
          "http3",
          "tls"
        ]
      },
      "sourceIds": [
        "tls",
        "http3"
      ],
      "relatedAreas": [
        "transport",
        "server-management",
        "security"
      ]
    },
    {
      "id": "term-057",
      "keyword": "PowerShell",
      "originalMemory": "Windows 명령·스크립트 환경; 기존 명령 사용 가능; 기본적으로 대소문자 비구분",
      "originalNote": "일부 문자열 연산은 대소문자 구분 옵션 사용 가능",
      "explanation": "Windows 관리에 자주 사용하는 명령 셸과 스크립트 환경입니다. cmdlet과 외부 실행 파일을 사용할 수 있으며 명령 해석과 문자열 비교 규칙은 구분해서 봅니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "파워셸",
        "Power Shell"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 명령·자동화 환경 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "Get-Process로 프로세스를 조회하는 등 Windows 관리 작업을 명령으로 수행합니다.",
      "relatedTerms": [
        "term-054",
        "term-061",
        "term-062"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-058",
      "keyword": "Linux 디렉터리",
      "originalMemory": "/tmp 임시 /boot 부팅 /var 로그·변동 자료 /usr 프로그램·공유 자료",
      "originalNote": "일반 사용자 홈 = /home; /usr는 사용자 계정 저장소 아님",
      "explanation": "디렉터리는 파일의 역할을 구분하는 위치입니다.\n/tmp: 임시 파일\n/boot: 부팅 관련 파일\n/var: 로그 등 변동 자료\n/usr: 프로그램과 공유 자료\n/home: 일반 사용자 홈의 일반적인 위치",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Linux",
        "리눅스",
        "/tmp",
        "/boot",
        "/var",
        "/usr",
        "/home"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 파일 배치 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "로그 확인은 /var/log에서, 일반 사용자 홈 확인은 보통 /home에서 시작합니다.",
      "relatedTerms": [
        "term-059",
        "term-066",
        "term-068"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-059",
      "keyword": "/etc/passwd",
      "originalMemory": "계정 정보; x는 암호 자체가 아니라 /etc/shadow 참조 표시",
      "originalNote": "사용자명:암호표시:UID:GID:설명:홈:셸",
      "explanation": "사용자 계정의 기본 정보를 담습니다. 일반적인 shadow 암호 구성에서 암호 필드의 x는 암호 해시가 /etc/shadow에 있음을 나타냅니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "passwd 파일",
        "/etc/shadow",
        "계정 파일"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 계정 관리 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "계정 행에서 UID, GID, 홈 디렉터리와 로그인 셸을 확인합니다. 암호 자체를 읽는 파일로 생각하지 않습니다.",
      "relatedTerms": [
        "term-060",
        "term-066",
        "term-058"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-060",
      "keyword": "UID·GID",
      "originalMemory": "UID 사용자 식별 번호\r\nGID 그룹 식별 번호",
      "originalNote": "User ID\r\nGroup ID; ID = Identifier",
      "explanation": "UID는 사용자, GID는 그룹을 식별하는 숫자입니다. 실행 중인 작업을 구분하는 PID와 서로 다른 식별자입니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "UID",
        "GID",
        "사용자 ID",
        "그룹 ID"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 사용자·그룹 식별 · OSI 계층 아님"
      },
      "expansions": [
        "UID = User ID",
        "GID = Group ID",
        "ID = Identifier"
      ],
      "example": "파일 소유자의 UID와 그룹 GID를 통해 어떤 계정에 권한이 적용되는지 확인합니다.",
      "relatedTerms": [
        "term-059",
        "term-066"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-061",
      "keyword": "top",
      "originalMemory": "프로세스·CPU·메모리 사용 상태를 실시간 확인",
      "originalNote": "CPU = Central Processing Unit",
      "explanation": "프로세스와 자원 사용 상태를 갱신하며 보여 주는 명령입니다. 서비스가 느린 이유를 조사할 때 단서가 되지만 한 화면만으로 원인을 확정하지는 않습니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "프로세스 모니터",
        "CPU 사용률"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 상태 관찰 · OSI 계층 아님"
      },
      "expansions": [
        "CPU = Central Processing Unit"
      ],
      "example": "웹 응답이 느릴 때 top에서 CPU나 메모리를 많이 사용하는 프로세스를 찾습니다.",
      "relatedTerms": [
        "term-062",
        "term-063",
        "term-067"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-062",
      "keyword": "ps",
      "originalMemory": "프로세스 목록 조회; ps -ef = 전체 프로세스 상세 표시",
      "originalNote": "Process Status",
      "explanation": "실행 중인 프로세스 목록을 조회합니다. 지속적으로 갱신하는 top과 달리 실행 시점의 목록을 확인하는 데 사용합니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "ps -ef",
        "Process Status"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 프로세스 조회 · OSI 계층 아님"
      },
      "expansions": [
        "ps = Process Status"
      ],
      "example": "ps -ef로 전체 프로세스의 상세 목록을 보고 서버 프로그램이 실행 중인지 확인합니다.",
      "relatedTerms": [
        "term-061",
        "term-063",
        "term-064"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-063",
      "keyword": "PID·PPID",
      "originalMemory": "PID 해당 프로세스 번호\r\nPPID 부모 프로세스 번호",
      "originalNote": "Process ID\r\nParent Process ID; ID = Identifier",
      "explanation": "PID는 해당 프로세스, PPID는 부모 프로세스의 식별 번호입니다. 사용자 식별 번호인 UID와 역할이 다릅니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "PID",
        "PPID",
        "프로세스 ID",
        "부모 프로세스"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 프로세스 식별 · OSI 계층 아님"
      },
      "expansions": [
        "PID = Process ID",
        "PPID = Parent Process ID"
      ],
      "example": "ps 결과에서 서버 작업의 PID와 해당 작업을 시작한 부모의 PPID를 확인합니다.",
      "relatedTerms": [
        "term-062",
        "term-064",
        "term-060"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-064",
      "keyword": "kill",
      "originalMemory": "프로세스에 신호 전송; kill PID로 종료 요청",
      "originalNote": "PID = Process ID; 기본 SIGTERM = Signal Terminate(15)",
      "explanation": "프로세스에 신호를 전달합니다. 기본 SIGTERM은 종료 요청이며, 즉시 강제 종료를 뜻하지 않으므로 프로그램의 신호 처리에 따라 결과가 달라집니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "kill PID",
        "SIGTERM",
        "프로세스 종료"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 신호 전달 · OSI 계층 아님"
      },
      "expansions": [
        "SIGTERM = Signal Terminate"
      ],
      "example": "종료가 필요한 시험용 프로세스의 PID를 확인한 뒤 kill PID로 정상 종료를 요청합니다.",
      "relatedTerms": [
        "term-062",
        "term-063",
        "term-067"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-065",
      "keyword": "netstat",
      "originalMemory": "연결·포트 상태 확인; -r 라우팅표\r\n-a 전체\r\n-n 숫자\r\n-s 통계",
      "originalNote": "Network Statistics",
      "explanation": "연결, 포트, 라우팅표, 통계 등을 확인하는 명령입니다. 옵션은 운영체제와 구현을 확인해 사용하며, 포트가 열렸다고 서비스 내용까지 정상이라는 뜻은 아닙니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Network Statistics",
        "netstat -r",
        "netstat -a",
        "netstat -n",
        "netstat -s"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 네트워크 관찰 · 여러 계층의 상태와 관련"
      },
      "expansions": [
        "netstat = Network Statistics"
      ],
      "example": "서버가 연결을 기다리는 포트가 있는지 조회하고, -r로 라우팅표를 확인합니다.",
      "relatedTerms": [
        "term-007",
        "supp-router",
        "term-067"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport",
        "address-routing"
      ]
    },
    {
      "id": "term-066",
      "keyword": "chmod",
      "originalMemory": "권한 변경; 읽기4·쓰기2·실행1; 소유자→그룹→기타 순",
      "originalNote": "Change Mode; 774 = rwx/rwx/r-- → 기타는 읽기만",
      "explanation": "파일 권한을 소유자, 그룹, 기타 사용자 순으로 설정합니다. 읽기 4, 쓰기 2, 실행 1을 합산하며 네트워크 방화벽 규칙과는 다른 접근 제어입니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Change Mode",
        "권한",
        "774"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 파일 접근 제어 · OSI 계층 아님"
      },
      "expansions": [
        "chmod = Change Mode"
      ],
      "example": "774는 소유자와 그룹에 읽기·쓰기·실행을, 기타 사용자에게 읽기만 허용합니다.",
      "relatedTerms": [
        "term-059",
        "term-060",
        "term-081"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-067",
      "keyword": "systemctl",
      "originalMemory": "systemd 서비스 관리; start 시작\r\nenable 부팅 자동 시작\r\nstatus 상태",
      "originalNote": "System Control; 암호 변경은 passwd, systemctl passwd 아님",
      "explanation": "systemd가 관리하는 서비스 등의 상태와 동작을 제어합니다. start와 enable은 각각 현재 시작과 부팅 자동 시작 설정이므로 같은 동작이 아닙니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "systemd",
        "System Control",
        "start",
        "enable",
        "status"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 서비스 관리 · OSI 계층 아님"
      },
      "expansions": [
        "systemctl = systemd 서비스 제어 명령 이름"
      ],
      "example": "웹 서비스를 지금 시작하려면 start, 부팅 시 시작하게 설정하려면 enable의 역할을 확인합니다.",
      "relatedTerms": [
        "term-061",
        "term-064",
        "term-065"
      ],
      "sourceIds": [
        "systemctl"
      ],
      "relatedAreas": [],
      "clarification": {
        "exam": "start는 현재 시작, enable은 부팅 자동 시작 설정, status는 상태 조회로 구분합니다.",
        "practice": "enable만으로 지금 서비스를 시작하지는 않습니다. systemctl은 공식 문서에서 명령 이름으로 다루며, 원본의 System Control 표기는 암기용 풀이로 구분합니다.",
        "reason": "명령의 기능과 약어처럼 풀어 쓴 표현을 구분하고, 현재 실행과 자동 시작 설정의 차이를 분명히 했습니다.",
        "sourceIds": [
          "systemctl"
        ]
      }
    },
    {
      "id": "term-068",
      "keyword": "/var/log/dmesg",
      "originalMemory": "기출: 부팅·커널·장치 관련 메시지 로그",
      "originalNote": "Distribution별 파일 생성 여부 다름; 실무 조회는 dmesg 또는 journalctl -k",
      "explanation": "원본의 /var/log/dmesg는 부팅·커널 메시지 로그를 설명하는 예시입니다. 실제 파일 생성 여부는 배포판과 로깅 설정에 따라 달라집니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "dmesg",
        "journalctl -k",
        "커널 로그",
        "부팅 로그"
      ],
      "osi": {
        "kind": "management",
        "note": "운영체제 커널·장치 진단 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "서버가 네트워크 장치를 인식했는지 dmesg 또는 journalctl -k로 커널 메시지를 확인합니다.",
      "relatedTerms": [
        "term-058",
        "term-065",
        "term-067"
      ],
      "sourceIds": [
        "journal"
      ],
      "relatedAreas": [],
      "clarification": {
        "exam": "원본의 /var/log/dmesg는 부팅·커널·장치 메시지와 연결해 기억합니다.",
        "practice": "그 경로에 파일이 반드시 존재하는 것은 아닙니다. systemd 환경에서는 journalctl -k로 커널 메시지를 조회할 수 있습니다.",
        "reason": "특정 로그 파일의 경로와 실제 메시지 조회 방법을 구분했습니다.",
        "sourceIds": [
          "journal"
        ]
      }
    },
    {
      "id": "term-069",
      "keyword": "FTP",
      "originalMemory": "파일 전송; 제어 연결 TCP 21; 데이터 연결은 별도",
      "originalNote": "File Transfer Protocol; TCP = Transmission Control Protocol",
      "explanation": "파일 전송을 위한 응용 프로토콜입니다. 기본 TCP 21의 제어 연결과 별도의 데이터 연결을 구분해야 방화벽과 연결 방향을 이해할 수 있습니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "File Transfer Protocol",
        "파일 전송"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층 · TCP/IP 응용 계층"
      },
      "expansions": [
        "FTP = File Transfer Protocol"
      ],
      "example": "제어 연결로 로그인과 전송 명령을 주고받고, 별도의 데이터 연결로 파일을 옮깁니다.",
      "relatedTerms": [
        "term-070",
        "term-071",
        "term-018",
        "term-017"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport"
      ]
    },
    {
      "id": "term-070",
      "keyword": "FTP Passive Mode",
      "originalMemory": "서버가 데이터 포트 안내 → 클라이언트가 서버로 데이터 연결",
      "originalNote": "File Transfer Protocol; 수동 모드; 서버의 데이터 포트 범위 허용 필요",
      "explanation": "서버가 사용할 데이터 포트를 알리고 클라이언트가 서버로 데이터 연결을 시작하는 방식입니다. 파일을 어느 쪽으로 전송하는지와 연결을 누가 시작하는지는 별개입니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "FTP Passive",
        "Passive Mode",
        "PASV",
        "수동 모드"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층의 연결 방식 · TCP 데이터 연결과 관련"
      },
      "expansions": [
        "FTP = File Transfer Protocol"
      ],
      "example": "서버가 데이터 포트를 알려 주면 클라이언트가 그 포트로 연결합니다. 방화벽은 서버의 해당 포트 범위를 고려해야 합니다.",
      "relatedTerms": [
        "term-069",
        "term-071",
        "term-081"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "security"
      ]
    },
    {
      "id": "term-071",
      "keyword": "FTP Active Mode",
      "originalMemory": "클라이언트가 데이터 포트 안내 → 서버가 클라이언트로 데이터 연결",
      "originalNote": "File Transfer Protocol; 능동 모드; 일반적으로 서버 데이터 출발 포트 20",
      "explanation": "클라이언트가 데이터 수신 포트를 알리고 서버가 연결을 시작합니다. 전통적인 동작에서는 서버 데이터 연결의 출발 포트가 20이며, 클라이언트 쪽 방화벽이나 NAT가 연결에 영향을 줄 수 있습니다.",
      "primaryArea": "services",
      "kind": "original",
      "aliases": [
        "FTP Active",
        "Active Mode",
        "PORT",
        "능동 모드"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 7계층의 연결 방식 · TCP 데이터 연결과 관련"
      },
      "expansions": [
        "FTP = File Transfer Protocol"
      ],
      "example": "클라이언트가 수신 포트를 알리면 서버가 클라이언트로 데이터 연결을 시작합니다.",
      "relatedTerms": [
        "term-069",
        "term-070",
        "term-030",
        "term-081"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "address-routing",
        "security"
      ]
    },
    {
      "id": "term-072",
      "keyword": "AD",
      "originalMemory": "도메인 사용자·컴퓨터·그룹 중앙 관리; 보안 그룹으로 권한 관리",
      "originalNote": "Active Directory",
      "explanation": "도메인의 사용자, 컴퓨터, 그룹과 인증을 중앙에서 관리하는 기반입니다. DNS 같은 통신 서비스와 연결되지만 운영체제 관리 전체를 응용 계층 프로토콜 하나로 볼 수는 없습니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Active Directory",
        "AD DS",
        "액티브 디렉터리"
      ],
      "osi": {
        "kind": "management",
        "note": "디렉터리·인증 서비스 관리 · 단일 OSI 계층으로 분류하지 않음"
      },
      "expansions": [
        "AD = Active Directory",
        "AD DS = Active Directory Domain Services"
      ],
      "example": "회사 도메인에서 사용자와 PC를 등록하고 보안 그룹을 통해 자원 권한을 관리합니다.",
      "relatedTerms": [
        "term-073",
        "term-074",
        "term-050"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "services"
      ]
    },
    {
      "id": "term-073",
      "keyword": "트러스트",
      "originalMemory": "도메인·포리스트 사이의 신뢰 관계 → 다른 도메인의 인증 활용",
      "originalNote": "Trust; 같은 포리스트 도메인 간 기본 양방향·전이적 관계",
      "explanation": "도메인이나 포리스트 사이에서 다른 쪽의 인증을 활용하는 관계입니다. 트러스트가 있다는 사실만으로 상대의 모든 자원에 접근할 권한이 자동 부여되는 것은 아닙니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "Trust",
        "신뢰 관계"
      ],
      "osi": {
        "kind": "configuration",
        "note": "도메인 인증 관계 설정 · OSI 계층 아님"
      },
      "expansions": [],
      "example": "트러스트가 설정된 다른 도메인의 계정을 인증에 활용한 뒤, 자원 접근 권한은 별도로 확인합니다.",
      "relatedTerms": [
        "term-072",
        "term-074"
      ],
      "sourceIds": [
        "trust"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-074",
      "keyword": "OU·DC",
      "originalMemory": "OU = 사용자·컴퓨터 등을 묶는 관리 단위\r\nDC = 도메인 인증·디렉터리 제공 서버",
      "originalNote": "Organizational Unit\r\nDomain Controller",
      "explanation": "OU는 관리 대상을 묶는 논리 단위이고 DC는 도메인 인증과 디렉터리를 제공하는 서버입니다. 관리 폴더에 가까운 단위와 실제 서버 역할을 구분합니다.",
      "primaryArea": "server-management",
      "kind": "original",
      "aliases": [
        "OU",
        "DC",
        "Organizational Unit",
        "Domain Controller",
        "조직 구성 단위",
        "도메인 컨트롤러"
      ],
      "osi": {
        "kind": "management",
        "note": "디렉터리 구조와 서버 역할 · OSI 계층 아님"
      },
      "expansions": [
        "OU = Organizational Unit",
        "DC = Domain Controller"
      ],
      "example": "부서별 사용자와 컴퓨터를 OU로 묶고, 로그인 인증은 DC가 처리하도록 구성합니다.",
      "relatedTerms": [
        "term-072",
        "term-073"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-075",
      "keyword": "Hyper-V 검사점",
      "originalMemory": "가상 머신의 특정 시점 상태 저장 → 필요 시 해당 상태로 복원",
      "originalNote": "Checkpoint; VM = Virtual Machine",
      "explanation": "가상 머신의 특정 시점 상태를 저장하고 복원하는 기능입니다. 검사점 유형에 따라 메모리 상태 포함 여부 등이 다르며 별도 백업을 대신하는 것으로 일반화하지 않습니다.",
      "primaryArea": "virtualization",
      "kind": "original",
      "aliases": [
        "Hyper-V",
        "Checkpoint",
        "체크포인트",
        "검사점"
      ],
      "osi": {
        "kind": "configuration",
        "note": "가상 머신 운영 기능 · OSI 계층 아님"
      },
      "expansions": [
        "VM = Virtual Machine"
      ],
      "example": "시험용 가상 머신의 설정 변경 전에 검사점을 만들고 필요하면 해당 상태로 되돌립니다.",
      "relatedTerms": [
        "term-041",
        "term-045",
        "term-067"
      ],
      "clarification": {
        "exam": "검사점은 특정 시점 상태로 복원하는 기능입니다.",
        "practice": "표준 검사점은 메모리 상태를 포함하지만 프로덕션 검사점은 포함하지 않습니다. 검사점을 독립적인 전체 백업으로 취급하지 않습니다.",
        "reason": "원본의 “상태 저장”을 모든 검사점의 동일한 동작으로 일반화하지 않도록 보완했습니다.",
        "sourceIds": [
          "checkpoint"
        ]
      },
      "sourceIds": [
        "checkpoint"
      ],
      "relatedAreas": [
        "server-management"
      ]
    },
    {
      "id": "term-076",
      "keyword": "L4 스위치",
      "originalMemory": "전송 계층; TCP·UDP 포트 등으로 서버 부하 분산; L3 장비와 구분",
      "originalNote": "Layer 4 Switch; TCP = Transmission Control Protocol\r\nUDP = User Datagram Protocol; HTTP 내용 분석은 L7 기능",
      "explanation": "출발지와 목적지 IP, TCP·UDP 포트 등의 정보를 바탕으로 서버에 트래픽을 분산합니다. HTTP 호스트 이름이나 URL 경로 등 응용 내용을 해석하는 분산은 L7 기능입니다.",
      "primaryArea": "transport",
      "kind": "original",
      "aliases": [
        "Layer 4 Switch",
        "L4",
        "로드 밸런서",
        "부하 분산",
        "L7"
      ],
      "osi": {
        "kind": "multiple",
        "note": "OSI 4계층 정보 중심 · IP와 포트를 함께 활용"
      },
      "expansions": [
        "L4 = Layer 4",
        "L7 = Layer 7"
      ],
      "example": "서비스 IP의 TCP 443 연결을 여러 웹 서버로 분산합니다. URL 경로별 분기는 HTTP를 해석하는 L7 기능과 비교합니다.",
      "relatedTerms": [
        "term-007",
        "term-018",
        "term-056",
        "supp-switch",
        "supp-router"
      ],
      "clarification": {
        "exam": "L4는 TCP·UDP 포트 등 전송 정보, L3는 목적지 IP 기반 전달로 구분합니다.",
        "practice": "HTTP 호스트나 URL 등 내용 분석은 L7 기능입니다. HTTPS 내용을 분석하려면 암호화가 해제되는 지점도 고려해야 합니다.",
        "reason": "장비 이름보다 실제 전달 판단에 사용하는 정보를 기준으로 설명했습니다.",
        "sourceIds": [
          "balancer"
        ]
      },
      "sourceIds": [
        "balancer"
      ],
      "relatedAreas": [
        "services",
        "lan",
        "address-routing"
      ]
    },
    {
      "id": "term-077",
      "keyword": "RIP",
      "originalMemory": "거리 벡터; 홉 수로 경로 선택; 최대 15홉, 16홉은 도달 불가",
      "originalNote": "Routing Information Protocol",
      "explanation": "이웃과 거리 정보를 교환하는 거리 벡터 라우팅 프로토콜입니다. 경로 비용으로 홉 수를 사용하며 최대 15홉, 16은 도달 불가를 뜻합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Routing Information Protocol",
        "거리 벡터",
        "홉 수"
      ],
      "osi": {
        "kind": "multiple",
        "note": "경로 제어 목적은 3계층 · RIP 메시지는 UDP 위에서 교환"
      },
      "expansions": [
        "RIP = Routing Information Protocol"
      ],
      "example": "RIP 경로에서 16홉으로 표시된 목적지는 도달할 수 없는 경로로 처리합니다.",
      "relatedTerms": [
        "term-078",
        "term-079",
        "supp-router"
      ],
      "sourceIds": [
        "rip"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-078",
      "keyword": "IGRP",
      "originalMemory": "거리 벡터 라우팅; 대역폭·지연 등 복합 메트릭 활용",
      "originalNote": "Interior Gateway Routing Protocol; Cisco 구형 프로토콜",
      "explanation": "Cisco의 구형 거리 벡터 라우팅 프로토콜입니다. 경로 비교에 대역폭과 지연 등의 복합 메트릭을 사용하며 OSPF의 링크 상태 방식과 구분합니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Interior Gateway Routing Protocol",
        "IGRP 거리 벡터"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 경로 제어 · 구형 Cisco 프로토콜"
      },
      "expansions": [
        "IGRP = Interior Gateway Routing Protocol"
      ],
      "example": "구형 라우팅 방식 비교 문제에서 홉 수만 보는 RIP와 대역폭·지연 등을 사용하는 IGRP를 구분합니다.",
      "relatedTerms": [
        "term-077",
        "term-079"
      ],
      "sourceIds": [
        "igrp"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-079",
      "keyword": "OSPF",
      "originalMemory": "링크 상태 라우팅; 최단 경로 계산; 거리 벡터 아님",
      "originalNote": "Open Shortest Path First; Dijkstra 알고리즘",
      "explanation": "링크 상태 라우팅 프로토콜입니다. 네트워크 연결 정보를 바탕으로 최단 경로를 계산하며 거리 벡터 방식으로 분류하지 않습니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Open Shortest Path First",
        "링크 상태",
        "Dijkstra"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 경로 제어 · IP로 OSPF 메시지 교환"
      },
      "expansions": [
        "OSPF = Open Shortest Path First"
      ],
      "example": "조직 내부의 라우터가 링크 상태 정보를 공유하고 비용을 기준으로 최단 경로를 계산합니다.",
      "relatedTerms": [
        "term-077",
        "term-080",
        "supp-router"
      ],
      "sourceIds": [
        "ospf"
      ],
      "relatedAreas": []
    },
    {
      "id": "term-080",
      "keyword": "BGP",
      "originalMemory": "자율 시스템 간 경로 교환; 경로 벡터 방식",
      "originalNote": "Border Gateway Protocol; 기출 48번 정답은 OSPF, BGP는 엄밀히 경로 벡터",
      "explanation": "자율 시스템 간 경로 정보를 교환하는 경로 벡터 방식입니다. AS 경로와 정책을 고려하므로 단순히 홉 수가 가장 작은 경로를 선택하는 RIP와 같지 않습니다.",
      "primaryArea": "address-routing",
      "kind": "original",
      "aliases": [
        "Border Gateway Protocol",
        "경로 벡터",
        "AS"
      ],
      "osi": {
        "kind": "multiple",
        "note": "경로 제어 목적은 3계층 · BGP 메시지는 TCP 위에서 교환"
      },
      "expansions": [
        "BGP = Border Gateway Protocol",
        "AS = Autonomous System"
      ],
      "example": "통신 사업자나 조직의 자율 시스템이 도달 가능한 네트워크와 AS 경로 정보를 교환합니다.",
      "relatedTerms": [
        "term-079",
        "term-018",
        "supp-router"
      ],
      "clarification": {
        "exam": "BGP는 경로 벡터, OSPF는 링크 상태입니다. 원본 비고의 “기출 48번” 정답은 문제 원문이 없어 여기서 확인하지 않았습니다.",
        "practice": "BGP는 AS 경로 정보와 정책을 교환하며 TCP를 사용합니다. 라우팅 목적과 메시지 운반 계층을 구분합니다.",
        "reason": "확인되지 않은 문제 정답은 사실로 재서술하지 않고 프로토콜의 검증 가능한 특성만 설명합니다.",
        "sourceIds": [
          "bgp",
          "ospf"
        ]
      },
      "sourceIds": [
        "bgp"
      ],
      "relatedAreas": [
        "transport"
      ]
    },
    {
      "id": "term-081",
      "keyword": "방화벽",
      "originalMemory": "보안 정책·접근 제어 규칙에 따라 통과 트래픽 허용·차단",
      "originalNote": "Firewall; 모든 공격을 차단하거나 우회 트래픽을 제어하는 것은 아님",
      "explanation": "정책에 따라 통과하는 트래픽을 허용하거나 차단합니다. 필터링 기능과 암호화는 서로 다른 역할이며, 우회 경로나 모든 공격까지 자동으로 해결하지는 않습니다.",
      "primaryArea": "security",
      "kind": "original",
      "aliases": [
        "Firewall",
        "접근 제어"
      ],
      "osi": {
        "kind": "multiple",
        "note": "정책과 제품에 따라 OSI 3·4·7계층 등 여러 정보 사용"
      },
      "expansions": [],
      "example": "서버의 웹 포트 접근은 허용하고 불필요한 관리 포트 접근은 제한하는 정책을 적용합니다.",
      "relatedTerms": [
        "term-047",
        "term-048",
        "term-007",
        "term-066"
      ],
      "sourceIds": [],
      "relatedAreas": [
        "transport",
        "server-management"
      ]
    },
    {
      "id": "term-082",
      "keyword": "광섬유 케이블",
      "originalMemory": "빛으로 데이터 전송; 코어+클래딩; 전반사 이용",
      "originalNote": "Optical Fiber Cable; Core\r\nCladding",
      "explanation": "빛을 이용해 데이터를 전달합니다. 코어와 클래딩의 구조와 전반사를 통해 신호가 진행하도록 하며, 매체 특성과 광 모듈의 호환성을 함께 확인합니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "Optical Fiber",
        "코어",
        "클래딩",
        "Core",
        "Cladding"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 1계층 · 신호 전달 매체"
      },
      "expansions": [],
      "example": "건물의 스위치 사이를 광섬유로 연결하고 양 끝의 광 모듈 규격을 맞춥니다.",
      "relatedTerms": [
        "term-046",
        "term-083"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "term-083",
      "keyword": "UTP·STP 케이블",
      "originalMemory": "UTP 차폐 없음\r\nSTP 차폐 있음; 꼬임으로 간섭 완화",
      "originalNote": "Unshielded Twisted Pair\r\nShielded Twisted Pair; 프로토콜 STP(Spanning Tree Protocol)와 구분",
      "explanation": "꼬임으로 간섭을 완화하는 구리선 케이블입니다. UTP는 차폐가 없고 STP는 차폐가 있으며, 스위치 루프를 막는 프로토콜 STP와 구분합니다.",
      "primaryArea": "lan",
      "kind": "original",
      "aliases": [
        "UTP",
        "STP 케이블",
        "차폐 케이블",
        "비차폐 케이블",
        "Twisted Pair"
      ],
      "osi": {
        "kind": "layer",
        "note": "OSI 1계층 · 케이블 매체"
      },
      "expansions": [
        "UTP = Unshielded Twisted Pair",
        "STP = Shielded Twisted Pair"
      ],
      "example": "PC를 스위치에 연결할 때 설치 환경과 장비 규격에 맞는 꼬임선 케이블을 사용합니다.",
      "relatedTerms": [
        "term-044",
        "term-082",
        "supp-switch"
      ],
      "sourceIds": [],
      "relatedAreas": []
    },
    {
      "id": "supp-mac",
      "keyword": "MAC 주소",
      "primaryArea": "lan",
      "aliases": [
        "MAC",
        "맥 주소",
        "물리 주소"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "layer",
        "note": "OSI 2계층 · 링크 내 인터페이스 식별"
      },
      "expansions": [
        "MAC = Media Access Control"
      ],
      "explanation": "같은 링크에서 프레임을 전달할 인터페이스를 구분하는 주소입니다. 일반적인 이더넷 MAC 주소는 48비트이며 IP 주소처럼 원격 네트워크까지의 경로를 직접 지정하지 않습니다.",
      "example": "인터넷으로 보내는 PC는 이더넷 프레임의 목적지에 원격 서버의 MAC 대신 다음 홉 라우터의 MAC을 사용합니다.",
      "relatedTerms": [
        "supp-arp",
        "supp-switch",
        "supp-ip"
      ],
      "sourceIds": [
        "switching",
        "rfc1122"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "address-routing"
      ]
    },
    {
      "id": "supp-switch",
      "keyword": "스위치",
      "primaryArea": "lan",
      "aliases": [
        "Switch",
        "L2 스위치"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "layer",
        "note": "OSI 2계층 중심 · 여기서는 L2 스위치의 전달 기능 설명"
      },
      "expansions": [],
      "explanation": "L2 스위치는 MAC 주소 테이블을 기준으로 같은 LAN 안에서 프레임을 전달합니다. 전달 판단에 쓰는 정보를 기준으로 구분하며, 라우팅 기능도 갖춘 L3 스위치가 따로 있습니다.",
      "example": "같은 VLAN의 PC가 프린터로 보낸 프레임을 스위치가 목적지 MAC을 학습한 포트로 전달합니다.",
      "relatedTerms": [
        "supp-mac",
        "supp-router",
        "term-042",
        "term-076"
      ],
      "sourceIds": [
        "switching"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "address-routing",
        "transport"
      ]
    },
    {
      "id": "supp-router",
      "keyword": "라우터",
      "primaryArea": "address-routing",
      "aliases": [
        "Router",
        "공유기",
        "L3 장비"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 중심 · 목적지 IP와 라우팅표로 판단"
      },
      "expansions": [],
      "explanation": "목적지 IP 주소와 라우팅표를 바탕으로 다음 홉이나 출력 인터페이스를 결정합니다. 집 공유기는 라우터, LAN 스위치, 무선 AP 기능을 한 기기에 함께 제공할 수 있습니다.",
      "example": "PC가 기본 게이트웨이로 넘긴 인터넷행 IP 패킷을 공유기가 외부 네트워크로 전달합니다.",
      "relatedTerms": [
        "supp-gateway",
        "supp-switch",
        "term-030",
        "term-079"
      ],
      "sourceIds": [
        "rfc1122",
        "device"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "lan"
      ]
    },
    {
      "id": "supp-gateway",
      "keyword": "게이트웨이",
      "primaryArea": "address-routing",
      "aliases": [
        "Gateway",
        "기본 게이트웨이",
        "Default Gateway"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "configuration",
        "note": "네트워크 출구 역할 · 여기서는 IP 기본 게이트웨이"
      },
      "expansions": [],
      "explanation": "기본 게이트웨이는 호스트가 더 구체적인 경로를 모를 때 다른 네트워크로 보낼 패킷을 맡기는 다음 홉입니다. 일반적으로 같은 링크에 있는 라우터 인터페이스 주소를 설정합니다.",
      "example": "PC의 IP가 192.168.10.20/24이고 기본 게이트웨이가 192.168.10.1이면 외부 목적지 패킷을 해당 라우터에 맡깁니다.",
      "relatedTerms": [
        "supp-router",
        "supp-arp",
        "term-010",
        "term-033"
      ],
      "sourceIds": [
        "rfc1122"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "lan",
        "services"
      ]
    },
    {
      "id": "supp-arp",
      "keyword": "ARP",
      "primaryArea": "lan",
      "aliases": [
        "주소 결정 프로토콜",
        "Address Resolution Protocol"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "multiple",
        "note": "IP 주소와 링크 주소의 경계 · RFC 1122에서는 링크 계층"
      },
      "expansions": [
        "ARP = Address Resolution Protocol"
      ],
      "explanation": "같은 링크에서 다음 홉의 IPv4 주소에 대응하는 MAC 주소를 알아냅니다. 원격 서버가 다른 네트워크에 있다면 원격 MAC이 아니라 게이트웨이의 MAC을 알아냅니다.",
      "example": "PC가 192.168.10.1의 MAC을 모르면 같은 LAN에 ARP 요청을 보내고 응답을 주소 캐시에 저장합니다.",
      "relatedTerms": [
        "supp-mac",
        "supp-gateway",
        "term-031",
        "term-003"
      ],
      "sourceIds": [
        "rfc1122"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "address-routing",
        "structure"
      ]
    },
    {
      "id": "supp-tls",
      "keyword": "TLS",
      "primaryArea": "security",
      "aliases": [
        "Transport Layer Security",
        "전송 계층 보안"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "multiple",
        "note": "응용 데이터 보호 · OSI 한 계층에 엄밀히 고정하지 않음"
      },
      "expansions": [
        "TLS = Transport Layer Security"
      ],
      "explanation": "통신 상대의 인증과 데이터의 기밀성·무결성을 제공하는 보안 프로토콜입니다. 일반적인 TCP 기반 HTTPS에서는 HTTP와 TCP 사이에서 응용 데이터를 보호합니다.",
      "example": "브라우저가 인증서를 검증하고 TLS로 보호된 연결에서 웹 요청과 응답을 주고받습니다.",
      "relatedTerms": [
        "term-056",
        "term-035",
        "term-022",
        "term-048"
      ],
      "sourceIds": [
        "tls",
        "http3"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "services",
        "structure",
        "transport"
      ]
    },
    {
      "id": "supp-ip",
      "keyword": "IP 주소와 패킷",
      "primaryArea": "address-routing",
      "aliases": [
        "IP",
        "IP 주소",
        "Internet Protocol",
        "IPv4 주소"
      ],
      "kind": "supplement",
      "osi": {
        "kind": "layer",
        "note": "OSI 3계층 · TCP/IP 인터넷 계층"
      },
      "expansions": [
        "IP = Internet Protocol"
      ],
      "explanation": "IP는 주소를 사용해 여러 네트워크 사이로 패킷을 전달하는 프로토콜입니다. IP 자체는 전달 성공과 순서를 보장하지 않으므로 필요하면 TCP 같은 상위 기능을 이용합니다.",
      "example": "서버로 가는 패킷은 목적지 IP를 기준으로 여러 라우터를 거치고, 각 링크에서는 해당 링크에 맞는 프레임에 담깁니다.",
      "relatedTerms": [
        "term-003",
        "term-010",
        "term-018",
        "supp-mac"
      ],
      "sourceIds": [
        "rfc1122"
      ],
      "originalMemory": null,
      "originalNote": null,
      "relatedAreas": [
        "structure",
        "transport",
        "lan"
      ]
    }
  ],
  "sources": {
    "osi": {
      "title": "ITU-T X.200 · OSI 기본 참조 모델",
      "url": "https://www.itu.int/rec/T-REC-X.200/en/"
    },
    "rfc1122": {
      "title": "RFC 1122 · 인터넷 계층 구조와 링크 계층의 ARP",
      "url": "https://www.rfc-editor.org/rfc/rfc1122"
    },
    "dhcp": {
      "title": "RFC 2131 · DHCP 할당 방식과 UDP 전송",
      "url": "https://www.rfc-editor.org/rfc/rfc2131"
    },
    "icmp4": {
      "title": "RFC 6633 · Source Quench 폐기",
      "url": "https://www.rfc-editor.org/rfc/rfc6633"
    },
    "icmp17": {
      "title": "RFC 6918 · 구형 ICMPv4 유형 폐기",
      "url": "https://www.rfc-editor.org/rfc/rfc6918"
    },
    "bgp": {
      "title": "RFC 4271 · BGP의 AS 경로 정보",
      "url": "https://www.rfc-editor.org/rfc/rfc4271.html"
    },
    "ospf": {
      "title": "RFC 2328 · OSPF 링크 상태 라우팅",
      "url": "https://www.rfc-editor.org/rfc/rfc2328.html"
    },
    "dscp": {
      "title": "RFC 2474 · DS 필드와 DSCP",
      "url": "https://www.rfc-editor.org/rfc/rfc2474.html"
    },
    "ecn": {
      "title": "RFC 3168 · ECN 필드",
      "url": "https://www.rfc-editor.org/rfc/rfc3168.html"
    },
    "ipv6": {
      "title": "RFC 8200 · IPv6 단편화와 Hop Limit",
      "url": "https://www.rfc-editor.org/rfc/rfc8200.html"
    },
    "ipv6text": {
      "title": "RFC 5952 · IPv6 주소 표기 권고",
      "url": "https://www.rfc-editor.org/rfc/rfc5952"
    },
    "cidr": {
      "title": "RFC 4632 · 클래스 없는 주소 체계",
      "url": "https://www.rfc-editor.org/rfc/rfc4632.html"
    },
    "subnet31": {
      "title": "RFC 3021 · 지점 간 링크의 /31 주소",
      "url": "https://www.rfc-editor.org/rfc/rfc3021.html"
    },
    "tcp": {
      "title": "RFC 9293 · TCP 신뢰성·흐름 제어·연결 설정",
      "url": "https://www.rfc-editor.org/rfc/rfc9293.html"
    },
    "tls": {
      "title": "RFC 8446 · TLS 1.3 보안 목적",
      "url": "https://www.rfc-editor.org/rfc/rfc8446.html"
    },
    "http3": {
      "title": "RFC 9114 · QUIC을 사용하는 HTTP/3",
      "url": "https://www.rfc-editor.org/rfc/rfc9114.html"
    },
    "ipsec": {
      "title": "RFC 4301 · IPsec 구조와 모드",
      "url": "https://www.rfc-editor.org/rfc/rfc4301.html"
    },
    "tftp": {
      "title": "RFC 1350 · TFTP의 블록 확인과 전송 포트",
      "url": "https://www.rfc-editor.org/rfc/rfc1350.html"
    },
    "dhcpdelay": {
      "title": "Microsoft Learn · DHCP 범위의 지연 단위",
      "url": "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/dhcpserverpsprov/dhcpserverv4scope"
    },
    "checkpoint": {
      "title": "Microsoft Learn · Hyper-V 검사점 유형과 백업 구분",
      "url": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/checkpoints"
    },
    "cloud": {
      "title": "NIST SP 800-145 · 클라우드 정의와 배포 모델",
      "url": "https://csrc.nist.gov/pubs/sp/800/145/final"
    },
    "switching": {
      "title": "Cisco · 스위치의 MAC 주소 기반 전달",
      "url": "https://www.cisco.com/c/en/us/td/docs/routers/access/isr1100/software/configuration/guide/isr1100-sw-config/configuring_ethernet_switchports.html"
    },
    "device": {
      "title": "Cisco · 무선 라우터와 AP 동작 모드 예시",
      "url": "https://www.cisco.com/assets/sol/sb/RV180W_Emulators/RV180W_Emulator_v1-0-3-14/help/en_US/device_mode_olh_only1.htm"
    },
    "balancer": {
      "title": "AWS · L4와 L7 부하 분산 계층",
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/Welcome.html"
    },
    "rip": {
      "title": "RFC 1058 · RIP의 거리 벡터와 UDP 전송",
      "url": "https://www.rfc-editor.org/rfc/rfc1058"
    },
    "igrp": {
      "title": "Cisco · IGRP와 복합 메트릭",
      "url": "https://www.cisco.com/c/en/us/support/docs/ip/interior-gateway-routing-protocol-igrp/26825-5.html"
    },
    "trust": {
      "title": "Microsoft Learn · 인증과 자원 접근 권한의 구분",
      "url": "https://learn.microsoft.com/en-us/windows-server/security/windows-authentication/windows-authentication-concepts"
    },
    "systemctl": {
      "title": "systemd 공식 매뉴얼 · systemctl 동작",
      "url": "https://github.com/systemd/systemd/blob/main/man/systemctl.xml"
    },
    "journal": {
      "title": "systemd 공식 매뉴얼 · journalctl의 커널 메시지 조회",
      "url": "https://www.freedesktop.org/software/systemd/man/255/journalctl.html"
    },
    "documentation-ip": {
      "title": "RFC 5737 · 문서용 IPv4 주소",
      "url": "https://www.rfc-editor.org/rfc/rfc5737.html"
    },
    "private-ip": {
      "title": "RFC 1918 · 사설 IPv4 주소",
      "url": "https://www.rfc-editor.org/rfc/rfc1918.html"
    },
    "arp-wire": {
      "title": "RFC 826 · 이더넷 ARP 메시지",
      "url": "https://www.rfc-editor.org/rfc/rfc826.html"
    },
    "router-forward": {
      "title": "RFC 1812 · 라우터의 IPv4 전달과 TTL",
      "url": "https://www.rfc-editor.org/rfc/rfc1812.html"
    },
    "nat-pat": {
      "title": "RFC 3022 · 주소·전송 포트 변환",
      "url": "https://www.rfc-editor.org/rfc/rfc3022.html"
    },
    "dns-cache": {
      "title": "RFC 1034 · DNS 조회와 캐시",
      "url": "https://www.rfc-editor.org/rfc/rfc1034.html"
    },
    "udp-wire": {
      "title": "RFC 768 · UDP의 전달·순서 보장 범위",
      "url": "https://www.rfc-editor.org/rfc/rfc768.html"
    }
  },
  "walkthrough": {
    "title": "집 컴퓨터에서 웹사이트에 접속하기",
    "scope": "IPv4·이더넷·TCP 기반 HTTPS(HTTP/1.1, TLS 1.3)의 학습용 예시입니다. 실제 패킷 캡처가 아닙니다.",
    "assumptions": [
      "7단계는 설명 순서입니다. DNS 요청에도 목적지 판단, 필요한 MAC 확인, 네트워크 전달이 먼저 필요합니다.",
      "DHCP는 사전 주소 설정입니다. 유효한 설정·DNS 캐시·ARP 캐시가 있으면 해당 교환을 새로 수행하지 않을 수 있습니다.",
      "이 예시는 새 TCP 연결과 전체 TLS 협상을 가정합니다. 기존 연결 재사용이나 TLS 재개 등은 생략합니다.",
      "사설 주소와 문서용 주소, 가상의 로컬 관리 MAC만 사용합니다. 외부 주소와 www.example.com의 연결은 이 도식에서 정한 값입니다."
    ],
    "domain": "www.example.com",
    "mask": "255.255.255.0",
    "prefix": 24,
    "initialTTL": 64,
    "interfaces": {
      "pc": {
        "label": "내 컴퓨터",
        "ip": "192.168.10.20",
        "mac": "02:00:00:00:10:20"
      },
      "dns": {
        "label": "LAN 안 DNS",
        "ip": "192.168.10.53",
        "mac": "02:00:00:00:10:53"
      },
      "peer": {
        "label": "같은 LAN의 비교용 HTTPS 서버",
        "ip": "192.168.10.30",
        "mac": "02:00:00:00:10:30"
      },
      "homeLan": {
        "label": "집 공유기 LAN",
        "ip": "192.168.10.1",
        "mac": "02:00:00:00:10:01"
      },
      "homeWan": {
        "label": "집 공유기 WAN",
        "ip": "198.51.100.10",
        "mac": "02:00:00:00:20:10"
      },
      "ispWan": {
        "label": "중간 라우터 · 공유기 쪽",
        "ip": "198.51.100.1",
        "mac": "02:00:00:00:20:01"
      },
      "ispTransit": {
        "label": "중간 라우터 · 서버망 쪽",
        "ip": "192.0.2.1",
        "mac": "02:00:00:00:30:01"
      },
      "serverTransit": {
        "label": "서버망 라우터 · 중간망 쪽",
        "ip": "192.0.2.2",
        "mac": "02:00:00:00:30:02"
      },
      "serverLan": {
        "label": "서버망 라우터 · 서버 쪽",
        "ip": "203.0.113.1",
        "mac": "02:00:00:00:40:01"
      },
      "server": {
        "label": "웹 서버",
        "ip": "203.0.113.80",
        "mac": "02:00:00:00:40:80"
      }
    },
    "ports": {
      "dnsClient": 53000,
      "dnsServer": 53,
      "webClient": 51514,
      "webServer": 443,
      "webTranslated": 62000
    },
    "links": [
      {
        "id": "home-lan",
        "label": "홈 LAN",
        "from": "pc",
        "to": "homeLan"
      },
      {
        "id": "home-wan",
        "label": "공유기 외부 링크",
        "from": "homeWan",
        "to": "ispWan"
      },
      {
        "id": "transit",
        "label": "중간 라우터 간 링크",
        "from": "ispTransit",
        "to": "serverTransit"
      },
      {
        "id": "server-lan",
        "label": "서버 LAN",
        "from": "serverLan",
        "to": "server"
      }
    ],
    "nodes": [
      {
        "id": "computer",
        "label": "내 컴퓨터"
      },
      {
        "id": "lan",
        "label": "집 LAN"
      },
      {
        "id": "router",
        "label": "집 공유기"
      },
      {
        "id": "internet",
        "label": "중간·서버망 라우터"
      },
      {
        "id": "server",
        "label": "웹 서버"
      }
    ],
    "edges": [
      [
        "computer",
        "lan"
      ],
      [
        "lan",
        "router"
      ],
      [
        "router",
        "internet"
      ],
      [
        "internet",
        "server"
      ]
    ],
    "steps": [
      {
        "id": "settings",
        "title": "내 IP 설정 확인",
        "now": "이미 설정된 IP, 서브넷 마스크, 기본 게이트웨이와 DNS 서버 주소를 확인합니다.",
        "why": "내 네트워크 범위와 외부 목적지로 가는 출구, 이름을 조회할 대상을 알아야 합니다.",
        "protocols": [
          "현재는 로컬 설정 확인 · 패킷 교환 없음",
          "DHCPv4는 사전 설정에 사용할 수 있는 응용 프로토콜"
        ],
        "layers": [
          "주소·마스크·경로: OSI 3계층 관련 설정",
          "DHCP 자체: 응용 계층 · 이 단계에서는 이미 완료"
        ],
        "nodes": [
          "computer"
        ],
        "edges": [],
        "areas": [
          "address-routing",
          "services",
          "server-management"
        ],
        "termIds": [
          "term-033",
          "term-010",
          "supp-gateway",
          "term-050"
        ],
        "addressMode": "config",
        "path": "내 컴퓨터 내부에서 설정 확인 · 장치 간 이동 없음",
        "cache": "유효한 DHCP 임대나 수동 설정이 있으면 웹 접속마다 DHCP를 다시 수행하지 않습니다."
      },
      {
        "id": "dns",
        "title": "DNS로 웹 서버 주소 조회",
        "now": "LAN의 DNS 서버에 www.example.com의 A 레코드를 묻고 203.0.113.80을 받습니다.",
        "why": "이름으로 입력한 웹사이트를 목적지 IPv4 주소로 바꾸어야 합니다.",
        "protocols": [
          "DNS 질의·응답 · 이 예시는 UDP 53",
          "IPv4와 이더넷 · 필요 시 먼저 DNS 대상의 ARP 수행"
        ],
        "layers": [
          "DNS: 응용 계층",
          "UDP: 전송 계층",
          "IPv4: 네트워크 계층 · 이더넷: 데이터링크·물리 관련"
        ],
        "nodes": [
          "computer",
          "lan"
        ],
        "edges": [
          "computer-lan"
        ],
        "areas": [
          "services",
          "address-routing",
          "lan",
          "transport"
        ],
        "termIds": [
          "term-050",
          "term-052",
          "term-019",
          "supp-arp"
        ],
        "addressMode": "dns",
        "path": "내 컴퓨터 ↔ 같은 LAN의 DNS 서버 · 공유기 라우팅을 거치지 않음",
        "cache": "PC의 DNS 캐시에 유효한 답이 있으면 조회를 생략할 수 있습니다. 여기서는 PC에 답이 없어 LAN DNS가 응답하는 부분만 표시합니다."
      },
      {
        "id": "subnet",
        "title": "웹 목적지의 네트워크 판단",
        "now": "웹 서버 203.0.113.80이 내 192.168.10.0/24 네트워크 밖에 있음을 확인합니다.",
        "why": "같은 서브넷이면 대상에게 직접, 다른 서브넷이면 다음 홉 게이트웨이에 프레임을 보내야 합니다.",
        "protocols": [
          "IPv4 주소와 서브넷 마스크 계산",
          "로컬 라우팅표 확인 · 이 단계 자체는 패킷을 보내지 않음"
        ],
        "layers": [
          "네트워크 계층의 경로 선택"
        ],
        "nodes": [
          "computer"
        ],
        "edges": [],
        "areas": [
          "address-routing"
        ],
        "termIds": [
          "term-010",
          "term-011",
          "supp-gateway",
          "supp-router"
        ],
        "addressMode": "decision",
        "path": "내 컴퓨터 내부에서 다음 홉 결정 · 기본 게이트웨이 192.168.10.1",
        "cache": "이 예시에는 더 구체적인 경로가 없어 기본 경로를 사용합니다. 실제로는 라우팅표의 가장 구체적인 일치 경로를 따릅니다."
      },
      {
        "id": "arp",
        "title": "다음 장치의 MAC 확인",
        "now": "필요하면 같은 LAN에 ARP 요청을 보내 게이트웨이 192.168.10.1의 MAC을 확인합니다.",
        "why": "IP 목적지는 원격 웹 서버지만, LAN 프레임은 바로 다음 장치인 공유기에게 전달해야 합니다.",
        "protocols": [
          "ARP 요청: LAN 브로드캐스트",
          "ARP 응답: 공유기 LAN 인터페이스 → PC"
        ],
        "layers": [
          "IPv4와 링크 주소를 연결 · RFC 1122는 링크 계층으로 분류",
          "ARP는 IP 패킷 안의 TCP·UDP가 아니므로 포트·TTL 없음"
        ],
        "nodes": [
          "computer",
          "lan",
          "router"
        ],
        "edges": [
          "computer-lan",
          "lan-router"
        ],
        "areas": [
          "lan",
          "address-routing"
        ],
        "termIds": [
          "supp-arp",
          "supp-mac",
          "term-031",
          "supp-gateway"
        ],
        "addressMode": "arp",
        "path": "내 컴퓨터 ↔ 홈 LAN ↔ 공유기 LAN 인터페이스 · ARP를 인터넷으로 전달하지 않음",
        "cache": "게이트웨이의 유효한 ARP 캐시가 있으면 이 교환을 생략합니다. 앞선 DNS 조회에서는 별도의 DNS 서버 MAC이 필요했습니다."
      },
      {
        "id": "tcp",
        "title": "TCP 연결 수립",
        "now": "PC가 SYN을 보내고 서버가 SYN+ACK으로 응답한 뒤 PC가 ACK을 보내 TCP 연결을 준비합니다.",
        "why": "순서 있는 신뢰성 있는 바이트 흐름을 제공할 연결 상태와 초기 순서 번호를 맞춥니다.",
        "protocols": [
          "TCP: SYN → SYN+ACK → ACK",
          "IPv4 라우팅과 링크별 이더넷 전달"
        ],
        "layers": [
          "TCP: 전송 계층",
          "IPv4: 네트워크 계층 · 이더넷 프레임: 데이터링크 계층"
        ],
        "nodes": [
          "computer",
          "lan",
          "router",
          "internet",
          "server"
        ],
        "edges": [
          "computer-lan",
          "lan-router",
          "router-internet",
          "internet-server"
        ],
        "areas": [
          "transport",
          "address-routing",
          "lan"
        ],
        "termIds": [
          "term-018",
          "term-022",
          "term-007",
          "term-030"
        ],
        "addressMode": "web",
        "path": "내 컴퓨터 ↔ 공유기 ↔ 중간·서버망 라우터 ↔ 웹 서버",
        "cache": "아래는 SYN의 송신 방향과 SYN+ACK의 응답 방향을 비교합니다. 새 TCP 연결을 만드는 예시이며 기존 연결 재사용은 생략합니다."
      },
      {
        "id": "tls",
        "title": "TLS 협상",
        "now": "TCP 위에서 TLS 1.3의 전체 협상을 진행하고, 브라우저가 서버 인증서를 검증하며 보호에 쓸 키를 합의합니다.",
        "why": "웹 요청·응답의 기밀성·무결성과 서버 인증을 제공하기 위해서입니다.",
        "protocols": [
          "TLS 1.3: ClientHello, 서버의 협상·인증 정보, Finished 등",
          "이미 연결된 TCP와 동일한 IP·포트 조합 사용"
        ],
        "layers": [
          "응용 데이터 보호 기능 · OSI 한 계층으로 고정하지 않음",
          "실제 운반: TCP → IPv4 → 링크 프레임"
        ],
        "nodes": [
          "computer",
          "lan",
          "router",
          "internet",
          "server"
        ],
        "edges": [
          "computer-lan",
          "lan-router",
          "router-internet",
          "internet-server"
        ],
        "areas": [
          "security",
          "transport",
          "services"
        ],
        "termIds": [
          "supp-tls",
          "term-035",
          "term-056",
          "term-022"
        ],
        "addressMode": "web",
        "path": "같은 TCP 연결 위에서 양 끝이 보안 정보를 교환 · 라우터마다 TLS를 새로 협상하지 않음",
        "cache": "이 도식은 전체 TLS 협상입니다. 세션 재개와 0-RTT는 다루지 않으며, SYN과 TLS 협상은 서로 다른 절차입니다."
      },
      {
        "id": "http",
        "title": "HTTP 요청과 서버 응답",
        "now": "브라우저의 HTTP 요청을 TLS로 보호해 보내고, 서버가 처리한 HTTP 응답을 같은 연결로 받습니다.",
        "why": "연결과 보안 준비가 끝난 통로에서 실제 웹 자원을 주고받기 위해서입니다.",
        "protocols": [
          "HTTP/1.1: 예시 GET / → 200 OK",
          "HTTP 내용은 TLS로 보호되어 TCP 데이터로 전달"
        ],
        "layers": [
          "HTTP: 응용 계층 · TLS로 보호",
          "TCP: 전송 · IPv4: 네트워크 · 이더넷: 데이터링크·물리 관련"
        ],
        "nodes": [
          "computer",
          "lan",
          "router",
          "internet",
          "server"
        ],
        "edges": [
          "computer-lan",
          "lan-router",
          "router-internet",
          "internet-server"
        ],
        "areas": [
          "services",
          "security",
          "transport",
          "server-management"
        ],
        "termIds": [
          "term-056",
          "supp-tls",
          "term-054",
          "term-055",
          "term-025"
        ],
        "addressMode": "web",
        "path": "요청은 PC → 서버, 응답은 서버 → PC · 기존 TCP 연결과 NAT/PAT 매핑 사용",
        "cache": "주소·포트는 TLS 협상 때와 같습니다. GET과 상태 코드는 복호화 후의 논리 메시지이며 실제 링크에서 HTTP 평문을 읽는 그림이 아닙니다."
      }
    ],
    "sourceIds": [
      "documentation-ip",
      "private-ip",
      "arp-wire",
      "router-forward",
      "nat-pat",
      "dns-cache",
      "tcp",
      "tls"
    ]
  },
  "visualizations": {
    "encapsulation": {
      "id": "viz-encapsulation",
      "area": "structure",
      "title": "캡슐화·역캡슐화 따라가기",
      "termIds": [
        "term-025",
        "term-024",
        "supp-ip"
      ],
      "sourceIds": [
        "rfc1122"
      ],
      "steps": [
        [
          "send",
          0,
          "응용 데이터 준비",
          "HTTP 데이터를 TLS로 보호합니다. 아래 단계의 TCP는 이 보호된 응용 데이터를 운반합니다."
        ],
        [
          "send",
          1,
          "TCP 세그먼트로 구성",
          "TCP 헤더에 포트와 순서 정보 등을 넣습니다. 응용 메시지와 세그먼트가 항상 하나씩 대응하지는 않습니다."
        ],
        [
          "send",
          2,
          "IP 패킷에 담기",
          "목적지 IP와 TTL 등의 IPv4 정보를 붙입니다. 원격 서버가 IP 목적지입니다."
        ],
        [
          "send",
          3,
          "이더넷 프레임에 담기",
          "홈 LAN에서 목적지 MAC은 서버가 아니라 다음 홉 공유기의 MAC입니다. 이더넷 헤더와 트레일러가 붙습니다."
        ],
        [
          "send",
          4,
          "신호로 변환",
          "프레임의 비트를 링크의 신호로 보냅니다. 위의 내려가는 단계는 PC 내부 처리입니다."
        ],
        [
          "travel",
          null,
          "장치 사이를 이동",
          "스위치는 LAN 프레임을 전달합니다. 라우터는 링크 프레임을 벗겨 IP를 처리하고 다음 링크의 새 프레임에 담습니다. TTL이 감소하고 공유기 NAT/PAT는 별도로 주소·포트를 변환합니다."
        ],
        [
          "receive",
          4,
          "서버가 신호 수신",
          "서버의 인터페이스가 링크 신호에서 비트를 읽습니다. 지금부터 올라가는 단계는 수신 서버 내부 처리입니다."
        ],
        [
          "receive",
          3,
          "이더넷 프레임 해석",
          "서버 LAN의 프레임을 확인하고 IPv4 패킷을 꺼냅니다. 처음 PC가 보낸 LAN 프레임과 같은 프레임이 아닙니다."
        ],
        [
          "receive",
          2,
          "IP 패킷 해석",
          "목적지 IP 등의 정보를 확인하고 안의 TCP 세그먼트를 넘깁니다."
        ],
        [
          "receive",
          1,
          "TCP 데이터 정리",
          "순서·중복·누락을 처리해 응용에 순서 있는 바이트 흐름을 제공합니다."
        ],
        [
          "receive",
          0,
          "응용 데이터 사용",
          "TLS가 보호된 데이터를 검증·복호화하고 웹 서버가 HTTP 요청을 처리합니다."
        ]
      ]
    },
    "handshake": {
      "id": "viz-handshake",
      "area": "transport",
      "title": "TCP 연결: 누가 무엇을 보낼까?",
      "termIds": [
        "term-022",
        "term-018"
      ],
      "sourceIds": [
        "tcp"
      ],
      "steps": [
        {
          "flag": "SYN",
          "from": "pc",
          "to": "server",
          "seq": 1000,
          "ack": null,
          "text": "PC가 연결을 요청하며 자신의 초기 순서 번호 1000을 알립니다."
        },
        {
          "flag": "SYN+ACK",
          "from": "server",
          "to": "pc",
          "seq": 5000,
          "ack": 1001,
          "text": "서버는 PC의 SYN을 확인하고, 자신의 초기 순서 번호 5000을 알립니다."
        },
        {
          "flag": "ACK",
          "from": "pc",
          "to": "server",
          "seq": 1001,
          "ack": 5001,
          "text": "PC가 서버의 SYN을 확인합니다. 서버가 이 ACK를 받으면 일반적인 3단계 연결 설정이 마무리됩니다."
        }
      ]
    },
    "subnet": {
      "id": "viz-subnet",
      "area": "address-routing",
      "title": "같은 서브넷과 다른 서브넷의 전달",
      "termIds": [
        "term-010",
        "supp-arp",
        "supp-router",
        "term-030",
        "term-006"
      ],
      "sourceIds": [
        "rfc1122",
        "router-forward",
        "nat-pat"
      ]
    },
    "reliability": {
      "id": "viz-reliability",
      "area": "transport",
      "title": "누락되었을 때: TCP와 UDP",
      "termIds": [
        "term-018",
        "term-019",
        "term-036"
      ],
      "sourceIds": [
        "tcp",
        "udp-wire"
      ],
      "steps": [
        {
          "title": "A·B·C를 보냅니다",
          "tcp": [
            "A · 전송",
            "B · 전송",
            "C · 전송"
          ],
          "udp": [
            "A · 전송",
            "B · 전송",
            "C · 전송"
          ],
          "tcpNote": "A·B·C는 설명을 위한 TCP 바이트 구간입니다. TCP가 응용 메시지 경계를 보존한다는 뜻은 아닙니다.",
          "udpNote": "A·B·C는 각각 독립적인 UDP 데이터그램입니다."
        },
        {
          "title": "경로에서 B가 유실됩니다",
          "tcp": [
            "A · 수신",
            "B · 누락",
            "C · 수신·보관"
          ],
          "udp": [
            "A · 수신",
            "B · 누락",
            "C · 수신"
          ],
          "tcpNote": "수신 측은 순서 정보로 빈 구간을 알 수 있습니다. 뒤에 온 C를 보관하는 상황을 그렸습니다.",
          "udpNote": "UDP 자체는 B가 빠졌다는 확인·재전송 절차를 제공하지 않습니다."
        },
        {
          "title": "누락을 처리하는 주체가 다릅니다",
          "tcp": [
            "A · 확인",
            "B · 재전송",
            "C · 보관"
          ],
          "udp": [
            "A · 전달",
            "B · 자동 복구 없음",
            "C · 전달"
          ],
          "tcpNote": "TCP는 확인 정보나 시간 초과 등으로 손실을 감지해 필요한 데이터를 다시 보냅니다. C의 수신만으로 항상 즉시 재전송하는 것은 아닙니다.",
          "udpNote": "필요하면 응용 프로토콜이 번호, 확인, 타이머 등을 별도로 설계해 누락을 처리할 수 있습니다."
        },
        {
          "title": "응용이 받는 결과를 비교합니다",
          "tcp": [
            "A · 순서대로 전달",
            "B · 복구 후 전달",
            "C · 순서대로 전달"
          ],
          "udp": [
            "A · 도착",
            "B · 여전히 누락",
            "C · 도착"
          ],
          "tcpNote": "이 예시에서는 재전송이 성공해 순서 있는 바이트 흐름을 전달합니다. 영구 장애에서도 성공을 보장하는 것은 아닙니다.",
          "udpNote": "추가 복구 기능이 없는 이 예시는 A와 C만 도착합니다. UDP 자체에는 전달·순서 보장이 없습니다."
        }
      ]
    }
  }
};
