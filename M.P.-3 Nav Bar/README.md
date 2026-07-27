# UltraEdit Navbar Clone (Flexbox Practice)

A recreation of the UltraEdit website navbar, built as a Flexbox practice exercise.

## 🎯 Goal

Replicate the layout of a real-world navbar — announcement bar + main nav with logo, links, and action buttons — using only Flexbox for positioning.

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox)
- Google Fonts (Poppins)

## 📐 Layout Breakdown

- **Announcement bar** (`.yellow`) — full-width banner, centered text.
- **Main nav** (`.nav`) — flex container split into three sections using `auto` margins:
  - `.main` — logo (pushed left via `margin-right: auto`)
  - `.nav-item` — nav links (Products, Buy, Renew, Support, Learn, Company), sitting in the middle
  - `.logo` — Download button + search icon (pushed right via `margin-left: auto`)

## 📝 What I Learned

- Using `auto` margins on flex children as an alternative to `justify-content: space-between` for spreading out groups.
- Grouping related items in their own flex container instead of relying on the parent for all spacing.
- Resetting default button styles (`cursor`, `outline`) so a `<button>` blends into a custom design.
- Using semantic elements (`<button>` instead of `<div>`) for interactive UI.

## 🚀 Possible Improvements

- Add hover states for links and the Download button.
- Make it responsive for smaller screens (currently fixed for desktop width).
- Swap placeholder screenshots for actual SVG/PNG assets.

## 📸 Reference

Designed to match the navbar from [ultraedit.com](https://www.ultraedit.com).