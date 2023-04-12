const hitungDiagonal = (matrix) => {
  var n = matrix.length;
  var d1 = 0;
  var d2 = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) {
        d1 += matrix[i][j];
      }
      if (i + j === n - 1) {
        d2 += matrix[i][j];
      }
    }
  }
  return console.log(Math.abs(d1 - d2));
};
hitungDiagonal([
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]);
