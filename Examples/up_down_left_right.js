async function main() {

    // have this be a lesson plan, give away the move left/right, ask daylon t
    // to add up and down

    pageTitle("Move Around")
    pageColor("azure")

    var canvas = createCanvas();


    var x = 5;
    var y = 5;
    var direction;


    while(true) {
	canvas.draw(x, y, 'blue');
	direction = await ask("up, down, left, or right?");
	canvas.draw(x, y, 'lightblue');
	if (direction == 'up') {
	    y = y - 1;
	    write("Move Up");
	} else if (direction == 'down') {
	    y = y + 1;
	    write("Move Down");
	} else if (direction == 'left') {
	    x = x - 1;
	    write("Move Left");
	} else if (direction == 'right') {
	    x = x + 1
	    write("Move Right");
	} else {
	    write("Try Again.");
	}
    }
}
async function ask_question() {
    var left = random(1, 10);
    var right = random(1, 10);
    var answer = left * right;
    var my_answer = await ask(`What is ${left} times ${right} ?`);
    if (my_answer == answer) {
	write("That's right!", 'green');
	correct_answers = correct_answers + 1;
    } else {
	write(`Sorry, the correct answer is ${answer}`, 'red');
    }
}
