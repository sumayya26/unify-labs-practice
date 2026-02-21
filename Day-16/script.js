// 1️⃣ Title Case Formatter
const toTitleCase = (text) => {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// 2️⃣ Vowel Counter
const countVowelsInText = (text) => {
  const vowels = "aeiou";
  let count = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

// 3️⃣ Secret Message Generator
const secretMessage = (text) => {
  const bannedWords = ["bad", "secret", "hack"];
  let words = text.split(" ");

  let filtered = words.map(word => {
    if (bannedWords.includes(word.toLowerCase())) {
      return "***";
    }
    return word;
  });

  return filtered.join(" ");
};

// UI Functions
function formatTitleCase() {
  const input = document.getElementById("userText").value;
  const formatted = toTitleCase(input);

  document.getElementById("outputText").textContent = formatted;
  showStats(input);
}

function countVowels() {
  const input = document.getElementById("userText").value;
  const vowelCount = countVowelsInText(input);

  document.getElementById("outputText").textContent = 
    `Total Vowels: ${vowelCount}`;

  showStats(input);
}

function generateSecret() {
  const input = document.getElementById("userText").value;
  const secret = secretMessage(input);

  document.getElementById("outputText").textContent = secret;
  showStats(input);
}

// Text Statistics
function showStats(text) {
  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  document.getElementById("stats").textContent = 
    `Words: ${wordCount} | Characters: ${charCount}`;
}