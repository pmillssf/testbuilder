// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  return detectLength(cardNumber, detectPrefix(cardNumber));
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
// Check Prefix
// Check length
var detectPrefix = function(cardNumber){
	var prefixData = {'38' : 'Diner\'s Club', '39' : 'Diner\'s Club', '4' : 'Visa', '34' : 'American Express', '37' : 'American Express',
	 '51' : 'MasterCard', '52' : 'MasterCard', '53' : 'MasterCard', '54' : 'MasterCard', '55' : 'MasterCard', '6011' : 'Discover',
	  '644-649' : 'Discover', '65' : 'Discover', '5018' : 'Maestro', '5020' : 'Maestro', '5038' : 'Maestro', '6304' : 'Maestro'};
	for (var k in prefixData){
	  var cardNumberPrefix = cardNumber.slice(0, k.length);
	  if (cardNumberPrefix === k){
	  	return prefixData[k];
	  }
	}
};

var detectLength = function(cardNumber, prefix){
  if (prefix === 'Visa'){
  	visaLengths = [13, 16, 19];
  	for (i = 0; i < visaLengths.length; i++){
  	  if (cardNumber.length === visaLengths[i]){
  	  	return 'Visa';
  	  }
  	}
  	return 'Card Length Error'
  } else if (prefix === 'Diner\'s Club' && cardNumber.length === 14){
  	return 'Diner\'s Club';
  } else if (prefix === 'American Express' && cardNumber.length === 15){
    return 'American Express'
  } else if (prefix === 'MasterCard' && cardNumber.length === 16){
  	return 'MasterCard';
  } else {
  	return 'Card Length Error'
  }
};
/*
console.log(detectNetwork('38345678901234') === 'Diner\'s Club');
console.log(detectNetwork('39345678901234') === 'Diner\'s Club');
console.log(detectNetwork('343456789012345') === 'American Express');
console.log(detectNetwork('373456789012345') === 'American Express');

console.log(detectNetwork('4123456789012') === 'Visa');
console.log(detectNetwork('4123456789012345') === 'Visa');
console.log(detectNetwork('4123456789012345678') === 'Visa');

console.log(detectNetwork('5112345678901234') === 'MasterCard');
console.log(detectNetwork('5212345678901234') === 'MasterCard');
console.log(detectNetwork('5312345678901234') === 'MasterCard');
console.log(detectNetwork('5412345678901234') === 'MasterCard');
console.log(detectNetwork('5512345678901234') === 'MasterCard');
*/



