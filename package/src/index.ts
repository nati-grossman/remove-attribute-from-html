import { normalizeAttributesAndTags } from "html-space-cleaner";

/**
 * Remove specified attributes from HTML tags in the given HTML string.
 * @param {string} html - The HTML string to process.
 * @param {string[]} attributes - An array of attribute names to remove.
 * @returns {string} The HTML string with specified attributes removed.
 */
export function RemoveAttributesFromHTML(
  html: string,
  attributes: string[]
): string {
  if (!html || !attributes.length) {
    return html;
  }

  let result: string = "";
  let insideTag: boolean = false;
  let currentTag: string = "";
  let insideQuote: string = "";

  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") {
      insideTag = true;
      currentTag = "<";
      continue;
    }

    if (html[i] === ">") {
      insideTag = false;
      currentTag += ">";
      // Remove specified attributes from the current tag
      attributes.forEach((attribute) => {
        // Match attributes with or without values
        currentTag = currentTag.replace(
          new RegExp(`\\s+${attribute}(?:\\s*=\\s*(['"])(.*?)\\1)?`, "i"),
          ""
        );
      });
      result += currentTag;
      continue;
    }

    if (insideTag) {
      currentTag += html[i];
      // Check for quotes to avoid attribute matching inside quotes
      if (html[i] === '"' || html[i] === "'") {
        if (insideQuote === html[i]) {
          insideQuote = "";
        } else {
          insideQuote = html[i];
        }
      }
    } else {
      result += html[i];
    }
  }

  // Normalize the resulting HTML string (e.g., remove extra spaces)
  return normalizeAttributesAndTags(result);
}
