# Github trouble shooting in this tutorial

[See JS debugging tutorial in YouTube](https://www.youtube.com/watchv=eGpCdJ8DDaM&t=81s)

During this YouTube tutorial, I had encountered one github troubleshooting. A commit for image file had been placed in javascript code, not the original image one. Undoing a git push I made had always been a unwelcome guest so I decided to face it and figure out this time.



## How to undo git commit
<ol>
  <li>git log</li>
  <li>git reset --soft HEAD~1</li>
</ol>

HEAD~1 : one step before HEAD  
HEAD~2 : two steps before HEAD  
  
e.g. git reset --soft HEAD~2  : undo two commits(HEAD, HEAD~1)  


In the below example, do __*git reset --soft HEAD~2*__ to undo the hightlighted commit fb43dd4.  
  
![git reset](https://user-images.githubusercontent.com/83855174/137629565-f74687a9-c5be-40aa-8c0c-f7875b750270.png)


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


## git non-fast-forward troubleshooting
Below git trouble shooting will be added  


![fastForward](https://user-images.githubusercontent.com/83855174/137629035-4a47b69b-a9fa-4118-9de2-168950ac79e1.png)


# List of references
[how to undo git commit](https://devconnected.com/how-to-undo-last-git-commit/)
[how to undo git push](https://stackoverflow.com/questions/37606168/how-to-undo-a-git-push)


Make sure that you have backed up the local file before following the above instructions to avoid missing out your hard work. 
