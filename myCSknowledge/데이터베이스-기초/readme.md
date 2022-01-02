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

## 데이터베이스 펀더멘털
- 데이터 모델
- 용어 정리

### 데이터 모델
데이터 모델은 데이터베이스의 구조를 묘사하기 위해 사용되며, 데이터 추상화에 도움을 준다. 데이터 추상화란 데이터베이스 사용자 입장에서는 불필요한 세부 내용을 숨기고, 인터페이스만을 제공하는 것을 의미한다. 

<img src="./Data_abstraction_levels.png" width=460 height=300 alt="데이터베이스 추상화 수준" />

데이터 모델은 데이터를 가지고 오거나 업데이트 하는 등의 기본적인 데이터베이스 운영에 필요한 내용을 정의한다. 

#### 데이터 모델의 종류
- High-level / conceptual data model : close to real world user => 1) entities 2) attributes 3) relationships
- Low-level / physical data model : describes how data should be stored in the database

### 용어 정리
- database state(instance/snapshot) : the data in database at a particular moment

## 3단계 스키마 구조
3단계 데이터베이스 구조는 아래와 같이 이루어진다. 

|구분|내용|추상화 수준|
|:--:|:--:|:---------:|
|외부 스키마(External schema)|개개인의 유저가 직접 접근하며(view), 사용자에 관련된 개체만이 포함된다. 전체 데이터베이스의 일부분을 표시함.|최상|
|개념 스키마(Conceptual schema)|모든 응용 시스템/사용자들이 필요하는 전체 데이터를 종합하여 표현함. 외부 스키마는 개념 스키마로부터 생성되며, 개체, 개체간 관, 규칙 명세등도 포함된다.|중간|
|내부 스키마(Internal schema)|개념 스키마에 대한 저장 구조를 실제로 정의함. 자료 구조의 형식, 인덱싱 등을 포함함. 물리적 데이터베이스보다 상위 단계.|최하| 

<img src="./3단계-데이터베이스.png" width=716 height=666 alt="데이터베이스 3단계 구조" />

각각의 스키마들은 데이터 독립성을 지켜야 한다. 데이터 독립성이란 하위 레벨의 스키마가 바뀌더라도 상위 레벨의 스키마를 수정할 필요가 없도록 스키마를 구성하는 것을 의미한다. 

- 논리적 데이터 독립성 : 외부 스키마와 개념 스키마 사이 적용됨. 개념 스키마를 변경하더라도 외부 스키마에 영향이 없어야 함. 
- 물리적 데이터 독립성 : 개념 스키마와 내부 스키마 사이 적용됨. 내부 스키마는 데이터베이스의 퍼포먼스 향상을 위해 변경되어야 할 수 있고, 이때 내부 스키마를 변경하더라도 개념 스키마에 영향이 없어야 함. 

## DBMS 언어와 access path
### DBMS 언어
DBMS 언어는 위의 3단계 데이터베이스 구조에 맞게 아래와 같이 나뉘어진다. 

- 외부 스키마 : View Definition Language(VDL)
- 개념 스키마 : Data Definition Language(DDL)
- 내부 스키마 : Stroage Definition Language(SDL)

추가적으로, 데이터의 CRUD를 결정하는 Data Manipulation Language(DML)이 있다. VDL과 DDL, 그리고 DML을 합쳐 데이터베이스 SQL 언어라고 부른다. 

<details>
    <summary>access path란 무엇인가?(펼쳐보기)</summary>
Access path는 데이터베이스 내 데이터를 불러오는 path를 결정한다. 예를 들어, 

- 데이터 파일을 순서대로 스캔함(a sequential scan of a data file)
- 생성한 쿼리 조건에 맞는 인덱스 순서대로 스캔함(an index scan with a matching selection condition)
</details>

## 데이터베이스 모듈 구성 
1. 데이터베이스 디자인이 끝나면 데이터베이스 관리자(DBA)와 데이터베이스 디자이너에 의해 각 단계에 맞는 스키마가 구성된다 => DDL 컴파일러는 정의된 스키마를 처리하고 DBMS 카탈로그에 저장한다. 
2. 데이터베이스에 저장된 데이터를 불러오기 위해 쿼리를 생성한다(access path : indexing) => pre-compiler는 DML 커맨드를 응용 프로그램에서 추출한다 => 쿼리 컴파일러는 해당 쿼리를 컴파일한다.   
3. 데이터베이스 사용자가 데이터베이스에 접근한다 => runtime database processor는 해당 접근을 관리한다. 

<img src="./db-components.png" width=630 height=630 alt="데이터베이스 모듈" />

## 데이터베이스 시스템 유틸리티
- Loading : loads existing data files into database
- Backup : Incremental backups are often used

<details>
    <summary>Incremental backup이란 무엇인가?(펼쳐보기)</summary>
Incremental backup이란 이전 백업이 이루어진 이후, 새롭게 발생한 업데이트를 포함한 콘텐츠에 대해서만 백업을 진행하는 것. (모든 콘텐츠를 매번 백업하는 것은 매우 큰 저장 공간을 요구하므로) 
</details>

## DBMS 아키텍처 
1. 초기의 DBMS 아키텍처는 중앙집중형으로 이루어졌다. 원격 메인 컴퓨터가 모든 시스템 처리를 담당하고, 데이터베이스 사용자는 터미널로 접근해 메인 컴퓨터가 처리한 정보만을 볼 수 있었다. 

2. 클라이언트-서버 아키텍처 : 클라이언트-서버 모델은 네트워크 상에서 특정 기능을 수행하는 서버를 만들어내기 위해 도입되었다. 
- 클라이언트 : 1) diskless client 2) client with disk로 나뉘어지며, 서버에게 특정 서비스를 요청한다. 
- 서버 : 클라이언트에게 특정 서비스를 제공한다. 

<img src="./client-server-physical-logical.png" width=620 height=640 alt="클라이언트 서버 모델" />

클라이언트-서버 아키텍처는 아래와 같은 두 가지 타입으로 나뉜다. 
1. Two-Tier Client-Server 아키텍처 => 클라이언트 사이드에서 ODBC(Open Database Connectivity)에서 제공하는 API를 통해 직접적으로 DBMS를 요청할 수 있음. 
2. Three-Tier Client-Server 아키텍처 : 현재 대부분의 웹 어플리케이션에 적용됨. 클라이언트와 서버 사이에 웹 서버가 추가된 구조.

## 레퍼런스 
- [위키피디아 - 추상화](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81%ED%99%94_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))
- [데이터베이스 시스템의 구성 - 3단계 데이터베이스 구조](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=k97b1114&logNo=140153781324)
- [Describing access path for database files](https://www.ibm.com/docs/en/i/7.2?topic=files-describing-access-paths-database)
- [Encyclopedia of Database Systems - Access Path](https://link.springer.com/referenceworkentry/10.1007%2F978-0-387-39940-9_866)
- [Incremental backup and recovery](https://www.ibm.com/docs/en/db2/11.5?topic=recover-incremental-backup-recovery)