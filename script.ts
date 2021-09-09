const message = "hi crinfarr";
function fablesMenuShow(): void {
  let bar = document.getElementsByClassName("fables");
  for (let i = 0; i < bar.length; i++) {
    let button = bar.item(i);
    if (button != null) {
      if (button.className == "fables") {
        button.className += " hide";
      } else {
        button.className = "fables";
      }
    }
  }
}
