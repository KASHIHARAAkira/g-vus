export default function (nameClass, nameElement) {
  let resultJson = new Object();
  const listElements = document.querySelectorAll(nameElement);
  resultJson = traceElement(nameClass, listElements, 0);
  return resultJson;
}

function traceClasses(listClasses, targetElement, count) {
  const lengthClasses = listClasses.length;
  if (count < lengthClasses) {
    let arrayRes = new Array();
    let resObj = new Object();
    const targetClass = listClasses[count];
    const nameTag = targetClass.getAttribute("name");
    resObj[nameTag] = targetClass.value;
    arrayRes.push(resObj);
    return arrayRes.concat(traceClasses(listClasses, targetElement, ++count));
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
    resObj[targetElement.getAttribute("name")] = traceClasses(
      listClasses,
      targetElement,
      0
    );
    return Object.assign(
      resObj,
      traceElement(nameClass, listElements, ++count)
    );
  } else {
    return;
  }
}
