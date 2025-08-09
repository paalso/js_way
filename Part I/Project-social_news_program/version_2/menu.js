class Menu {
  constructor(links) {
    this.links = links;
    this.lastLinkId = this.links.length;
    this.firstLinkId = Math.min(1, this.lastLinkId);
  }

  buildMainMenu() {
    this.menuItems = {
      '1': { text: "Show links", handler: this.showLinks.bind(this) },
      '2': { text: "Add a link", handler: this.addLink.bind(this) },
      '3': { text: "Remove a link", handler: this.removeLink.bind(this) },
      'Q': { text: "Quit", handler: this.quit.bind(this) },
    };

    this.menuIds = Object.keys(this.menuItems);
  }

  run() {
    this.buildMainMenu();
    while (true) {
      const choice = this.getMenuInput();
      const handler = this.menuItems[choice].handler;
      const result = handler();
      if (!result) break;
    }
  }

  showLinks() {
    const numberedFormattedLinks = [];
    this.links.forEach((link, id) => {
      numberedFormattedLinks.push(this.getLinkRepr(link, id + 1));
    });
    const linksRepr = numberedFormattedLinks.join("\n");
    alert(linksRepr);
    return true;
  }

  addLink() {
    const title = prompt('Enter title:');
    const url = this.normalizeURL(prompt('Enter url:'));
    const author = prompt('Enter author:');
    this.links.push({title, url, author});
    this.updateLiksIdsLimits(1);
    alert(`New link was succesfully added.\n${this.lastLinkId} link(s) available.`);
    return true;
  }

  removeLink() {
    if (this.lastLinkId === 0) {
      alert("No links to remove");
      return true;
    }
    const promptText =
      `Enter the index of the link to be removed ` +
      `(between ${this.firstLinkId} and ${this.lastLinkId}). 'Q' for return.`;
    while (true) {
      const choice = prompt(promptText);
      if (choice.toLowerCase() == "q") return true;
      if (this.firstLinkId <= choice && choice <= this.lastLinkId) {
        const linkToRemoveId = choice - 1;
        this.links.splice(linkToRemoveId, 1);
        this.updateLiksIdsLimits(-1);
        alert(
          `Link # ${choice} was succesfully removed.\n${this.lastLinkId} link(s) left.`,
        );
        return true;
      }
    }
  }

  quit() {
    alert("Good bye!");
    return;
  }

  getMenuInput() {
    while (true) {
      const choice = prompt(this.getMenuText()).toUpperCase();
      if (this.menuIds.includes(choice)) return choice;
    }
  }

  getMenuText() {
    const menuHeader = "Choose an option:";
    const menuBody = Object.entries(this.menuItems)
      .map(([id, { text }]) => `${id}: ${text}`)
      .join("\n");
    const menuText = `${menuHeader}\n${menuBody}`;
    return menuText;
  }

  getLinkRepr(link, itemNumber) {
    console.log(link);
    const { title, url, author } = link;
    return `${itemNumber}: ${title} (${url}). Author: ${author}`;
  }

  updateLiksIdsLimits(value) {
    this.lastLinkId += value;
    this.firstLinkId = Math.min(1, this.lastLinkId);
  }

  normalizeURL(url) {
    if (! this.isCorrectURL(url))
      url = `https://${url}`;
    return url;
  }

  isCorrectURL(url) {
    return url.startsWith('http://') || url.startsWith('https://');
  }
}

const initialLinks = [
  {
    title: "Google",
    url: "https://google.com",
    author: "Bob",
  },
  {
    title: "Amazon",
    url: "https://amazon.com",
    author: "Tom",
  },
];

const menu = new Menu(initialLinks);
menu.run();
