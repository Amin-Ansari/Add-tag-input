import "../styles/style.css";

import { addInput } from "./elements";

addInput.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    const allowedText = e.target.value.replace(/\s/g, "");
  }
});
