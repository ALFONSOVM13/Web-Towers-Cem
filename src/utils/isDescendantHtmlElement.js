export const isDescendantHtmlElement = (element, parent) => {
  if (!element) return false;

  if (element === parent) return true;

  return isDescendantHtmlElement(element.parentNode, parent);
}
