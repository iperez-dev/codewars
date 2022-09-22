//CODEWAR 8KATA//

//-----------------------------------------------------------------------------------------------------------------------
// .sort() method sorts the elements as strings in alphabetical and ascending order.
// 1 - Given an array of integers, your solution should find the smallest integer.

function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];                                                        
}   

//-----------------------------------------------------------------------------------------------------------------------
// .map() method creates a new array populated with the results of calling a provided function
// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.map((n) => n * 2);                                                                  
}

//-----------------------------------------------------------------------------------------------------------------------
// .reduce() method adds two values together
// 2 - Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(a, b) {
  return numbers.reduce((acc, cv) => acc + cv * cv, 0);                                    
}

//-----------------------------------------------------------------------------------------------------------------------
// .repeat() method returns a string with a number of copies of a string
// 3 - Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);                                                                          
}

//-----------------------------------------------------------------------------------------------------------------------
// .slice() method allows you to extract subset elements of an array and add them to the new array
// 4 - Your goal is to create a function that removes the first and last characters of a string. 

function removeChar(str) {
  return str.slice(1, -1);                                                                    
}

//-----------------------------------------------------------------------------------------------------------------------
// .trim() method removes the whitespace at the edge of the string
// .repeat() method returns a new string that contains the specified number of copies of the string
// 5 - This is the last lesson about the string object, we will learn the two pieces of knowledge used to format the string.

function fiveLine(s){
  s = s.trim();                                                                               
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;              
}

//-----------------------------------------------------------------------------------------------------------------------

//.split(' ') method splits a string into an array of substrings.
//.join('') method  method creates and returns a new string by concatenating all of the elements in an array
// 6 - Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
	return x.split(' ').join('')
}

//-----------------------------------------------------------------------------------------------------------------------

// .toLowerCase() method returns the value of the string converted to lower case.
// .replace(/[ -]+/g, "-")  method replaces a specified phrase with another specified phrase (hyphen)
// 7 - Return string to lower case, no spaces, with hyphen between words

function getSpellName(){
	return str.trim().toLowerCase().replace(/[ -]+/g, "-")
}

//-----------------------------------------------------------------------------------------------------------------------

// .reverse() method reverses the order of the elements in an array.

function reverseList(list) {
  return list.reverse();
}

//-----------------------------------------------------------------------------------------------------------------------

// .filter() method creates a new array filled with elements that pass a test provided by a function.
// //Return a new array consisting of elements which are multiple of their own index in input array (length > 1).


function isMultiple(arr){
    return arr.filter((e,  i ) => e % i === 0 )
}

//-----------------------------------------------------------------------------------------------------------------------
// .Number(),0 converts all values to numbers
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

//-----------------------------------------------------------------------------------------------------------------------

//  Math.pow() method returns the value of a base raised to a power.

Math.pow(4, 0.5));
// expected output: 2









// -----------------------------------------------------------------------------------------------------------------------
// DO AGAIN
// -----------------------------------------------------------------------------------------------------------------------
// 1 - You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// -----------------------------------------------------------------------------------------------------------------------
// 2 - Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
	return x.split(' ').join('')
}

// -----------------------------------------------------------------------------------------------------------------------
// 3 - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0

function summation(num) {
	return num * (num + 1)/ 2
}
// -----------------------------------------------------------------------------------------------------------------------
// 4 - Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// -----------------------------------------------------------------------------------------------------------------------
