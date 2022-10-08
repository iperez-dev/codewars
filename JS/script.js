//==============================================================================================================================
// ARRAYS METHODS 
//==============================================================================================================================
// for loops()
// while loop()
// (...arg)
// .reduce()
// .sort()
// .map()
// .filter()
// .reverse()
// .replace()
// .repeat()
// .slice()
// .trim()
// .split(' ')
//.join('')
// .substring()
// .endsWith()
// .toString()
// .toLowerCase()
// .unshift()
// .toFixed(0)
// .padStart()
// .padEnd()
// .toArray()



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
// .map() method creates a new array populated with the results of calling a provided function


function maps(x) {
  return x.map((n) => n * 2);
}

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .filter() method creates a new array filled with elements that pass a test provided by a function.


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
// STRINSG METHODS 
//==============================================================================================================================
// .charAt(0)
// .charCodeAt()
// .concat()
// .includes()
// .indexOf()
// .match()
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