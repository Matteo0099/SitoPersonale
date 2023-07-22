---
layout: "../../layouts/BlogPostLayout.astro"
title: Dialog feature in HTML
date: 2023-6-20
author: Matteo Manià
image: {
  src: "/images/post-1.jpg",
  alt: "A picture of a coder",
}
description: This is a new feature of HTML, introduced not much years ago.
draft: false
category: Reference Docs
---

<!-- content -->
<h2 class="postH2">
  Modals Will Never Be The Same  
</h2>

Modals have been a part of web development for decades now, but they have always been a bit of a pain to work with. The main reason modals have been such a pain is because it is difficult to make a truly accessible modal that conforms to all accessibility standards. This is why the new HTML dialog element is so exciting. The dialog element makes it so much easier to create accessible modals, and in this article I will explain everything you need to know about the dialog element to use it in your next project.


<h2 class="postH2">
  What Is A Dialog/Modal?  
</h2>

A dialog/modal is simply a popup that appears on top of the current page. The main difference between a dialog and a modal is that a modal is supposed to take complete priority over the page and prevent the user from interacting with the page until the modal is closed while a dialog, is just a popup that doesn’t take complete priority over the page and should allow the user to interact with the page while the dialog is open.


<h2 class="postH2">
  Lets'see this example
</h2>

```html
<dialog open>
  <span>You can see me</span>
</dialog>
```

```js
const dialog = document.querySelector("dialog")
  dialog.show() // Opens a non-modal dialog
  dialog.showModal() // Opens a modal
```

<h2 class="postH2">
  Close on outside click
</h2>

```js
dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})
```

<h2 class="postH2">
  Quick dialog example practice:
</h2>

<div>
  <button class="modal-btn" style="width: 125px; border: 1px solid #999;">Open</button>
  <dialog style="display: none; border-radius:8px;">
    <form style="border-radius:8px; background-color: #202020; color: #fefefe; font-size: 18px;" action="none">
      <input type="text" style="background-color: #fefefe; color: #202020;min-height: 50px;" />
      <button formmethod="dialog" type="button" style="padding: .25em .5em; font-size: inherit; cursor: pointer; width: 100%;appearence: none; color: #fefefe; background-color: #202020;">Cancel</button>
      <button style="padding: .25em .5em; font-size: inherit; cursor: pointer; width: 100%;appearence: none; color: #fefefe; background-color: #202020;" type="submit">Submit</button>
    </form>
  </dialog>
</div>
