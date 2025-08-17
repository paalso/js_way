// Project: a social news program
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter11.md

const options = "Choose an option:\n1: Show links\n2: Add a link\n3: Remove a link\n0: Quit";

const links = [
    { title: 'Google', link: 'google.com', author: 'Bob' },
    { title: 'Amazon', link: 'amazon.com', author: 'Tom' }
];

function showLinks(links) {
    let index = 1;
    let output = '';
    if (links.length != 0)
        links.forEach(
            function ({ title, link, author }) {
                output += `${index++}: ${title} (${link}). Author: ${author}\n`;
            }
        );
    else
        output = 'No links';
    alert(output);
}

// !!!When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links

function removeLink(links) {
    if (links.length === 0) {
        alert('No links');
        return;
    }

    let linkToRemove;
    let outputPrefix = '';
    while (true) {
        linkToRemove =
            prompt(`${outputPrefix}Enter the index of the link to be removed (between 1 and ${links.length}). 'Q' for return.`);
        if (linkToRemove.toLowerCase() == 'q')
            return;
        if (0 < linkToRemove && linkToRemove <= links.length)
            break;
        outputPrefix = `Link # ${linkToRemove} doesn't exist. Try again.`;
    }
    links.splice(linkToRemove - 1, 1);
    alert(`Link # ${linkToRemove} was succesfully removed`);
}

function addLink(links) {
    const linksNumber = links.length;
    let linkUrl = prompt('Enter a link:');
    if (!linkUrl.startsWith('http://') && (!linkUrl.startsWith('https://')))
        linkUrl = 'http://' + linkUrl;
    const linkTitle = prompt('Enter link\'s title:');
    const linkAuthor = prompt('Enter link\'s author:');
    links.push(
        { title: linkTitle, link: linkUrl, author: linkAuthor }
    );
}


while (true) {
    const option = Number(prompt(options));
    switch (option) {
        case 1: showLinks(links); break;
        case 2: addLink(links); break;
        case 3: removeLink(links); break;
        case 0: break;
    }
    if (option == 0) {
        break;
    }
}
window.close();
