---
layout: default
title: DevNote
permalink: /devnote/
---

<h3 style="margin-bottom: 2rem; margin-top: 3rem;">개발 노트</h3>
<div class="row" >
{%- for category in site.categories -%}
	{%- for post in category[1] -%}
	{%- if post.categories[0] == 'devnote' -%}
	<div class="card col-md-12">
		<a href="{{ post.url | relative_url }}">
			<div class="card-body">
				<h4 style="color: black;">{{ post.title | escape }}</h4>
				<div class="tag-group">
					{%- for tag in post.tags -%}
					<span class="tag badge badge-pill badge-primary">{{ tag }}</span>
					{%- endfor -%}
				</div>
			</div>
		</a>
	</div>

	{%- endif -%}
	{% endfor %}
{%- endfor -%}
</div>