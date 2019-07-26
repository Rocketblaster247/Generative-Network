//Generate a dataset object
var dataset = function (ds) {
  var data = [];
  var d;
  for (var i = 0; i < data.length; i ++) {
    for (var e = 0; e < data[i].length; e ++) {
      d = data[i];
      if (e != 0 && e != (data[i].length - 1)) {
      
      }
    }
  }
};

//


/*example:

Dataset for generating
incrementing number sequences.

var ds = dataset([
  [0, 1,2,3, 0],
  [0, 2,3,4, 0],
  [0, 3,4,5, 0],
  [0, 5,6,7, 0],
]);

var gen = generator();

gen.train(ds, {
  incrementation: 100,
  mutation_rate: 0.1,
  min_error: 0.01,
  min_range: -100,
  max_range: 100,
});

gen.run();

Output: [2.5,3.5,4.5]

*/
