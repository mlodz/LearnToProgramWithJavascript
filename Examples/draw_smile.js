async function main() {

    var canvas = createCanvas();

    // Draw left eye
    canvas.draw(7, 5, 'blue')
    // Draw right eye
    canvas.draw(14, 5, 'blue')

    // Draw smile
    canvas.draw(7, 10, 'blue')
    canvas.draw(8, 11, 'blue')
    canvas.draw(9, 12, 'blue')
    canvas.draw(10, 12, 'blue')
    canvas.draw(11, 12, 'blue')
    canvas.draw(12, 12, 'blue')
    canvas.draw(13, 11, 'blue')
    canvas.draw(14, 10, 'blue')
};
