# 디자인 패턴
아래 강좌를 듣고 중요 내용을 요약함. 
[Design patterns (영문)](https://www.youtube.com/watch?v=BWprw8UHIzA&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=1&t=1s)

<details>
<summary>디자인 패턴이란? (펼쳐보기)</summary>
흔히 찾아볼 수 있는 문제들에 대해 일반적이고 재사용 가능한 모범 사례(best practice)를 적용하여 해결책을 제시하는 것. 디자인 패턴을 익힌 후 문제 해결에 적합한 패턴이기만 하다면 플랫폼에 구애받지 않고 여러 소프트웨어에 적용이 가능하다는 장점이 있음. 패턴을 익히는 것보다 패턴을 언제 사용할지 결정하는 것이 어려움.
</details>

# Null object 패턴
아래 코드 블록과 같이 유저가 직접 null/nil 체크를 하는 것이 아니라 아무 처리를 하지 않는 null object(빈 객체)를 생성하고 리턴해줌으로써 예외 처리를 피하는 방식의 프로그래밍 패턴이다.

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
type NullObj struct { message string}
func (n nullObj) ReturnNullObj() string {n.message = "jake has made a mistake" return n.message }

var myError error

if (reflect.TypeOf(name) != reflect.TypeOf("")) {
     newNull := new(NullObj)
     message := newNull.ReturnNullObj()
     return  message // return nullObj
} else {
   // do something else
}

```