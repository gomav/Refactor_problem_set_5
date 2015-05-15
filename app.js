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
  //using regex to isolate vowels; gi = global search "case-insensitive search"
  // - in this case for vowels within the string.
  return string.match(/[aeiou]/gi).length;

};

console.log(vowelCount('All cows eat grass'));
console.log(vowelCount('Tigers like to hunt'));
console.log(vowelCount('Bears hibernate during winter, do Polar bears hibernate too?'));

// Bonus:
// Write a function coinDeterminer that takes a single number parameter, which
// will be an integer ranging from 1 to 250, and returns an integer output that
// will specify the least number of coins, that when added, equal the input
// integer. Coins are based on a system as follows: there are coins representing
// the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output
// should be 2 because you can achieve the number 16 with the coins 9 and 7. If
// num is 25, then the output should be 3 because you can achieve 25 with either
// 11, 9, and 5 coins or with 9, 9, and 7 coins.
var coins = [1, 5, 7, 9, 11];

var coinDeterminer = function(number){
  var coinNumber = 0;
  var remainder = number;

  for(var i = coins.length-1; i >= 0; i--){
    coinNumber = coinNumber + Math.floor(remainder/coins[i]);
    remainder = remainder%coins[i];
  }

  return coinNumber;
};

console.log(coinDeterminer(16));
console.log(coinDeterminer(25));
