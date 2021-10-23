# Content editor : @developerasun

# 중앙처리장치(CPU, Central Processing Unit)
## CPU 코어
[참고자료](https://militstory.com/1)
<p>
CPU 코어 - 중앙처리장치 중에서 핵심이 되는 부품으로 기본 연산과 계산 작업을 수행함. 코어의 성능(처리 속도)는 클럭(clock) 단위로 표현되며 클럭은 Hz 단위로 측정. 단일 코어 성능 향상을 높이는 것보다 다수의 코어를 조합해 사용하는 것이 성능적으로 유리함. 일반적으로 CPU를 구매하는 경우 발열 수준을 낮추기 위해 쿨러(수냉 또는 공냉 방식)와 함께 사용한다.
<p>
<strong>PC의 성능 == 코어의 성능(clock)</strong>

### CPU 성능에 영향을 미치는 요소
<ul class="core-performance">
    <li>코어 개수</li>
    <li>*쓰레드* (코어의 작업 단위, 1 코어 1 쓰레드가 원칙)</li>
    <li>캐시 (빠른 데이터 로드를 위해 CPU내에서 데이터를 한시적으로 저장하는 곳)</li>
</ul>

[쓰레드 더 알아보기](https://militstory.com/2)

### CPU 코어 개수
<ol class="core-list">
    <li>싱글 코어</li>
    <li>듀얼 코어</li>
    <li>트리플 코어</li>
    <li>쿼드 코어 ==== 싱글 ~ 쿼드 : 일반인 PC 수준으로 부족함이 없는 정도</li>
    <li>헥사 코어</li>
    <li>옥타 코어</li>
    <li>데카 코어</li>
    <li>도데카 코어</li>
    <li>헥사 데시멀 코어</li>
</ol>

# 메인보드 (Main Board, Mother Board)
컴퓨터 부품들을 연결/조립하는 기판. 컴퓨터 성능과 직접적인 연관성은 없으나 CPU, 그래픽 카드, RAM 등 각 부품의 호환성과 연관된다. 

<li>CPU 소켓 : CPU와 메인보드의 접점. "CPU 소켓 규격 == 메인보드 소켓 규격"이 성립해야 CPU를 메인보드에 연결할 수 있다. </li>
<img src="./cpu-소켓.png" alt="소켓 예시 이미지" style="width:300px height:300px"/>


<li> RAM : 8GM * 4개를 메인보드에 연결할 경우 32GM RAM 성능을 수행한다.   

# 주기억장치 (RAM, Random Access Memory)
<p>
앞서 CPU가 처리했던 연산들의 결과를 임시로 저장하고, 향후 다시 그 결과를 다시 불러와야 할 경우가 생겼을 때 재연산 하지 않고 이전 결과값을 빠르게 불러오는 역할. RAM 성능이 좋을 수록 프리징 현상(길어지는 로딩) 없이 많은 프로그램을 한 번에 사용 가능함. 8~16GB 정도면 일반인 사용 범위 내에서 무리가 없고, 발열이 생길 경우를 대비해 방열판을 장착할 수 있다. 
</p>

# 보조기억장치 (HDD & SDD)
HDD는 대용량 저장 장치를 의미한다. 전원이 꺼지더라도 저장된 데이터는 유지되며, RPM(분당 회전수, rotation per minute)이 높을 수록 성능이 좋지만 소음이 클 수 있다. 
SSD는 하드디스크(HDD)를 대체안으로 제시된 보조기억장치로, 반도체를 이용해 데이터를 저장하는 저장 장소이다. HDD보다 빠른 속도로 데이터 읽기/쓰기가 가능하지만 상대적으로 용량이 작고 비싸다는 단점이 있다.  
<ul>
    <li>HDD - Hard Disk Drive : 동영상/이미지 저장용으로 세팅</li>
    <li>SSD - Solid-State Drive : 윈도우 설치용으로 세팅</li>
</ul>

## 데이터 로딩 및 연산 순서
<ol>
    <li>보조 기억 장치(HDD & SDD)</li>
    <li>주 기억장치(RAM)</li>
    <li>중앙 처리 장치(CPU)</li>
</ol>

# 전원 공급 장치 (PSU, Power Supply Unit)
흔히 PC 파워 서플라이라고 불리며 외부에서 전달되는 전압을 컴퓨터에 맞게 조정하고 PC 부품에 전달되는 전류를 일정하게 유지하는 역할을 수행함. 소음이 큰 편. 대개 500 ~ 600W(와트) 수준에서 컴퓨터가 필요한 모든 전력을 공급할 수 있으나, 고사양 게임을 플레이 하기 위해 그래픽 카드를 사용할 경우나 작업용 PC는 파워 용량 계산을 통해 700W 이상의 파워를 사용할 것을 권장함.  

<ul>
    <li>500W : 사무용 PC 수준</li>
    <li>600W : 저사양 그래픽 카드 + 게임</li>
    <li>700W : 고사양 그래픽 카드 + 고사양 게임</li>
    <li>1600W ~ : 서버용, 특수 목적용</li>
</ul>

## 내 노트북의 파워 용량 계산하기
[파워 용량 계산 웹사이트](https://seasonic.com/wattage-calculator)

<span style="text-align:center">계산된 파워 용량 </span>
<img src="./power-supply-wattage.png" alt="소켓 예시 이미지" style="width:300px height:300px"/>

# 그래픽 처리 장치 (GPU, Graphic Processing Unit)
## 그래픽 칩셋 제조사와 대표 상품
<li>AMD - RX : 560 이상 - 가벼운 게임 </li>
<li>NVIDIA - GTX, RTX : 1000번대 미만은 사무용, 1060 & 1070ti - 가벼운 게임, 3070 - 최고사양 게임 </li>

[CPU GPU 그래픽 연산 속도 비교](https://www.youtube.com/watch?v=-P28LKWTzrI)
[그래픽 카드 성능 체크 웹사이트](https://www.videocardbenchmark.net/)


# 컴퓨터 부품 구매 웹사이트(참고용)
[다나와](http://www.danawa.com/)
[컴퓨존](https://www.compuzone.co.kr/)