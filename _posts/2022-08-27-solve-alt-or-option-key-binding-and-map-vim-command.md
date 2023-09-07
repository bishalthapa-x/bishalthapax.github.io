---
layout: post
title: "Solve Alt or Option Key Binding And Map Vim Command With It"
date: 2022-08-27 18:07:32 +0200
categories: vim
---

Let's solve `Alt/Option` Meta (M) key binding and use it along with some other keys to execute vim commands. First of all, we need to find
what characters the terminal is sending when `Alt/Option` key is pressed along with other key. To find that, execute the `cat` command and
press `Alt` key with the key you want. In this example, Press `Alt` along with right arrow `Alt + →`

```
 ~ $ cat
 ^[f
```

Pressing `Alt + →` generated the character  `^[f`  in the terminal. Here character `^[` is a iteral escape character and character `f` is a
normal f key. Basically,`Alt + →` and `Alt + f` is the same, verify that running `cat` command again and press `Alt + f` the output will be
the same and pressing `escape` key outputs `^[`

Now, we know that character `f` is used for right arrow.

<br>
Open vim configuration file `.vimrc` and add the following.

```vim
 exec "set <M-f>=\ef"
 map <M-f> gt
```

<br>
The preceding code tells vim to recognize the escape-sequence as a Meta-character and maps the Meta-character with the vim command `gt` open next tab. We have fixed the meta key (Alt/Option) keybinding with the right arrow `Alt + →`. To fix all the character bindings along with Meta key <a href="https://vim.fandom.com/">Vim Tips Wiki</a> has a very good article <a href="https://vim.fandom.com/wiki/Fix_meta-keys_that_break_out_of_Insert_mode">(Fix meta-key) </a>, check it out.
