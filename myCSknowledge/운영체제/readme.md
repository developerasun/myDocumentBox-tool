# Content editor : @developerasun

# 목차
- [운영체제의 이해]()
- [운영체제의 이해]()
- [운영체제의 이해]()
- [운영체제의 이해]()
- [운영체제의 이해]()
- [운영체제의 이해]()
- [운영체제의 이해]()

# 운영 체제의 이해
아래 강좌를 듣고 핵심 내용을 요약함. 대부분의 설명은 한국어이나 편의상 영문으로 기술한 부분이 있음. 

- [Operating System by Neso Academy](https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O)

# 서문
운영체제란 컴퓨터 하드웨어를 관리하는 소프트웨어를 의미한다. 운영체제는 사용자와 컴퓨터 하드웨어의 중간자로서 응용 프로그램의 기반이 된다. 

- 운영 체제의 종류 : Windows, Linux, Ubuntu, Mac OS, Android

<span>System/Application - OS - Hardware</span><br/>
<img src="./application-os-hardware.png" width=700 height=340 />

만약 운영체제가 없다면 Excel과 같은 응용 프로그램을 실행시킬 때, 유저가 직접 하드웨어에게 코드를 작성하고 명령을 내려 저장, 연산 등을 수행해야 한다. 운영체제의 핵심은 <strong>인터페이스로서 사용자를 대신해 하드웨어에게 명령을 내리고, 사용자는 응용 프로그램의 사용에 집중</strong>할 수 있도록 만들어주는 것에 있다. 

- 인터페이스 : 유저 - 운영체제 - 하드웨어
- 자원 관리 및 분배 : CPU 자원, 메모리, 입출력 기기 등

<details>
    <summary>시스템/응용 프로그래밍이란? </summary>

- 시스템 프로그래밍 : hardware related. : OS, Network
- 응용 프로그래밍 : user related. e.g : Excel, Web, Compiler
</details>

# 컴퓨터 시스템 실행의 이해
컴퓨터에 입력되는 명령/프로그램들이 실행되기 위해서는 메인 메모리에 적재(load)되어야 한다. 각각의 명령/프로그램들은 동시에 실행되어((concurrently) 메모리에 접근하고자 하고, 이는 메모리 컨트롤러에 의해 싱크/순서가 맞추어진다.

<span>컴퓨터 시스템 구조</span><br/>
<img src="./computer-structure.png" width=700 height=320 />

각각의 섹션은 버스(bus)로 연결되어 있고, 공유된 메모리(shared memory)에 접근하기 위해 서로 경쟁한다. 

## 알아둬야할 부수 개념
- 1. Bootstrap program : 컴퓨터가 켜졌을 때 가장 먼저 실행되는 프로그램으로써 1) OS를 실행시키고 2) OS 커널을 메모리에 적재시키는 역할을 한다. 
- 2. Interrupt : 하드웨어가 모종의 이유로 연산 중인 CPU의 작업을 중단시키고, 다른 작업을 먼저 처리해줄 것을 요구하는 것. 하드웨어의 경우 시스템 버스(system bus)를 통해 언제든지 intercept를 발생시킬 수 있음. 
- 3. System call(monitor call) : 소프트웨어가 interupt를 발생시킬 경우 system call이라고 부름. 

Interrupt 또는 system call이 발생했을 경우 CPU는 기존의 연산을 멈추고 연산 중인 작업을 특정 장소로 옮겨둔다. 이때, ISR(Interrupt Service Routine)의 시작 주소가 해당 장소에 기록되어진다. 

영문이 문맥 이해가 쉬우므로 해당 프로세스를 아래 영문으로 작성함.
- 0. CPU working on something
- 1. CPU gets interrupted
- 2. CPU moves what it was workin on to a fixed location with ISR starting address 
- 3. ISR gets executed
- 4. Once the ISR done, CPU resumes the work

# 저장 구조 계층(Stroage structure)
Excel과 같은 응용프로그램은 Secondary storage에 저장되어 실행되기를 기다리고, 유저가 실행 시킬 때 메인 메모리에 적재된다. 이는 메인 메모리(RAM)의 용량이 제한되어 있어 한꺼번에 모든 프로그램을 실행시킬 수 없기 때문이다.

<span>저장 구조 계층(상단 최소 => 하단 최대)</span>
<img src="./storage-structure.png" width=700 height=400 />

RAM이 커질 수록 적재할 수 있는 응용 프로그램의 크기가 커지므로 컴퓨터의 실행 속도가 빨라진다.  

직관적인 이해를 위해 영문으로 아래 내용을 작성함. 
1. Application is inactive and stored in secondary storage(got big space to store and data is retained).
2. User executes(double clicks) the application. 
3. Main memory(RAM, got relatively smaller space to store and data is not retained) loads the active application.
4. If the RAM was bigger, it would've loaded faster. Even if the secondary storage is super big, the application loads slower if the RAM is super small.

# 입출력 구조(I/O structure)
컴퓨터의 입출력을 관리하는 기능은 운영 체제의 코드 베이스 중 큰 부분을 차지한다.   

Device controller는 입출력 기기의 한 부분으로서 소켓을 통해 기기와 연결되고 1) Local buffer storage 와 2) Speical purpose registers를 유지함으로써 기기를 관리한다. 

- 입출력 기기 <=> 소켓 <=> device controller <=> device driver(OS)

운영체제는 device driver(인터페이스)를 통해 device controller와 소통한다.

<details>
    <summary>입출력 기기 살펴보기</summary>
    <img src="device-controller.jpg" width=400 height=270 />
</details>

## 입출력 실행 이해하기
1. device driver loads proper registers in device controller. 
2. device controller decides which action needed to perform.
3. device controller moves data to local buffer storage.
4. device controller finished the transfer and invoke an interrupt to the device driver. 
5. device driver returns the control to OS. 

### Direct Memory Access(DMA)
<p>
위와 같은 입출력 실행은 입출력 발생시마다 CPU interrupt를 발생시키므로 대용량의 데이터 전송에는 적합하지 않다. 
</p>

<p>
대용량 입출력 데이터를 관리해야하는 경우 버퍼, 포인터, 카운터를 이용해 기기 <=> 메모리로 데이터를 직접 전송하는 방식을 사용한다. 
</p>

<p>
DMA의 경우 데이터 블록을 기준으로 device driver에게 1번의 interrupt가 발생하며 CPU는 interrupt 없이 수행하던 작업을 계속 수행할 수 있다.
</p>

# 컴퓨터 시스템 구조
## 컴퓨터 시스템의 종류 
1. Single processor system : having one general purpose processor, dealing with only one process froom ready queue at a time.

2. Multiprocessor system(parallel system) : having two or more general purpose processors, addressing multiple processes at the same time. Bus, clock, or memory can be shared. 

<details>
    <summary>Advantages of Multiprocessor system</summary>

    - Higher throughput(measuring performance)
    - Economy of scale
    - Highr reliability => if one of the processors fails, other will function still. 
</details>

Types of multiprocessors is as follows : 1) symmetric multiprocessor 2) asymmetric multiprocessor
<img src="./multiprocessor-types.png" width=700 height=350 />

3. Clustered system : having multiple CPUs for caculation, composed of two or more <strong>individual systems</strong> combined.

# 운영체제 구조
윈도우, 맥, 우분투 등 각각의 운영체제의 내부 구조는 많은 차이점을 가지고 있으나, 공통/핵심적으로 1) 멀티 프로그래밍 2) 멀티 태스킹을 수행한다. 멀티 프로그래밍과 멀티 태스킹은 운영체제의 핵심 역할이라 할 수 있다. 

## 멀티 프로그래밍(Multiprogramming)
<p>
멀티 프로그래밍의 목적은 CPU의 효용성을 증가시켜 여러 가지 프로그램을 동시에 실행하는 것에 있다. 

메인 메모리 RAM은 Job pool에서 수행해야 할 작업 중 일부를 가지고 온다(RAM의 용량 한계로 인해 전체를 가지고 오지 않음).
</p>

- Job : code + data 
- Job pool : a place where a group of jobs are stored, awaiting main memory and CPU allocation. 
- OS fetches the some of the jobs into RAM, addressing multiprogramming. 

<img src="./job-pool-ram.png" width=600 height=300 />

<p>
멀티 프로그래밍이 아닌 경우 CPU는 수행하던 job이 끝날 때까지 대기하고(CPU being idle), job이 끝난 것을 확인한 후에야 다음 job으로 넘어갈 수 있다.
<br> 
멀티 프로그래밍에서는 CPU는 항상 수행해야 할 job을 가지고 있으며, 수행하던 job이 끝날 때까지 대기하지 않고(CPU released) 다음 job을 수행한다(CPU not being idle). 
</p>

<p>
멀티 프로그래밍의 경우 컴퓨터 자원(CPU, RAM, Jobs...)이 효율적으로 관리되게 하나, 유저에게 컴퓨터 시스템에 대한 상호작용을 제공하지는 아니한다. 
</p>

## 멀티 태스킹(multitasking or time sharing)
<p>
멀티 태스킹의 주된 목적은 여러 프로그램을 실행하는 동시에 여러 유저에게 상호작용을 제공하는 것에 있다. CPU는 A=>B=>C=>A=>C=>B 등 프로그램 간의 전환(switch)을 매우 빠르게 제공하여 유저 입장에서는 동시에 모든 프로그램을 제어(상호작용)하는 것처럼 느끼게 된다. 
</p>

<p>
멀티 태스킹은 CPU 스케쥴링과 멀티프로그래밍을 통하여 유저에게 a time-share computer를 제공함으로써 이루어진다.  
</p>

<details>
    <summary>★★★ What is process and instance?</summary>

- A program loaded into memory and executing is called a process. 
- Instance in computer science refers to any running process or specifically object as an instance of a class. 

```Python
class MyClass : 
    def __init__(self, name) : 
        self.name = name

# myClass : an instance of MyClass
myClass = MyClass("Jake's class")
print(myClass.name) # result : "Jake's class"

```

</details>

# 운영체제 서비스 
운영체제는 프로그램 실행에 필요한 환경 구성을 유저에게 제공한다.

1. 유저 인터페이스 : CLI(Commnad Line Interface)와 GUI(Graphical User Interface). CLI는 텍스트 기반으로 운영체제에게 명령을 내리며, GUI는 그래픽 기반으로 유저<=>운영체제 상호작용을 돕는다. 
2. 


# 레퍼런스
- [Difference between Multiprogramming, multitasking, multithreading, and multiprocessing](https://www.geeksforgeeks.org/difference-between-multitasking-multithreading-and-multiprocessing/)

- [Instantiation](https://en.wikipedia.org/wiki/Instantiation)


