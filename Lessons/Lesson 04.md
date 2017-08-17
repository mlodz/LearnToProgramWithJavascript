# Lesson 4 - the if statement

An important part of any program is the `if` statement. Type out this code to see what it does. 

```javascript
async function main() {

    if (100 < 200) {
        write("One hundred is less than two hundred")
    }

}
```
You should see the message `One hundred is less than two hundred` on the screen.

Now try this. Can you predit what will display?

```
    if (5 > 8) {
        write("Five is greater than eight.");
    }
```

You'll notice that nothing is displayed on the screen because... 5 is not less than 8!

I'll explain what's happening. The first part of the `if` statement is the condition, `100 < 200` and `5 > 8`. If the statement is true, then the portion of the code within the curly braces `{` and `}` will run. Otherwise, it will be skipped.

Try the following code. Can you change the value of `x` so that the code writes `I did it!`.

```
    var x = 10
    if (x < 2) {
        write("I did it!")
    }

```

How about this one?

```
    var x = 10
    if (x > 50) {
        if (x < 60) {
            write("I did it!")
        }
    }

```

You got that? Awesome now we're cruisin'! Let's try something a bit more tricky. In the following code, you'll see an `if-else` statement. If the condition is `true`, then the first block of code runs, and the second block is skipped. If the condition is `false`, then the first block of code is skipped and the second block of code will run. Try changing `x` to different values in the code below. 

```
    var x = 10
    if (x > 50) {
        write("This condition is TRUE")
    } else {
        write("This condition is FALSE")
    }

```
When you have an `if-else` statement, exactly one of the blocks is guaranteed to run. It is impossible for both to run, and impossible for neither to run.

So far we've only been using numbers, but we can also use strings.

```
    var name = "Daylon";
    if (name == "Daylon") {
        write("Hello, Daylon! You're doing a great job!");
    } else {
        write("Hello, who are you?");
    }
```

And if that's not cool enough, you can connect if statements together! Can you change the value of `my_pokemon` to make each of the lines print.

```
    var my_pokemon = 10
    var total_pokemon = 802

    if (my_pokemon < total_pokemon) {
        write("I need to catch more pokemon!")
    } else if (my_pokemon == total_pokemon) {
        write("I have caught every pokemon!")
    } else if (my_pokemon > total_pokemon) {
        write("I have caught too many pokemon? Impossible!")
    }
```

Here's another example. Modify the code so there is a condition for Jasmine and Lotus, and then change the `name` variable to display their birthdays.

```
    var name = "Daylon";
    var birthday

    if (name == "Daylon") {
        birthday = "July 26th"
    } else if(name == "Uncle Steve") {
        birthday = "June 21st"
    } else if(name == "Newton") {
        birthday = "June 26th"
    } else {
        birthday = "unknown"
    }

    write(`${name}'s birthday is ${birthday}.`)
```

[Next Lesson](Lesson 05.md)
