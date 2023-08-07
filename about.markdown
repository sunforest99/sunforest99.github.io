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
            <img style="width: 32px; height 32px; vertical-align: middle;" src="/assets/img/about-img/cake.png"/>
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
    <div class="col-md-12">
    <h3 class="text-center">About</h3>
        <div class="alert alert-light text-center about-division" role="alert" style="margin-bottom: 4rem; margin-top: 2rem;">
        	<p>
            저는 게임 개발 분야에서 꿈을 키우고 있는 학생입니다.<br>
            어릴 적부터 컴퓨터 게임에 푹 빠져서 게임 개발자로 성장하고 싶었습니다.<br> 그래서 컴퓨터소프트웨어를 전공하며 게임 개발에 필요한 기술과 지식을 꾸준히 익히고 있습니다.<br>
            다양한 프로그래밍 언어와 엔진을 활용하여 다양한 장르의 게임을 개발하는 데에 관심이 많으며,<br> 그 중에서도 특히 Unity를 이용한 2D 및 3D 게임 개발을 즐기고 있습니다.<br> 게임 개발을 통해 사용자들에게 즐거움과 도전을 제공하는 것에 큰 보람을 느낍니다.<br>
            개인 프로젝트와 팀 프로젝트를 통해 게임 개발의 다양한 측면을 경험하며, 게임 디자인과 레벨 디자인 등 다양한 역할을 맡아왔습니다.<br> 또한 게임 개발에 있어서는 문제 해결 능력과 창의성을 중요하게 생각하며, 어려운 문제를 해결하면서도 즐거움을 느끼는 개발자입니다.
            </p>
        </div>
    <hr class="hr-style center" style="--content:'</>';">
    </div>
    <div class="col-md-6 about-division">
    <h2 class="text-center" id="technology-stack-">Technology Stack </h2>
       <p><a href="https://github.com/sunforest99/">
       <img class="align-center about-division" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sunforest99&layout=donut-vertical" alt="Top Langs" style="width: 20rem;" /></a></p>
    </div>
    <div class="col-md-6 about-division" id="right-about">
        <h2 class="text-center">History</h2>
        <ul class="text-center">
            <li>2017.07 Shape of you 클라이언트 개발자</li>
            <li>2019.08~11 yuristrap 프론트앤드 개발자</li>
            <li>2021.01 Tiler 클라이언트 개발자</li>
        </ul>       
        <!-- <p><img src="https://github-readme-stats.vercel.app/api?username=sunforest99&amp;show_icons=true&amp;theme=dracula" alt="GitHub"></p> -->
        <hr class="hr-dashed" style="margin-top: 4rem; margin-bottom: 2rem;"/>
        <h2 class="text-center">Skills 📚 </h2>
        <div align=center class="about-division">
            <img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=C&logoColor=white"/>
            <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"/> 
            <img src="https://img.shields.io/badge/C%23-3f8324?style=flat-square&logo=C%20Sharp&logoColor=white"/> 
            <img src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"/>
            <br>
            <img src="https://img.shields.io/badge/Unity-000000?style=flat-square&logo=Unity&logoColor=white"/>
            <img src="https://img.shields.io/badge/Cocos2dX-55C2E1?style=flat-square&logo=Cocos&logoColor=white"/>
            <img src="https://img.shields.io/badge/unrealengine-0E1128?style=flat-square&logo=unrealengine&logoColor=white"/>
            <br>
            <img src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white"/>
            <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white"/>
        </div>
    </div>
    <div class="col-md-12 about-division">
        <hr class="hr-style center" style="--content:'</>';">
        <h3 class="text-center" style="margin-bottom: 4rem; margin-top: 3rem;">PORTFOLIO</h3>
    </div>
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