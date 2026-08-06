# Faulty Calculator

A simple browser-based calculator built with vanilla JavaScript — with a twist. Most of the time it works correctly, but there's a small chance it deliberately gives you the wrong answer by swapping the operator.

## How it works

1. Prompts the user for two numbers and an operation (`+`, `-`, `*`, `/`).
2. Generates a random number between 0 and 1.
3. If the random number is greater than `0.1` (90% chance), it computes the result normally.
4. If the random number is `0.1` or less (10% chance), it swaps the operator using a lookup map before computing:
   - `+` → `-`
   - `*` → `+`
   - `-` → `/`
   - `/` → `*`
5. Displays the result in an alert.

## Files

- `index.html` — loads the script.
- `script.js` — contains all the calculator logic.

## How to run

Open `index.html` in a browser. You'll be prompted for two numbers and an operator, then shown the result via `alert`.