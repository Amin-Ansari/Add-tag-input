import { tagList } from "./elements";

export const remainTag = function () {
  const pElement = document.querySelector(".wrapper-footer p");
  pElement.innerHTML = `${
    10 - Number(tagList.childElementCount)
  } tags remained`;
  return Number(tagList.childElementCount);
};

export const validatedTheText = function (theText) {
  let validatedText = "";
  for (let i = 0; i < theText.length; i++) {
    if (theText.charAt(i) == ",") {
      if (theText.charAt(i) != theText.charAt(i + 1)) {
      } else {
        alert("The writen tags are not valid");
        validatedText = theText;
        break;
      }
    }
    if (validatedText) {
      return valid;
    }
  }
};

export const retunIndex = function (clickedChild) {
  for (let i = 0; i < tagList.childNodes.length; i++) {
    if (tagList.childNodes[i] == clickedChild) {
      return i;
    }
  }
};
