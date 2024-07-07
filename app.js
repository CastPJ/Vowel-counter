const word = document.getElementById("word");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", output);

function output(e) {
  e.preventDefault();
  console.log(word.value);
}
