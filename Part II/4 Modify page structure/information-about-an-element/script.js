// Information about an element
// https://thejsway.net/chapter15/#information-about-an-element

const renderInformationAboutElement = (sourceSelector, targetSelector) => {
  const element = document.querySelector(sourceSelector);
  const styles = getComputedStyle(element);
  const targetElement = document.querySelector(targetSelector);
  targetElement.append("Information about an element");

  const infoList = document.createElement("ul");

  const heightItem = document.createElement("li");
  heightItem.textContent = `Height: ${styles.height}`;

  const widthItem = document.createElement("li");
  widthItem.textContent = `Width: ${styles.width}`;

  infoList.append(heightItem);
  infoList.append(widthItem);

  targetElement.append(infoList);
};

renderInformationAboutElement("#content", "#infos");
