---
layout: post
title:  "Fix Alt or Option key binding and map Vim command"
date:   2022-08-27 18:07:32 +0200
categories: vim
---

Let's fix `Alt/Option` Meta (M) key binding and use it along with some other keys to execute vim command. First of all we need to find what characters terminal is sending when `Alt` or `Option` key is pressed along with other key. To find that, execute the `cat` command and press Alt key along with other key you want. In this example, I am going to press the Alt along with right arrow `Alt + →`
```
~ $ cat
^[f
```
Pressing  `Alt + →` printed following `^[f` character in the terminal. Here character `^[` is a iteral escape character and character `f` is used 
simulates right arrow, basically `Alt + →` and `Alt + f` is the same, verify that running `cat` command again and press `Alt + f` the output will be the same and pressing `escape` key outputs `^[`

Now, we know that character `f` is used for right arrow. Let's make some vim keybinding the.

Open vim configuration file `.vimrc` and add the following.
```vim
exec "set <M-f>=\ef"
map <M-f> gt
```

The preceding code tells vim to recognize the escape-sequence as Meta-character and maps the Meta-character with vim command `gt` open next tab. 
