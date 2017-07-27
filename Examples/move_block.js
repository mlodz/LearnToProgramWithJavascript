async function main() {

    var canvas = createCanvas();

    let x = 0;
    while(x < 20) {
	// draw a green block
	canvas.draw(x, 10, 'green');
	// erase the previous block by drawing it white
	canvas.draw(x-1, 10, 'white');

	// move to the right one more space
	x = x + 1;

	// slow down
	await pause(300);
    }
};
