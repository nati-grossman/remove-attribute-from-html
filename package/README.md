# Remove Attribute From HTML

A TypeScript library that provides functionality to remove specified attributes from HTML tags in a given HTML string.

## Features

- Written in TypeScript for better type safety and developer experience
- Removes specified attributes from HTML tags while preserving the rest of the HTML structure
- Handles both single and double quotes in attribute values
- Normalizes the resulting HTML using html-space-cleaner
- Fully tested with Jest
- Comprehensive TypeScript type definitions

## Installation

```bash
npm install remove-attribute-from-html
```

## Usage

```typescript
import { RemoveAttributesFromHTML } from "remove-attribute-from-html";

const html =
  '<div class="container" id="main" style="color: red;">Hello World</div>';
const attributesToRemove = ["class", "style"];

const result = RemoveAttributesFromHTML(html, attributesToRemove);
// Result: '<div id="main">Hello World</div>'
```

## API

### RemoveAttributesFromHTML

```typescript
function RemoveAttributesFromHTML(html: string, attributes: string[]): string;
```

#### Parameters

- `html` (string): The HTML string to process
- `attributes` (string[]): An array of attribute names to remove

#### Returns

- (string): The HTML string with specified attributes removed

## Development

This project is written in TypeScript and uses Jest for testing.

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
