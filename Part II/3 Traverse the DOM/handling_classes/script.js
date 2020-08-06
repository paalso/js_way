// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter14.md

// Handling classes

// Improve the previous program to add a has() function that tests if an element designated
// by its ID has a class. The function shows true, false or an error message if the element
// can't be found.

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


const has = (id, someClass) => {
    const idElement = document.getElementById(id);
    if (!idElement)
        throw new Error(`No id "${id}" in the document`);
    return idElement.classList.contains(someClass);

};

const testSet = [
    {
        "id": "saxophone",
        "someClass": "woodwind"
    },
    {
        "id": "saxophone",
        "someClass": "brass"
    },
    {
        "id": "trumpet",
        "someClass": "brass"
    },
    {
        "id": "contrabass",
        "someClass": "chordophone"
    }
];

testSet.forEach(
    item => {
        const {id, someClass} = item;
        try {
            console.log(has(id, someClass));
        }
        catch (e) {
            console.error(e.message);
        }
    }
);

// console.log(has("saxophone", "woodwind"));     // Should show true
// console.log(has("saxophone", "brass"));        // Should show false
// console.log(has("trumpet", "brass"));          // Should show true
// console.log(has("contrabass", "chordophone")); // Should show an error message