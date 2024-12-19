function clickClear() {
  document.getElementById("show").innerText = "";
}

function clickCal(e) {
  if (e === "=") {
    let s = document.getElementById("show").innerText;
    document.getElementById("show").innerText = eval(s);
  } else {
    document.getElementById("show").innerText += e;
  }
}
