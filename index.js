export default function (nameClass, nameElement) {
  let resultJson = new Object();
  const listElements = document.querySelectorAll(nameElement);
  resultJson = traceElement(nameClass, listElements, 0);
  console.log(resultJson);
}

function traceClasses(listClasses, targetElement, count) {
  const lengthClasses = listClasses.length;
  if (count < lengthClasses) {
    let resObj = new Object();
    const targetClass = listClasses[count];
    const nameTag = targetElement.getAttribute("name");
    resObj[nameTag] = targetClass.value;
    return Object.assign(resObj, traceClasses(listClasses, targetElement));
  } else {
    return;
  }
}

function traceElement(nameClass, listElements, count) {
  const lengthElement = listElements.length;
  if (count < lengthElement) {
    let resObj = new Object();
    const targetElement = listElements[count];
    const listClasses = targetElement.shadowRoot.querySelectorAll(
      "." + nameClass
    );
    resObj = traceClasses(listClasses, targetElement, 0);
    return Object.assign(
      resObj,
      traceElement(nameClass, listElements, ++count)
    );
  } else {
    return;
  }
}
