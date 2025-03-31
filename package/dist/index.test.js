"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="jest" />
const index_1 = require("./index");
describe("RemoveAttributesFromHTML", () => {
    test("should remove specified attributes from HTML tags", () => {
        const html = '<div class="container" id="main" style="color: red;">Hello World</div>';
        const attributes = ["class", "style"];
        const expected = '<div id="main">Hello World</div>';
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle multiple tags with attributes", () => {
        const html = '<div class="container"><p style="color: blue;">Text</p></div>';
        const attributes = ["class", "style"];
        const expected = "<div><p>Text</p></div>";
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle attributes with single quotes", () => {
        const html = "<div class='container' style='color: red;'>Hello World</div>";
        const attributes = ["class", "style"];
        const expected = "<div>Hello World</div>";
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle mixed quote types", () => {
        const html = "<div class=\"container\" style='color: red;'>Hello World</div>";
        const attributes = ["class", "style"];
        const expected = "<div>Hello World</div>";
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle empty attributes array", () => {
        const html = '<div class="container" style="color: red;">Hello World</div>';
        const attributes = [];
        const expected = '<div class="container" style="color: red;">Hello World</div>';
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle HTML with no attributes to remove", () => {
        const html = '<div class="container" style="color: red;">Hello World</div>';
        const attributes = ["id", "data-test"];
        const expected = '<div class="container" style="color: red;">Hello World</div>';
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    // New test cases
    test("should handle self-closing tags", () => {
        const html = '<img src="image.jpg" alt="description" class="image" />';
        const attributes = ["class"];
        const expected = '<img src="image.jpg" alt="description" />';
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle attributes without values", () => {
        const html = '<input type="text" disabled class="form-control" />';
        const attributes = ["disabled", "class"];
        const expected = '<input type="text" />';
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle empty HTML string", () => {
        const html = "";
        const attributes = ["class", "style"];
        const expected = "";
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle complex nested HTML", () => {
        const html = `
      <div class="container" data-test="value">
        <p class="text" style="color: blue;">Hello</p>
        <span class="highlight" data-test="test">World</span>
      </div>
    `;
        const attributes = ["class", "data-test"];
        const expected = `
      <div>
        <p style="color: blue;">Hello</p>
        <span>World</span>
      </div>
    `;
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
    test("should handle case-insensitive attribute names", () => {
        const html = '<div CLASS="container" Style="color: red;">Hello World</div>';
        const attributes = ["class", "style"];
        const expected = "<div>Hello World</div>";
        expect((0, index_1.RemoveAttributesFromHTML)(html, attributes)).toBe(expected);
    });
});
