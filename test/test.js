test("pre", 1,
	function() {
		var pres = document.querySelectorAll("pre");
		equal( pres.length , 2, "There shoudl be 2 pre-elements after the test." );
	}
);
test("iframe", 1,
	function() {
		var frames = document.querySelectorAll("iframe");
		equal( frames.length , 1, "There shoudl be 1 iframe-element after the test." );
	}
);