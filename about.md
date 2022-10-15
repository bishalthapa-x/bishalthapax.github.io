---
layout: home
title: About 
---
<link href="{{site.url}}/assets/css/about.css" rel="stylesheet"/>

## About Me

<br />
I'm Bishal. I am into software development since 2017. I live in Portugal, where I work as
a software developer for a company named [PrimeIT](https://www.primeit.pt/) since 2019. I have
a passion to learn and work in different aspects software design and development. During my spare
time, I do R&D with different programming language, frameworks and tools.
<br /><br /><br />

### Evolution

<br />
I was born in Nepal, grew up in a small and beautiful town Damauli. I started my developer journey early in school by building websites 
for small organization in my home town. After my school, I got opportunity to learn more of software development with  
software engineer [Vikram Thapa](https://www.linkedin.com/in/vikram-thapa-87677a191/) individually. I am very grateful 🙏
for [Vikram Thapa](https://www.linkedin.com/in/vikram-thapa-87677a191/) teaching and guidance. Later, I moved to Kathmandu (capital of Nepal) for my further study where I got my first dream job in the 
company Softhover amd more about my work expereince are below 😉.
<br /><br /><br />

### Where I’ve Worked
<br />
<div class="work-timeline">
    <div class="tab">
      <button class="tab-links" onclick="showTabContent(event, 'Trustly')" id="defaultOpen">Trustly</button>
      <button class="tab-links" onclick="showTabContent(event, 'Alpega')">Alpega</button>
      <button class="tab-links" onclick="showTabContent(event, 'Softhover')">Softhover</button>
    </div>


    <div id="Trustly" class="tab-content">
        <h4 class="job-title">
            Software Developer 
            <a href="https://www.trustly.net/"> @Trustly </a>
            <p class="job-start-date">May 2021 - Present</p>
        </h4>
        <ul>
         <li>Maintained and implemented PSD2 API</li>
        <li>Implemented different application requirements</li>
        <li>Developed chrome extension to speed internal teams day-to-day work</li>
         <li>Provided production support</li>
        </ul>
        <span class="tech-used">Worked with: Java, Javascript, Spring, Junit, Selenium, Docker, Kubernetes, Splunk, Argocd etc </span>
    </div>

    <div id="Alpega" class="tab-content">
      <h4 class="job-title">
            Software Developer 
            <a href="https://www.alpegagroup.com/en/"> @Alpega </a>
            <p class="job-start-date">March 2019 - April 2021</p>
        </h4>
        <ul>
            <li>Implemented business requirements in agile environment</li>
            <li>Architected, implemented and integrated fron-end with combination GWT and Angular</li>
            <li>Integrated Single Sign-On (SSO) with Okta</li>
            <li>Wrote SQL queries and procedures for database schema manipulation and migration</li>
            <li>Created automated deployment processes with Jenkins</li>
            <li>Participated in T4 level application support</li>
        </ul>
      <span class="tech-used">Worked with: Java, Javascript, Spring, J2EE, JPA-Hibernate, JMS, 
            GWT, Angular, Flyway, Junit, Web-logic, Jenkins
     </span>
    </div>

    <div id="Softhover" class="tab-content">
      <h4 class="job-title">
           Software Developer 
            <a href="https://www.softhover.com/"> @Softhover </a>
            <p class="job-start-date">Aug 2017 - Sep 2018</p>
        </h4>
        <ul>
            <li>Developed and shipped highly interactive e-commerce application</li>
            <li>Developed B2B REST Service</li>
            <li>Integrated payment gateway </li>
        </ul>
     <span class="tech-used">Worked with: Java, Javascript, Spring, Hibernate, Tomcat, 
            MY-SQL, React </span>
    </div>

</div>
<br /> <br />

### Licenses & certifications
<br />
<ul class="certification">
    <li> 
        <img  src="{{site.url}}/assets/images/oracle.jpeg" alt="Oracle" class="oracle-logo" class="oracle-logo">
        <div>
        <a href="https://brm-certview.oracle.com/pls/certview/ecertificate?ssn=OC2165016&trackId=OCPJSE8&key=60c7bda826aa2934d828bcfbbaca192f6b4b64c5">
          Oracle Certified Professional, Java SE 8 Programmer
       </a>
      <br />
      <a href="https://brm-certview.oracle.com/pls/certview/ecertificate?ssn=OC2165016&trackId=OCAJSE8&key=3060afbcf6b5364ef67de44559f9457dc6e76b74">
            Oracle Certified Associate, Java SE 8 Programmer
        </a>
</div>
    </li>
 
    <li> 
        <img  src="{{site.url}}/assets/images/cn-logo-dark-9824.svg" alt="Coding Ninjas" class="coding-ninja-logo">
        <a href="https://certificate.codingninjas.com/verify/ee24b670d15d3738/">Data Structures in JAVA</a>
    </li>
   
</ul>




<script>

function showTabContent(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
