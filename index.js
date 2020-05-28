var fs = require('fs');

// random crap
exports.blargh = function(a, b, x, y){
  var z = x + y;
  var c = a + b;
  var q = z + c;
  return q;
}

//farts are tasty
exports.blink = function(a){
  a[0] = a[0] + a[1];
  return a;
}

// append a thing
exports.stinkit = function(name, words){
  fs.appendFile(name, words, function (err) {
    if (err) throw err;
  
  });
}
