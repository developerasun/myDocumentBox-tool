# 데이터베이스 기초
아래 강좌를 듣고 중요 내용을 요약함. 

- [유튜브 - 데이터베이스 (영문)](https://www.youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ) 

## Tablet of Contents
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()
- [introduction to DBMS]()

## Understanding database basics
### Terms
- data : facts that are not processed yet => Jake, 28
- information : the data is processed => Jake is 28 this year.
- database : a collection of related data
- meta-data : data that describes the database. DB definition. Stored in DB catalogue. 
- database management system : a series of programs that manage the database

### Properties
- database reflects a real world to some extent.
- data in the database is locally related.
- database is designed and built for a specific purpose.

<img src="./db-table-example.png" width=800 height=450 alt="database tables" />

## Understanding file system
DBMS를 활용하기 이전에는 데이터를 저장하기 위해서 파일 시스템을 주로 활용했다. 서로 다른 목적을 가지는 일련의 데이터들은 서로 다른 파일에 저장되어야했다.

<img src="./file-system-example.png" width=800 height=450 alt="database tables" />

<p>위 그림에서 알 수 있듯, 서로 다른 파일에서도 Roll_No, Name과 같은 동일한 데이터를 찾을 수 있었고 이는 비효율적인 저장 방법으로 여겨진다. </p>

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

