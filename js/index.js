function clickClear() {
    document.getElementById("show").innerText = "";
  }

  function clickCal(e) {
    if (e === 11) {
      document.getElementById("show").innerText += "*";
    } else if (e === 12) {
      document.getElementById("show").innerText += "+";
    } else if (e === 13) {
      document.getElementById("show").innerText += "-";
    } else if (e === 14) {
      document.getElementById("show").innerText += ".";
    } else if (e === 15) {
      let s = document.getElementById("show").innerText;
      document.getElementById("show").innerText = eval(s);
    } else if (e === 16) {
      document.getElementById("show").innerText += "%";
    } else if (e === 17) {
      document.getElementById("show").innerText += "/";
    } else {
      document.getElementById("show").innerText += e;
    }
  }