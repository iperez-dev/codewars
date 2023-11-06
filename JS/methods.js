/*
///////////////////////////////////////////////////////////////////////////////////////
ARRAYS METHODS

*1. push()           
Adds one or more elements to the end of an array
//Ex1
const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

*2. pop()            
Removes the last element from an array and returns that element.
const fruits = ["apple", "banana", "orange"];
const lastFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
console.log(lastFruit); // Output: "orange"

*3. shift()          
Removes the first element from an array and shifts all other elements to a lower index.
const colors = ["red", "blue", "green"];
const firstColor = colors.shift();
console.log(colors); // Output: ["blue", "green"]
console.log(firstColor); // Output: "red"

*4. unshift()        
Adds one or more elements to the beginning of an array
const animals = ["dog", "cat"];
animals.unshift("bird", "fish");
console.log(animals); // Output: ["bird", "fish", "dog", "cat"]

*5. concat()         
Combines two or more arrays and returns a new array
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4]

*6. split('')       
Split a string into an array of substrings based on a specified separator.
const sentence = "Hello, how are you today?";
const words = sentence.split(" ");
console.log(words); // Output: ["Hello,", "how", "are", "you", "today?"]

const fruits = "apple,banana,orange";
const fruitArray = fruits.split(",");
console.log(fruitArray); // Output: ["apple", "banana", "orange"]

*7. Spread Operator (... word)
const word = "Hello World";
const spreadOperator = [...word];
console.log(spreadOperator);

*8. slice()          
Extracts a section of an array and returns a new array
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
In this example, the slice() method is used to extract a subarray from the original array. It starts at index 1 (inclusive) and goes up to index 4 (exclusive), so it includes elements at indexes 1, 2, and 3.

*9. splice()         
Adds or removes elements from an array at a specified index
const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 0, "grape", "kiwi");
console.log(fruits);
// Output: ["apple", "grape", "kiwi", "banana", "orange"]
Explanation: In this example, we use splice() to add the elements "grape" and "kiwi" at index 1 of the fruits array. The second argument 0 specifies that no elements are to be removed, only elements are added at the specified index.

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
fruits.splice(2, 2);
console.log(fruits);
// Output: ["apple", "banana", "kiwi"]
Explanation: In this example, we use splice() to add the elements "grape" and "kiwi" at index 1 of the fruits array. The second argument 0 specifies that no elements are to be removed, only elements are added at the specified index.

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
fruits.splice(2, 2);
console.log(fruits);
// Output: ["apple", "banana", "kiwi"]
Explanation: In this example, we use splice() to remove two elements starting from index 2 of the fruits array. As a result, "orange" and "grape" are removed from the array.

const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "strawberry", "watermelon");
console.log(fruits);
// Output: ["apple", "strawberry", "watermelon", "orange"]
Explanation: Here, we use splice() to replace the element at index 1 ("banana") with "strawberry" and "watermelon". The second argument 1 specifies that one element should be removed before adding the new elements.

*10. indexOf()        
Searches for a specified element in an array and returns the index of the first occurrence.

const colors = ["red", "blue", "green", "blue"];
const index = colors.indexOf("blue");
console.log(index); // Output: 1

*11. lastIndexOf()    
Searches for a specified element in an array and returns the index of the last occurrence.

const colors = ["red", "blue", "green", "blue"];
const lastIndex = colors.lastIndexOf("blue");
console.log(lastIndex); // Output: 3

*12. find()          
Returns the value of the first element in an array that satisfies a provided testing function.

const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find((num) => num % 2 === 0);
console.log(evenNumber); // Output: 2

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const result = names.find((name) => name[0] === "C");
console.log(result); // Output: "Charlie"

const numbers = [-2, -1, 0, 3, 5, -6, 8, 9];
const positiveNumber = numbers.find((num) => num > 0);
console.log(positiveNumber); // Output: 3

const emails = ["user1@example.com", "user2@gmail.com", "user3@example.com", "user4@gmail.com"];
const gmailEmail = emails.find(email => email.includes("@gmail.com"));
console.log(gmailEmail); // Output: "user2@gmail.com"

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const longWord = words.find(word => word.length > 5);
console.log(longWord); // Output: "banana"

*13. findIndex()     
Returns the index of the first element in an array that satisfies a provided testing function.

const numbers = [1, 2, 3, 4, 5];
const indexOfEven = numbers.findIndex((num) => num % 2 === 0);
console.log(indexOfEven); // Output: 1

*14. includes()      
Determines whether an array includes a certain element
const fruits = ["apple", "banana", "orange"];
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true

*15. map()           
Creates a new array by applying a provided function to each element of the original array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

*16. filter()        
Creates a new array with all elements that pass the provided testing function
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

*17. reduce()        
Reduces the array to a single value by applying a function to each element and accumulating the result.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

*18. reduceRight()   
Similar to reduce(), but processes the array from right to left
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduceRight((accumulator, currentValue) => accumulator - currentValue);
console.log(result); // Output: 5 - (4 - (3 - (2 - 1))) = 3

*19. sort()          
Sorts the elements of an array in place and returns the sorted array.
numbers.sort((a, b) => a - b); // Ascending
numbers.sort((a, b) => b - a); // Descending

*20. reverse()       
Reverses the order of the elements in an array in place   
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

*15. forEach()       
Executes a provided function once for each array element.
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));
// Output: "apple"
//         "banana"
//         "orange"

*16. every()         
Checks if all elements in an array pass a test implemented 
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: true

*17. some()          
Checks if at least one element in an array passes a test implemented
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: true



*22. fill()          
Fills all the elements of an array with a static value  
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

*23. join()          
Joins all elements of an array into a string.
const fruits = ["apple", "banana", "orange"];
const joinedString = fruits.join(", ");
console.log(joinedString); // Output: "apple, banana, orange"

*24. toString()      
Returns a string representing the array and its elements.
const numbers = [1, 2, 3, 4, 5];
const arrayString = numbers.toString();
console.log(arrayString); // Output: "1,2,3,4,5"

*25. isArray()       
Checks if a value is an array.
const numbers = [1, 2, 3, 4, 5];
const isNumbersArray = Array.isArray(numbers);
console.log(isNumbersArray); // Output: true

*27.str.repeat()
let str = "abc";
let repeatedStr = str.repeat(3);
console.log(repeatedStr);  // Outputs: abcabcabc
}

*28.for loops
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;

*29.Math.pow()
const result = Math.pow(2, 3);
console.log(result); // Output: 8 (2 * 2 * 2 = 8)

*30.Math.sqrt()
const result = Math.sqrt(16);
console.log(result); // Output: 4

*31.str.length
function printer_error(str) {
  return str.length;
}
*.toString()
converts a number to string
*numThree.toString(2)
finds the binary representation for numThree
!PRACTICE


.pop()
.push()
.shift()
.unshift()
---
.split('')
.slice(2, 4)
.splice(1, 0, 'hello')
[..arr]
---
.indexOf()
.lastIndexOf()
.find()
.findIndex()
---
.map()
.filter()
.reduce()
.reduceRight()
---








*/
