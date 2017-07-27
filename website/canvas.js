// showCanvas should return an object with methods and attributes on it, so that
// later we can use the real canvas, and it will be similar
// add ability to write text

var makeEasyCanvas = function(initWidth) {
    console.log("make");
    var pixel_width = 200;
    var pixel_height = 200;
    var horizontal_block_count = initWidth;
    var vertical_block_count = initWidth;

    var block_width = pixel_width / horizontal_block_count;
    var block_height = pixel_height / vertical_block_count;

    var canvas_el = $(document.getElementById("canvas"));
    var canvas = document.getElementById("canvas").getContext('2d');

    var draw = function(x, y, color) {
	if (!color) {
	    color = 'black';
	}
	canvas.fillStyle = color;//'rgba(0, 0, 200, 0.5)';
	canvas.fillRect(x*block_width, y*block_height, block_width, block_height);
    }
    var write_canvas = function(x, y, color) {
	canvas.font = '1empx serif';
	canvas.strokeText('hello world', x*block_width, y*block_height);
    }

    var showCanvas = function() {
	console.log("showCanvas");
	$('#canvas').show();
    };
    var hideCanvas = function() {
	console.log("hideCanvas");
	$('#canvas').hide();

    };
    showCanvas();

    return {
	draw: draw,
	write: write,
	show: showCanvas,
	hide: hideCanvas,
    };
};

window.createCanvas = function(initWidth) {
    if (!initWidth) {
	initWidth = 20;
    }
    return makeEasyCanvas(initWidth);
}

var setup_canvas = function() {
};
setup_canvas();
