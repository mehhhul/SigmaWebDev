# Random Name Generator

A simple browser-based random business name generator built with vanilla JavaScript. It combines a random adjective, business type, and suffix to generate a name.

## How it works

1. Defines three sets of words: adjectives, shop types, and suffixes.
2. Generates three random numbers (0 to 1).
3. Uses each random number to pick one word from each set (roughly equal 1/3 chance for each option).
4. Combines the three picks and displays the result via `alert`.

## Example output

CrazyEngineBros
AmazingFoodsLimited
FireGarmentsHub

## Files

- `index.html` — loads the script.
- `script.js` — contains all the name generation logic.

## How to run

Open `index.html` in a browser. A random business name will pop up in an alert.