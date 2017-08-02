# Lesson 5 - The if Statement

In this lesson, I'll introduce you to `ask`, which is a funcion that asks the user (that's you!) for input. `ask` does something special; it stops the rest of the code from running until somebody types a value and hits enter. Because this function *waits*, we need to use the special word `await`. And the function returns a value, which can be assigned to a variable.

Type out this code to see what it does. Once you have run it, comment each line so you undertstand what is happening.

```javascript
async function main() {

    var name = await ask("Hello, what is your name?");

    if (name == "Daylon") {
        write("Hello, Daylon! You're doing a great job!");
    } else if(name == "Steve") {
        write("Steve, lookin' good!");
    } else {
        write(`Hello ${name}, it is nice to meet you`);
    }

}
```
## Study Drills
1. The code checks if `name` is "Daylon" or "Steve" and prints a special message. Can you figure out how to add more names? Try and add "Jasmine" and "Lotus", and write a special message for them. BONUS: Add your Dad's name, and include the message `write("Why does Uncle Steve always beat you at chess?")`

[Next Lesson](Lesson 06.md)
