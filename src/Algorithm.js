export const checkForLetters = (string) => {
  let totalCharacters = 0;
  for (let char of string) {
    if (!(char.indexOf(' ') >= 0)) totalCharacters++
  }
  return totalCharacters;
}