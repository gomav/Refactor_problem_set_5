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

// Write a function vowelCount that takes a single string parameter and returns
// the number of vowels the string contains (ie. "All cows eat grass" would
// return 5).
var vowelCount = function(string){
  //using regex to isolate vowels; gi = global search "case-insensitive search" - in this case for vowels.
  return string.match(/[aeiou]/gi).length;

};

console.log(vowelCount('All cows eat grass'));
console.log(vowelCount('Tigers like to hunt'));
console.log(vowelCount('Bears hibernate during winter, do Polar bears hibernate too?'));
