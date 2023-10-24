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
Question111 | ky7 | Sum of two lowest positive integers

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
