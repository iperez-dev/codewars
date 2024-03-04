// Question1 | ky8
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function. checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below. The function receives one parameter health which will always be a whole number between -10 and 10.
function checkAlive(health) {
  return health > 0;
}

// Question2 | ky8
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
// Question3 | ky8
/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string): 

Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"*/

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
// Question4 | ky8
/*Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
// Question5 | ky8
/*I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};
// Question6 | ky8
/*You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!*/
function fixTheMeerkat(arr) {
  return arr.reverse();
}
// Question7 | ky8
/*I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.*/
const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}
// Question8 | ky8
/*Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.of petals is always greater than 0.*/
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
// Question9 | ky8 | Find Multiples of a Number
/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.*/
function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}
// Question10 | ky8 | Grasshopper - Debug sayHello

/*The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock*/
const sayHello = (name) => `Hello, ${name}`;

// Question11 | ky8 | Powers of 2

/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

function powersOfTwo(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
// Question12 | ky8 | What is between?

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
// Question13 | ky8 | Is it even?

/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.*/

function testEven(n) {
  return n % 2 === 0;
}
// Question14 | ky5 | Simple Pig Latin

/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

function pigIt(str) {
  return str
    .split(" ")
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(" ");
}
// Question15 | ky8 | Student's Final Grade

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0*/

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

// Question16 | ky8 | Grasshopper - Terminal game move function

/*Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15*/

const move = (position, roll) => position + roll * 2;

// Question17 | ky8 | Short Long Short

/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"*/

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}
// Question18 | ky8 | Count Odd Numbers below n

/*Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!*/

function oddCount(n) {
  return Math.floor(n / 2);
}
// Question19 | ky8 | Function 2 - squaring an argument

/*Now you have to write a function that takes an argument and returns the square of it.*/

const square = (n) => n * n;

// Question20 | ky8 | Basic variable assignment

/*This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?*/
let name = "codewa.rs";

// Question21 | ky8 | Keep up the hoop

/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/
function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}
// Question22 | ky8 | Grasshopper - Messi Goals

/*Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task
Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.*/
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// Question23 | ky8 | Is the string uppercase?

/*Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True*/
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
// Question24 | ky8 | Grasshopper - Check for factor

/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/
function checkForFactor(base, factor) {
  return base % factor === 0;
}
// Question25 | ky8 | Removing Elements

/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
// Question26 | ky8 | Switch it Up!

/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.*/
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Unknown number";
  }
}
// Question27 | ky8 | Will there be enough space?

/*
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
// Question28 | ky8 | The Feast of Many Beasts

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
// Question29 | ky8 | Parse nice int from char problem

/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/
function getAge(inputString) {
  return parseInt(inputString);
}
// Question30 | ky8 | Twice as old

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
// Question31 | ky8 | Get Planet Name By ID
/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}
// Question32 | ky8 | Get Planet Name By ID
/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

2
Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala: None
Julia: nothing
Nim: none(int) (See options)
*/
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
// Question33 | ky8 | Find the first non-consecutive number
/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

2
Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala: None
Julia: nothing
Nim: none(int) (See options)
*/
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
// Question34 | ky8 | Double Char
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
// Question35 | ky8 | Grasshopper - Messi goals function
/*
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
// Question36 | ky8 | Do I get a bonus?
/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
// Question37 | ky8 | Count the Monkeys!
/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/
function monkeyCount(n) {
  var monkeys = [];
  for (var i = 1; i < n + 1; i++) {
    monkeys.push(i);
  }
  return monkeys;
}
// Question38 | ky8 | L1: Set Alarm

/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
const setAlarm = (employed, vacation) => employed && !vacation;
// Question39 | ky8 | Thinkful - Logic Drills: Traffic light

/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

//function passes in string (current state of light) -> 'string', no num, no caps
//return -> string (displays next light)
//
function nextLight(currentLight) {
  //currentLight -> change to nextLight
  if (currentLight === "red") {
    return "green";
  } else if (currentLight === "green") {
    return "yellow";
  } else {
    return "red";
  }
}
nextLight("red");
//test cases
console.log(nextLight("red"), "green");
console.log(nextLight("green"), "yellow");
console.log(nextLight("yellow"), "red");

// function updateLight(current) {
// return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }
// Question40 | ky8 | Third Angle of a Triangle

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/
function otherAngle(a, b) {
  return 180 - (a + b);
}
// Question41 | ky8 | Remove exclamation marks

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function RemoveExclamationMarks(str) {
  return str.split("!").joint("");
}

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}
// Question42 | ky8 | Remove exclamation marks

/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return
*/
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

/*
// Question43 | ky8 | Sum without highest and lowest number
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

/*
Question44 | ky8 | Grasshopper - Grade book
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade(s1, s2, s3) {
  let s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
/*
Question45 | ky8 | Area or Perimeter
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};
/*
Question46 | ky8 | Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
/*
Question47 | ky8 | Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
/*
Question48 | ky8 | Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
Constraint:
1 <= month <= 12
*/
const quarterOf = (m) => Math.ceil(m / 3);
/*
Question49 | ky8 | Total amount of points
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
// x = [our team's score | y = our opponents score]
// let ourTeam = ["3:1", "2:2", "0:1", ...]
// posible solution: take the first elem of a string |  reduce()

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

//test-cases
console.log(points(["3:1", "2:2", "0:1"]), 4);
// console.log(totalPoints(["3:1", "2:2", "0:1", "4:1", "2:1"]), 8);

/*
Question50 | ky8 | Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet(name, boss) {
  return name === boss ? "Hello boss" : "Hello guest";
}
/*
Question51 | ky8 | If you can't sleep, just count sheep!!

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
//posible solututions -> for loop i=0 sheep...

function countSheep(num) {
  let str = "";
  for (let i = 1; i <= 3; i++) {
    str += `${i} sheep...`;
  }
  return str;
}

console.log(countSheep(8));
/*
Question52 | ky8 | Count by X
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

//return -> [n * x]
//posible solutions -> let newArr = [] | for loop  .push()

function multiplesOfx(num1, num2) {
  let newArr = [];
  for (let i = num1; i <= num1 * num2; num1++) {
    return newArr.push(i);
  }
}
// test-cases
console.log(multiplesOfx(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(multiplesOfx(2, 5), [2, 4, 6, 8, 10]);
/*
Question52 | ky8 | Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/
//posible solutions -> .split(' ') .reverse() .join(' ')

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

//test-cases
console.log(
  reverseWords("The greatest victory is that which requires no battle"),
  "battle no requires which that is victory greatest The"
);
/*
Question53 | ky8 | Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer. The array will never be empty.
*/
//
//
//return -> [ave rounded down ]
//posible solutions -> ave = (+ all nums) / totalNums | Math.min()

function ave(arr) {
  return Math.floor(arr.reduce((acc, num) => acc + num) / arr.length);
}
//test-cases
console.log(ave([2, 5, 3, 7, 8, 8]), 5);
console.log(ave([2, 3, 4, 5, 2, 8]), 4);
/*
Question54 | ky8 | Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer. The array will never be empty.
*/
//
//
//return -> [ave rounded down ]
//posible solutions -> ave = (+ all nums) / totalNums | Math.min()

function ave(arr) {
  return Math.floor(arr.reduce((acc, num) => acc + num) / arr.length);
}
//test-cases
console.log(ave([2, 5, 3, 7, 8, 8]), 5);
console.log(ave([2, 3, 4, 5, 2, 8]), 4);
/*
Question55 | ky8 | Convert a string to an array

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
//
//
//return = [array of words]
// solution = .split(' ')

function arrWords(str) {
  return str.split(" ");
}

//test-cases
console.log(arrWords("Robin Singh"), ["Robin", "Singh"]);
console.log(arrWords("I love arrays they are my favorite"), [
  "I",
  "love",
  "arrays",
  "they",
  "are",
  "my",
  "favorite",
]);
/*
Question56 | ky8 | Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
//
//return = string, no spaces at beginning or end
//solution = .join(' ') | .trim()

function sentence(arr) {
  return arr.join(" ").trim();
}

//test-cases
console.log(
  sentence(["hello", "world", "this", "is", "great"]),
  "hello world this is great"
);
console.log(
  sentence(["Hi", "river", "this", "is", "blue"]),
  "Hi river this is blue"
);
/*
Question57 | ky8 | Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/
//
//
//return = num
//solution = .sort() | .reduce((acc, num) => acc * num )

function finalValue(arr) {
  return arr.sort().reduce((acc, num) => acc * num, 1);
}

//test-cases
console.log(finalValue([1, 2, 3, 4]), 24);
console.log(finalValue([5, 2, 4, 6, 7, 2]), 3360);
/*
Question58 | ky8 | Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.



*/
//return = true or false
//solution = 25 miles * gallon - 2 gallons - 50 miles away | if else

function getToPump(num) {
  return num >= 25 ? true : false;
}

//test-cases
console.log(getToPump(25), "true");
console.log(getToPump(35), "true");
console.log(getToPump(10), "false");
console.log(getToPump(1), "false");
/*
Question59 | ky8 | How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


*/
//
//
//return = true or false
//solutions = peersScores.reduce((acc, num) => (acc + num) / 3, 0) | ternary operator

function betterThanAve(peersScores, yourScore) {
  return peersScores.reduce((acc, num) => acc + num, 0) / peersScores.length;
}

//test-cases
console.log(betterThanAve([67, 48, 90, 87, 70], 1), "false");
console.log(betterThanAve([67, 48, 90, 87, 70], 100), "true");
/*
Question60 | ky8 | DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/
// GCAT - GCAU
//return = string
//solution = split('') | replace('T', 'U') | join('')

function dnaToRna(dna) {
  const splitDna = dna.split("");
  const replaceDna = splitDna.map((char) => (char === "T" ? "U" : char));
  const joinDna = replaceDna.join("");

  return joinDna;
}

//test-cases
console.log(dnaToRna("GCAT"), "GCAU");
/*
Question61 | ky8 | Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/
//return = num
//solutions = even * 8 | odd * 9 -> ternary operator
function evenOrOdd(num) {
  return num % 2 === 0 ? num * 8 : num * 9;
}

//test-cases
console.log(evenOrOdd(3), 27);
console.log(evenOrOdd(4), 32);
console.log(evenOrOdd(10), 80);
/*
Question62 | ky8 | Find Maximum and Minimum Values of a List

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.

*/

//return = 2 functions (max, min)
//solution = function(max) -> Math.max | function(min) -> Math.min
function max(arr) {
  return Math.max(...arr);
}
function min(arr) {
  return Math.min(...arr);
}

//test-cases
console.log(max([2, 5, 3, 7, 9, 4]), 9);
console.log(min([2, 5, 3, 7, 9, 4]), 2);
/*
Question63 | ky8 | Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

*/

//
//return = user -> 'hello' | Johnny -> 'how you doing?'
//solution = if user -> 'hello' | Johnny -> 'how you doing?' | ternary operator

function specialGreeting(user) {
  return user === "Johnny" ? "how you doing?" : "hello";
}

//test-cases
console.log(specialGreeting("user"), "hello");
console.log(specialGreeting("Johnny"), "how you doing?");
/*
Question64 | ky8 | Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/
//return = [from n to 1 where n>0]
//solution = for loop

function reversedSeq(n) {
  for (let i = n; i >= 1; i--) {
    return i;
  }
}

//test-cases
console.log(reversedSeq(5), [5, 4, 3, 2, 1]);
console.log(reversedSeq(3), [3, 2, 1]);
console.log(reversedSeq(6), [6, 5, 4, 3, 2, 1]);
/*
Question65 | ky8 | Is he gonna survive?

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

*/
// 2 bullets per dragon | 10 bullets
//return = true if yes, false if no
//solution = bullets / 2 | if numDragons <= 5 ? true : false (ternary operator)

function survive(numDragons, numBullets) {
  return numDragons <= numBullets / 2 ? true : false;
}

//test-cases
console.log(survive(2, 10), true);
console.log(survive(5, 10), true);
console.log(survive(10, 10), false);
console.log(survive(20, 10), false);
/*
Question66 | ky8 | You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/
// 2 bullets per dragon | 10 bullets
//return = true if yes, false if no
//solution = bullets / 2 | if numDragons <= 5 ? true : false (ternary operator)

const check = (a, x) => a.includes(x);
/*
Question67 | ky8 | Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

//return = [ave nums] -> num
//solutions = .reduce() / arr.length

function calcAverage(arrNum) {
  return arrNum.reduce((acc, value) => acc + value, 0) / arrNum.length;
}

//test-cases
console.log(calcAverage([2, 6, 3, 1]), 3);
console.log(calcAverage([20, 16, 23, 1]), 15);
console.log(calcAverage([200, 146, 322, 200]), 217);
/*
Question68 | ky8 | Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

//return = '00001111'
//solution = .split('') .map((elem) => elem < 5 ? elem = 0 : elem >= 5 ? 1 ).join('')

function replaceDigits(arr) {
  const splitStr = arr.split(", ");
  const replaceStr = splitStr.map((elem) => (elem < 5 ? 0 : 1));
  const joinArr = replaceStr.join(", ");

  return joinArr;
}

//test-cases
console.log(replaceDigits("3, 5, 7, 8, 3, 9"), "0, 1, 1, 1, 0, 1");
console.log(replaceDigits("4, 7, 3, 1, 8, 3"), "0, 1, 0, 0, 1, 0");
/*
Question69 | ky8 | Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

//return = name + " plays banjo" || name + " does not play banjo"
//solution =

function checkPlayer(name) {
  const nameArr = name.split("");
  const firstChar = nameArr[0];
  return firstChar === "R" || firstChar === "r"
    ? `${name} plays banjo"`
    : `${name} does not play banjo"`;
}

// test-cases
console.log(checkPlayer("Rocio"), "Rocio plays banjo");
console.log(checkPlayer("rocio"), "Rocio plays banjo");
console.log(checkPlayer("Ivan"), "Ivan does not play banjo");
console.log(checkPlayer("ivan"), "ivan does not play banjo");
console.log(checkPlayer("Raul"), "Raul plays banjo");
console.log(checkPlayer("Abdiel"), "Abdiel does not plays banjo");
/*
Question70 | ky8 | Sum Arrays


Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

*/

//return = sum of num | if no num -> return 0
//solution = [arrNums] -> .reduce((acc, elem) => acc + elem, 0) | if arrNum === '' return 0

function sumNum(arrNums) {
  if (arrNums === " ") {
    return 0;
  } else {
    return arrNums.reduce((acc, elem) => acc + elem, 0);
  }
}

//test-cases
console.log(sumNum([1, 5.2, 4, 0, -1]), 9.2);
console.log(sumNum([4, 1.2, 4, 5, -3]), 11.2);
/*
Question71 | ky8 | Invert values

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/

//return = true -> they are in love | false -> they aren't
//solution = if (TimmyFlower + SarahFlower) % 2 === 0 ? true : false

function inLove(TimmyFlower, SarahFlower) {
  return (TimmyFlower + SarahFlower) % 2 === 0 ? false : true;
}

//test-cases
console.log(inLove(2, 6), false);
console.log(inLove(7, 3), false);
console.log(inLove(3, 4), true);
/*
Question72 | ky8 | Invert values


Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/
//return = sum of all inversed nums
//solution = .split('').map((elem) => elem === '' ? '-' : - ? '').join('')

function inverseNum(arr) {
  return arr.map((elem) => -elem);
}

//test-cases

console.log(inverseNum([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(inverseNum([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
/*
Question73 | ky8 | Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

*/

//return = num
//solution = n * m | If n < 0 or m < 0

function blankPages(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

//test-cases
console.log(blankPages(5, 5), 25);
console.log(blankPages(-5, 5), 0);
console.log(blankPages(-5, -5), 0);
console.log(blankPages(3, 10), 30);
/*
Question74 | ky8 | MakeUpperCase

Write a function which converts the input string to uppercase.

*/
//return = str to uppercase
//solution = toUppercase()

function converUppercase(str) {
  return str.toUpperCase();
}

//test-cases
console.log(converUppercase("hello"), "HELLO");
console.log(converUppercase("world"), "WORLD");
/*
Question75 | ky8 | Convert to Binary

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

Start with the number 10.
Divide it by 2: 10 ÷ 2 = 5 with a remainder of 0. Write down the remainder (0).
Continue to divide 5 by 2: 5 ÷ 2 = 2 with a remainder of 1. Write down the remainder (1).
Divide 2 by 2: 2 ÷ 2 = 1 with a remainder of 0. Write down the remainder (0).
Finally, divide 1 by 2: 1 ÷ 2 = 0 with a remainder of 1. Write down the remainder (1).

Example:

toBinary(1)  should return 1 
toBinary(5)  should return 101 
toBinary(11) should return 1011 

*/
//return = num -> binary format
//solution = num

let toBinary = (n) => +n.toString(2);

//test-cases
console.log(toBinary(11), 1011);
/*
Question76 | ky8 | Pre-FizzBuzz Workout #1
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.
*/

//result = [1, 2, ... n (inclusive)]
//solution = n =< 1 | n

function positiveNums(n) {
  let numArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  return numArr;
}

//test-cases
console.log(positiveNums(4), [1, 2, 3, 4]);
console.log(positiveNums(1), [1]);
console.log(positiveNums(5), [1, 2, 3, 4, 5]);
/*
Question76 | ky8 | Basic data types--Number

I've written five functions equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

*/
//return =
//soluton =
var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);

const equal1 = () => v1 + v1;
const equal2 = () => v3 - v1;
const equal3 = () => v1 * v5;
const equal4 = () => v4 / v5;
const equal5 = () => v2 % v4;
/*
Question77 | ky8 | Dollars and Cents

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!

*/
//return = $3.10
//solution = .toFixed(2) | $ ${value}

function dollarsAndCents(dollars) {
  return `$ ${dollars.toFixed(2)}`;
}

//test-cases
console.log(dollarsAndCents(3), "$3.00");
console.log(dollarsAndCents(3.1), "$3.10");
console.log(dollarsAndCents(3.0), "$3.00");
console.log(dollarsAndCents(3.635485), "$3.63");
console.log(dollarsAndCents(39.99), "$39.99");
/*
Question79 | ky8 | FIXME: Replace all dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task: Fix the bug so we can all go home early.
Notes: String str will never be null.
*/

//return = -
//solution = split('.') | join('-')

function replaceDot(str) {
  return str.split(".").join("-");
}

//test-cases
console.log(replaceDot("Hello . World"), "Hello - World");
console.log(replaceDot("red.river"), "red-river");
/*
Question80 | ky8 | Holiday VIII - Duty Free

The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

All inputs will be integers. Please return an integer. Round down.

*/

//return = num
//solution = holidayPrice / (normPrice * 0.0discount )
//

function dutyFreeBottles(normPrice, discount, holidayPrice) {
  return holidayPrice / (normPrice * (discount * 0.01));
}

//test-cases
console.log(dutyFreeBottles(10, 10, 500), 500);
console.log(dutyFreeBottles(12, 50, 1000), 166.66);
/*
Question81 | ky8 | Reversing Words in a String

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!



*/
//return = string
//solution = .split(' ') | .reverse( ) | .join(' ')

function reverseStr(str) {
  return str.split(" ").reverse().join(" ");
}

//test-cases
console.log(reverseStr("Hello World"), "World Hello");
console.log(reverseStr("Hi There."), "There. Hi");
/*
Question82 | ky8 | Grasshopper - Basic Function Fixer

I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

*/

//return = num
//solution = num + 5

function addFive(num) {
  return num + 5;
}

//test-cases
console.log(addFive(5), 10);
console.log(addFive(2), 7);
console.log(addFive(0), 5);
/*
Question83 | ky8 | Is this my tail?

Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.

*/
//return = boolean
//solution = body.charAt(body.length - 1) === tail

function animalTails(body, tail) {
  return body.charAt(body.length - 1) === tail ? true : false;
}

//test-cases
console.log(animalTails("leon", "n"), true);
console.log(animalTails("zebra", "n"), false);
console.log(animalTails("zebra", "a"), true);
console.log(animalTails("monkey", "a"), false);
/*
Question84 | ky8 | Enumerable Magic #25 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

*/

//return = []
//solution = for loop

function firstN(arr, num) {
  for (let i = 0; i <= num; i++) {
    return arr[i];
  }
}

//test-cases
console.log(firstN([1, 2, 3, 4, 5], 3), [1, 2, 3]);
console.log(firstN([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
console.log(firstN(["a", "b", "c", "d", "c"], 2), ["a", "b"]);
/*
Question85 | ky8 | Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

//return = []
//solution = str.split['a, e, i, o, u'].join['']

function shortcut(str) {
  return str.split(/[aeiou]/).join("");
}

//test-cases
console.log(shortcut("Hello World"), "Hll Wrld");
console.log(shortcut("codewars"), "cdwrs");
console.log(shortcut("HELLO"), "HELLO");
/*
Question86 | ky8 | Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//return = [ countPositive, sumNegative]
//solution = 0 is neither positive nor negative | empty array or is null, return an empty array | arr.filter((x) => x > 0) | arr.filter((x) => x < 0) | arr.filter((x) x === 0 || x === null ? '' )

function positiveNegative(arr) {
  if (arr === null || arr.length === 0) {
    return "";
  } else {
    const positiveNum = arr.filter((elem) => elem > 0);
    const countPositive = positiveNum.length;
    const negativeNum = arr.filter((elem) => elem < 0);
    const sumNegative = negativeNum.reduce((acc, elem) => acc + elem, 0);
    return [countPositive, sumNegative];
  }
}

//test-cases
console.log(
  positiveNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
  [10, -65]
);
console.log(positiveNegative([2, 5, 7, 8, 0, -3, -5, -6]), [4, -14]);
console.log(positiveNegative([null]), [""]);
console.log(positiveNegative([""]), [""]);
/*
Question87 | ky8 | Is n divisible by x and y?

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/
//return = boolean
//solution =  if n/x || n/y = true : false

function divisibleByTwo(n, x, y) {
  return n % x === 0 || n % y === 0;
}

//test-cases
console.log(divisibleByTwo(3, 1, 3), true);
console.log(divisibleByTwo(12, 2, 6), true);
console.log(divisibleByTwo(100, 7, 10), false);
console.log(divisibleByTwo(12, 7, 5), false);
/*
Question88 | ky8 | Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/
//return = num
//solution = 1sec -> 1000 milsec | 1min -> 60sec * 1000milsec | 1hr -> 60min * 60sec * 1000 milsec

function timeSinceMidnight(h, m, s) {
  if (h < 0 || h > 23) {
    return ` ${(h, m, s)} is not a valid time`;
  } else if (m < 0 || m > 59) {
    return ` ${(h, m, s)} is not a valid time`;
  } else if (s < 0 || s > 59) {
    return ` ${(h, m, s)} is not a valid time`;
  } else {
    const secToMil = s * 1000;
    const minToMil = m * 60 * 1000;
    const hrToMill = h * 60 * 60 * 1000;

    return hrToMill + minToMil + secToMil;
  }
}

//test-cases
console.log(timeSinceMidnight(0, 1, 1), 61000);
console.log(timeSinceMidnight(0, 2, 1), 121000);
console.log(timeSinceMidnight(54, 2, 1), `This is not a valid time`);

/*
Question89 | ky8 | A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

*/

// return = `found the needle at position ${indx}`
// solution = arr.indexOf()

function findNeedle(arr) {
  const indexOfNeedle = arr.indexOf("needle");
  return `found the needle at position ${indexOfNeedle}`;
}

//test-cases
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]),
  `found the needle at position 5`
);
console.log(
  findNeedle(["hay", "hay", "moreJunk", "needle", "randomJunk"]),
  `found the needle at position 3`
);
console.log(
  findNeedle(["needle", "randomJunk"]),
  `found the needle at position 0`
);
/*
Question90 | ky8 | Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// return = str
// solution = .split(' ') | charAt(0) | toUppercase | .join('.')

function nameIntoInitials(str) {
  const strToWord = str.split(" ");
  const firstLetter = strToWord.map((elem) => elem.charAt(0));
  const joinLetters = firstLetter.join(".").toUpperCase();
  return joinLetters;
}

//test-cases
console.log(nameIntoInitials(`Sam Harris`), `S.H`);
console.log(nameIntoInitials(`patrick feeney`), `P.F`);
/*
Question91 | ky8 | Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

//return = arr
//solution = .map((elem) => elem * 2)

function doubledValue(arr) {
  return arr.map((elem) => elem * 2);
}

//test-cases
console.log(doubledValue([1, 2, 3]), [2, 4, 6]);
console.log(doubledValue([22, 4, 15]), [44, 8, 30]);
console.log(doubledValue([2, 5, 6]), [4, 10, 12]);
/*
Question92 | ky8 | You Can't Code Under Pressure #1

Code as fast as you can! You need to double the integer and return it.

*/
//return = num
//solution = num * num

function doubleInteger(num) {
  return num * 2;
}

//test-cases
console.log(doubleInteger(5), 10);
console.log(doubleInteger(2), 4);
console.log(doubleInteger(10), 20);
/*
Question93 | ky8 | Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] 
num => 0
*/

//return = arr
//solution = .toString() | .split('') | .map() | .reverse()

function reverseArray(num) {
  return String(num).split("").map(Number).reverse();
}

// 35231
// '35231'
// '3','5','2','3','1'
// '1','3','2','5','3'
// [13253]

//test-cases
console.log(reverseArray(35231), [1, 3, 2, 5, 3]);
/*
Question94 | ky8 | Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

//return = 'true' || 'false'
//solution =

function booleanToString(boolean) {
  return boolean.toString();
}

//test-cases
console.log(booleanToString(true), "true");
console.log(booleanToString(false), "false");
/*
Question95 | ky8 | Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/
//return = num
//solution = if / else

function mathOperations(operator, value1, value2) {
  return operator === "+"
    ? value1 + value2
    : operator === "-"
    ? value1 - value2
    : operator === "*"
    ? value1 * value2
    : value1 / value2;
}

//test-cases
console.log(mathOperations("+", 4, 7), 11);
console.log(mathOperations("-", 15, 18), -3);
console.log(mathOperations("*", 5, 5), 25);
console.log(mathOperations("/", 49, 7), 7);
/*
Question96 | ky8 | Returning Strings

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

//return = str
//solution =

function greeting(input) {
  return `Hello, ${input} how are you doing today?`;
}

//test-cases
console.log(greeting("Rocio"), `Hello, Rocio how are you doing today?`);
console.log(greeting("Sofia"), `Hello, Sofia how are you doing today?`);
/*
Question97 | ky8 | Century From Year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

//return = num
//solution = 1-100 -> 1cen | 101-200 -> 2cen

function returnCentury(year) {
  return Math.ceil(year / 100);
}

//test-cases
console.log(returnCentury(1705), 18);
console.log(returnCentury(1900), 19);
console.log(returnCentury(1601), 17);
console.log(returnCentury(2000), 20);
/*
Question98 | ky8 | Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/
//return = num
//solution = 0.5 litres of water per hour | time in hours -> number of litres rounded to the smallest value. | Math.floor()

function numberOfLiters(time) {
  return Math.floor(time * 0.5);
}

//test-cases
console.log(numberOfLiters(3), 1);
console.log(numberOfLiters(6.7), 3);
console.log(numberOfLiters(11.8), 5);
console.log(numberOfLiters(110.8), 55);
/*
Question99 | ky8 | Convert a String to a Number!

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/

//return = num
//solution =

function stringToNum(str) {
  return Number(str);
}

//test-cases
console.log(stringToNum("1234"), 1234);
console.log(stringToNum("605"), 605);
console.log(stringToNum("1405"), 1405);
/*
Question100 | ky8 | Remove String Spaces

Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

*/
//return = str
//solution = .split('') | .filter((elem) => elem !== ' ') | .join('') |
// split('') | join(/' '/)

function removeSpaces(str) {
  return str.split(" ").join("");
}

//test-cases
console.log(
  removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"),
  "8j8mBliB8gimjB8B8jlB"
);
console.log(
  removeSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
  "88Bifk8hB8BB8BBBB888chl8BhBfd"
);
console.log(removeSpaces("8aaaaa dddd r     "), "8aaaaaddddr");
/*
Question101 | ky7 | Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//return = num
//solution = .split('') | .filter((elem) elem === 'a', 'e', 'i', 'o', 'u' ) | arr.length

function numberVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((elem) => vowels.includes(elem)).length;
}

//test-cases
console.log(numberVowels("a, e, f, s, o, d, a"), 4);
console.log(numberVowels("d, a"), 1);
console.log(numberVowels("a, e, f, s, o, d, a, a, o, i, e"), 8);
/*
Question102 | ky7 | Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

//return = str

//solution = .split("").filter((elem) => !vowels).join()
function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((elem) => !vowels.includes(elem))
    .join("");
}

//test-cases
console.log(removeVowels("hello james"), `hll jms`);
console.log(removeVowels("nice to meet you"), `nc t mt y`);
console.log(
  removeVowels("This website is for losers LOL!"),
  `Ths wbst s fr lsrs LL!`
);
/*
Question103 | ky7 | Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

//return = num
//solution = .split("").map((elem) => elem * elem).join("")
//question? Can I split a number, or I need to converted to a string first?

function squareDigit(num) {
  const str = String(num)
    .split("")
    .map((elem) => Number(elem * elem))
    .join("");
  return (num = Number(str));
}

//test-cases
console.log(squareDigit(9119), 811181);
console.log(squareDigit(765), 493625);
console.log(squareDigit(234), 4916);
/*
Question104 | ky7 | Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

//return = str
//solution = .split() Number().sort() charAt(0) arr.length -1

function HighestAndLower(str) {
  const numberArray = str.split(" ").map(Number);
  const lowestNum = Math.min(...numberArray);
  const highestNum = Math.max(...numberArray);
  return `${highestNum} ${lowestNum}`;
}

//test-cases
console.log(HighestAndLower("1 2 3 4 5"), "5 1");
console.log(HighestAndLower("1 2 -3 4 5"), "5 -3");
console.log(HighestAndLower("1 9 3 4 -5"), "9 -5");
/*
Question105 | ky7 | Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/
//return = num
//solution =

function desendingOrder(num) {
  return String(num).split("").map(Number).sort().reverse().join("");
}

//test-cases
console.log(desendingOrder(42145), 54421);
console.log(desendingOrder(145263), 654321);
console.log(desendingOrder(123456789), 987654321);
/*
Question106 | ky7 | Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

//return = str
//solution = odd -> middle char | even -> 2 char | .split("").

function getMiddle(word) {
  const length = word.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}
//test-cases
console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
/*
Question107 | ky7 | You're a square!

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

//pseudo-code = list num and strings -> filter -> return num
//return = num
//solution = arr.filter((num) => num)

function filterStr(arr) {
  return arr.filter((elem) => typeof elem === "number");
}

//test-cases
console.log(filterStr([1, 2, "a", "b"]), [1, 2]);
console.log(filterStr([1, "a", "b", 0, 15]), [1, 0, 15]);
console.log(filterStr([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
/*
Question108 | ky7 | Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//return = boolean
//pseudo-code = toLowercase | str.split() | .filter((elem) => elem === o) | .filter((elem) => elem === x) | if else

function sameXthanO(str) {
  const splitStr = str.toLowerCase().split("");
  const strO = splitStr.filter((elem) => elem === "o");
  const strX = splitStr.filter((elem) => elem === "x");

  // if (strO.length === strX.length) {
  //   return true;
  // } else {
  //   return false;
  // }

  return strO.length === strX.length;
}

//test-cases
console.log(sameXthanO("ooxx"), true);
console.log(sameXthanO("xooxx"), false);
console.log(sameXthanO("ooxXm"), true);
console.log(sameXthanO("zpzpzpp"), true); // when no 'x' and 'o' is present should return true
console.log(sameXthanO("zzoo"), false); // when no 'x' and 'o' is present should return true
/*
Question109 | ky7 | Jaden Casing Strings

For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/
//return = str
//pseudo-code = str.split(' ').toUpperCase(.charAt(0)).join('')

function capitalizeFirstLetter(str) {
  const splitStr = str.split(" ");
  const firstLetter = splitStr.map(
    (elem) => elem[0].toUpperCase() + elem.slice(1)
  );
  return firstLetter.join(" ");
}

//test-cases
console.log(
  capitalizeFirstLetter("How can mirrors be real if our eyes aren't real"),
  "How Can Mirrors Be Real If Our Eyes Aren't Real"
);
/*
Question110 | ky7 | Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/
//return = num
//pseudo-code = .split(' ').map((elem) => elem.length).sort().charAt(0)

function shortestWord(str) {
  const arrLength = str.split(" ").map((elem) => elem.length);
  return Math.min(...arrLength);
}

//test-cases
console.log(shortestWord("Hello world, JavaScript is fun"), 2);
/*
Question111 | ky7 | Credit Card Mask

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/
//pseudo-code = change all char for # -> !arr.length - 1,2,3,4

function maskify(str) {
  if (str.length <= 4) {
    return str;
  }
  return "#".repeat(str.length - 4) + str.slice(-4);
}

// Test cases
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
/*
Question112 | ky7 | Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/
//return = num
//pseudo-code = [num[0] + num [1] ]
//solution = arr.sort().slice(0, 2).reduce((a, b) a + b, 0)

function sumTwoLower(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.slice(0, 2).reduce((a, b) => a + b, 0);
}

//test-cases
console.log(sumTwoLower([19, 5, 42, 2, 77]), 7);
console.log(sumTwoLower([10, 343445353, 3453445, 3453545353453]), 3453455);
/*
Question113 | ky7 | Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

*/

//return = num
//pseudo-code = + || - | sum of all nums b/ a && b inclusive | if a = b return a
//solution = for loop

function sumNumBetween(num1, num2) {
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}

//test-cases
console.log(sumNumBetween(1, 0), 1);
console.log(sumNumBetween(1, 2), 3);
console.log(sumNumBetween(0, 1), 1);
console.log(sumNumBetween(1, 1), 1);
console.log(sumNumBetween(-1, 0), -1);
console.log(sumNumBetween(-1, 2), 2);
/*
Question114 | ky7 | Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/
//return = str
//pseudo-code = arr['str'] === 4 letters
//solution = const fourLetters = arr.filter((elem) => elem.length === 4)

function filterFriends(arr) {
  return arr.filter((elem) => elem.length === 4);
}

//test-cases
console.log(filterFriends(["Ryan", "Kieran", "Jason", "Yous"]), [
  "Ryan",
  "Yous",
]);
console.log(filterFriends(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
/*
Question115 | ky7 | Categorize New Member

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/
//return = arr
//pseudo-code = senior >= 55years && handicap > 7 [age, handicap]
//solution = if arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open"

function openOrSenior(arr) {
  return arr.map((elem) => (elem[0] >= 55 && elem[1] > 7 ? "Senior" : "Open"));
}

//test-cases
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
  ["Open", "Open", "Senior", "Open", "Open", "Senior"]
);
/*
Question116 | ky7 | Find the next perfect square!

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/
//return = num
//pseudo-code = if   num /

function findNextSquare(num) {
  const squareRoot = Math.sqrt(num);
  if (num / squareRoot === squareRoot) {
    const nextNum = squareRoot + 1;
    return Math.pow(nextNum, 2);
  } else {
    return -1;
  }
}

//test-cases
console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(114), -1); //not a perfect square
/*
Question117 | ky7 | Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/
//return = str
//pseoudo-code = str -> count num char str = char | count char !a - m = error | return error/char
//solution = str.length | str.split('').filter((elem) => elem > 'm' ).length

function printer_error(str) {
  const strChar = str.length;
  const strErr = str.split("").filter((elem) => elem > "m").length;
  return `${strErr}/${strChar}`;
}

//test-cases
console.log(printer_error("aaabbbbhaijjjm"), "0/14");
console.log(printer_error("aaaxbbbbyyhwawiwjjjwwm"), "8/22");
/*
Question117 | ky7 | Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/
//return = booolean
//pseudo-code = PINcode 4-6digits | all nums
//solutions = if all nums | str.split("").length | if === 4 || 6 ? true : false

function validPin(str) {
  return /^(\d{4}|\d{6})$/.test(str);
}

//test-cases
console.log(validPin("1234"), true);
console.log(validPin("12345"), false);
console.log(validPin("a234"), false);
/*
Question118 | ky7 | Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/
//return = str
//pseudo-code = num1 + num2 = num3 -> binary -> to string
//solution =

function sumToBinary(num1, num2) {
  const numThree = num1 + num2;
  return numThree.toString(2);
}

//test-cases
console.log(sumToBinary(1, 1), "10");
console.log(sumToBinary(5, 9), "1110");
/*
Question119 | ky7 | Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

*/

function nb_year(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    years++;
  }

  return years;
}

// Example usage:
console.log(nb_year(1500, 5, 100, 5000)); // Output: 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // Output: 10
/*
Question120 | ky7 | Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

//return = boolean
//pseudo-code = a + b + c = 360 true : false

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(3, 4, 5)); // Output: true
console.log(isTriangle(1, 1, 3)); // Output: false
console.log(isTriangle(0, 1, 2)); // Output: false
/*
Question121 | ky7 | Is this a triangle?

Returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

//return = boolean
//pseudo-code = 1st ends = 2nd -> true
//solution = const str2Length = str2.length | const str1Ending = slice (str1.length - str2Length, str1.length) | if (str2Length === str1Ending)

function equalEnding(str1, str2) {
  const str2Length = str2.length;
  const str1Ending = str1.slice(str1.length - str2Length, str1.length);
  return str1Ending === str2;
}

//test-cases
console.log(equalEnding("abc", "bc"), true);
console.log(equalEnding("abc", "d"), false);
console.log(equalEnding("hello world", "d"), true);
/*
Question122 | ky7 | String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending) {
  return str.endsWith(ending);
}
/*
Question123 | ky7 | Number of People in the Bus
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

*/
//return = num
//edge-cases =
//pseudo-code = on the bus : off the bus | return number of people who are still on the bus | people in the bus is always >= 0
//solution = const onTheBus = .map((arr) => arr[0]) | onTheBus.reduce((acc, value) => acc + value, 0) | same for off the bus | onTheBus + offTheBus = finalNumber | finalNumber >= 0 ? finalNumber : error

function peopleStillOnTheBus(stops) {
  //people on the bus
  const firstIndex = stops.map((stop) => stop[0]);
  const onTheBus = firstIndex.reduce((acc, value) => acc + value);
  //people off the bus
  const secondIndex = stops.map((stop) => stop[1]);
  const offTheBus = secondIndex.reduce((acc, value) => acc + value);
  //final number of people
  const peopleOnTheBus = onTheBus - offTheBus;
  return peopleOnTheBus >= 0 ? peopleOnTheBus : "error";
}

//test-case1
//Stop1   [3, 0]
//Stop2   [4, 2]
//Stop3   [3, 3]
//Stop4   [0, 2]
//On the bus = 3
//result >= 0 : error
console.log(
  peopleStillOnTheBus([
    [3, 0],
    [4, 2],
    [3, 3],
    [0, 2],
  ])
); //3

//test-case2
//Stop1   [3, 0]
//Stop2   [4, 2]
//Stop3   [3, 3]
//Stop4   [0, 5]
//On the bus = 0
//result >= 0 : error
console.log(
  peopleStillOnTheBus([
    [3, 0],
    [4, 2],
    [3, 3],
    [0, 5],
  ])
); //0

//test-case3
//Stop1   [3, 0]
//Stop2   [4, 2]
//Stop3   [3, 3]
//Stop4   [0, 6]
//On the bus = -1
//result >= 0 : error
console.log(
  peopleStillOnTheBus([
    [3, 0],
    [4, 2],
    [3, 3],
    [0, 6],
  ])
); //error
/*
Question124 | ky7 | Odd or Even?
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

*/
function oddOrEven(arr) {
  if (arr.length === 0) {
    return "even";
  }

  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([1, 2, 3]));
console.log(oddOrEven([]));

/*
Question125 | ky7 | Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

*/
function reverseWords(str) {
  const wordsAndSpaces = str.split(/(\s+)/);

  const reversed = wordsAndSpaces.map((element) =>
    element.trim().length > 0 ? element.split("").reverse().join("") : element
  );

  return reversed.join("");
}

console.log(reverseWords("Hello world"));
console.log(reverseWords("a b c d"));
console.log(reverseWords("double  spaced  words"));
/*
Question126 | ky7 | Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/
function divisors(n) {
  let divisors = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }

  divisors.sort((a, b) => a - b);

  return divisors.length === 0 ? `${n} is prime` : divisors;
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
/*
Question127 | ky7 | Sum of the first nth term of Series

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/
function seriesSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }

  return sum.toFixed(2);
}

console.log(seriesSum(1)); // "1.00"
console.log(seriesSum(2)); // "1.25"
console.log(seriesSum(5)); // "1.57"
/*
Question128 | ky7 | Remove the minimum

The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

*/
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let copiedArray = [...numbers];

  let min = Math.min(...copiedArray);

  let minIndex = copiedArray.indexOf(min);

  copiedArray.splice(minIndex, 1);

  return copiedArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [2, 2, 2, 1]
/*
Question129 | ky7 | Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

function numberLines(lines) {
  return lines.map((line, index) => `${index + 1}: ${line}`);
}

console.log(numberLines([])); // Output: []
console.log(numberLines(["a", "b", "c"])); // Output: ["1: a", "2: b", "3: c"]
/*
Question130 | ky7 | The highest profit wins!

Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

*/

function findMinMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}

// Example usage
console.log(findMinMax([1, 2, 3, 4, 5])); // Output: [1, 5]
console.log(findMinMax([2334454, 5])); // Output: [5, 2334454]
console.log(findMinMax([1])); // Output: [1, 1]

/*
Question131 | ky7 | Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function countNumbersWithoutFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      count++;
    }
  }
  return count;
}

// Example usage
console.log(countNumbersWithoutFive(1, 9)); // Output: 8
console.log(countNumbersWithoutFive(4, 17)); // Output: 12

/*
Question132 | ky7 | Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function findUniqueNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
      return numbers[i];
    }
  }
}

// Example usage
console.log(findUniqueNumber([1, 1, 2])); // Output: 2
console.log(findUniqueNumber([17, 17, 3, 17, 17, 17, 17])); // Output: 3

/*
Question133 | ky7 | Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

*/
function countDivisors(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i) {
        count++;
      } else {
        count += 2;
      }
    }
  }

  return count;
}

// Example usage:
console.log(countDivisors(4)); // Output: 3
console.log(countDivisors(5)); // Output: 2
console.log(countDivisors(12)); // Output: 6
console.log(countDivisors(30)); // Output: 8

/*
Question134 | ky7 | Money, Money, Money

Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

*/

function calculateYears(P, I, T, D) {
  let years = 0;

  while (P < D) {
    let interest = P * I; // Calculate the interest
    let taxedInterest = interest * (1 - T); // Calculate the interest after tax
    P += taxedInterest; // Add the after-tax interest to the principal
    years++; // Increment the year count
  }

  return years;
}

// Example usage
let yearsNeeded = calculateYears(1000, 0.05, 0.18, 1100);
console.log(yearsNeeded); // Output will be 3

/*
Question135 | ky7 | Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// Example usage
let sortedArray = sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);
console.log(sortedArray); // Output will be ["Eyes", "Glasses", "Monocles", "Telescopes"]

/*
Question136 | ky7 | Breaking chocolate problem

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.

*/

function breakChocolate(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  }

  return n * m - 1;
}

// Example usage
console.log(breakChocolate(2, 1)); // Output: 1
console.log(breakChocolate(3, 1)); // Output: 2
console.log(breakChocolate(0, 1)); // Output: 0 (invalid input)

/*
Question138 | ky7 | Count the Digit

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.

*/

function countDigitInSquares(n, d) {
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let square = k * k;
    let squareStr = square.toString();
    for (let char of squareStr) {
      if (char === d.toString()) {
        count++;
      }
    }
  }
  return count;
}

// Example usage:
console.log(countDigitInSquares(10, 1)); // should return 4
console.log(countDigitInSquares(25, 1)); // should return 11

/*
Question139 | ky7 | Make a function that does arithmetic!

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!

*/

function calculate(a, b, operator) {
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
  };

  return operations[operator](a, b);
}

// Example usage:
console.log(calculate(5, 2, "add")); // --> 7
console.log(calculate(5, 2, "subtract")); // --> 3
console.log(calculate(5, 2, "multiply")); // --> 10
console.log(calculate(5, 2, "divide")); // --> 2.5

/*
Question140 | ky7 | Find the middle element

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme(triplet) {
  const sortedTriplet = [...triplet].sort((a, b) => a - b);

  const middle = sortedTriplet[1];

  return triplet.indexOf(middle);
}

// Example usage
console.log(gimme([2, 3, 1])); // Output: 0
console.log(gimme([5, 10, 14])); // Output: 1

/*
Question141 | ky7 | Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

function roundToNext5(n) {
  if (n < 0) {
    return -Math.ceil(-n / 5) * 5;
  }
  return Math.ceil(n / 5) * 5;
}

// Example usage
console.log(roundToNext5(0)); // Output: 0
console.log(roundToNext5(2)); // Output: 5
console.log(roundToNext5(3)); // Output: 5
console.log(roundToNext5(12)); // Output: 15
console.log(roundToNext5(21)); // Output: 25
console.log(roundToNext5(30)); // Output: 30
console.log(roundToNext5(-2)); // Output: 0
console.log(roundToNext5(-5)); // Output: -5

/*
Question142 | ky7 | Sum of a sequence

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
}

// Example usage
console.log(sequenceSum(2, 2, 2)); // Output: 2
console.log(sequenceSum(2, 6, 2)); // Output: 12
console.log(sequenceSum(1, 5, 1)); // Output: 15
console.log(sequenceSum(1, 5, 3)); // Output: 5

/*
Question143 | ky7 | Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

function solution(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  return arr.sort((a, b) => a - b);
}

// Test the function
console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution(null)); // should return []
/*
Question144 | ky7 | Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeAnchor(url) {
  const anchorIndex = url.indexOf("#");

  if (anchorIndex === -1) {
    return url;
  }

  return url.substring(0, anchorIndex);
}

// Testing the function with examples
console.log(removeAnchor("www.codewars.com#about")); // Expected output: "www.codewars.com"
console.log(removeAnchor("www.codewars.com?page=1")); // Expected output: "www.codewars.com?page=1"
/*
Question144 | ky7 | Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeAnchor(url) {
  const anchorIndex = url.indexOf("#");

  if (anchorIndex === -1) {
    return url;
  }

  return url.substring(0, anchorIndex);
}

// Testing the function with examples
console.log(removeAnchor("www.codewars.com#about")); // Expected output: "www.codewars.com"
console.log(removeAnchor("www.codewars.com?page=1")); // Expected output: "www.codewars.com?page=1"
/*
Question145 | ky7 | Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

function isAnagram(str1, str2) {
  // Convert both strings to lower case and sort the characters
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Testing the function with examples
console.log(isAnagram("foefet", "toffee")); // Expected output: true
console.log(isAnagram("Buckethead", "DeathCubeK")); // Expected output: true
/*
Question146 | ky7 | Find the capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

*/

function capitalLetterIndices(word) {
  return word
    .split("") // Convert the string into an array of characters
    .map((char, index) => (char >= "A" && char <= "Z" ? index : null)) // Map to index or null
    .filter((index) => index !== null); // Filter out the null values
}

// Testing the function with the example
console.log(capitalLetterIndices("CodEWaRs")); // Expected output: [0, 3, 4, 6]
/*
Question147 | ky7 | Small enough? - Beginner

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/

function checkArrayAgainstLimit(arr, limit) {
  return arr.every((value) => value <= limit);
}

// Testing the function with examples
console.log(checkArrayAgainstLimit([10, 20, 30], 40)); // Expected output: true
console.log(checkArrayAgainstLimit([10, 20, 30], 25)); // Expected output: false
/*
Question148 | ky7 | Reverse Letter

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

function reverseLetter(str) {
  // Filter out non-alphabetical characters and reverse the remaining characters
  return str
    .match(/[a-zA-Z]/g)
    .reverse()
    .join("");
}

// Testing the function with examples
console.log(reverseLetter("krishan")); // Expected output: "nahsirk"
console.log(reverseLetter("ultr53o?n")); // Expected output: "nortlu"
/*
Question149 | ky7 | Summing a number's digits

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
  return Math.abs(number)
    .toString() // Convert the number to a string
    .split("") // Split into individual characters
    .reduce((sum, digit) => sum + parseInt(digit), 0); // Sum the digits
}

// Testing the function with examples
console.log(sumDigits(10)); // Expected output: 1
console.log(sumDigits(99)); // Expected output: 18
console.log(sumDigits(-32)); // Expected output: 5
/*
Question150 | ky7 | Maximum Multiple

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Input >> Output Examples
divisor = 2, bound = 7 ==> return (6)

*/

function maxMultiple(divisor, bound) {
  // Starting from the bound, find the largest number that is divisible by the divisor
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// Testing the function with the example
console.log(maxMultiple(2, 7)); // Expected output: 6
/*
Question151 | ky7 | Check the exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      // Do nothing for blank answers
      continue;
    } else if (array1[i] === array2[i]) {
      score += 4; // Add 4 points for correct answers
    } else {
      score -= 1; // Subtract 1 point for incorrect answers
    }
  }

  return score > 0 ? score : 0; // Return the score, but not less than 0
}

// Testing the function with examples
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // Expected output: 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // Expected output: 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // Expected output: 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // Expected output: 0
/*
Question152 | ky7 | Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

*/

function solve(str) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  // Count the uppercase and lowercase characters
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }

  // Convert to the appropriate case
  if (uppercaseCount > lowercaseCount) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

// Testing the function with examples
console.log(solve("coDe")); // Expected output: "code"
console.log(solve("CODe")); // Expected output: "CODE"
console.log(solve("coDE")); // Expected output: "code"
/*
Question153 | ky7 | Form The Minimum

Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)

*/

function minValue(digits) {
  // Remove duplicates and sort the digits
  let uniqueDigits = Array.from(new Set(digits)).sort();

  // Concatenate the digits to form the number
  return parseInt(uniqueDigits.join(""), 10);
}

// Testing the function with the example
console.log(minValue([1, 3, 1])); // Expected output: 13
/*
Question154 | ky7 | Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

*/

function capitalize(s) {
  let evenCapitalize = "";
  let oddCapitalize = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // Capitalize characters at even indices
      evenCapitalize += s[i].toUpperCase();
      oddCapitalize += s[i];
    } else {
      // Capitalize characters at odd indices
      evenCapitalize += s[i];
      oddCapitalize += s[i].toUpperCase();
    }
  }

  return [evenCapitalize, oddCapitalize];
}

// Testing the function with the example
console.log(capitalize("abcdef")); // Expected output: ['AbCdEf', 'aBcDeF']
/*
Question155 | ky7 | Sum of Minimums!

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

*/

function sumOfMinimums(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Find the minimum value in the current row and add it to the sum
    sum += Math.min(...arr[i]);
  }

  return sum;
}

// Testing the function with the example
console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
); // Expected output: 26
/*
Question156 | ky7 | Largest 5 digit number in a series

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

*/

function greatestSequence(digits) {
  let maxSequence = 0;

  for (let i = 0; i <= digits.length - 5; i++) {
    let sequence = parseInt(digits.substring(i, i + 5), 10);

    if (sequence > maxSequence) {
      maxSequence = sequence;
    }
  }

  return maxSequence;
}

// Testing the function with the examples
console.log(greatestSequence("283910")); // Expected output: 83910
console.log(greatestSequence("1234567890")); // Expected output: 67890
/*
Question157 | ky7 | Are the numbers in order?

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

*/

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Testing the function with examples
console.log(inAscOrder([1, 2, 4, 7, 19])); // Expected output: true
console.log(inAscOrder([1, 2, 3, 4, 5])); // Expected output: true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // Expected output: false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // Expected output: false
/*
Question158 | ky7 | The Coupon Code

Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // Check if the codes match
  if (enteredCode !== correctCode) {
    return false;
  }

  // Compare the current date and the expiration date
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  return current <= expiration;
}

// Testing the function with examples
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")); // Expected output: true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")); // Expected output: false
/*
Question159 | ky7 | Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

function isSortedAndHow(array) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      isDescending = false;
    } else if (array[i] > array[i + 1]) {
      isAscending = false;
    }
  }

  if (isAscending) {
    return "yes, ascending";
  } else if (isDescending) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// Testing the function with examples
console.log(isSortedAndHow([1, 2, 3, 4, 5])); // Expected output: "yes, ascending"
console.log(isSortedAndHow([5, 4, 3, 2, 1])); // Expected output: "yes, descending"
console.log(isSortedAndHow([1, 3, 2, 5, 4])); // Expected output: "no"
/*
Question160 | ky7 | Alphabet war

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

function alphabetWar(fight) {
  // Define the power of each letter for both sides
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  // Initialize total power of each side
  let leftTotal = 0;
  let rightTotal = 0;

  // Calculate the total power of each side
  for (const char of fight) {
    if (leftSide[char]) {
      leftTotal += leftSide[char];
    } else if (rightSide[char]) {
      rightTotal += rightSide[char];
    }
  }

  // Determine the winner and return the appropriate message
  if (leftTotal > rightTotal) {
    return "Left side wins!";
  } else if (rightTotal > leftTotal) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

// Test cases
console.log(alphabetWar("z")); //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs")); //=> Right side wins!
console.log(alphabetWar("wwwwwwz")); //=> Left side wins!

/*
Question161 | ky7 | Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

function evenNumbers(array, number) {
  // Step 1: Filter out the even numbers
  const evenArray = array.filter((item) => item % 2 === 0);

  // Step 2: Grab the last 'number' of elements from the evenArray
  return evenArray.slice(-number);
}

// Example usage:
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // Should log [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // Should log [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // Should log [6]
/*
Question162 | ky7 | Bumps in the Road

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

*/

function bump(x) {
  // Step 1: Count the bumps
  const bumps = x.split("").filter((char) => char === "n").length;

  // Step 2: Compare to the threshold and return the appropriate message
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
}

// Example usage:
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // Possible output: 'Car Dead'
console.log(bump("______n___n_")); // Possible output: 'Woohoo!'
/*
Question163 | ky7 | Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

function fizzbuzz(N) {
  let result = []; // Step 1: Initialize the result array
  for (let i = 1; i <= N; i++) {
    // Step 2: Loop from 1 to N
    // Step 3: Check the conditions and push the appropriate values to the array
    if (i % 15 === 0) {
      // Multiple of both 3 and 5
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // Multiple of 3
      result.push("Fizz");
    } else if (i % 5 === 0) {
      // Multiple of 5
      result.push("Buzz");
    } else {
      // None of the above, push the number itself
      result.push(i);
    }
  }
  return result; // Step 4: Return the result array
}

console.log(fizzbuzz(3)); // Example usage
/*
Question165 | ky7 | Maximum Product

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6

*/

function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1]; // Step 1: Initialize with the product of the first two elements

  for (let i = 1; i < array.length - 1; i++) {
    // Step 2: Loop through the array
    let product = array[i] * array[i + 1]; // Step 3: Calculate the product of adjacent elements
    if (product > maxProduct) {
      // Step 4: Check if the current product is greater than the maxProduct
      maxProduct = product; // Update maxProduct if the current product is greater
    }
  }

  return maxProduct; // Step 5: Return the maximum product
}

console.log(adjacentElementsProduct([1, 2, 3])); // Example usage
/*
Question166 | ky7 | Number of Decimal Digits

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

*/

function digitCount(n) {
  // Step 1: Convert the integer to a string
  let str = n.toString();

  // Step 2: Return the length of the string
  return str.length;
}

console.log(digitCount(9)); // 1
console.log(digitCount(66)); // 2
console.log(digitCount(128685)); // 6
/*
Question167 | ky7 | Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

function greet(name) {
  // Step 1 & 2: Capitalize the first letter and make sure the rest are lowercase
  let formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  // Step 3: Concatenate the greeting with the name and an exclamation point
  return `Hello ${formattedName}!`;
}

console.log(greet("riley")); // "Hello Riley!"
console.log(greet("JACK")); // "Hello Jack!"
/*
Question168 | ky7 | Find the vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

function vowelIndices(word) {
  let vowels = "aeiouyAEIOUY"; // Step 1: Define vowels (including uppercase)
  let indices = []; // Initialize an array to hold indices

  for (let i = 0; i < word.length; i++) {
    // Step 2: Loop through each character
    if (vowels.indexOf(word[i]) !== -1) {
      // Step 3: Check if the character is a vowel
      indices.push(i + 1); // Step 4: Push the index to the array (consider 1-based indexing)
    }
  }

  return indices; // Step 5: Return the result array
}

// Test cases
console.log(vowelIndices("Mmmm")); // []
console.log(vowelIndices("Super")); // [2, 4]
console.log(vowelIndices("Apple")); // [1, 5]
console.log(vowelIndices("YoMama")); // [1, 2, 4, 6]
/*
Question169 | ky7 | Convert an array of strings to array of numbers

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringArray) {
  return stringArray.map((str) => parseFloat(str));
}

// Test cases
console.log(toNumberArray(["1", "2", "3"])); // [1, 2, 3]
console.log(toNumberArray(["1.5", "2.3", "3"])); // [1.5, 2.3, 3]
/*
Question170 | ky7 | Sort the Gift Code

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/

function sortGiftCode(code) {
  // Step 1: Convert string to array of characters
  // Step 2: Sort the array
  // Step 3: Join the array back into a string
  return code.split("").sort().join("");
}

// Test cases
console.log(sortGiftCode("abcdef")); // "abcdef"
console.log(sortGiftCode("pqksuvy")); // "kpqsuvy"
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")); // "abcdefghijklmnopqrstuvwxyz"
/*
Question171 | ky7 | Sort the Gift Code

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

*/
function sortGiftCode(code) {
  return code.split("").sort().join("");
}

// Example usage:
console.log(sortGiftCode("abcdef")); // => "abcdef"
console.log(sortGiftCode("pqksuvy")); // => "kpqsuvy"
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")); // => "abcdefghijklmnopqrstuvwxyz"
/*
Question172 | ky7 | Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.
*/

function calculateSumAndDifference(arr) {
  // Initialize totals for numbers and strings
  let totalNumbers = 0;
  let totalStrings = 0;

  // Loop through each element in the array
  arr.forEach((element) => {
    // Check if the element is a string
    if (typeof element === "string") {
      // Convert string to number and add to totalStrings
      totalStrings += parseInt(element);
    } else {
      // Add number to totalNumbers
      totalNumbers += element;
    }
  });

  // Subtract the total of string integers from the total of non-string integers
  return totalNumbers - totalStrings;
}

/*
Question173 | ky7 | Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

*/

var list1 = [
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
];

function isRubyComing(list) {
  // Check if there is at least one Ruby developer in the list
  return list.some((developer) => developer.language === "Ruby");
}

console.log(isRubyComing(list1)); // This should return true
/*
Question174 | ky7 | Alphabet symmetry

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

*/

function solve(words) {
  // Define the alphabet for easy reference of positions
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Map each word to its count of letters in their correct positions
  return words.map((word) => {
    // Convert word to lowercase to make the function case-insensitive
    word = word.toLowerCase();
    // Count how many letters are in their correct alphabetical position
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (i === alphabet.indexOf(word[i])) {
        count++;
      }
    }
    return count;
  });
}

/*
Question175 | ky7 | Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

*/

function removeDuplicatesKeepLast(arr) {
  const seen = new Set();
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      // Since we're iterating from the end, prepend the unique element to the result array
      result.unshift(arr[i]);
      seen.add(arr[i]);
    }
  }

  return result;
}

// Example usage
console.log(removeDuplicatesKeepLast([3, 4, 4, 3, 6, 3])); // Expected output: [4, 6, 3]
/*
Question176 | ky7 | Palindrome chain length

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

Additional info
Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

*/

function palindromeSteps(num) {
  let steps = 0;

  // Helper function to check if a number is a palindrome
  function isPalindrome(number) {
    return number.toString() === number.toString().split("").reverse().join("");
  }

  // Helper function to reverse a number
  function reverseNumber(number) {
    return parseInt(number.toString().split("").reverse().join(""), 10);
  }

  while (!isPalindrome(num)) {
    num += reverseNumber(num);
    steps++;
    // Assuming the problem guarantees not to overflow MAX_SAFE_INTEGER
  }

  return steps;
}

// Example usage
console.log(palindromeSteps(87)); // Expected output: 4
/*
Question178 | ky7 | max diff - easy

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

*/

function differenceLargestSmallest(lst) {
  if (lst.length <= 1) {
    // If the list is empty or contains a single element, return 0
    return 0;
  }

  // Find the largest and smallest values in the list
  const maxVal = Math.max(...lst);
  const minVal = Math.min(...lst);

  // Return the difference between the largest and smallest values
  return maxVal - minVal;
}

// Example usage
console.log(differenceLargestSmallest([1, 2, 3, 4])); // Expected output: 3
console.log(differenceLargestSmallest([1, 2, 3, -4])); // Expected output: 7
/*
Question179 | ky7 | Ordered Count of Characters

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

function orderedCount(input) {
  const countMap = new Map();

  for (const char of input) {
    if (!countMap.has(char)) {
      // If the character is not already in the map, add it with count 1
      countMap.set(char, 1);
    } else {
      // If the character is already in the map, increment its count
      countMap.set(char, countMap.get(char) + 1);
    }
  }

  // Convert the map to a list of tuples
  const resultList = Array.from(countMap).map(([char, count]) => [char, count]);
  return resultList;
}

// Example usage
console.log(orderedCount("abracadabra")); // Expected output: [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
/*
Question179 | ky7 | esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/

function reverse(list) {
  const reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

// Example usage
console.log(reverse([1, 2, 3, 4, 5])); // Expected output: [5, 4, 3, 2, 1]
/*
Question180 | ky7 | Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function sumOfCubedOdds(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
    const cubed = Math.pow(arr[i], 3);
    if (cubed % 2 !== 0) {
      sum += cubed;
    }
  }
  return sum;
}

// Example usage
console.log(sumOfCubedOdds([1, 2, 3, 4])); // Expected output: 28 (1^3 + 3^3 = 1 + 27 = 28)
console.log(sumOfCubedOdds([2, 4, 6])); // Expected output: 0 (no odd numbers after cubing)
console.log(sumOfCubedOdds([1, "a", 3])); // Expected output: undefined (not all elements are numbers)
/*
Question181 | ky7 | Find the nth Digit of a Number

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/

function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }

  num = Math.abs(num); // Make sure num is positive
  const numStr = num.toString(); // Convert num to string

  const index = numStr.length - nth; // Calculate index from right

  if (index < 0) {
    return 0; // nth digit does not exist, return 0
  }

  return parseInt(numStr[index], 10); // Return nth digit as a number
}

// Example usage
console.log(findDigit(5673, 4)); // Expected output: 5
console.log(findDigit(129, 2)); // Expected output: 2
console.log(findDigit(-2825, 3)); // Expected output: 8
console.log(findDigit(-456, 4)); // Expected output: 0
console.log(findDigit(0, 20)); // Expected output: 0
console.log(findDigit(65, 0)); // Expected output: -1
console.log(findDigit(24, -8)); // Expected output: -1
/*
Question182 | ky7 | Lost number in number sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

*/

function findDeletedNumber(arr, mixedArr) {
  // Calculate the sum of the complete sequence from 1 to N (N is the length of arr)
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  // Calculate the sum of the mixed array
  const mixedSum = mixedArr.reduce((acc, cur) => acc + cur, 0);
  // The difference will be the deleted number
  const deletedNumber = totalSum - mixedSum;

  return deletedNumber || 0; // Return the deleted number or 0 if no number was deleted
}

// Example usage
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 2, 4, 6, 7, 8, 1, 9])
); // Expected output: 5
console.log(findDeletedNumber([1], [])); // Expected output: 1
console.log(findDeletedNumber([], [])); // Expected output: 0
/*
Question183 | ky7 | Spacify

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

*/

function spacify(str) {
  return str.split("").join(" ");
}

// Example usage
console.log(spacify("hello world")); // Expected output: "h e l l o   w o r l d"
/*
Question184 | ky7 | Alphabetical Addition

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'

*/

function addLetters(...letters) {
  if (letters.length === 0) return "z"; // If no letters are given, return 'z'

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let sum = 0;

  letters.forEach((letter) => {
    const number = alphabet.indexOf(letter) + 1; // Convert letter to its position number
    sum += number;
  });

  sum = sum % 26 || 26; // Use modulo to handle overflow, default to 26 if sum is 0

  return alphabet[sum - 1]; // Convert the sum back to a letter
}

// Example usage
console.log(addLetters("a", "b", "c")); // Expected output: 'f'
console.log(addLetters("a", "b")); // Expected output: 'c'
console.log(addLetters("z")); // Expected output: 'z'
/*
Question185 | ky7 | Averages of numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

*/

function getAverages(numbers) {
  // Check for null array or array with less than 2 elements
  if (!numbers || numbers.length <= 1) {
    return [];
  }

  const averages = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    // Calculate the average of the current number and its follower
    averages.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return averages;
}

// Example usage
console.log(getAverages([1, 3, 5, 1, -10])); // Expected output: [2, 4, 3, -4.5]
/*
Question186 | ky7 | Smallest value of an array

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

*/

function min(array, returnType) {
  const minValue = Math.min(...array); // Find the smallest value

  if (returnType === "value") {
    return minValue; // Return the smallest value
  } else if (returnType === "index") {
    return array.indexOf(minValue); // Return the index of the smallest value
  }
}

// Example usage
console.log(min([1, 2, 3, 4, 5], "value")); // => 1
console.log(min([1, 2, 3, 4, 5], "index")); // => 0
/*
Question188 | ky7 | Currying functions: multiply all elements in an array

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

*/

function multiplyAll(arr) {
  // Return a new function that captures arr and takes a single integer multiplier
  return function (multiplier) {
    // Return a new array with each element of arr multiplied by the multiplier
    return arr.map((element) => element * multiplier);
  };
}

/*
Question189 | ky7 | Functional Addition

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

*/

function add(n) {
  // Return a new function that takes a single argument and adds n to it
  return function (number) {
    return n + number;
  };
}

// Example usage
var addOne = add(1);
console.log(addOne(3)); // Output: 4

var addThree = add(3);
console.log(addThree(3)); // Output: 6
/*
Question189 | ky7 | Array element parity

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

*/

function findUnique(numbers) {
  const numSet = new Set(numbers); // Create a set for faster lookup

  for (let num of numbers) {
    // If either the positive or negative counterpart is missing, return the number
    if (!numSet.has(-num)) {
      return num;
    }
  }
}

// Example usage
console.log(findUnique([1, -1, 2, -2, 3])); // Output: 3
console.log(findUnique([-3, 1, 2, 3, -1, -4, -2])); // Output: -4
console.log(findUnique([1, -1, 2, -2, 3, 3])); // Output: 3
/*
Question189 | ky7 | Greatest common divisor


Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/

function gcd(x, y) {
  // Base case: if y is 0, x is the GCD
  if (y === 0) {
    return x;
  } else {
    // Recursive case: return the GCD of y and the remainder of x divided by y
    return gcd(y, x % y);
  }
}

// Example usage
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(123456, 789012)); // Output: 12
/*
Question190 | ky7 | FIXME: Get Full Name

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.

*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    // Check if either first name or last name is empty and return appropriately
    if (!this.firstName && !this.lastName) {
      return "";
    } else if (!this.firstName) {
      return this.lastName;
    } else if (!this.lastName) {
      return this.firstName;
    } else {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}

/*
Question191 | ky7 | Indexed capitalization

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try:

Alternate capitalization

String array revisal

*/

function capitalize(str, indices) {
  // Convert the string to an array of characters
  let chars = str.split("");

  // Iterate through the indices and capitalize characters at those indices
  indices.forEach((index) => {
    if (index < chars.length) {
      chars[index] = chars[index].toUpperCase();
    }
  });

  // Join the characters back into a string
  return chars.join("");
}

// Example usage
console.log(capitalize("abcdef", [1, 2, 5])); // Expected output: "aBCdeF"
console.log(capitalize("abcdef", [1, 2, 5, 100])); // Expected output: "aBCdeF"
/*
Question192 | ky7 | Basic Calculator

Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null

*/

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      // Check for division by zero
      if (num2 === 0) return null;
      return num1 / num2;
    default:
      // If operation is not one of the specified characters
      return null;
  }
}

// Example usage
console.log(calculate(2, "+", 4)); // Should return 6
console.log(calculate(6, "-", 1.5)); // Should return 4.5
console.log(calculate(-4, "*", 8)); // Should return -32
console.log(calculate(49, "/", -7)); // Should return -7
console.log(calculate(8, "m", 2)); // Should return null
console.log(calculate(4, "/", 0)); // Should return null
/*
Question193 | ky7 | The old switcheroo

Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

*/

function vowel2index(str) {
  const vowels = "aeiou";
  // Convert the string to an array and use map to transform it
  return str
    .split("")
    .map((char, index) => {
      // Check if the character is a vowel, considering case insensitivity
      if (vowels.includes(char.toLowerCase())) {
        // Replace vowel with its position (index + 1)
        return index + 1;
      } else {
        // Keep the character as is if it's not a vowel
        return char;
      }
    })
    .join(""); // Join the array back into a string
}

// Example usage
console.log(vowel2index("this is my string")); // 'th3s 6s my str15ng'
console.log(vowel2index("Codewars is the best site in the world")); // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
console.log(vowel2index("")); // ''
/*
Question194 | ky7 | Sum of integers in string

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

function sumOfIntegersInString(str) {
  // Use a regular expression to find all occurrences of digits
  const numbers = str.match(/\d+/g) || [];

  // Convert each string of digits into an integer and sum them
  return numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
}

// Example usage
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
); // 3635
/*
Question195 | ky7 | Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

*/

function longestVowelSubstringLength(str) {
  const vowels = "aeiou";
  let maxLength = 0;
  let currentLength = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      // If the character is a vowel, increase the current length
      currentLength++;
      // Update the maximum length if the current length is greater
      maxLength = Math.max(maxLength, currentLength);
    } else {
      // If the character is not a vowel, reset the current length
      currentLength = 0;
    }
  }

  return maxLength;
}

// Example usage
console.log(longestVowelSubstringLength("codewarriors")); // 2
/*
Question196 | ky7 | Cat and Mouse - Easy Version

You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

*/

function catMouse(x) {
  // Calculate the distance between 'C' and 'm'
  const distance = Math.abs(x.indexOf("C") - x.indexOf("m")) - 1;

  // Determine if the cat can catch the mouse
  if (distance <= 3) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

// Example usage
console.log(catMouse("C.....m")); // Output: 'Escaped!'
console.log(catMouse("C...m")); // Output: 'Caught!'
/*
Question197 | ky7 | Unlucky Days

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/

function unluckyDays(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      // 5 represents Friday
      count++;
    }
  }
  return count;
}

// Example usage
console.log(unluckyDays(2015)); // Output: 3
console.log(unluckyDays(1986)); // Output: 1
/*
Question198 | ky7 | Numbers in strings

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

*/

function solve(s) {
  // Use a regular expression to match all groups of digits in the string
  const numbers = s.match(/\d+/g).map(Number);

  // Find the largest number using Math.max applied to the numbers array
  return Math.max(...numbers);
}

// Example usage
console.log(solve("gh12cdy695m1")); // Output: 695
/*
Question199 | ky7 | Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

function sumOfMultiples(n) {
  if (n < 0) {
      return 0;
  } else {
      return Array.from({ length: n }, (_, i) => i)
          .filter(num => num % 3 === 0 || num % 5 === 0)
          .reduce((acc, val) => acc + val, 0);
  }
}

// Example usage:
console.log(sumOfMultiples(10)); // Output should be 23
/*
Question200 | ky6 | Stop gninnipS My sdroW!


Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function reverseWords(str) {
  return str.split(' ').map(word => {
      return (word.length >= 5) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// Examples:
console.log(reverseWords("Hey fellow warriors")); // Output: "Hey wollef sroirraw"
console.log(reverseWords("This is a test")); // Output: "This is a test"
console.log(reverseWords("This is another test")); // Output: "This is rehtona test"


/*
Question201 | ky6 | Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function formatLikes(names) {
  switch(names.length) {
      case 0:
          return "no one likes this";
      case 1:
          return `${names[0]} likes this`;
      case 2:
          return `${names[0]} and ${names[1]} like this`;
      case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default:
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Test cases
console.log(formatLikes([])); // "no one likes this"
console.log(formatLikes(["Peter"])); // "Peter likes this"
console.log(formatLikes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(formatLikes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(formatLikes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"


/*
ky6 | Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
  // Convert the number to a string to easily access individual digits
  let numString = n.toString();
  
  // Base case: If the number has only one digit, return it
  if (numString.length === 1) {
      return parseInt(numString);
  }
  
  // Calculate the sum of the digits
  let sum = 0;
  for (let digit of numString) {
      sum += parseInt(digit);
  }
  
  // Recursively call digitalRoot with the sum
  return digitalRoot(sum);
}

// Test cases
console.log(digitalRoot(16));     // Output: 7
console.log(digitalRoot(942));    // Output: 6
console.log(digitalRoot(132189)); // Output: 6
console.log(digitalRoot(493193)); // Output: 2
/*
ky6 | Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
  // Filter elements from a that are not present in b
  return a.filter(element => !b.includes(element));
}

// Test cases
console.log(arrayDiff([1, 2], [1]));             // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));    // Output: [1, 3]


/*
ky6 | Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

function createPhoneNumber(numbers) {
  // Extract each part of the phone number
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6, 10).join('');

  // Return the formatted phone number string
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Test case
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"


/*
ky6 | Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

function countBits(n) {
  // Convert the integer to binary and count the number of '1's
  return n.toString(2).split('').filter(bit => bit === '1').length;
}

// Test case
console.log(countBits(1234)); // Output: 5



/*
ky6 | Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

*/

function findOutlier(integers) {
  // Count the number of even and odd integers in the array
  let evenCount = 0;
  let oddCount = 0;
  
  // Iterate through the array to count even and odd numbers
  for (let num of integers) {
      if (num % 2 === 0) {
          evenCount++;
      } else {
          oddCount++;
      }
  }
  
  // Determine whether the majority is even or odd
  const majorityIsEven = evenCount > oddCount;
  
  // Find the outlier based on the majority parity
  for (let num of integers) {
      if (majorityIsEven && num % 2 !== 0) {
          return num;
      } else if (!majorityIsEven && num % 2 === 0) {
          return num;
      }
  }
}

// Test cases
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // Output: 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // Output: 160
/*
ky6 | Convert string to camel case


Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/


function toCamelCase(s) {
  let parts = s.replace(/[-_]/g, '_').split('_'); // Replace dashes with underscores and split
  let camelCaseString = parts[0]; // First word remains as it is
  for (let i = 1; i < parts.length; i++) {
    camelCaseString += parts[i][0].toUpperCase() + parts[i].slice(1).toLowerCase();
  }
  return camelCaseString;
}

// Test cases
console.log(toCamelCase("the-stealth-warrior")); // Output: theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // Output: TheStealthWarrior
console.log(toCamelCase("The_Stealth-Warrior")); // Output: TheStealthWarrior



/*
ky6 | Does my number look big in this?


A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

*/

function isNarcissisticNumber(number) {
  const numString = String(number);
  const numDigits = numString.length;
  let sum = 0;
  
  for (let digit of numString) {
    sum += Math.pow(parseInt(digit), numDigits);
  }
  
  return sum === number;
}

// Test cases
console.log(isNarcissisticNumber(153)); // Output: true
console.log(isNarcissisticNumber(1652)); // Output: false
/*
ky6 | Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

function order(words) {
  if (words === '') return '';

  return words.split(' ')
              .sort((a, b) => a.match(/\d/) - b.match(/\d/))
              .join(' ');
}

// Test cases
console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // Output: ""


/*
ky6 | Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
""  -->  ""

*/

function uniqueInOrder(iterable) {
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }

  const result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
}

// Test cases
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Output: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // Output: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3])); // Output: [1, 2, 3]




/*
ky6 | Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = new Set();

  for (let char of sentence.toLowerCase()) {
    if (alphabet.includes(char)) {
      letters.add(char);
    }
  }

  return letters.size === 26;
}

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
console.log(isPangram("Pack my box with five dozen liquor jugs")); // Output: true
console.log(isPangram("Hello world!")); // Output: false



/*
ky6 | Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function splitPairs(str) {
  const result = [];
  
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  
  if (str.length % 2 !== 0) {
    result[result.length - 1] += '_';
  }
  
  return result;
}

// Test cases
console.log(splitPairs('abc')); // Output: ['ab', 'c_']
console.log(splitPairs('abcdef')); // Output: ['ab', 'cd', 'ef']


/*
ky6 | Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;
  
  return array.map(num => {
    if (num % 2 !== 0) {
      return oddNumbers[oddIndex++];
    }
    return num;
  });
}

// Test cases
console.log(sortArray([7, 1])); // Output: [1, 7]


/*
ky6 | Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // Check if the next letter is not consecutive
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      // Return the missing letter
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}

// Test cases
console.log(findMissingLetter(['a','b','c','d','f'])); // Output: 'e'
console.log(findMissingLetter(['O','Q','R','S'])); // Output: 'P'


/*
ky6 | Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function highestScoringWord(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let maxScore = 0;
  let highestWord = '';

  const words = str.split(' ');
  
  for (let word of words) {
    let score = 0;
    for (let char of word) {
      score += alphabet.indexOf(char) + 1;
    }
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

// Test cases
console.log(highestScoringWord("abad test")); // Output: 'abad'
console.log(highestScoringWord("test abad")); // Output: 'test'


/*
ky6 | Delete occurrences of an element if it occurs more than n times

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

*/

function deleteNth(order, max_e) {
  const counts = {};
  const result = [];

  order.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] <= max_e) {
      result.push(num);
    }
  });

  return result;
}

// Test cases
console.log(deleteNth([1,2,3,1,2,1,2,3], 2));  // Output: [1, 2, 3, 1, 2]
console.log(deleteNth([20,37,20,21], 1));      // Output: [20, 37, 21]












