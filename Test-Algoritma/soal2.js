const sentence = "Saya sangat senang mengerjakan soal algoritma";
function longest(sentence) {
  let a = 0;
  let text = sentence.split(" ");
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > a) {
      sentence = text[i];
      a = text[i].length;
    }
  }
  return console.log(sentence + ": " + sentence.length + " character");
}
longest(sentence);
