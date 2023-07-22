---
layout: "../../layouts/BlogPostLayout.astro"
title: Using new CSS feature, clamp().
date: 2022-12-09
author: Matteo Manià
image: {
  src: "/images/post-4.jpg",
  alt: "A picture of a coder",
}
description: The global css file for this site is a bit different than I’d write things normally, but I’m trying to keep you from having to write a bunch of random classes.
draft: false
category: CSS
---

<h2>Basic example</h2>

```css
  p {
    font-size: clamp(1rem, 3vw, 2rem)
  }
```
output:
<p style="font-size: clamp(1rem, 3vw, 2rem)">
 I am responsive!
</p>