# Lesson 8: For Loop

A for loop is a JavaScript statement that lets you count. Using for loops gives you an incredible amount of power when coding. Try the following code.

```javascript
    // This is a "for loop"
    for(var count = 0; count < 10; count = count + 1) {
        write(count)
    }
```

Run this code. What is the output? Can you take a guess at what is happening?

If you consider the code above, you'll see some things we've done earlier. You'll notice `var count = 0` from an earlier lesson; we are initializing the variable `count` and assigning it a value of 0. Try changing the value to 5, then run the code again. How did the output change?

You'll also see `count < 10`. What happens if you change the 10 to a 20? Run the code and find out.

Take a look at `count = count + 1`, try changing the `1` to a `2`, and see what happens.

By trial and error, you may have figured out how this loop works, but let me explain a bit anyway. More generally, a for loop will look like this:
```
    for([START NUMBER]; [END NUMBER]; [INCREMENT]) {
        [CODE]
    }
```

A for loop takes a variable and changes its value from one number to another number, and on each value it runs a block of code. The [START NUMBER] initializes the variable and assigns it the first value. In our first example, the variable `count` is set to 0. Then [CODE] is run, which in our examples writes the value of `count`. Then [INCREMENT] is run, which in our example increases the value of `count` by 1. Now, if the [END NUMBER] condition is true (if `count < 10`) then the [CODE] will run again. Then we repeat until [END NUMBER] is no longer true (which will happen when count becomes 10).

Here's another example. Before you run the code, can you predict what it will output?

```javascript
    for(var count = 100; count < 120; count = count + 5) {
        write(count)
    }
```

Was your prediction right? Question: What happens if you change `count < 120` to `count <= 120`? Can you explain what the difference is?

Here's another example, though this time we are counting backwards! Also notice that the variable does not have to be `count`, we can use any variable we want.

```javascript
    for(var x = 10; x > 0; x = x - 1) {
        write(x)
    }
```

I also need to point out that inside the for loop, you can write as many lines of code as you want. You can use if statements, `ask`, math, or any other things we've learned. You could even put a for loop inside a for loop!


### Study Drills
1. Write a loop that writes the numbers 12 to 19, like this:
```
12
13
14
15
16
17
18
19
```
2. Write a loop that writes all odd numbers between 0 and 100.
3. Write a loop that writes the following pattern
```
133
126
119
112
105
98
91
84
77
70
63
56
49
42
35
28
21
```
4. FizzBuzz. Write a loop that writes the numbers 1 to 20, except, if the number is evenly divisible by 3, write "fizz". If the number is evenly divisible by 5, write "buzz". If the number is divisible by *both* three and five, write "FIZZBUZZ". Here is how the output should look:
```
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
FIZZBUZZ
16
17
fizz
19
buzz
```

5. Write a loop that writes the following output. (Hint: keep multiplying by 2).
```
1
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
```

6. Write a loop that writes the following output. (Hint: use `write` twice inside the loop)
```
10
11
20
21
30
31
40
41
50
51
```

7. What is the sum of all numbers 1 to 100? (That is, 1 + 2 + 3 + ... + 99 + 100)

8. BONUS: Write a loop (or multiple loops) that writes the following output.
```
1 times 1 is 1
1 times 2 is 2
1 times 3 is 3
1 times 4 is 4
2 times 1 is 2
2 times 2 is 4
2 times 3 is 6
2 times 4 is 8
3 times 1 is 3
3 times 2 is 6
3 times 3 is 9
3 times 4 is 12
4 times 1 is 4
4 times 2 is 8
4 times 3 is 12
4 times 4 is 16
```

[Next Lesson](Lesson_09.md)

[Table of Contents](ToC.md)
