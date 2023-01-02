import "../styles/style.css";
import { addInput } from "./elements";
import { tagList } from "./elements";
import { AddTag } from "./classes";
import { remainTag } from "./functions";
import { retunIndex } from "./functions";
import { validatedTheText } from "./functions";

const addTagObj = new AddTag();

remainTag();

addInput.addEventListener("keyup", function (e) {
  if (e.key == "Enter" && e.target.value) {
    if (remainTag() <= 9) {
      const allowedText = e.target.value.replace(/\s/g, ""); //allowedText variable will stored the text which replace() method will scan and remove all the space from it
      if (allowedText.split(",").length <= 10 - remainTag()) {
        if (validatedTheText(allowedText.split(","))) {
          addTagObj.addValue(allowedText, tagList.childElementCount);
          addTagObj.render().forEach((item) => (tagList.innerHTML += item));
          e.target.value = "";
          remainTag();
        } else {
          alert("The writen tags are not valid");
        }
      } else {
        alert("You can't add more than 10 tags");
        e.target.value = "";
      }
    } else {
      alert("You can't add more than 10 tags");
      e.target.value = "";
    }
    const allowedText = e.target.value.replace(/\s/g, ""); //allowedText variable will stored the text which replace() method will scan and remove all the space from it
  }
});
document.querySelector("button").addEventListener("click", function () {
  addTagObj.removeAll();
  tagList.innerHTML = "";
  remainTag();
});

document.addEventListener("click", function (e) {
  if (e.target.nodeName == "SPAN") {
    if (addTagObj.removeTag(retunIndex(e.target.parentElement))) {
      tagList.innerHTML = "";
      addTagObj.render().forEach((item) => (tagList.innerHTML += item));
      remainTag();
    } else {
      tagList.innerHTML = "";
      remainTag();
    }
  } else if (e.target.classList.contains("fa-xmark")) {
    if (addTagObj.removeTag(retunIndex(e.target.parentElement.parentElement))) {
      tagList.innerHTML = "";
      addTagObj.render().forEach((item) => (tagList.innerHTML += item));
      remainTag();
    } else {
      tagList.innerHTML = "";
      remainTag();
    }
  }
});

document.querySelector(".wrapper-body").addEventListener("click", function (e) {
  if (e.target.classList.contains("wrapper-body")) {
    addInput.focus();
  }
});
