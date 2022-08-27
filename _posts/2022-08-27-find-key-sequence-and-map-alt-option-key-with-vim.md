---
layout: post
title:  "Find key sequence and map Alt/Option key with Vim"
date:   2022-08-27 18:07:32 +0200
categories: vim
---

Let's bind  `Alt/Option` key with some other keys to execute vim command. First of all we need to find what characters terminal is sending when `Alt` or `Option` key is pressed along with other key. To find it the chracter, execute the `cat` command and press Alt key along with other key you want. In this example, I am going to press the right arrow `Alt + →`
```
~ $ cat
^[f
```
Pressing  `Alt + →` printed following `^[f` character in the terminal.

