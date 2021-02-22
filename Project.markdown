---
layout: default
title: project
permalink: /project/
---

<h3>Project</h3>
<div class="row justify-between" >
{%- for category in site.categories -%}
	{%- for post in category[1] -%}
	{%- if post.categories[0] == 'project' -%}
	<div class="card category-card">
		<a href="{{ post.url | relative_url }}">
			<img src="/assets/img/head-img/{{ post.headerImg }}" class="card-img-top"/>
		</a>
		<a class="card-body" href="{{ post.url | relative_url }}"><h4 class="category-text">{{ post.title | escape }}</h4></a>
		<div class="tag-group">
			{%- for tag in post.tags -%}
			<span class="tag badge badge-pill badge-primary">{{ tag }}</span>
			{%- endfor -%}
		</div>
	</div>
	{%- endif -%}
	{% endfor %}
{%- endfor -%}
</div>