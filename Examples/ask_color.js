async function main() {

    var color = await ask("What's your favorite color?");

    write("I love "+color+"!", color);

};
