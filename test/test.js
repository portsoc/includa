test("pre", 1,
	function() {
		var pres = document.querySelectorAll("pre");
		equal( pres.length , 7, "There should be 4 pre-elements after the test." );
	}
);
test("iframe", 1,
	function() {
		var frames = document.querySelectorAll("iframe");
		equal( frames.length , 1, "There should be 1 iframe-element after the test." );
	}
);
