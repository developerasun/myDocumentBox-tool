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

<span><b>LAN 프로토콜의 종류</b></span>
<li>Ethernet - 가장 광범위하게 사용되는 LAN 프로토콜. 네트워크 기기들은 반드시 물리적 케이블을 통해 연결되어 무선 LAN 기술보다 강한 보안 수준을 자랑함. Star, Bu, Tree와 같은 토폴로지를 사용</li>

<details>
    <summary>Ethernet 이미지</summary>
    <img src="./ethernet.jpg" width=1000px height=600px/>
    <li>Fast Ethernet - 구리 재질 Ethernet 케이블(초당 100 메가 비트 데이터 전송 속도)</li>
    <li>Gig Ethernet - 광섬유 재질 Ethernet 케이블 (초당 10억 비트 데이터 전송 속도. 엔터프라이즈용 네트워크에 주로 사용됨)</li>
</details>

<li>WiFi - WLAN(Wireless LAN). 데이터 캡슐화를 위해 전자기파 범주의 주파수를 사용함.  </li>
<li>ATM LANE - Asynchronous Transfer Mode(비동기 전송 모드). 다른 LAN 프로토콜과 달리 데이터를 고정된 사이즈의 패킷으로 전송함(초당 155 메가 비트 이상의 데이터 전송 속도) </li>

# 네트워크 토폴로지
토폴로(망 구성 방식)란 컴퓨터 네트워크를 연결해놓은 방식을 의미한다. LAN의 경우 물리적/논리적 토폴로지 둘 다 보여줄 수 있다. 

<li>물리적 토폴로지 : 링크와 노드들의 상관 관계</li>
<li>논리적 토폴로지 : 노드끼리의 데이터 흐름</li>

<span><b>토폴로지</b></span>
<img src="./토폴로지.png" width=500px height=300px/>

## 토폴로지 종류
<li>Bus - 모든 컴퓨터와 주변 기기가 하나의 케이블로 연결되고 2개의 엔드포인트를 가짐. 하나의 메인 케이블로 연결되어 있기 때문에 지점 A의 데이터를 지점 D에게 보내기 위해서는 B,C를 거쳐야 한다는 단점이 있음.</li>
<li>Star - 중앙 집권적. 하나의 허브 노드(컴퓨터 또는 서버)가 존재하고 모든 컴퓨터와 주변 기기가 허브로 연결되는 구조. 버스 토폴로지와 다르게 데이터 전송 시 모든 워크스테이션을 거치지 않아도 된다는 장점이 존재.</li>
<li>Ring - 닫힌 루프 구조. 각각의 컴퓨터는 정확히 2개의 이웃 기기와 연결됨.</li>
<li>Mesh - 모든 네트워크 노드가 서로에게 연결되어 있음. Full mesh와 partial mesh 구조로 나뉠 수 있으며, full mesh에서 필요 없는 노드 연결을 끊을 경우 partial mesh 구조로 변함. </li>
<li>Tree - 하나의 루트 노드가 존재하고, 하위 노드들이 계층 구조를 이룸. 적어도 3개의 계층이 필요함. Star 토폴로지 + Bus 토폴로지</li>
<li>Hybrid - 서로 다른 토폴로지가 합쳐서 새로운 토폴로지를 구성함. 새로운 컴포넌트를 추가해 네트워크의 크기를 키우는 데 유리하며, fault detection/trouble shooting이 용이하다는 장점이 있음.</li>
