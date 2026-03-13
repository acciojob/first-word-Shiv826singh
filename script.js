function firstWord(s) {
  if (!s) return "";

  // Remove leading spaces
  s = s.trimStart();

  // Find first space
  let index = s.indexOf(" ");

  // If no space found, return whole string
  if (index === -1) {
    return s;
  }

  // Return substring before first space
  return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));