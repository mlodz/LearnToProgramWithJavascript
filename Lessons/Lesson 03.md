# Lesson 3: Variables

Now you can write things with `write` and you can do math. The next step is to learn about variables. In programming a variable is nothing more than a name for something. Programmers use these variable names to make their code read more like English, and because they have lousy memories. If they didn't use good names for things in their software, they'd get lost when they tried to read their code again.

Type all of the following code. DO NOT COPY AND PASTE, it is important to learn to type code. Practive makes perfect.


```javascript
async function main() {
      
      // Initialize a variable
      var apples;

      // You have 5 apples
      apples = 5
      write(apples)

      // You eat 2 apples
      apples = apples - 2
      write(apples)

}
```

When you use a variable, you should initialize it. Do this with the `var` keyword. If you haven't figured it out, "var" stands for "variable". Once you have a variable, you can assign a value to it. Here, we assign the value `5` to the variable `apples`. Then, we assign the value `apples - 2` to apples (which is 3).

Type the code below. Can you predict what this code will write?

```
      var dog; // initialize a variable
      dog = "Newton" // assign a value to the variable
      write(dog + " is a good dog!")

      // you can also initialize and assign a variable at the same time
      var money = 20
      money = money * 2
      money = money + 50
      money = money * 3
      write("I wish I had this much money")
      write("$" + money)

```

## Notes
1. `var` stands for "variable". When you first use a variable, you should use `var`, but if you use it again, you don't need it.
2. What is the difference between `=` and `==`? The `=` (single-equal) assigns the value on the right to a variable on the left. The `==` (double-equal) tests if two things have the same value. 
3. You'll notice a variable can be a number or a string. What's a string? It's what we call something like this: `"Newton"`. A string can use single quotes or double quotes. Here are some examples:
 - double quoted string: `"Newton is a dog."`
 - single quoted string: `'Newton is awesome!'`
 - You use strings when you write: `write('Newton says woof!')`
 - And you can even add strings: `write("Newton " + "is cool")`

## Study Drills
1. Write a comment above each line, explaining what it does.
2. Jack has 12 apples. Jack eats one apple a day. Jack has a sister, who eats 2 apples a day. After 3 days, how many apples remain? Use variables to keep track of these numbers.
3. There's another type of string you can use. There's a character called a backtick; look at your keyboard, it is to the left of `1` and above `tab`. Notice how we use backticks in the example below.
```javascript
    var person = "Daylon";
    var adjective = "cool";
    write(`I think ${person} is ${adjective}`);
```
  - Using strings with backticks allow you to insert variable values.
  - If you try with double quotes or single quotes, what happens?
4. Write a Mad-Libs story using variables and backtick strings. Use names, places, actions, and adjectives to make the story descriptive. Ask a friend or family member to help you assign the variables.

[Next Lesson](Lesson 04.md)
