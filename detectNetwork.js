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
	  '644' : 'Discover', '645' : 'Discover', '646' : 'Discover', '647' : 'Discover', '648' : 'Discover', '649' : 'Discover',
	   '65' : 'Discover', '5018' : 'Maestro', '5020' : 'Maestro', '5038' : 'Maestro', '6304' : 'Maestro', '624' : 'China UnionPay',
	    '625' : 'China UnionPay', '626' : 'China UnionPay', '6282' : 'China UnionPay', '6283' : 'China UnionPay', '6284' : 'China UnionPay',
	    '6285' : 'China UnionPay', '6286' : 'China UnionPay', '6287' : 'China UnionPay', '6288' :'China UnionPay', '564182' : 'Switch',
	     '633110' : 'Switch', '6333' : 'Switch', '6759' : 'Switch'};
	var prefixDataOverlaps = {'4903' : 'Switch', '4905' : 'Switch', '4911' : 'Switch', '4936' : 'Switch'};
	for (var k in prefixData){
	  var cardNumberPrefix = cardNumber.slice(0, k.length);
	  if (cardNumberPrefix === k){
	  	if (cardNumberPrefix === '4'){
	  	  for (var y in prefixDataOverlaps){
	  	  	if (cardNumber.slice(0,4) === y){
	  	  		return prefixDataOverlaps[y];
	  	  	}
	  	  }
	  	}
	  	return prefixData[k];
	  }
	}
	if (Number(cardNumber.slice(0,6)) <= 622925 && Number(cardNumber.slice(0,6)) >= 622126){
	  return 'China UnionPay';
	}
};

var detectLength = function(cardNumber, prefix){
	var lengthData = {'Diner\'s Club' : [14], 'Visa' : [13, 16, 19], 'American Express' : [15], 'MasterCard' : [16], 'Discover' : [16, 19],
	 'Maestro' : [12, 13, 14, 15, 16, 17, 18, 19], 'China UnionPay' : [16, 17, 18, 19], 'Switch' : [16, 18, 19]};
	for (var j in lengthData){
	  if (prefix === j){
	  	for (i = 0; i < lengthData[j].length; i++){
	  	  if (lengthData[j][i] === cardNumber.length){
	  	  	return j;
	  	  }
	  	}
	  }
	}
};




