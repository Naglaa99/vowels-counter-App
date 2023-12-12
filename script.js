const input = document.getElementById("inputText");
const res = document.getElementById("result");

function checkVowels() {
  let lowerCaseText = input.value.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i = 0; i < lowerCaseText.length; i++) {
    if (vowels.includes(lowerCaseText[i])) {
      vowelCount++;
    }
  }
  res.innerText = `Number of vowels: ${vowelCount}`;
}
