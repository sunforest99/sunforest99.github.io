---
layout: default
title: DevNote
permalink: /devnote/
---

<h3>Project</h3>
<div class="row justify-between" >
{%- for category in site.categories -%}
	{%- for post in category[1] -%}
	{%- if post.categories[0] == 'devnote' -%}
	<div class="card category-card">
		<h4 class="category-text">{{ post.title | escape }}</h4></a>
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