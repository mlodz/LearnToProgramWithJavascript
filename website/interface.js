window.container = document.getElementById("output");

// Write a message
var write = function(msg, color) {
    //var c = window.current_text_color;
    if (!color) {
	color = 'black';
    }
    window.container.innerHTML += "<p class='line' style='color:"+color+"'>" + msg + "</p >";
    console.log(window.container);
    scrollOutputToBottom();
}

// Set the page title
var pageTitle = function(title) {
    $('#page-title').html(title);
    $('h1.title').html(title);
    document.title = title;
}

// Show a message and wait for input, return the input value
async function ask(msg) {
    var id = "input_"+Math.floor(Math.random()*999999999);
    var line = $('<p class="line input">'+msg+'<input type="text" value="" /></p>')
    var input = line.find('input');
    var submitted = false;
    var submitted_value = "";

    $(window.container).append(line).find('input').on('keyup', function(e) {
	// When you hit enter
	if (e.keyCode == 13) {
	    submitted_value = e.target.value;
	    submitted = true;
	    input.replaceWith('<input disabled value="'+submitted_value+'" />');
	}
    }).focus();

    function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function parseIfNumeric(n) {
	if(isNumeric(n)) {
	    return parseFloat(n);
	} else {
	    return n;
	}
    }
    function parseIfJson(str) {
	try {
	    return JSON.parse(str)
	} catch (error) {
	    return str;
	}
    }

    scrollOutputToBottom();

    // Return a promise that resolves when user hits enter on input
    return new Promise(resolve => {
	// Check every 100 ms if input has been submitted
	var interval = setInterval(function() {
	    if(submitted) {
		clearInterval(interval);
		resolve(parseIfJson(submitted_value));
		$('#'+id).val(submitted_value).prop('disabled', true);
	    }
	}, 100);
    });
}

async function pause(milli_seconds) {
    return new Promise(resolve => {
	setTimeout(function() {
	    resolve();
	}, milli_seconds);
    });
}

var random = function(lower, upper) {
    if (lower !==0 && !lower) {
	throw new Error("random("+lower+","+upper+") - You must include two arguments.");
    }
    if (upper !==0 && !upper) {
	throw new Error("random("+lower+","+upper+") - You must include a second argument.");
    }
    if (lower > upper) {
	throw new Error("random("+lower+","+upper+") - The first argument must be less than the second.");
    }
    return lower + Math.floor(Math.random()*(upper - lower+1));
}
var scrollOutputToBottom = function () {
    $('#output').scrollTop($('#output')[0].scrollHeight);

}

window.write = write;
window.pageTitle = pageTitle;
window.ask = ask;
window.pause = pause;
window.random = random;
