window.onload = function() {
    function insert_script() {

	let script_name =  new URL(window.location.href).searchParams.get("name")
	script_name = script_name || 'project'
	script_name += '.js'
	
	var script = document.createElement('script');
	//script.src = 'project.js';
	script.src = script_name;
	script.onload = function () {
	    try {
		main();
	    } catch (e) {
		console.log("Catch Runtime Error:", e);
	    }
	};
	document.head.appendChild(script);
    }
    try {
	eval("insert_script()");
    } catch (e) {
	console.log("Try Catch Insert Script, error:", e);
    }
};
