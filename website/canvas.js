// showCanvas should return an object with methods and attributes on it, so that
// later we can use the real canvas, and it will be similar
// add ability to write text

var makeEasyCanvas = function(initWidth) {
    var pixel_width = 500;
    var pixel_height = 500;
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
    var write_canvas = function(text, x, y, size, color) {

	size = size || 20
	canvas.fillStyle = color || 'black';
	canvas.font = `${size}px serif`;
	canvas.fillText(text, x*block_width, (y+1)*block_height);
    }
    var drawImage = function(src, x, y, scale) {
	// src can be a full http url or like 'website/icons/thing.png'
	if (!scale) {
	    scale = 1;
	}
	// more demo icons here
	// http://findicons.com/pack/1072/face_avatars
	var img = new Image;
	img.onload = function() {
	    canvas.drawImage(
		img,
		0, // source x (for clipping)
		0, // source y (for clipping)
		this.width, // source width
		this.height, // source height

		x*block_width, // destination x
		y*block_height, // destination y

		this.width * scale, // destination width
		this.height * scale, // destination height
	    )
	}
	img.src = src
    }

    var showCanvas = function() {
	$('#canvas').show();
	$('body').addClass('canvas');
    };
    var hideCanvas = function() {
	$('#canvas').hide();
	$('body').removeClass('canvas');

    };

    showCanvas();

    return {
	draw: draw,
	drawImage: drawImage,
	// text is pixelated, not sure how to make it "easy"
	write: write_canvas,
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
