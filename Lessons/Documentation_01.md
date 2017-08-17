# Documentation

## write
`write` is a function that displays text on the screen. It takes two arguments. The first argument is the text to display. The second argument, which is optional, is the color.

#### Examples

```
write('Hello');
write('This is a color', 'Yellow');
```


## ask

`ask` is a function that waits for user input, and assigns the input to a variable. It takes one argument, which is displays on the screen.

Because `ask` stops the program to wait for input, you must use the `await` keyword.

#### Examples

```
var name = await ask("What is your name?");
var age = await ask("How old are you?")
```


## pageTitle
`pageTitle` title will set the title of the page. It takes an optional second argument, a color.

#### Examples
```
pageTitle("Cool Stuff", "orange");
```

## pageColor
`pageColor` will set the page's background color.

#### Examples
```
pageColor("pink");
```

## random
`random` is a function that takes two numbers as arguments and returns a random number between them.

```javascript
random(1, 10)
```