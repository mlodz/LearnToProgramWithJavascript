async function run_code() {

    display("Hello    world! It's good to see you");
    showCanvas();

    await pause(1);
    display("Hello    world! It's good to see you");

    var on = true;
    var blah = true;
    for(var x = 0; x < 20; x++) {
	on = (x % 2 == 0);
	for (var y = 0; y < 20; y++) {
	    if(on) {
		draw(x, y, blah ? 'black' : 'blue');
	    }
	    on = !on;
	}
    }

    
    /* draw(0, 0, 'red');
     * draw(1, 1, 'blue');
     * draw(1, 1, 'blue');
     * draw(19, 19, 'blue');*/

    var ask_color = async function() {
	var col = await input("What's your favorite color?");
	change_color(col)
	display("You said: " + col);
	change_color('black');
    }

};
run_code();

/*
   There are functions, and async functions.
   input is an async function, and any function which uses input must also be an async function.
   For now, just think of an async function as any function that will wait for you.
 */
