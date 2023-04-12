var input = ["xc", "dz", "bbb", "dz"];
var query = ["bbb", "ac", "dz"];
const inputLength = (array, value) => {
  const n = array.filter((v) => v === value).length;
  console.log(n);
};

inputLength(input, query);
