# Content editor : @developerasun

# 강의 콘텐츠 목록
<ol>
    <li>웹의 탄생 그리고 발전</li>
    네트워크 그룹 단위의 모임 === 웹
    <li>웹을 구성하는 3대 요소</li>
    <li>자원을 지정하는 URL</li>
    <li>웹의 핵심 기술 HTTP 프로토콜</li>
    <li>쿠키와 세션</li>
    <li>웹 아키텍처 분석</li>
</ol>

# 웹 기초 지식
## 웹 베이직
<ol class="web-basic">
    <li>http 메소드(get/post 등)</li>
    <li>세션</li>
    <li>쿠키</li>
</ol>

## 웹 애플리케이션 베이직
<ol class="web-application-basic">
    <li>게시판, 회원 관리(로그인, 로그아웃 등)</li>    
    <li>php</li>
    <li>jsp(java web application)</li>
    <li>asp(.net)</li>
</ol>

## 웹 애플리케이션과 보안
<ol class="web-application-logic">
    <li>보안</li>
    <li>취약점 이해</li>
    <li>대응책 수립</li>
</ol>

# 웹 기본 구조
## 클라이언트와 서버
<li>클라이언트 : 웹브라우저를 사용해 서버에 서비스를 요구하는 주체</li>
<li>서버 : 웹 서버를 통해 클라이언트에게 서비스를 제공하는 주체</li>
클라이언트(request message)와 서버(response message)는 HTTP 메세지를 통해 교류하게 된다.

<img src="./http-message.png" width="600px" height="250px"/>

## 웹의 3대 요소
<li>HTML : 웹 콘텐츠 정보 구성</li>
<li>HTTP : 웹 클라이언트와 웹 서버의 통신 규약</li>
<li>URL : 웹 클라이언트 => 웹 서버 자원 요청</li>

<ol>
    <li>클라이언트의 http request 메세지 작성</li>
    <li>request 메세지가 URL을 통해 서버에게 전달됨(자원 요청)</li>
    <li>서버가 http response 메세지 작성</li>
    <li>response 메세지가 URL을 통해 클라이언트에게 전달됨(자원 전달)</li>
    <li>웹 브라우저가 response 메시지를 해석하여 유저에게 콘텐츠를 표시함(렌더링)</li>
</ol>

## URL(Uniform Resource Locator)
인터넷 리소스를 가리키는 표준 명칭. 서버의 자원을 요청할 때 사용되며 인터넷 상의 모든 리소스를 요청할 수 있다.
    <li>Hyper Text Transfrer Protocol</li>
    <li>File system Transfer Protocol</li>
    <li>Simple Mail Transfer Protocol</li>

### Request logo image file to server using URL
<img src="./ftp-webroot.png" width="300px"/>

### URL structure 
<p>
(protocol name) + :// + (IP/domain, port number) + (resource directory) + (resource)

리소스 디렉토리 없이 도메인이 바로 불러졌을 경우 index.html과 같은 디폴트 값을 불러온다. 

대표적인 예약 URL 키워드는 아래와 같다. 
? : 파라미터 시작점
= : 파라미터 값
& : 파라미터 식별자
(+) : 공백

예를 들어, 구글에서 강아지를 이미지 검색했다면 
www.google.com/search?keyword=dog&format=image&text=cute+dog
(도메인) + (리소스 디렉토리) + (파라미터 1과 그 값) + (파라미터 2와 그 값) + (파라미터3과 그 값과 공백) 의 형식으로 표현될 수 있다.
</p>

### URL 인코딩
&, #, ? 와 같이 예약 URL 키워드를 사용자가 URL 이외의 곳에서 입력했을 경우 데이터 전송 손실을 막기 위해서(예약 키워드를 단순 데이터로 전송하기 위해서) 그 값을 인코딩하여 전달하게 된다. 웹 브라우저 상에서는 URL 인코딩은 자동으로 지원한다. e.g. 공백 => %20 으로 인코딩 후 서버에게 전달됨. 

URL 인코딩 예시
<img src="./url-encoding.png" width="300px" height="500px"/>

## 쿠키와 세션
<p>
최초의 웹은 정보 공유가 주된 목적이었으므로 상태 유지/관리의 필요성이 적었지만 현대의 웹은 이커머스가 확장됨에 따라 유저의 상태 정보를 관리해야할 필요성이 높아졌다(쇼핑, 장바구니, 결제, 배송일 체크 등 유저에 따라 달라지는 정보들이 많아졌기에).

쿠키는 사용자 식별 및 세션 유지를 통해 클라이언트와 서버 간의 상태관리를 책임지는 인증방식이다. 
서버에서 Set-Cookie 헤더를 통해 클라이언트의 쿠키 값을 세팅하고, 클라이언트는 세팅된 쿠키 값을 Cookie 헤더에 세팅한다. 
<p>

<ul>
 <li> 지속 쿠키(persistent cookie) : 클라이언트 하드 디스크에 텍스트 형태로 저장함. PC 사용자들은 해당 쿠키 정보를 열람할 수 있으나 오늘 날의 웹은 이러한 보안 문제를 고려하여 구조를 설계함. 사용자 식별 및 인증 관리를 위한 암호화 과정과 쿠키 유효기간 등을 검토하여 쿠키 발급 로직을 구현해야 한다. </li>
 <li>세션 쿠키(session cookie) : 클라이언트 웹 브라우저 캐시에 저장됨. 서버에서는 이 세션 정보를 메모리/파일시스템/데이터베이스에 저장한다(일반적으로는 *메모리에 저장함). 세션은 임의의 문자를 무작위로 나열하고, 나열된 문자들을 유저의 로그인 정보와 매핑시켜 특정 유저의 세션을 파악하기는 어렵다는 보안 상의 장점이 있음. </li>
</ul>

로그인 폼과 세션 쿠키
<img src="./session-cookie-login.png" width="600px" height="400px"/>

세션 쿠키는 보안 상의 장점이 있으나, 세션 정보를 메모리에 저장하므로 대규모 웹 서비스에 적용할 경우 서버에 큰 부하를 가지고 온다는 단점이 존재한다. 반면 지속 쿠키 방식은 서버에 부담이 적은 편이므로 사용 유저가 많은 기업들의 경우 지속 쿠키 사용을 선호하는 편이다. 웹 서비스의 규모와 인프라 구성에 알맞게 쿠키 방식을 검토해야 한다. 

<li>편의성 : 지속 쿠키 < 세션 쿠키</li>
<li>서버 부하 : 지속 쿠키 < 세션 쿠키</li>
<li>유저 수 : 지속 쿠키 > 세션 쿠키</li>


# 추천 도서 목록 
<ul>
    <li>그림으로 배우는 HTTP & Network basic</li>
    <li>성공과 실패를 결정하는 1% 네트워크 원리</li>
</ul>

