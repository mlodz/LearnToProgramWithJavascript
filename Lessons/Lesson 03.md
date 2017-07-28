## Lesson 3: Variables and Names

Now you can write things with `write` and you can do math. The next step is to learn about variables. In programming a variable is nothing more than a name for something. Programmers use these variable names to make their code read more like English, and because they have lousy memories. If they didn't use good names for things in their software, they'd get lost when they tried to read their code again.

Type all of the following code. DO NOT COPY AND PASTE, it is important to learn to type code. Practive makes perfect.

```javascript
async function main() {
      
      var name = 'Newton';
      var age = 2;

      write("Who is your favorite dog?")
      write(name)
      write("How old is the dog?")
      write(age)
      
      // I earn 7 dollars an hour
      var wage = 8
      // Money earned after working 6 hours
      var moneyEarned = wage * 8;

      // Legend of Zelda game costs $60
      var priceOfZelda = 60

      write('Can I afford to buy Legend of Zelda?');
      write(moneyEarned >= priceOfZelda);

      // Money earned after working another 6 hours
      moneyEarned = moneyEarned + wage * 6;

      write('Now can I afford to buy Legend of Zelda?')
      write(moneyEarned >= priceOfZelda)

      write('How many hours did I need to work?')
      write(priceOfZelda / wage)

}
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
2. Jack has 12 apples. Jack eats one apple a day. Jack has a sister, who eats 2 apples a day. After 3 days, how many apples remain? Use variables to keep track of these numbers. I recommend using `apple`, `applesEatenPerDay`, and `days`. 
3. There's also one more type of string I haven't mentioned. Try the following:
```javascript
    var minutesPerHour = 60;
    var hoursPerDay = 24;
    var minutesPerDay = hoursPerDay * minutesPerHour;
    write(`There are ${minutesPerDay} minutes in a day!`);
```
  - Using strings with ` allow you to include variables.
  - If you try with double quotes or single quotes, what happens?

[Next Lesson](Lesson 04.md)
