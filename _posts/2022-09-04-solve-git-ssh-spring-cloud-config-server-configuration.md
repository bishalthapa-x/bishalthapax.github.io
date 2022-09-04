---
layout: post
title:  "Solve Git SSH Spring Cloud Config Server Configuration"
date:   2022-09-04 16:01:12 +2300
categories: spring git
---

Spring Cloud Config Server makes it possible to centralize and externalize configuration properties of different service in a distributed system. This makes a service or application easily configurable. Spring Cloud Config Server offers different approch to back the configurations like Filesystem, Git, Vault, JDBC etc and they can be mixed also.

<br><br>
As I was making a Git backed configuration, 

 ```
spring.cloud.config.server.git.uri=git@github.com:devbith/spring-cloud-example-project01-configs.git
```

<br>
I encountered `RSA key with SHA-1, which is no longer allowed` and  `invalid privatekey: [B@1324409e` issues. 

