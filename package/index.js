const { normalizeAttributesAndTags } = require("html-space-cleaner");

/**
 * Remove specified attributes from HTML tags in the given HTML string.
 * @param {string} html - The HTML string to process.
 * @param {string[]} attributes - An array of attribute names to remove.
 * @returns {string} The HTML string with specified attributes removed.
 */
function RemoveAttributesFromHTML(html, attributes) {
  let result = "";
  let insideTag = false;
  let currentTag = "";
  let insideQuote = "";

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
        currentTag = currentTag.replace(
          new RegExp(`${attribute}\\s?=\\s?(['"])(.*?)\\1`),
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

module.exports = {
  RemoveAttributesFromHTML,
};
