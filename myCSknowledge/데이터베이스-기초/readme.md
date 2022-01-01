# 데이터베이스 기초
아래 강좌를 듣고 중요 내용을 요약함. 

- [유튜브 - 데이터베이스 (영문)](https://www.youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ) 

## Tablet of Contents
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()

## 데이터베이스의 이해
### 용어
- data : facts that are not processed yet => Jake, 28
- information : the data is processed => Jake is 28 this year.
- database : a collection of related data
- meta-data : data that describes the database. DB definition. Stored in DB catalogue. 
- database management system : a series of programs that manage the database

### 특성
- database reflects a real world to some extent.
- data in the database is locally related.
- database is designed and built for a specific purpose.

<img src="./db-table-example.png" width=800 height=450 alt="database tables" />

## 파일 시스템의 이해
DBMS를 활용하기 이전에는 데이터를 저장하기 위해서 파일 시스템을 주로 활용했다. 서로 다른 목적을 가지는 일련의 데이터들은 서로 다른 파일에 저장되어야했다.

<img src="./file-system-example.png" width=800 height=450 alt="database tables" />

<p>위 그림에서 알 수 있듯, 서로 다른 파일에서도 Roll_No, Name과 같은 동일한 데이터를 찾을 수 있다. 이는 저장 공간의 비효율적 활용으로 이어진다. </p>

<p>DBMS의 경우 하나의 저장소에 관련된 모든 데이터들이 저장되고, 유저는 각자의 필요에 따라 필요한 데이터를 접근하기만 하면 되어 이점이 있다. </p>

## Understanding DBMS characteristics

- DBMS is self-explanatory : DMBS catalog lets you know what's inside and how it is constructured.

<img src="./db-catalogue.png" width=846 height=487 alt="database catalogue" />

- Program and data is independent each other in DBMS, meaning that unlike file system even when data is changed or added, the program will not be affected by that. This characteristic of DBMS is called <bold>data abstraction</bold>. DBMS provdies a conceptual representation of data. 

- DBMS allows many users to access a database at the same time. In order to achieve this, DBMS must include concurrency model and address OLTP(Online Transaction Processing). 

<details>
    <summary>온라인 트랜잭션 처리란?(펼쳐보기)</summary>
여러 PC에서 동시에 발생되는 트랜잭션을 DBMS가 처리하고, 트랙잭션의 결과를 해당 PC들에게 실시간으로 정확하게 전송하는 과정. 각각의 트랜잭션은 아래와 같은 성질을 가짐. 

- isolation : 트랜잭션이 한 명의 유저에게 할당되었다면, 다른 유저는 해당 트랜잭션을 수행할 수 없다. 
- atomicity : 트랜잭션은 100% 완벽하게 처리되었거나, 0% 불완전한 것으로 본다. 
</details>

## DBMS 활용 및 주의점
### 활용
- 데이터베이스 관리자(DBA)는 데이터베이스 유저에 대한 표준을 정의함으로써 조직 내 소통 및 운영을 용이하게 한다. 

- controlling unauthorized access : DBA(database administrator)에 의해 서로 다른 유저는 서로 다른 타입의 접근 권한이 주어진다. 

- DBMS를 활용함으로써 어플리케이션 개발 속도를 높이고 기존 프로그램에 저장된 데이터에 영향을 주지 않고도 데이터베이스 구조를 변경하는 것이 가능하다.

- providing persistent storage : 기존의 파일 시스템은 프로그램 종료시 프로그램에 사용되었던 변수들이 사라진다. DBMS는 프로그램 변수들이 오브젝트의 형태로 계속 보관되며, 프로그래밍 언어들의 자료 구조를 인식한다. 

- availability of up-to-date info : 한 명의 유저가 업데이트될 때 모든 유저가 그 업데이트를 확인할 수 있다. 

### 주의점
- providing storage structures for efficient query processing : 데이터베이스는 디스크에 저장된다. 따라서 DBMS는 빠른 디스크 서칭에 필요한 데이터 구조(인덱스)를 제공해야만 한다.

- providing backup/recovery : 모종의 이유로 하드웨어/소프트웨어가 crash 될 경우 DBMS는 백업 시스템을 제공해야 한다. 이때, crash가 일어난 지점 이전까지 복구되어야 하거나, 일어난 지점부터 실행 재개가 가능해야 한다. 

- enforcing integrity constraints : DBMS는 데이터 타입 및 유일성을 지정해야 한다. 

- DBMS는 초기 비용 투자가 큰 편이고 지속적으로 간접 비용이 발생한다. 따라서 어플리케이션이 비교적 작고 간단하며, 다수의 유저가 사용하지 않을 경우 DBMS를 사용하지 않고 파일 시스템을 사용해도 무방하다. 

## 데이터베이스 모델
1. hierarchical database model
<img src="./top-down-db-model.png" width=660 height=450 alt="hierarchical database model" />

2. network database model 
<img src="./network-db-model.png" width=560 height=450 alt="hierarchical database model" />

3. relational database model : organizes data into tables and high-level query language is introduced. 

4. object-oriented database model : mainly used in specialized applications such as engineering design and manufacturing system

