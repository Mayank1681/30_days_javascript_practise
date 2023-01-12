// Exercise level 1

var challenge = '30 Days Of JavaScript';
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substr(start_index, length));
console.log(challenge.substring(start_index, last_index));
console.log(challenge.substring(3, ));

console.log(challenge.includes('script'));  // false

console.log(challenge.split());
console.log(challenge.split(' '));

var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

console.log(challenge.replace('Javascript', 'Python'));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(12));  // return the ASCII code of the character present at index 12

console.log(challenge.indexOf('a'));        // return the first index 
console.log(challenge.lastIndexOf('a'));    // return the last index
var c = 'You cannot end a sentence with because because because is a conjunction';
console.log(c.indexOf('because'));
console.log(c.lastIndexOf('because'));
console.log(c.search('because'));           // return the index 

var c ='             You cannot end a sentence with because because because is a conjunction           ';
console.log(c.trim());                      // return the statement after removing the whitespaces from the front and the last

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Javascript'));

var pattern = /a/gi;
console.log(challenge.match(pattern));      // return the pattern in an array format

console. log(challenge.concat('30 Days Of JavaScript'));

console.log(challenge.repeat(2));




