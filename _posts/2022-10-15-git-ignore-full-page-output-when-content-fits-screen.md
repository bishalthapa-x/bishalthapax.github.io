---
layout: post
title: "Git Ignore Full Page Output When Content Fits Screen"
date: 2022-10-15 05:28:21 +0100
image:
  path: /assets/images/post/2022-10/git-pager.gif
  width: 640
  height: 480
categories: git 
---

Git utilizes the default <a href="https://en.wikipedia.org/wiki/Less_(Unix)">less</a> pager program to display command outputs such as `git
log`, `git diff`, or `git branch`. The less pager is an efficient tool that reads large files page by page or screen size, without loading the
entire content into the computer's main memory. This approach enhances performance and responsiveness, especially when dealing with
extensive data.

<br><br>

The benefits of using less become particularly apparent when handling commands like git log or git diff. When the content being displayed is
smaller than a full page, you'll appreciate the streamlined output, which ensures that your terminal screen remains clutter-free and easy to
navigate. This optimized user experience is one of the reasons why less is the go-to pager for Git's command output presentation.
<br><br>
<img src="{{site.url}}/assets/images/post/2022-10/git-pager.gif">
<br><br>
As in the above gif, we can avoid the full page output when content fits screen by passing the flag <b>-F</b> with <b>less</b> command,
where <b>-F</b> causes <b>less</b> pager to exit
if entire file can be displayed on first screen. Here is the git configuration command for it.
<br><br>
`git config --global core.pager "less -F"`
<br><br>

And that's pretty much all !!

