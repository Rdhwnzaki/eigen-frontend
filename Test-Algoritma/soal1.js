let string = "NEGIE1";

function reverseAlphabet(string) {
  let match = string.match(/[a-zA-Z]/gi).reverse();
  for (let i = 0; i < string.length; i++) {
    if (!string[i].match(/[a-zA-Z]/)) {
      match.splice(i, 0, string[i]);
    }
  }
  return console.log(match.join(""));
}

reverseAlphabet(string);
