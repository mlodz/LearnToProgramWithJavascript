async function main() {

    var lower = 1;
    var upper = 5;
    var secret = random(lower, upper);
    var guess;

    write("I am thinking of a number between "+lower+" and "+upper+".");

    while(guess != secret) {
	var guess = await ask("number?");
    }
    write("You got it!");

};
