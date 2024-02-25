
# remove-attribute-from-html

This NPM package provides a versatile function for sanitizing HTML strings 🧼. Given a string of HTML and an array of attribute names, the function efficiently removes all occurrences of these attributes from the HTML string, ensuring that the output is safe and free of unwanted attributes 🔒. The function preserves the original structure and styling of the HTML 💻. This package is ideal for developers looking to enhance the security and cleanliness of their HTML content effortlessly 👌.



## API

The function removeAttributesFromHTML takes two parameters: 
- html: which is a string representing the HTML content.
- attributes: which is an array of strings containing the attributes to be removed. 

The function returns a string representing the modified HTML content with the specified attributes removed.

## Install

```
$ npm install remove-attribute-from-html
```

## Examples

#### Example 1
```js
const { RemoveAttributesFromHTML } = require('remove-attribute-from-html');

let html = `<div class="container-fluid bg-primary p-3" data-custom="example" style="font-size: 24px;">
                <p style="border: 2px solid black;" class="text-center font-weight-bold">Hello, World!</p>
            </div>`;
let cleanedHTML = RemoveAttributesFromHTML(html, ['class', 'style']);
```
The resulting cleanedHTML string contains the same HTML structure but without the `class` and `style` attribute removed from both the  `<div>` and `<p>` tags.

#### Example 2
```js
const { RemoveAttributesFromHTML } = require('remove-attribute-from-html');

let html = `<div class="container-fluid bg-primary p-3" data-custom="example" style="font-size: 24px;">
                <p style="border: 2px solid black;" class="text-center font-weight-bold">Hello, World!</p>
            </div>`;
let cleanedHTML = RemoveAttributesFromHTML(html, ['data-custom', 'style']);
```
The resulting cleanedHTML string contains the same HTML structure but without the `data-custom` and `style` attribute removed from both the `<div>` and `<p>` tags.

#### Example 3
```js
const { RemoveAttributesFromHTML } = require('remove-attribute-from-html');

let html = `<div class="container-fluid bg-primary p-3" data-custom="example" style="font-size: 24px;">
                <p style="border: 2px solid black;" class="text-center font-weight-bold">Hello, World!</p>
            </div>`;
let cleanedHTML = RemoveAttributesFromHTML(html, ['style']);
```
The resulting cleanedHTML string contains the same HTML structure but without the `style` attribute removed from both the `<div>` and `<p>` tags.

