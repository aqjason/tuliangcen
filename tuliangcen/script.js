function nextPage() {
  window.location.href = "main.html";
}

function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth - document.getElementById("yesButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight - document.getElementById("yesButton").offsetHeight);
  document.getElementById("yesButton").style.left = `${x}px`;
  document.getElementById("yesButton").style.top = `${y}px`;
}
