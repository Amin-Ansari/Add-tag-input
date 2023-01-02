import { tagList } from "./elements";

export const remainTag = function () {
  const pElement = document.querySelector(".wrapper-footer p");
  pElement.innerHTML = `${
    10 - Number(tagList.childElementCount)
  } tags remained`;
  return Number(tagList.childElementCount);
};

export const validatedTheText = function (theText) {
  for (let tag of theText) {
    if (tag == "") {
      return false;
    } else {
      return true;
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
