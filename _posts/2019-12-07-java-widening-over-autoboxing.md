---
layout: post
title:  "Java widening over autoboxing"
date:   2019-12-07 22:40:42 +0100
categories: java
---

Being a Java developer, It is important to understand some basic corner case of language.
I would like to share something about Java overloading conversion rule which is not so famous. 
<br /> <br />

Overloading feature allows a method to have same name but have different argument. 
There are few rules that we need to be aware about overloading. 
The important and common rule about over loading is, to have same method name, return type (method signature) and 
different argument or argument list. There is another tricky rule of overloading which is <b>Widening over auto boxing</b>.
<br /> <br />

Let's understand it with an example. 
```java  
public class Test {

      public static void main(String[] args) {
         print(5);
      }
      
      static void print(Integer arg) {
        System.out.println("Integer "+arg);
      } 
    
      static void print(float arg) {
        System.out.println("float "+arg);
      } 
}
```
Output
```
float 5
```
<br />
In the preceding example, `float 5` is printed because java is widening the the argument from `int` to `float`
instead of auto boxing and method with signature  `void print(float arg)` is called.