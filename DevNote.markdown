---
layout: default
title: DevNote
permalink: /devnote/
---

<h3>DevNote</h3>
<div class="row justify-between" >
{%- for category in site.categories -%}
	{%- for post in category[1] -%}
	{%- if post.categories[0] == 'devnote' -%}
	<a href="{{ post.url | relative_url }}">
		<h4 class="category-text">{{ post.title | escape }}</h4>
		<div class="tag-group">
			{%- for tag in post.tags -%}
			<span class="tag badge badge-pill badge-primary">{{ tag }}</span>
			{%- endfor -%}
		</div>
	</a>
	{%- endif -%}
	{% endfor %}
{%- endfor -%}
</div>