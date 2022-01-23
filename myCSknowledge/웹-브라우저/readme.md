# 웹 브라우저에 대한 이해
웹 브라우저에 관련된 강좌와 기사를 학습한 후 주요 내용을 요약함. 

## 멀티 프로세스 브라우저의 아키텍처
**멀티 프로세스**를 이해하기 위해서는 **하드웨어와 소프트웨어의 연관성**에 대한 지식이 선행 요구된다. 

- 프로세스, 쓰레드 : 소프트웨어 영역
- 코어, 프로세서 : 하드웨어 영역

멀티 프로세스(소프트웨어)는 운영 체제에 의해 **서로 다른 메모리 영역에 할당(하드웨어)**되고, 이로 인해 IPC(Inter Process Communication)를 통한 소통이 요구된다. 복수 개의 프로세스를 생성할 경우 1) **메모리 점유율이 높아진다는 단점**과 2) 각각의 프로세스는 서로 다른 메모리 영역을 사용하고 있으므로 **보안성이 높아진다는 장점**이 존재한다. 

<img src="./multi-process-memory-level.png" width=579 height=359 alt="멀티 쓰레드와 메모리 할당">

아래와 같은 멀티 프로세스 아키텍처를 선택할 경우 장단점을 이해하고 사용하는 것이 중요하다. 

<img src="./multi-process-architecture.png" width=729 height=470 alt="멀티 프로세스 아키텍처">

코어(하드웨어)와 쓰레드(소프트웨어)는 일대일 대응한다. 즉 하나의 멀티 코어 프로세서가 4개의 코어를 가지고 있다면 4개의 싱글 쓰레드를 처리할 수 있다.

<img src="./core-thread-one-on-one.png" width=700 height=370 alt="멀티 코어 프로세서와 쓰레드">

<details>
<summary>멀티 쓰레드 프로세스와 단일 쓰레드 프로세스란? (펼쳐보기)</summary>

- 멀티 쓰레드 프로세스의 경우 하나의 메모리에서 여러 개의 쓰레드가 자원을 공유하므로 데이터를 빠르게 처리할 수 있다는 장점이 있다. 

- 단일 쓰레드 프로세스의 경우 프로세스 동기화 문제를 고려하지 않아도 되며, context switch로 인한 CPU 전환 비용이 들지 않는다는 장점이 있다. 
</details>

## 크롬 브라우저 아키텍처의 이해
브라우저 아키텍처는 명확한 표준이 존재하지 않는다. 각 브라우저마다 아키텍처의 형태가 상이하게 나타날 수 있다.  

> The important thing to note here is that these different architectures are implementation details. There is **no standard specification on how one might build a web browser**. One browser’s approach may be completely different from another.

<img src="./browser-architectures.png" width=865 height=259 alt="브라우저 아키텍처">

> Below is Chrome’s multi-process architecture. Multiple layers are shown under Renderer Process to represent Chrome running multiple Renderer Processes for each tab.

<img src="./chrome-browser-architecture.png" width=865 height=499 alt="크롬 브라우저 아키텍처">

크롬 브라우저 아키텍처의 특장점은 높은 보안성에 있다. 각각의 브라우저 탭은 **각각의 Renderer Process에 의해 관리**되고, 이는 하나의 탭이 모종의 이유로 종료되어야 하더라도 나머지 탭들은 독립적으로 유지될 수 있다는 장점이 존재한다. 또한, 이는 탭에만 적용되는 것이 아니라 웹페이지 내의 iframe 태그에도 적용된다. 

> Even running a simple **Ctrl+F** to find a word in a page **means searching across different renderer processes**. You can see the reason why browser engineers talk about the release of Site Isolation as a major milestone!

> The **Same Origin Policy** is the core security model of the web; it makes sure one site **cannot access data from other sites without consent**. Bypassing this policy is a primary goal of security attacks. **Process isolation** is the most effective way to separate sites. 

단, Renderer process를 무한정으로 늘릴 수 없으므로(메모리가 제한되어 있기 때문에) 생성할 수 있는 프로세스의 수가 제한되어 있다. 메모리가 한계치에 다다르면 여러 개의 프로세스를 통합하여 하나의 메모리에 재할당하는 작업을 시행하여 기존 아키텍처의 단점을 보완했다. 

## 레퍼런스
- [Inside look at modern web browser](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
- [프로세스와 쓰레드 : CS 기본기](https://youtu.be/T2WqQcqssoE)
- [멀티 프로세스 브라우저의 아키텍처](https://youtu.be/Nzjnbr7krQM)
- [크롬 브라우저 아키텍처의 이해](https://youtu.be/L5K5B7W50Iw)
- [브라우저와 URL, 그리고 유저](https://youtu.be/ipwfEUslfQA)