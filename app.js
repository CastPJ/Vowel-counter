const input = document.getElementById("word");
const submitButton = document.getElementById("submit-button");
const output = document.getElementById("output");

submitButton.addEventListener("click", vowelCounter);

function vowelCounter(e) {
  e.preventDefault();
  const word = input.value.toString().toLowerCase();
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  word.split("").forEach((element) => {
    if (vowels.includes(element)) {
      counter += 1;
    }
  });

  output.innerText = `Vowels: ${counter}`;
}
