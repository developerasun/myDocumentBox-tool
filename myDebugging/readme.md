# Github trouble shooting in this tutorial

[See JS debugging tutorial in YouTube](https://www.youtube.com/watchv=eGpCdJ8DDaM&t=81s)

During this YouTube tutorial, I had encountered one github troubleshooting. A commit for image file had been placed in javascript code, not the original image one. Undoing a git push I made had always been a unwelcome guest so I decided to face it and figure out this time.



## How to undo git commit
<ol>
  <li>git log</li>
  <li>git reset --soft HEAD~1</li>
</ol>


In the below example, do __*git reset --soft HEAD~2*__ to undo the hightlighted commit fb43dd4.  
  
![git reset](https://user-images.githubusercontent.com/83855174/137629565-f74687a9-c5be-40aa-8c0c-f7875b750270.png)


<ul>
  <li>HEAD~1 : one step before HEAD</li>  
  <li>HEAD~2 : two steps before HEAD</li>  
  <li>e.g. git reset --soft HEAD~2  : undo two commits(HEAD, HEAD~1)</li>  
</ul>

## How to undo git push 
<ol>
<li>git log</li>
<li>git revert [commit hash]</li>
<li>git push [the repo where the misled commit was pushed] main</li>
</ol>

By following above instruction, the expected result is as follows : 
<ul>
<li>Message that say [Revert "your mis-typed commit"] </li>
<li>Github deleting the file you added with the wrong commit</li>
<li>The file being deleted in your local</li>
</ul>


## Git Non-fast-forward Troubleshooting (석환)

====================================================================== <br/>
Below git trouble shooting will be added  

![fastForward](https://user-images.githubusercontent.com/83855174/137629035-4a47b69b-a9fa-4118-9de2-168950ac79e1.png)

similiar issue and solution <br/>
![git push er](https://user-images.githubusercontent.com/83855174/137717460-0e32b2f8-124b-4f2a-85d4-e5cc4c4d1135.png)

======================================================================

![1](https://user-images.githubusercontent.com/86046319/138065504-ee12da03-a540-4398-8b88-ae5f7308f46c.png)<br/>
문제 발생

![2](https://user-images.githubusercontent.com/86046319/138065599-b4b16381-78ac-4f5a-bb97-fb34c92fcbc2.png)<br/>
pull로 먼저 병합 시도

![3](https://user-images.githubusercontent.com/86046319/138065625-7bed0dc6-43f0-4feb-837d-8bb7b922533f.png)<br/>
branch --set-upstream-to=origin/main main 명령어 사용
<ul>
  <li>브랜치 리네임을 했을 때, 원격 레포와 로컬 레포에 매핑이 깨질 수 있다</li>
  <li>그럴 때 바로잡아주는 명령어</li>
</ul>

![4](https://user-images.githubusercontent.com/86046319/138065634-5fa4e08c-0ac7-4e4f-ad07-e7d0591a344b.png)<br/>
확실하지 않지만 pull이 진행된 것 같음

![5](https://user-images.githubusercontent.com/86046319/138065642-9325f635-0b1c-4362-8ebf-a04f94cc8cd9.png)<br/>
push 시도 → email privacy restrictions 오류 발생

![6](https://user-images.githubusercontent.com/86046319/138065652-abb41621-63fb-4991-b214-b685401e4a9b.png)<br/>
프로필 Settings → Emails에서 Block command line pushes that expose my email 체크 해제

push 성공


# List of references
[how to undo git commit](https://devconnected.com/how-to-undo-last-git-commit/) <br/>
[how to undo git push](https://stackoverflow.com/questions/37606168/how-to-undo-a-git-push)


Make sure that you have backed up the local file before following the above instructions to avoid missing out your hard work. 
