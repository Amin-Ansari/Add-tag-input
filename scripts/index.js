import "../styles/style.css";
import { addInput } from "./elements";
import { tagList } from "./elements";
import { validatedTheText } from "./functions";
import { AddTag } from "./classes";
import { remainTag } from "./functions";

const addTagObj = new AddTag();

remainTag();

addInput.addEventListener("keyup", function (e) {
  if (e.key == "Enter" && e.target.value) {
    if (remainTag() <= 9) {
      const allowedText = e.target.value.replace(/\s/g, ""); //allowedText variable will stored the text which replace() method will scan and remove all the space from it
      if (allowedText.split(",").length <= 10 - remainTag()) {
        addTagObj.addValue(allowedText, tagList.childElementCount);
        addTagObj.render().forEach((item) => (tagList.innerHTML += item));
        e.target.value = "";
        remainTag();
        console.log(tagList.childElementCount);
      } else {
        alert("You can't add more than 10 tags");
        e.target.value = "";
      }
    } else {
      alert("You can't add more than 10 tags");
      e.target.value = "";
    }
  }
});
document.querySelector("button").addEventListener("click", function () {
  addTagObj.removeAll();
  remainTag();
  tagList.innerHTML = "";
});
