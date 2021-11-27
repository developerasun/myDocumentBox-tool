# 디자인 패턴
아래 강좌를 듣고 중요 내용을 요약함. 
[Design patterns (영문)](https://www.youtube.com/watch?v=BWprw8UHIzA&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=1&t=1s)

<details>
<summary>디자인 패턴이란? (펼쳐보기)</summary>
흔히 찾아볼 수 있는 문제들에 대해 일반적이고 재사용 가능한 모범 사례(best practice)를 적용하여 해결책을 제시하는 것. 디자인 패턴을 익힌 후 문제 해결에 적합한 패턴이기만 하다면 플랫폼에 구애받지 않고 여러 소프트웨어에 적용이 가능하다는 장점이 있음. 패턴을 익히는 것보다 패턴을 언제 사용할지 결정하는 것이 어려움.
</details>

# Null object 패턴
아래 코드 블록과 같이 유저가 직접 null/nil 체크를 하는 것이 아니라 아무 처리를 하지 않는 null object(빈 객체)를 생성하고 리턴해줌으로써 예외 처리를 피하는 방식의 프로그래밍 패턴이다.

<img src="./null-obj-diagram.png" width=400px height=200px/>

<span>널 오브젝트 패턴 이전 코드</span><br/>

```Go
name := "jake"
var myError error
if (myError != nil) {
    fmt.Println("error occured") // define what has to occur imperatively
    log.Fatal(myError)
}
```

<span>널 오브젝트 패턴 적용 코드</span><br/>

```Go
type NullObj struct { }
func (n nullObj) ReturnNullObj() string {return "your name should be in English" }

if (reflect.TypeOf(yourName) != reflect.TypeOf("")) {
     newNullObj := new(NullObj)
     message := newNullObj.ReturnNullObj()
     return  message // return nullObj
} else {
   // do something else
}

```

# Builder 패턴
하나의 객체 안에 많은 정보를 담아야 할 때 사용되며 객체의 생성 과정과 표현 방법을 분리하여 코드를 작성하는 패턴을 말한다. 객체의 정보들을 여러 갈래(메소드)로 나누고, 모든 정보를 입력한 후 마지막 단계에 Builder 메소드로 종합/객체 생성/리턴하는 패턴을 의미함. 

```Javascript:builder.js
// 빌더 패턴을 적용하지 않는 경우
class User {
    constructor(name, age, country) { 
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

// 이름과 나이는 필수 입력, 국적이 필수 입력이 아닐 경우를 가정
const user_jake = new User("jake", 27, undefined) // 유저가 파라미터 중 하나를 입력하지 않은 경우, 파라미터들의 순서가 바뀌는 경우가 있을 수 있음. 

// 빌더 패턴을 적용하는 경우
class UserBuilder {

    constructor() {
        this.user = new User(); 
    }

    setName(name) {
        this.user.name = name;
    }
    setAge(age) {
        this.user.age = age;
    }
    setCountry(country) {
        this.user.country = country;
    }
    build() {
        return this;
    }
}

```

<details>
    <summary>오버로딩과 오버라이딩이란? (펼쳐보기)</summary>    

- 오버로딩 : 같은 이름을 가진 메소드/생성자들을 매개변수의 타입과 개수로 구분하는 것. 생성자도 오버로딩이 가능하다(여러 개를 선언할 수 있다). 
- 오버라이딩 : 부모 레벨에서 상속받은 메소드를 자식 레벨에서 재정의 하는 것. 
</details>