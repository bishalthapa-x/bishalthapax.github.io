---
layout: post
title:  "Solve Git SSH Spring Cloud Config Server Configuration"
date:   2022-09-04 16:01:12 +2300
categories: spring git
---

Spring Cloud Config Server makes it possible to centralize and externalize configuration properties of different service in a distributed system. This makes a service or application easily configurable. Spring Cloud Config Server offers different approch like Filesystem, Git, Vault, JDBC etc to back the configurations and they can be mixed also.
<br>
As I was making a Git backed configuration, 

 ```properties
spring.cloud.config.server.git.uri=git@github.com:devbith/spring-cloud-example-project01-configs.git
```

I encountered two issue<br>
- `RSA key with SHA-1, which is no longer allowed` 
- `invalid privatekey: [B@1324409e` issues. <br>


While following the log of the first issue `RSA key with SHA-1, which is no longer allowed` I found this article <a href="https://github.blog/2021-09-01-improving-git-protocol-security-github/ ">Improving Git protocol security on GitHub</a> and learn that, SHA-1 is weak, so Github has stopped allowing new RSA client keys to use SHA-1 signatures and require them to use SHA-2 signatures instead and it also highlights to use `rsa-sha2-256` and `rsa-sha2-512` which are supported by SHA-2 and for the second issue `invalid privatekey: [B@1324409e` after googling I read this article <a href="https://mkyong.com/java/jsch-invalid-privatekey-exception/">JSch – invalid privatekey exception</a> found that JSch doesn't support the `RSA` private key.


To solve both the issues, I had to generate the ssh key and convert `RSA` key to `PEM`


Generate new ssh key
```
ssh-keygen -t ecdsa -b 521
```

Convert
```
ssh-keygen -p -f ~/.ssh/id_rsa -m pem
```

After doing this, I added the new public key in the github and was able to fetch the configuration from the git repository.


