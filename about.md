---
layout: home
image:
  path: /assets/images/bishal_thapa.jpeg
title: About Bishal Thapa
---

<link href="{{site.url}}/assets/css/about.css" rel="stylesheet"/>

<b style="color:#673de6"> About Me </b>

I’m Bishal Thapa a passionate technologist adept at addressing client needs and demands. My interest span is wide but primarily I use Java
and Javascript on Linux and Unix platforms, with a focus on REST architecture, microservices, and cloud computing. Committed to continuous
learning and skill refinement.
<br /><br /><br />

<b style="color:#673de6"> Evolution</b>

Born in Nepal and raised in the lovely town of Damauli, my journey into software engineering began during my school years under the
mentorship of the exceptional software engineer, <a href="https://www.linkedin.com/in/vikram-thapa-87677a191">Vikram Thapa</a>



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
