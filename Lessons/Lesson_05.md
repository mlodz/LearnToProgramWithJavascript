# Lesson 5 - User Input

In this lesson, I'll introduce you to `ask`, which is a function that asks the user (that's you!) for input. `ask` does something special; it stops the rest of the code from running until somebody types a value and hits enter. Because this function *waits*, we need to use the special word `await`. And the function returns a value, which can be assigned to a variable.

Type out this code to see what it does. Once you have run it, comment each line so you undertstand what is happening.

```javascript
async function main() {

    var name = await ask("What is your name?");
    write(`Hi ${name}!`)

}
```

Try another example.

```javascript
async function main() {

    var name = await ask("What is your name?");

    if (name == "Daylon") {
        write("Hello, Daylon! You're doing a great job!");
    } else if(name == "Steve") {
        write("Steve, lookin' good!");
    } else {
        write(`Hello ${name}, it is nice to meet you`);
    }

}
```

It works with numbers, too.

```
async function main() {

    var a = await ask("Give me a number!");
    var b = await ask("Give another number!");
    var answer = a + b
    write(`${a} plus ${b} is ${answer}`)

}
```

[Next Lesson](Lesson_06.md)
