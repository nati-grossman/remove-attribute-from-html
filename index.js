function RemoveAttributesFromHTML(html, attributes) {
    let result = '';
    let insideTag = false;
    let currentTag = '';
    let insideQuote = '';

    for (let i = 0; i < html.length; i++) {
        if (html[i] === '<') {
            insideTag = true;
            currentTag = '<';
            continue;
        }

        if (html[i] === '>') {
            insideTag = false;
            currentTag += '>';
            attributes.forEach(attribute => {
                currentTag = currentTag.replace(new RegExp(`${attribute}\\s?=\\s?(['"])(.*?)\\1`), '');
            });
            result += currentTag;
            continue;
        }

        if (insideTag) {
            currentTag += html[i];
            if (html[i] === '"' || html[i] === "'") {
                if (insideQuote === html[i]) {
                    insideQuote = '';
                } else {
                    insideQuote = html[i];
                }
            }
        } else {
            result += html[i];
        }
    }

    return normalizeHTML(result);
}

function normalizeHTML(html) {
    let insideTag = false;
    let result = '';

    for (let i = 0; i < html.length; i++) {
        const char = html[i];

        if (char === '<') {
            insideTag = true;
            result += char;
        } else if (char === '>') {
            insideTag = false;
            result = result.trimRight() + char;
        } else {
            if (insideTag && char === ' ') {
                // Skip additional spaces inside tags
                while (html[i + 1] === ' ') {
                    i++;
                }
            }
            result += char;
        }
    }

    return result;
}

module.exports = {
    RemoveAttributesFromHTML
};