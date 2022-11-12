//==============================================================================================================================
// ARRAYS METHODS 
//==============================================================================================================================
// for loops()
// while loop()
// (...arg)
// .reduce()
// .sort()
//// .map()
// .concat()
//// .filter()
// .reverse()
// .replace()
// .repeat()
// .slice()
// .trim()
// .split(' ')
// .join('')
// .substring()
// .endsWith()
// .includes()
// .indexOf()
// .match()
//  String()
// .toLowerCase()
// .unshift()
// .toFixed(0)
// .padStart()
// .padEnd()
// .toArray()
// .charAt(0)
// .charCodeAt()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for loops()

function findMultiples(int,limit){
  let multiples = [];
  for(let i = int; i <= limit; i += int){ multiples.push(i); }
  return multiples;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// while loop()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (...arg) the spread operator separates and array in single elements

findSmallesInt(args){
	return Math.min(...args)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .reduce() method adds two values together

function squareSum(a, b) {
  return numbers.reduce((acc, cv) => acc + cv * cv, 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

//-----------------------------------------------------------------------------------------------------------------------

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//-----------------------------------------------------------------------------------------------------------------------

function sumMix(x){
  return x.reduce((a, b) => a + Number(b),0)
}

//-----------------------------------------------------------------------------------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .sort() method sorts the elements as strings in alphabetical and ascending order.
// 1 - Given an array of integers, your solution should find the smallest integer.

function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

//-----------------------------------------------------------------------------------------------------------------------

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

//-----------------------------------------------------------------------------------------------------------------------

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};

//-----------------------------------------------------------------------------------------------------------------------
// sort the smallest to largest

function fromSmallestToLargest(arr){
	return array.sort((a, b) => a - b)
}

//-----------------------------------------------------------------------------------------------------------------------
// sort the largest to smallest

function fromLargesttoSmallest(arr){
	return array.sort((a, b) => b - a)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .map()  method creates a new array populated with the results of calling a provided function on every element in the calling array.


//-----------------------------------------------------------------------------------------------------------------------

function maps(x) {
  return x.map((n) => n * 2);
}

//-----------------------------------------------------------------------------------------------------------------------

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

//-----------------------------------------------------------------------------------------------------------------------

const numbers = [1, 4, 9];
const rootsOfNumbers = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//-----------------------------------------------------------------------------------------------------------------------

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

//-----------------------------------------------------------------------------------------------------------------------

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//-----------------------------------------------------------------------------------------------------------------------

const doubleChar = (str) => str.split("").map(c => c + c).join("");


//-----------------------------------------------------------------------------------------------------------------------

function maps(x) {
  return x.map((n) => n * 2);
}

//-----------------------------------------------------------------------------------------------------------------------

function invert(array) {
   return array.map((num) => -num)
}

//-----------------------------------------------------------------------------------------------------------------------

function abbrevName(name) {
  return name.split(" ").map((i) => i[0].toUpperCase()).join(".");
}

//-----------------------------------------------------------------------------------------------------------------------

function digitize(n) {
  return String(n).split("").map(number).reverse();
}


//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

//-----------------------------------------------------------------------------------------------------------------------

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//-----------------------------------------------------------------------------------------------------------------------

function digitize(n) {
  return String(n).split("").map(number).reverse();
}

//-----------------------------------------------------------------------------------------------------------------------

function abbrevName(name) {
  return name.split(" ").map((i) => i[0].toUpperCase()).join(".");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//-----------------------------------------------------------------------------------------------------------------------

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}


console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//-----------------------------------------------------------------------------------------------------------------------

function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}
//-----------------------------------------------------------------------------------------------------------------------
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//-----------------------------------------------------------------------------------------------------------------------

function isMultiple(arr) {
  return arr.filter((e, i) => e % i === 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//-----------------------------------------------------------------------------------------------------------------------

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//-----------------------------------------------------------------------------------------------------------------------

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
	return index % 2 === 0;
  });
}

//-----------------------------------------------------------------------------------------------------------------------

function countPositivesSumNegatives(input) {
  return input && input.length ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .reverse() method reverses the order of the elements in an array.

function reverseList(list) {
  return list.reverse();
}

//-----------------------------------------------------------------------------------------------------------------------

function reverseListOfWords(str){
  return str.split(' ').reverse().join(' ')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .replace('dog', 'monkey') method replaces a specified phrase with another specified phrase 

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));

//-----------------------------------------------------------------------------------------------------------------------

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

//-----------------------------------------------------------------------------------------------------------------------

function removeExclamationMarks(s) {
  return s.replace('!', '')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .repeat() method returns a string with a number of copies of a string

function repeatStr(n, s) {
  return s.repeat(n);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .slice() method allows you to extract subset elements of an array and add them to the new array

function removeChar(str) {
  return str.slice(1, -1);
}

//-----------------------------------------------------------------------------------------------------------------------

function take(arr, n) {
  return arr.slice(0, n)
}

//-----------------------------------------------------------------------------------------------------------------------

function take(arr, n) {
  return arr.slice(0, n)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .trim() method removes the whitespace at the edge of the string

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .split(' ') method splits a string into an array of substrings.
// .split('') => characters
// .split(' ') => words


function noSpace(x) {
  return x.split(" ").join("");
}

//-----------------------------------------------------------------------------------------------------------------------

function DNAtoRNA(dna) {
  return dna.split("T").join("U");

}

//-----------------------------------------------------------------------------------------------------------------------

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//.join('') method  method creates and returns a new string by concatenating all of the elements in an array

function noSpace(x) {
  return x.split(" ").join("");
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .substring() method is used to convert into a normal array


const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

//-----------------------------------------------------------------------------------------------------------------------


function pigIt(str){
  
  return str.split(' ').map(word => {
    return word.substring(1) + word[0] + 'ay';
  }).join(' ');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .endsWith() method determines whether a string ends with the characters of a specified string

function correctTail (body, tail){
	const correctTail = (body, tail) => body.endsWith(tail)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toString() method converts a boolean or array to a String

function booleanToString(b) {     //boolean to string
  return b.toString();
}

function numberToString(b) {      //number to string
  return String(b);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toLowerCase() method returns the value of the string converted to lower case.

function firtstName(firstName) {
  return firstName.toLowerCase();
}

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .unshift() method adds elements to the beginning of an array

function addElemStart (name)
	return name.unshift('John')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toFixed(2) method rounds the string to a specified number of decimals. //2 in this case

let num = 5.56789;
let n = num.toFixed(2);
// 5.56

//-----------------------------------------------------------------------------------------------------------------------

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padStart() adds white spaces at the beginning of a sentence

padStart()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padEnd() adds white spaces at the end of a sentence

padEnd()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toArray() method is used to convert into a normal array


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .date.getHours();
// .date.getMinutes();
// .date.getSeconds();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//



//==============================================================================================================================

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .charAt(0) method select the specified character of the string. / the first one in this case

function areYouPlayingBanjo(name) {
  return name.charAt(0
}

//-----------------------------------------------------------------------------------------------------------------------

function getAge(inputString){
 return +(inputString.charAt(0))
}

//-----------------------------------------------------------------------------------------------------------------------

let text1 = "Sample Text";
console.log(1, text1.charAt(0));                     //First character in a string
console.log(2, text1.charAt(text1.length - 1));      //Last character
console.log(3, text1.charAt("0"));                  //Last character
console.log(4, text1.charAt("test"));               //Last character
let test1 = "";
console.log(5, text1.charAt(""));                   //Last character

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .charCodeAt() method returns the ascii code of the charater at that position

let text2 = "Sample Text";
console.log(1, text2.charCodeAt());
// 83     

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .concat() method is used to merge two or more arrays

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//-----------------------------------------------------------------------------------------------------------------------

function solution(a, b){
  let strA = a.length
  let strB = b.length
  return strA > strB ? b.concat(a, b) : a.concat(b, a)
}

//-----------------------------------------------------------------------------------------------------------------------

let text3 = "Sample Text";
console.log(1, text3.concat("!"));
console.log(2, text3.concat("!", "this is an argument"));
console.log(3, text3.concat("!", 9000));
console.log(4, text3.concat(true));
console.log(6, text3.concat(null));
console.log(7, text3.concat([1, 2, 3]));
console.log(7, text3.concat("🌱🌱"));
console.log(7, text3.concat("🏅"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .includes(searchString) 
// .includes(searchString, position) method takes in a string as argument and checks to see if the calling string contains the argument and returns a boolean. The method is case-sensitive. Also has an optional argument for the position at which to begin the search. Defaults to (0) is not specified

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

//-----------------------------------------------------------------------------------------------------------------------

let text4 = "To be, or not to be, that is the questions.";
console.log(1, text4.includes("To be")); //true
console.log(2, text4.includes("question")); //true
console.log(3, text4.includes("noneexistent")); //false
console.log(4, text4.includes("To be", 1)); //false
console.log(5, text4.includes("TO BE")); //false
console.log(6, text4.includes("")); //true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .indexOf() method returns the first index at which a given element can be found in the array. 
// .indexOf('e', 10) Giving a second argument: a number, the method return the first occurance of the specified sbstring at an index greater than or equal to the specific number.

function findIndex(x) {
  return `found x at position ${findIndex.indexOf("x")}`;
}

//-----------------------------------------------------------------------------------------------------------------------

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// match() method takess xpression as an argument and matches it against the calling string. Returns and array of all matching values.


























//==============================================================================================================================
// FUNCTIONS
//==============================================================================================================================
//  Math.pow()
// Math.floor()
// The Math.ceil()
// Math.round()
// Math.max()
// Math.min()
// Math.abs()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 2);
// expected output: 16

//-----------------------------------------------------------------------------------------------------------------------

function square(num){
  let num = Math.pow(num, 2);
  return num;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.floor() function rounds down to the smallest integer

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
}

//-----------------------------------------------------------------------------------------------------------------------

const oddCount = n => Math.floor(n/2) ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Math.ceil() function rounds down to the largest integer

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

//-----------------------------------------------------------------------------------------------------------------------

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.round() function rounds down the number to the smallest or largest integer

Math.round(0.95);
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Number(),0 converts all values to numbers

function sumOfValues(arr) {
  return arr.reduce((acc, c) => acc + Number(c), 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function toBinary(n){
  return +(n.toString(2))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.max() function returns the largest of the numbers given as input
 
console.log(Math.max(...list));
// expected output: 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.min() function returns the smallest of the numbers given as input
 
console.log(Math.min(...list));
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.abs() function returns the absolute value of a number.

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2

//-----------------------------------------------------------------------------------------------------------------------

function enough(cap, on, wait) {
  return (cap - on - wait) > 0 ? 0 : Math.abs(cap - on - wait)
}

//==========================================================================================================================
// Ternary Operators
//==========================================================================================================================

const quarterOf = (month) => {
 return month <=3 ? 1 : month <= 6 ? 2 : month <=9 ? 3 : month <=12 ? 4 : 0;
}

//-----------------------------------------------------------------------------------------------------------------------

const areaOrPerimeter = function(l , w) {
  return l == w ? l * l : 2 * (l + w);
};

//-----------------------------------------------------------------------------------------------------------------------

function getGrade (s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3
  return ave >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

//-----------------------------------------------------------------------------------------------------------------------

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//-----------------------------------------------------------------------------------------------------------------------

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

//-----------------------------------------------------------------------------------------------------------------------

function updateLight(current) {
  return current === 'green' ? 'yellow' : current === "yellow" ? 'red' : 'green'
}

//-----------------------------------------------------------------------------------------------------------------------

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
}

//-----------------------------------------------------------------------------------------------------------------------






































//==========================================================================================================================
// CODEWARS (DO AGAIN)
//==========================================================================================================================
// 1 - Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


  function basicOp(operation, value1, value2) {
    switch (operation) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return 0;
    }
  }

// -----------------------------------------------------------------------------------------------------------------------
// 4 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// -----------------------------------------------------------------------------------------------------------------------
// 7 - Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive).

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// -----------------------------------------------------------------------------------------------------------------------
// 8 - Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
  return +(n.toString(2))
}

// -----------------------------------------------------------------------------------------------------------------------
// 9 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// -----------------------------------------------------------------------------------------------------------------------
// 10 - Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

// -----------------------------------------------------------------------------------------------------------------------
// 11 - Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// -----------------------------------------------------------------------------------------------------------------------
// 12 - Take an array and remove every second element from the array. Always keep the first element and start removing it with the next element.


function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
	return index % 2 === 0;
  });
}

// -----------------------------------------------------------------------------------------------------------------------
// 13 - Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}


// -----------------------------------------------------------------------------------------------------------------------
// 14 - Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    return word.substring(1) + word[0] + 'ay';
  }).join(' ');
}








// -----------------------------------------------------------------------------------------------------------------------
// 15 - In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base. For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


function findMultiples(int,limit){
  let multiples = [];
  for(let i = int; i <= limit; i += int){ multiples.push(i); }
  return multiples;
}



// -----------------------------------------------------------------------------------------------------------------------
// 16 - remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return arrayDiff.filter( ( a ) => !toRemove.includes( a ) );
}


// -----------------------------------------------------------------------------------------------------------------------
// 17 - Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.










//========================================================================================================================

// .toString() method converts a boolean or array to a String

function booleanToString(b) {     //boolean to string
  return b.toString();
}

function numberToString(b) {      //number to string
  return String(b);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toLowerCase() method returns the value of the string converted to lower case.

function firtstName(firstName) {
  return firstName.toLowerCase();
}

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .unshift() method adds elements to the beginning of an array

function addElemStart (name)
	return name.unshift('John')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toFixed(2) method rounds the string to a specified number of decimals. //2 in this case

let num = 5.56789;
let n = num.toFixed(2);
// 5.56

//-----------------------------------------------------------------------------------------------------------------------

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padStart() adds white spaces at the beginning of a sentence

padStart()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padEnd() adds white spaces at the end of a sentence

padEnd()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toArray() method is used to convert into a normal array


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .date.getHours();
// .date.getMinutes();
// .date.getSeconds();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//



//==============================================================================================================================

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .charAt(0) method select the specified character of the string. / the first one in this case

function areYouPlayingBanjo(name) {
  return name.charAt(0
}

//-----------------------------------------------------------------------------------------------------------------------

function getAge(inputString){
 return +(inputString.charAt(0))
}

//-----------------------------------------------------------------------------------------------------------------------

let text1 = "Sample Text";
console.log(1, text1.charAt(0));                     //First character in a string
console.log(2, text1.charAt(text1.length - 1));      //Last character
console.log(3, text1.charAt("0"));                  //Last character
console.log(4, text1.charAt("test"));               //Last character
let test1 = "";
console.log(5, text1.charAt(""));                   //Last character

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .charCodeAt() method returns the ascii code of the charater at that position

let text2 = "Sample Text";
console.log(1, text2.charCodeAt());
// 83     

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .concat() method is used to merge two or more arrays

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//-----------------------------------------------------------------------------------------------------------------------

function solution(a, b){
  let strA = a.length
  let strB = b.length
  return strA > strB ? b.concat(a, b) : a.concat(b, a)
}

//-----------------------------------------------------------------------------------------------------------------------

let text3 = "Sample Text";
console.log(1, text3.concat("!"));
console.log(2, text3.concat("!", "this is an argument"));
console.log(3, text3.concat("!", 9000));
console.log(4, text3.concat(true));
console.log(6, text3.concat(null));
console.log(7, text3.concat([1, 2, 3]));
console.log(7, text3.concat("🌱🌱"));
console.log(7, text3.concat("🏅"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .includes(searchString) 
// .includes(searchString, position) method takes in a string as argument and checks to see if the calling string contains the argument and returns a boolean. The method is case-sensitive. Also has an optional argument for the position at which to begin the search. Defaults to (0) is not specified

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

//-----------------------------------------------------------------------------------------------------------------------

let text4 = "To be, or not to be, that is the questions.";
console.log(1, text4.includes("To be")); //true
console.log(2, text4.includes("question")); //true
console.log(3, text4.includes("noneexistent")); //false
console.log(4, text4.includes("To be", 1)); //false
console.log(5, text4.includes("TO BE")); //false
console.log(6, text4.includes("")); //true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .indexOf() method returns the first index at which a given element can be found in the array. 
// .indexOf('e', 10) Giving a second argument: a number, the method return the first occurance of the specified sbstring at an index greater than or equal to the specific number.

function findIndex(x) {
  return `found x at position ${findIndex.indexOf("x")}`;
}

//-----------------------------------------------------------------------------------------------------------------------

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// match() method takess xpression as an argument and matches it against the calling string. Returns and array of all matching values.


























//==============================================================================================================================
// FUNCTIONS
//==============================================================================================================================
//  Math.pow()
// Math.floor()
// The Math.ceil()
// Math.round()
// Math.max()
// Math.min()
// Math.abs()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 2);
// expected output: 16

//-----------------------------------------------------------------------------------------------------------------------

function square(num){
  let num = Math.pow(num, 2);
  return num;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.floor() function rounds down to the smallest integer

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
}

//-----------------------------------------------------------------------------------------------------------------------

const oddCount = n => Math.floor(n/2) ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Math.ceil() function rounds down to the largest integer

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

//-----------------------------------------------------------------------------------------------------------------------

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.round() function rounds down the number to the smallest or largest integer

Math.round(0.95);
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Number(),0 converts all values to numbers

function sumOfValues(arr) {
  return arr.reduce((acc, c) => acc + Number(c), 0);
}

//-----------------------------------------------------------------------------------------------------------------------

function toBinary(n){
  return +(n.toString(2))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.max() function returns the largest of the numbers given as input
 
console.log(Math.max(...list));
// expected output: 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.min() function returns the smallest of the numbers given as input
 
console.log(Math.min(...list));
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.abs() function returns the absolute value of a number.

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2

//-----------------------------------------------------------------------------------------------------------------------

function enough(cap, on, wait) {
  return (cap - on - wait) > 0 ? 0 : Math.abs(cap - on - wait)
}

//==========================================================================================================================
// Ternary Operators
//==========================================================================================================================

const quarterOf = (month) => {
 return month <=3 ? 1 : month <= 6 ? 2 : month <=9 ? 3 : month <=12 ? 4 : 0;
}

//-----------------------------------------------------------------------------------------------------------------------

const areaOrPerimeter = function(l , w) {
  return l == w ? l * l : 2 * (l + w);
};

//-----------------------------------------------------------------------------------------------------------------------

function getGrade (s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3
  return ave >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

//-----------------------------------------------------------------------------------------------------------------------

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//-----------------------------------------------------------------------------------------------------------------------

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

//-----------------------------------------------------------------------------------------------------------------------

function updateLight(current) {
  return current === 'green' ? 'yellow' : current === "yellow" ? 'red' : 'green'
}

//-----------------------------------------------------------------------------------------------------------------------

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
}

//-----------------------------------------------------------------------------------------------------------------------






































//==========================================================================================================================
// CODEWARS (DO AGAIN)
//==========================================================================================================================
// 1 - Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


  function basicOp(operation, value1, value2) {
    switch (operation) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return 0;
    }
  }

// -----------------------------------------------------------------------------------------------------------------------
// 4 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// -----------------------------------------------------------------------------------------------------------------------
// 7 - Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive).

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// -----------------------------------------------------------------------------------------------------------------------
// 8 - Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
  return +(n.toString(2))
}

// -----------------------------------------------------------------------------------------------------------------------
// 9 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// -----------------------------------------------------------------------------------------------------------------------
// 10 - Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

// -----------------------------------------------------------------------------------------------------------------------
// 11 - Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// -----------------------------------------------------------------------------------------------------------------------
// 12 - Take an array and remove every second element from the array. Always keep the first element and start removing it with the next element.


function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
	return index % 2 === 0;
  });
}

// -----------------------------------------------------------------------------------------------------------------------
// 13 - Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}


// -----------------------------------------------------------------------------------------------------------------------
// 14 - Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    return word.substring(1) + word[0] + 'ay';
  }).join(' ');
}








// -----------------------------------------------------------------------------------------------------------------------
// 15 - In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base. For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


function findMultiples(int,limit){
  let multiples = [];
  for(let i = int; i <= limit; i += int){ multiples.push(i); }
  return multiples;
}



// -----------------------------------------------------------------------------------------------------------------------
// 16 - remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return arrayDiff.filter( ( a ) => !toRemove.includes( a ) );
}


// -----------------------------------------------------------------------------------------------------------------------
// 17 - Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


//================================================================================================
//-----------------------------------------------------------------------------------------------------------------------

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padStart() adds white spaces at the beginning of a sentence

padStart()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padEnd() adds white spaces at the end of a sentence

padEnd()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toArray() method is used to convert into a normal array


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .date.getHours();
// .date.getMinutes();
// .date.getSeconds();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//



//==============================================================================================================================

// .toLowerCase() method returns the value of the string converted to lower case.

function firtstName(firstName) {
  return firstName.toLowerCase();
}

//-----------------------------------------------------------------------------------------------------------------------

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .unshift() method adds elements to the beginning of an array

function addElemStart (name)
	return name.unshift('John')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toFixed(2) method rounds the string to a specified number of decimals. //2 in this case

let num = 5.56789;
let n = num.toFixed(2);
// 5.56

//-----------------------------------------------------------------------------------------------------------------------

function formatMoney(amount){
  return "$"+amount.toFixed(2)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padStart() adds white spaces at the beginning of a sentence

padStart()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .padEnd() adds white spaces at the end of a sentence

padEnd()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .toArray() method is used to convert into a normal array


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .date.getHours();
// .date.getMinutes();
// .date.getSeconds();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//



//==============================================================================================================================


























//==========================================================================================================================
// CODEWARS (DO AGAIN)
//==========================================================================================================================
// 1 - Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

// -----------------------------------------------------------------------------------------------------------------------
// 4 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
return (h * 3600 + m * 60 + s) * 1000;
}

// -----------------------------------------------------------------------------------------------------------------------
// 7 - Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive).

function preFizz(n) {
var output = [];
for (var i=1; i<=n; i++)
{
  output.push(i);
}
return output;
}

// -----------------------------------------------------------------------------------------------------------------------
// 8 - Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
return +(n.toString(2))
}

// -----------------------------------------------------------------------------------------------------------------------
// 9 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string


function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// -----------------------------------------------------------------------------------------------------------------------
// 10 - Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
let arr = [];
for (let i=n; i>0; i--) {
  arr.push(i);
  } return arr;
};

// -----------------------------------------------------------------------------------------------------------------------
// 11 - Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0


// -----------------------------------------------------------------------------------------------------------------------
// 12 - Take an array and remove every second element from the array. Always keep the first element and start removing it with the next element.


function removeEveryOther(arr){
return arr.filter(function(elem, index) {
return index % 2 === 0;
});
}

// -----------------------------------------------------------------------------------------------------------------------
// 13 - Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
return Math.floor(n/2);
}


// -----------------------------------------------------------------------------------------------------------------------
// 14 - Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
//Code here
return str.split(' ').map(word => {
  return word.substring(1) + word[0] + 'ay';
}).join(' ');
}

