// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter13.md

// // Your mission here is to create a showChild() function that shows one of
// the children of a DOM element node.This function takes as parameter
// the parent node and the child node index.Error cases like a non -
// element node or an out - of - limits index must be taken into account.


// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
    const children = node.childNodes;

    if (!children.length)
        throw new TypeError(`Wrong node type ${node}`);

    if (index < 0 || children.length <= index)
        throw new RangeError(`Out of limits index. Children\'s length: ${children.length}, index: ${index}`);

    return children[index];
}


// Should show "Incorrect index"
// child = showChild(document.body, -1);

// Should show "Incorrect index"
// child = showChild(document.body, 8);

// Should show "Wrong node type"
// child = showChild(document.body.childNodes[0], index);

let child;
const index = 8;

try {
    child = showChild(document.body, index);
    // child = showChild(document.body.childNodes[0], index);
} catch (e) {
    if (e instanceof TypeError)
        console.error(`Wrong node type`);
    else if (e instanceof RangeError)
        console.error(`Incorrect index`);
    else
        console.error(`Some other error`);
}
if (child)
    console.log(child);
