window.onload = function() {
    function insert_script() {
	var script = document.createElement('script');
	script.src = 'project.js';
	script.onload = function () {
	    try {
		main();
	    } catch (e) {
		console.log("CATCH RUNTIME ERROR:", e);
	    }
	};
	document.head.appendChild(script);
    }
    try {
	eval("insert_script()");
    } catch (e) {
	console.log("try catch insert script, e:", e);
    }
};
