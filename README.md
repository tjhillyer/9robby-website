# 9Robby — Podcast Brand Website with Shopping Cart

A responsive, multi-page website for 9Robby, a podcast brand, built from scratch with HTML, CSS, and JavaScript.

**Live site:** https://tjhillyer.github.io/9robby-website/

Final project for Advanced Web Design, Rutgers University (2022).

## Features

- **Pages:** Home, About, Podcasts (with an age-verification gate), Shop, Links, and Team
- **Interactive shopping cart** (`js/shop.js`)
  - Four products, each with an image, name, price, and "Add to Cart" button
  - Items are added to the cart dynamically, with a quantity, a subtotal, and a "Remove" button
  - A live summary updates the item count and total price on every change
  - The cart is saved to the browser's `localStorage`, so it survives a page refresh
- **Responsive layout:** custom CSS with Flexbox and CSS Grid, plus media queries for desktop, tablet, and phone widths
- **Animated background:** starfield built with [particles.js](https://github.com/VincentGarreau/particles.js/)

## Project structure

```
index.html                 Home page
css/                       Reset, site-wide, and shop styles
js/shop.js                 Shopping cart logic and localStorage
js/verifyage.js            Age gate for the Podcasts page
website-project/pages/     About, Podcasts, Shop, Links, Team pages
website-project/assets/    Logos and images
particles.js / .json       Background animation library and config
```

## Run it locally

No build step is needed. Open `index.html` in a browser, or serve the folder with any static server.

## Tools

HTML5 · CSS3 · JavaScript · Flexbox · CSS Grid · localStorage · particles.js
