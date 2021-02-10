document.getElementById("dakrmode").onclick = function() {
	var Attribute = document.documentElement.getAttribute('data-theme');
	
	if(Attribute == 'dark') {
		document.documentElement.setAttribute('data-theme', 'light');
	}
	else {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
}
