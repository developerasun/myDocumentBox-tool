# Github trouble shooting in this tutorial

[See JS debugging tutorial in YouTube](https://www.youtube.com/watchv=eGpCdJ8DDaM&t=81s)

During this YouTube tutorial, I had encountered one github troubleshooting. A commit for image file had been placed in javascript code, not the original image one. Undoing a git push I made had always been a unwelcome guest so I decided to face it and figure out this time.

Here is the reference I found at [stackoverflow](https://stackoverflow.com/questions/37606168/how-to-undo-a-git-push)

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

Make sure that you have backed up the local file before following the instruction to avoid missing out your hard work. 