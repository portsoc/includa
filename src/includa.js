Array.prototype.ppush = function(x) {
	this.push("<p>");
	this.push(""+x);
	this.push("</p>");
};

var rdfx = rdfx || {};

rdfx.includa = (
	function () {
		"use strict";

		var
		createAnchor = function (text, link) {
			var a = document.createElement('a');
			a.innerHTML = text;
			a.href= link;
			a.setAttribute("class", "sourcelink");
			return a;
		},

		ajaxLoad = function(url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, false);
			xhr.onload = callback;
			xhr.send();
		},

		includeSource = function (target) {

			var loaded = function () {

				// escape the script
				var
				u = new Date().getTime(),
				append = [],
				content = this.responseText.replace(/&/g, "&amp;");

				content = content.replace(/</g, "&lt;");
				content = content.replace(/>/g, "&gt;");
				content = content.replace(/\t/g, "	");
				
				append.push( "<pre class='includa-input'>" );
				append.push( content );
				append.push( "</pre>" );

				if (target.dataset.includaInterpret !== 'false') {
					if (target.dataset.includaLang === 'js') {
						append.push( "<pre class='includa-output'>" );
						var source = this.responseText;
						source = source.replace( new RegExp("document.write", "gi") , "append.ppush" );
						source = source.replace( new RegExp("console.log", "gi") , "append.ppush" );
						console.log(source);
						try {
							eval(source);
						} catch (e) {
							append.ppush( e.message );
						}
						append.push( "</pre>" );
					} else {
						append.push( "<iframe id='"+u+"' onload='rdfx.includa.resizer("+u+");' seamless height=1 class='includa-output' src='" );
						append.push( target.dataset.includaUrl );
						append.push( "'></iframe>" );
					}
				}

				append.push( "<p class='includa-sourcelink'>Source: <a href='"+target.dataset.includaUrl + "'>" + target.dataset.includaUrl + "</a></p>");

				target.innerHTML += append.join("");

			};

			ajaxLoad(target.dataset.includaUrl, loaded);
		},


		resizer = function (id){
			var fr,h;
			fr = document.getElementById(id);
			h = fr.contentWindow.document.body.scrollHeight;
			fr.height = h + "px";
		},

		// search through the DOM for elements that have a data-includaUrl
		// attribute. The url specified therein is passed to a loader
		// function of inclusion in the page.
		go = function() {
			var targets = document.querySelectorAll("*[data-includa-url]");
			Array.prototype.slice.call(targets).map( includeSource );
			return true;
		};

		// public methods
		return {
			go: go,
			resizer: resizer
		};
	}
());

if (window) {
	window.addEventListener('load', rdfx.includa.go, false);
}


