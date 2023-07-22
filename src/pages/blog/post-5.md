---
layout: "../../layouts/BlogPostLayout.astro"
title: How To Center Vertically In CSS
date: 2022-12-05
author: Matteo Manià
image: {
  src: "/images/post-5.jpg",
  alt: "A picture of a coder",
}
description: Center vertically in CSS is a little bit weird sometimes, but in this case wouldn't not!
draft: false
category: Reference Docs
---

<h2>
  Basic example
</h2>

```html
  <div class="parent">
    <div class="child"></div>
  </div>
```

```css
  .parent {
    position: relative;
    height: 300px;
    width: 300px;
    background-color: lightblue;
  }

  .child {
    position: absolute;
    top: 100px;
    left: 100px;
    height: 100px;

    width: 100px;
    background-color: yellow;
  }
```

<p style="padding: 3rem 0 0 0;">↓ ↓ ↓</p>

## final result: 

<div style="height: 300px; position: relative; width: 300px; background-color: lightblue;">
  <div style="height: 100px; position: absolute; top: 100px; left: 100px; width: 100px; background-color:yellow"></div>
</div>