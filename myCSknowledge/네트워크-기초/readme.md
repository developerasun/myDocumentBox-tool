# Content editor : @developerasun
# 비기너를 위한 네트워킹 컨셉
아래 강좌를 수강 후 중요 내용을 요약 및 정리함. 영문 강의이며 총 길이는 1시간 6분으로 길지 않은 편. 

[유데미 - 네트워크 기초](https://www.udemy.com/course/networking-concepts-for-beginners/learn/lecture/6060530?start=15#overview)

핵심 목차는 아래와 같음. 

<li>Networking fundamentals</li>
<li>LAN/WAN protocols</li>
<li>Packets, IP, TCP, DNS</li>
<li>Routers</li>
<li>Physical security</li>

# 네트워크 타입 : LAN과 WAN
<li>LAN(Local Area Network) - 통신과 자원(프린터, 저장 공간 등)을 공유하는 여러 개의 컴퓨터와 주변 기기가 서버에 연결된 것이다.</li>
<li>WAN(Wide Area Network) - 여러 개의 LAN이 모여 더 넓은 지역을 커버함.</li> 

## LAN 프로토콜
LAN에 참여하는 네트워크 기기들의 통신 방법을 정해놓은 규약. 컴퓨터 네트워킹 프로토콜은 대개 패킷 스위칭 기법을 사용함. 

<span><b>LAN 프로토콜의 종류</b></span><br/>
<li>Ethernet - 가장 광범위하게 사용되는 LAN 프로토콜. 네트워크 기기들은 반드시 물리적 케이블을 통해 연결되어 무선 LAN 기술보다 강한 보안 수준을 자랑함. Star, Bu, Tree와 같은 토폴로지를 사용</li>

<details>
    <summary>Ethernet 종류(펼쳐보기)</summary>
    <img src="./ethernet.jpg" width=1000px height=600px/>
    <li>Fast Ethernet - 구리 재질 Ethernet 케이블(초당 100 메가 비트 데이터 전송 속도)</li>
    <li>Gig Ethernet - 광섬유 재질 Ethernet 케이블 (초당 10억 비트 데이터 전송 속도. 엔터프라이즈용 네트워크에 주로 사용됨)</li>
</details>

<li>WiFi - WLAN(Wireless LAN). 데이터 캡슐화를 위해 전자기파 범주의 주파수를 사용함.  </li>
<li>ATM LANE - Asynchronous Transfer Mode(비동기 전송 모드). 다른 LAN 프로토콜과 달리 데이터를 고정된 사이즈의 패킷으로 전송함(초당 155 메가 비트 이상의 데이터 전송 속도) </li>

## WAN 프로토콜
LAN보다 훨씬 큰 크기의 네트워크에서 기기들의 통신 방법을 정해놓은 규약. 광역 통신망 WAN은 서로 다른 지역의 근거리 통신망 유저들이 통신하도록 도와주는 역할을 한다. 통신망의 영역 범위는 아래와 같다.

<span><b>LAN과 WAN의 상관 관계</b></span><br/>
<img src="./LAN-WAN.jpg" width=800px height=600px/>


<details>
    <summary>영역별 네트워크 종류(펼쳐보기)</summary>
    PAN(방 단위) => LAN(건물 단위) => CAN(캠퍼스 단위) => MAN(도시 단위) => WAN(광역 단위)
</details>


<span><b>WAN 프로토콜의 종류</b></span>
<li>X.25</li>
<li>Frame Relay</li>
<li>ISDN</li>
<li>DSL</li>

WAN 프로토콜 종류에 대해서는 다루는 내용의 범위가 필요 이상을 넘었다고 판단하여 여기에서는 생략한다.

## 네트워크 기기
네트워크 기기들은 네트워크 상에서 데이터를 받거나 만들어내는 역할을 한다. 

<span><b>네트워크 기기 종류</b></span>
<li>HUB - Star 토폴로지를 사용하는 네트워크상에서 중앙 연결점이 되는 기기(통상 Concentrator라고 명칭함). 여러 개의 독립적인 포트를 가지고 있는 하드웨어. One to many connections. 기기 A가 기기 C에게 패킷1을 전달하고 싶을 경우 패킷 1은 허브를 통해 모든 기기들에게 뿌려짐.</li>

<details>
    <summary>패킷이란?(펼쳐보기)</summary>
    패킷이란 네트워크 상에서 한 번에 전송할 데이터의 크기를 나타내는 말이다. 네트워크 종류에 따라 패킷의 크기가 달라진다. 패킷은 전송 시작 전 번호가 부여되고 나눠지며(A데이터 => 1,2,3,4, ...) 전송 완료 이후 다시 번호대로 정렬되고 복구된다(1,2,3,4 ... => A데이터). 데이터 분할 전송(패킷 단위)을 통해 전송 상의 이점을 챙기기 위해 사용됨(여러 컴퓨터에게 동시 전송, 대용량 데이터 분할 전송 등).  
</details>


<span><b>HUB와 포트</b></span><br/>
<img src="./HUB.jpg" width=800px height=600px/>

<li>Switches - 네트워크 부하를 낮추고 속도를 높이기 위해 특정 레이어를 추가해서 사용하는 HUB의 한 종류. One to one conneciton.</li>
<li>Routers - 패킷 데이터를 전송하는 역할. 패킷에는 발신자, 데이터 유형, IP 주소 등 여러 식별 정보가 포함되어 있다. 라우터는 이 레이어를 읽어 우선 순위를 설정하고, 우선 순위에 맞추어 패킷 전송에 사용할 최적 라우트를 선택한다. </li>

<details>
    <summary>라우터 작동 원리(펼쳐보기)</summary>
    <img src="./라우터.jpg" width=600px height=400px/>
</details>

<li>NIC - Network Interface Card. 컴퓨터 내에 네트워크 통신을 위해 설치된 하드웨어 카드. 네트워크 케이블과 연결할 포트를 하나 이상 제공하고, 컴퓨터 역시 네트워크 어댑터를 컨트롤 하기 위한 드라이버를 제공한다. </li>

# 네트워크 토폴로지
토폴로(망 구성 방식)란 컴퓨터 네트워크를 연결해놓은 방식을 의미한다. LAN의 경우 물리적/논리적 토폴로지 둘 다 보여줄 수 있다. 

<li>물리적 토폴로지 : 링크와 노드들의 상관 관계</li>
<li>논리적 토폴로지 : 노드끼리의 데이터 흐름</li>

<span><b>토폴로지</b></span><br/>
<img src="./토폴로지.png" width=500px height=300px/>

## 토폴로지 종류
<li>Bus - 모든 컴퓨터와 주변 기기가 하나의 케이블로 연결되고 2개의 엔드포인트를 가짐. 하나의 메인 케이블로 연결되어 있기 때문에 지점 A의 데이터를 지점 D에게 보내기 위해서는 B,C를 거쳐야 한다는 단점이 있음.</li>
<li>Star - 중앙 집권적. 하나의 허브 노드(컴퓨터 또는 서버)가 존재하고 모든 컴퓨터와 주변 기기가 허브로 연결되는 구조. 버스 토폴로지와 다르게 데이터 전송 시 모든 워크스테이션을 거치지 않아도 된다는 장점이 존재.</li>
<li>Ring - 닫힌 루프 구조. 각각의 컴퓨터는 정확히 2개의 이웃 기기와 연결됨.</li>
<li>Mesh - 모든 네트워크 노드가 서로에게 연결되어 있음. Full mesh와 partial mesh 구조로 나뉠 수 있으며, full mesh에서 필요 없는 노드 연결을 끊을 경우 partial mesh 구조로 변함. </li>
<li>Tree - 하나의 루트 노드가 존재하고, 하위 노드들이 계층 구조를 이룸. 적어도 3개의 계층이 필요함. Star 토폴로지 + Bus 토폴로지</li>
<li>Hybrid - 서로 다른 토폴로지가 합쳐서 새로운 토폴로지를 구성함. 새로운 컴포넌트를 추가해 네트워크의 크기를 키우는 데 유리하며, fault detection/trouble shooting이 용이하다는 장점이 있음.</li>
