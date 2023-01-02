const listedTags = new WeakMap();
const tagExtractor = new WeakMap();
export class AddTag {
  constructor() {
    this.inputValue = undefined;
  }
  addValue(value) {
    if (value != undefined) {
      this.inputValue = value;
    }
  }
  render() {
    const tags = this.inputValue.split(",");
    let renderdTags = [];
    tags.forEach(function (item) {
      renderdTags.push(
        `<li class="tag">
      ${item} <span><i class="fa-solid fa-xmark"></i></span>
    </li>`
      );
    });
    return renderdTags;
  }
  removeAll() {
    this.inputValue = "";
  }
}
