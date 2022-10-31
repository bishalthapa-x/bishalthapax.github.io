---
layout: post    
title:  "Git Ignore Full Page Output When Content Fits Screen"
date:   2022-10-15 05:28:21 +0100
image:
  path: /assets/images/post/2022-10/git-pager.gif
  width: 640
  height: 480
categories: git 
---

Git by default make use of `less` pager to display the output of the commands like `git log`, `git diff` or `git branch`.
<br>
Less pager is pretty good and efficient as it reads large file per page or per screen size without loading the full content in the main memory.
I prefer not to view the full page output for commands like git log or git diffs when the content is less than full page.
<br><br>
<img src="{{site.url}}/assets/images/post/2022-10/git-pager.gif">
<br><br>
As in the above gif, we can avoid the full page output when content fits screen by passing the flag <b>-F</b> with <b>less</b> command, where <b>-F</b> causes <b>less</b> pager to exit
if entire file can be displayed on first screen. Here is the git configuration command for it.
<br><br>
`git config --global core.pager "less -F"`
<br><br>

And that's pretty much all !!

