async function main() {

    /*
      gimme - draw checkerboard, light blue
      ask - draw checkerboard, light grey
      gimme - write letters across top of board
      ask - write numbers across side of board
      gimme - intro message


     */


    pageTitle("Battleship")
    let canvas = createCanvas(10);
    // create checkerboard pattern
    var odd = true;
    for (var y=0; y < 20; y++) {
	odd = y % 2 == 0;
	for (var x=0; x < 20; x++) {
	    odd = !odd;
	    if (odd) {
		canvas.draw(x, y, "lightblue");
	    }
	}
    }
    odd = true
    for (var y=0; y < 20; y++) {
	odd = y % 2 == 1;
	for (var x=0; x < 20; x++) {
	    odd = !odd;
	    if (odd) {
		canvas.draw(x, y, "CORNFLOWERBLUE");
	    }
	}
    }


    // write letters and numbers
    let color = 'black';
    let size = '30';
    canvas.write("A", 1, 0, size, color)
    canvas.write("B", 2, 0, size, color)
    canvas.write("C", 3, 0, size, color)
    canvas.write("D", 4, 0, size, color)

    canvas.write("1", 0, 1, size, color)
    canvas.write("2", 0, 2, size, color)
    canvas.write("3", 0, 3, size, color)
    canvas.write("4", 0, 4, size, color)




    write("I have hidden a battleship on the board. Can you find it?")
    write("Choose a letter and a number to attack the grid");

    // declare some variables to use later
    var target, positino, is_hit, did_i_win;
    did_i_win = false;
    target = {x: 2, y: 3};

    // REQUIRED: should teach objects first, for target position {x:1, y:2}
    // REQUIRED: teach more bools, like !
    // REQUIRED: teach functions, with arguments and return values

    while(!did_i_win) {
	position = await ask_position(target.x, target.y)

	if (target.x == position.x && target.y == position.y) {
	    is_hit = true;
	} else {
	    is_hit = false;
	}

	if (is_hit) {
	    canvas.draw(position.x, position.y, "green");
	    write("You Hit it!");
	    did_i_win = true;
	} else {
	    canvas.draw(position.x, position.y, "red");
	    write("You missed");
	}
    }

    write("Good job! You won!");

    // how to keep track of hits


}
async function ask_position() {
    // ask for input
    var letter = await ask("Letter:")
    var letter_number = 1;
    if (letter == "a") {
	letter_number = 1;
    }
    if (letter == "b") {
	letter_number = 2;
    }
    if (letter == "c") {
	letter_number = 3;
    }
    if (letter == "d") {
	letter_number = 4;
    }

    var number = await ask("Number:")

    return {x: letter_number, y: number}




}
