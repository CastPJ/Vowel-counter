const input = document.getElementById("word");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", output);

function output(e) {
  e.preventDefault();
  const word = input.value.toString().toLowerCase();
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  word.split("").forEach((element) => {
    if (vowels.includes(element)) {
      counter += 1;
    }
  });

  console.log(counter);
}
