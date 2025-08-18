const showChild = (node, index) => {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    console.error("Wrong node type");
    return;
  }

  const children = node.childNodes;

  if (index < 0 || index >= children.length) {
    console.error("Incorrect index");
    return;
  }

  console.log(children[index]);
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
