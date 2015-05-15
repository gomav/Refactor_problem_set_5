// Write a function alphabetSoup that takes a single string parameter and
// returns the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.
var alphabetSoup = function(string){
  var wordArray = string.toLowerCase().split('');
  var alphabeticalOrder = wordArray.sort().join('');

  return alphabeticalOrder;
};


console.log(alphabetSoup('hello'));
console.log(alphabetSoup('RhinoCERos'));
console.log(alphabetSoup('TyraNNosaurus'));
