# 웹 브라우저에 대한 이해
아래 강좌를 듣고 주요 내용을 요약함. 

- [신입 개발자 면접 필수 질문](https://www.youtube.com/watch?v=ipwfEUslfQA&list=PLpq56DBY9U2AZEPhHAbG7ZbfrXvqW1bX4&index=1)

학습 콘텐츠 순서는 아래와 같다. 
1. [프로세스와 쓰레드 : CS 기본기](https://youtu.be/T2WqQcqssoE)
2. [멀티 프로세스 브라우저의 아키텍처](https://youtu.be/Nzjnbr7krQM)
3. [크롬 브라우저 아키텍처의 이해](https://youtu.be/L5K5B7W50Iw)
4. [브라우저와 URL, 그리고 유저](https://youtu.be/ipwfEUslfQA)

<bold>운영체제에 대한 기본적인 개념을 숙지한 후 위 강좌를 수강하는 것을 권장함.</bold>

## 멀티 프로세스 브라우저의 아키텍처
코어와 쓰레드는 일대일 대응한다. 즉 하나의 멀티 코어 프로세스가 4개의 코어를 가지고 있다면 4개의 쓰레드를 처리할 수 있다.

<img src="./core-thread-one-on-one.png" width=700 height=370 alt="멀티 코어 프로세서와 쓰레드">