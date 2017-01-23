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
  var idNumbers = cardNumber.slice(0,2);
  if ((idNumbers === '38' || idNumbers === '39') && (cardNumber.length === 14)){
  	return 'Diner\'s Club';
  } else if ((idNumbers === '34' || idNumbers === '37') && (cardNumber.length === 15)){
  	return 'American Express';
  } else {
  	return 'Card not recognized';
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
// Check Prefix
// Check length
var detectPrefix = function(cardNumber){
  var idNumbers = cardNumber.slice(0,2);
  if (idNumbers[0] === '4'){
  	return 'Visa';
  } else if (idNumbers === '38' || idNumbers === '39') {
  	return 'Diner\'s Club';
  } else if (idNumbers === '34' || idNumbers === '37') {
  	return 'American Express';
  } else {
  	var mCPrefixes = ['51','52','53','54','55'];
  	for (i = 0; i < mCPrefixes.length; i++){
  	  if (idNumbers === mCPrefixes[i]){
  	  	return 'MasterCard';
  	  }
  	}
  	return 'Card not Recoginized';
  }
}

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
}



