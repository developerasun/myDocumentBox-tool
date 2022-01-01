# Learning Unity Essentials

Took below course and summarized essentials. 

- [Unity Introduction(KOR)](https://youtube.com/playlist?list=PLC2Tit6NyVida7Jh6gSlw1BicuEUCFV6V)
- [Unity Beginner Tutorials(ENG)](https://youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6)

Started learning Unity to create websites like below(web + metaverse)

- [Cybertruck](https://bruno-simon.com/#cybertruck)
- [Kode Sports Club](https://www.kodeclubs.com/)

Install Unity at offical home page with license. License will be issued based on your account and license choice. Adjust Unity editor installation folder and general tab as well. Choose Unity version and add/install. 

## Understanding basic terms 
- Project : all files in a created Unity project
- Scene : 게임의 장면이나 상태를 저장하는 단위. 게임은 씬 단위로 관리함. 
- sprite renderer : 2차원 이미지 렌더링
- mesh renderer : 3차원 오브젝트 렌더링

- game object : 씬에 배치되는 하나의 물체. 게임 오브젝트에 컴포넌트를 추가하여 다양한
오브젝트를 만들 수 있다. 
- component : 게임 오브젝트에 부착할 수 있는 C# 스크립트 파일을 지칭. 게임 오브젝트에
기능을 부여하는 역할을 함. 

- assets : 프로젝트 내의 리소스를 총칭 : 오디오, 이미지 등
- prefab : 게임 오브젝트들을 파일 형태로 저장하는 단위. 동일 게임 오브젝트들을 여러 
씬 또는 특정 장소에 배치할 때 간단하게 재사용 가능. 프리팹 원본을 갱신할 경우 복사본들도
함께 업데이트 된다.

- coordinates : 왼손 좌표계를 기준으로 x,y,z 축을 나타냄. 차원을 카메라를 통해 조정함.
- empty object : "Transform" 컴포넌트만을 가짐. 모든 오브젝트는 transform 컴포넌트를 가짐.
- 3차원 오브젝트의 경우 외부에서 가지고 와야 할 경우가 있음 

### GameObject property
- mesh filter : 외형
- mesh renderer : 표면 색상
- box collider : 충돌 범위 // box collider => 박스 외형의 충돌 범위


### Camera and light
#### Camera
- clear flag : 빈 배경 화면 설정. 2d일 경우 solid color를, 3d일 경우 skybox를 사용함.
- projection : 카메라의 시점. orthogrpahic 일 경우 2d, perspective일 경우 3d
- viewport rect : (0,0) ~ (1,1), 카메라의 화면 출력 영역 설정

#### Light 
- realtime : 라이트 설정을 실시간으로 연산(게임 환경이 자연스러우나 최적화에 불리) 
- mixed : realtime 과 baked을 섞어 사용
- baked : 현재를 기준으로 빛 연산을 해두고 활용(최적화에 유리하나 게임 환경이 부자연스러움)

## Understanding C# script in Unity 
When game starts, all the scripts attached to game object will get executed. C# script in Unity does as followings
- controls game object
- game object CRUD
- system implementation in game

```c#
// a script consists of one class. 
public class myScript:MonoBehaviour
{
    // variables for saving data
    private myName; 

    // Unity event function

    // user-defined function
    private void LogMyName()
{
    Debug.Log("Jake");
}
}
```