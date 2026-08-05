# CSS Bounce Animation

A simple CSS animation demo where a ball bounces diagonally inside a bordered container using pure CSS `@keyframes`.

## Demo
A magenta circle labeled "O" moves left-to-right continuously while bouncing up and down, creating a ball-bounce effect — all done without JavaScript.

## How it works
- `.contain` — the bounding box (800x600px) the ball moves within.
- `.item` — the ball itself, animated using two separate keyframe animations:
  - `moveX` — moves the ball horizontally (left to right, alternating), over 2.5s, linear.
  - `moveY` — moves the ball vertically (bounce effect), over 500ms, ease-out, alternating.
- Combining a slow linear horizontal animation with a fast eased vertical one creates the bouncing diagonal motion.

## Tech used
- HTML5
- CSS3 (`@keyframes`, `position: absolute`, `animation` shorthand)

## Run it
Just open `index.html` in any browser — no dependencies needed.