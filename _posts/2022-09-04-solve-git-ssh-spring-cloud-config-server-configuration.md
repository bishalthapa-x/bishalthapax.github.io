---
layout: post
title:  "Solve Git SSH Spring Cloud Config Server Configuration"
date:   2022-09-04 16:01:12 +2300
categories: spring git
---

Spring Cloud Config Server makes it possible to centralize and externalize configuration properties of different service in a distributed system. This makes a service or application easily configurable. Spring Cloud Config Server offers different approch to back the configurations like Filesystem, Git, Vault, JDBC etc and they can be mixed also.
<br><br>
As I was making a Git backed configuration, 

 ```properties
spring.cloud.config.server.git.uri=git@github.com:devbith/spring-cloud-example-project01-configs.git
```

<br>
I encountered {% highlight javascript %} RSA key with SHA-1, which is no longer allowed {% endhighlight %} and  ``invalid privatekey: [B@1324409e`` issues. <br>

For the first issue `RSA key with SHA-1, which is no longer allowed` I followed the error log and read the blog post <a href="https://github.blog/2021-09-01-improving-git-protocol-security-github/ ">Improving Git protocol security on GitHub</a> and found that, SHA-1 is weak, so Github has stopped allowing new RSA client keys to use SHA-1 signatures and require them to use SHA-2 signatures instead and it also highlights to use `rsa-sha2-256` and `rsa-sha2-512` which are supported by SHA-2. 
