---
layout: post
title:  "Solve Git SSH Spring Cloud Config Server Configuration"
date:   2022-09-04 16:01:12 +2300
categories: spring git
---

Spring Cloud Config Server simplifies configuration management in distributed systems by centralizing and externalizing properties, enabling easy configuration for services and applications. It supports various backends such as Filesystem, Git, Vault, and JDBC, allowing flexible and combinable configuration approaches.
<br><br>
As I was making a Git backed configuration, 

 ```properties
spring.cloud.config.server.git.uri=git@github.com:bishalx/spring-cloud-example-project01-configs.git
```
<br>
I encountered two issues:<br>
 -> `RSA key with SHA-1, which is no longer allowed` <br>
 -> `invalid privatekey: [B@1324409e` issues. <br>
<br>
While traversing the logs of the first issue `RSA key with SHA-1, which is no longer allowed` I found this article <a href="https://github.blog/2021-09-01-improving-git-protocol-security-github/ ">Improving Git protocol security on GitHub</a> and learn that, SHA-1 is weak, so Github has stopped allowing new RSA client keys to use SHA-1 signatures and require them to use SHA-2 signatures instead and it also highlights to use `rsa-sha2-256` and `rsa-sha2-512` which are supported by SHA-2 and for the second issue `invalid privatekey: [B@1324409e` after googling I read this article <a href="https://mkyong.com/java/jsch-invalid-privatekey-exception/">JSch – invalid privatekey exception</a> found that JSch doesn't support the `RSA` private key.

<br><br>
To solve both the issues, I had to generate the ssh key and convert `RSA` key to `PEM` generate new ssh key 
```
ssh-keygen -m pem -t ecdsa -b 521
```
<br>
After doing this, I added the new public key in the <a href="https://github.com/">github</a> and my spring-cloud-config project was able to fetch the properties from the git repository.

<br><br>
Cheers !!
