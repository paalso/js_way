// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter14.md

// Handling attributes

// Write a JavaScript program containing a linkInfo() function that shows:

// The total number of links.
// The target of the first and last links.
// This function should work even if no links are present.

const linkInfo = (selector = "body") => {
    const doc = document.querySelector(selector);
    if (!doc) return null;
    const links = Array.from(doc.getElementsByTagName("a"));
    if (!links.length) return null;

    return {
        "linksNumber": links.length,
        "firstLink": links[0].href,
        "lastLink": links[links.length - 1].href
    };

};

const selector = "footer > ul";

const docLinksInfo = linkInfo(selector);
if (docLinksInfo) {
    const { linksNumber, firstLink, lastLink } = docLinksInfo;
    console.log(linksNumber);
    console.log(firstLink);
    console.log(lastLink);
} else
    console.log(`Selector "${selector}" not found or doesn't contain linls`);

