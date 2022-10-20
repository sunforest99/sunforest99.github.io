---
layout: default
title: About
permalink: /about/
---
<div class="row">
    <img class="col-md border-rounded ex-border" style="margin-top:2rem;" src="/assets/img/profile.jpg"/>
    <div class="col-md-9 about-me text-center">
        <h1><strong>Tae Yang Kim</strong></h1>
        <p style="margin-left: -200px; margin-top:2rem;">
            <img style="width: 32px; height 32px; vertical-align: middle;" src="/assets/img/about-img/star.png"/>
            1999.04.01
        </p>
        <p style="margin-left: -90px;">
            <img style="width: 32px; height: 32px; vertical-align: middle;" src="/assets/img/about-img/mail.png"/>
            taeyang93002@daum.net<br>
        </p>
    </div>
</div>
<hr class="hr-style center" style="--content:'</>';">

<div class="row">
    <div class="col-md-6" id="left-about" style="margin-bottom: 5rem;">
    <h3 class="text-center">History</h3>
            <div class="col-md vl" style="margin-top: 3rem;">
                <div class="circle"></div>
                <ul class="history-ul" id="left">
                    <li><strong>한국 게임 과학 고등학교 졸업</strong></li>
                    <li style="color: gray;">(2017)</li>
                </ul>
            </div>
            <div class="col-md vl">
                <div class="circle"></div>
                <ul class="history-ul">
                    <li><strong>남서울대학교 재학 중</strong></li>
                    <li style="color: gray;">(2018 ~ )</li>
                </ul>
            </div>
    </div>
    <div class="col-md-6" id="right-about">
        <h2 id="technology-stack-">Technology Stack </h2>
        <p><a href="https://github.com/anuraghazra/github-readme-stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sunforest99&amp;layout=compact" alt="Top Langs" style="width: 30rem;" /></a></p>
        <h2 id="technology-stack-">Studying 📚 </h2>
            <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&square&logo=OpenGL&logoColor=white"/>
            <img src="https://img.shields.io/badge/C%23-3f8324?style=flat&square&logo=C%20Sharp&logoColor=white"/>
            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white">
            <img src="https://img.shields.io/badge/Python-00599C?style=flat&logo=python&logoColor=white">
         <!-- <div>
            <img src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"/> 
            <img src="https://img.shields.io/badge/Unity-000000?style=flat-square&logo=Unity&logoColor=white"/>
            <img src="https://img.shields.io/badge/Cocos2dX-55C2E1?style=flat-square&logo=Cocos&logoColor=white"/>
            <img src="https://img.shields.io/badge/C%23-3f8324?style=flat-square&logo=C%20Sharp&logoColor=white"/> 
            <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"/> 
            <img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=C&logoColor=white"/>
        <div> -->
        <!-- <div class="div-skills dsp-flex">
            Unity
	        <div class="progress progress-filled skills-progress">
                <div class="progress-bar progress-striped primary" role="progressbar" style="width: 60%; height:100%;"></div>
            </div>
        </div>
        <div class="div-skills dsp-flex">
            Unity
	        <div class="progress progress-filled skills-progress">
                <div class="progress-bar progress-striped primary" role="progressbar" style="width: 60%; height:100%;"></div>
            </div>
        </div>
        <div class="div-skills dsp-flex">
            Unity
	        <div class="progress progress-filled skills-progress">
                <div class="progress-bar progress-striped primary" role="progressbar" style="width: 60%; height:100%;"></div>
            </div>
        </div>
        <div class="div-skills dsp-flex">
            Unity
	        <div class="progress progress-filled skills-progress">
                <div class="progress-bar progress-striped primary" role="progressbar" style="width: 60%; height:100%;"></div>
            </div>
        </div> -->
        <hr class="hr-dashed" style="margin-top: 2rem; margin-bottom: 2rem;"/>
        <h3>Stats</h3>
        <p><img src="https://github-readme-stats.vercel.app/api?username=sunforest99&amp;show_icons=true&amp;theme=dracula" alt="GitHub"></p>
    </div>
    <h3 style="margin-bottom: 2rem; margin-top: 3rem;">Projects</h3>
    <div class="row justify-between" >
    {%- for category in site.categories -%}
	{%- for post in category[1] -%}
	{%- if post.categories[0] == 'project' -%}
	<div class="card category-card">
		<a href="{{ post.url | relative_url }}">
			<img src="/assets/img/head-img/{{ post.headerImg }}" class="card-img-top"/>
		</a>
		<a class="card-body" href="{{ post.url | relative_url }}"><h4 class="category-text">{{ post.title | escape }}</h4></a>
		<div class="tag-group project">
			{%- for tag in post.tags -%}
			<span class="tag badge badge-pill badge-primary">{{ tag }}</span>
			{%- endfor -%}
		</div>
	</div>
	{%- endif -%}
	{% endfor %}
    {%- endfor -%}
    </div>
</div>