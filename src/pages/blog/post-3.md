---
layout: "../../layouts/BlogPostLayout.astro"
title: Responsive CSS Aspect Ratio
date: 2022-12-03
author: Matteo Manià
image: {
  src: "/images/post-3.jpg",
  alt: "A picture of a coder",
}
description: Responsive image is a littel weird to do. some people made a mistake with styling the photo, with some issues with overflow in small devices.  
draft: false
category: CSS
---

<h2> The normal way </h2>
<strong>Using the normal styling responsive</strong>

```css
video, img {
  max-width: 100%;
  height: auto;
}
```


<h2> The simpliest way to make a image responsive </h2>
<strong>Aspect Ratio:</strong>

```css
img {
  max-width: 100%;
  aspect-ratio: 16 / 9;
}
```

<h2> The hardest way </h2> 

```css
img {
  max-width: 100%;
  height: auto;
  aspect-ration: 16 / 9; 
  object-fit: cover;
}
```