const input = document.getElementById("word");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", output);

function output(e) {
  e.preventDefault();
  const word = input.value.toString();
  console.log(word);
}
