

// -----------Problem 1: Reverse a String-----------

// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"


// =============== solution ===================

function reverseString(str) {
    
    return str.split('').reverse().join('');
}


const input1 = "hello";
const result1 = reverseString(input1);

console.log(result1); // Output: "olleh"





//------------------Problem 2: Count Vowels in a String--------------------------------

// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

// ========================== Solution ==========================
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;
}


const input2 = "programming";
console.log(countVowels(input2)); 






// -------------------Problem 3: Check for Palindrome--------------------------

// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

// ============================== solution ==========================

function isPalindrome(str) {
    
    const reversed = str.split('').reverse().join('');
    
    
    return str === reversed;
}


console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false







// -------------------------- Problem 4: Find the Maximum Number ----------------------------

// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9


// ====================================== Solution ======================================

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

const input = [5, 1, 9, 3];
console.log(findMax(input)); 




// -----------------------------Problem 5: Remove Duplicates from an Array-----------------------------

// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


// ================================== Solution ===================================

function removeDuplicates(arr) {
    let uniqueArray = []; 

    for (let i = 0; i < arr.length; i++) {
        
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]); 
        }
    }
    return uniqueArray;
}

const input5 = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(input5)); 







// ----------------------------Problem 6: Sum of All Numbers in an Array------------------------------
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10


// ==============================Solution================================

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}


const numbers = [1, 2, 3, 4];
console.log(sumArray(numbers)); // Output: 10







// -------------------------------Problem 7: Find Even Numbers in an Array-----------------------------------
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


//==============================Solution================================
function findEvenNumbers(arr) {
    let evenNumbers = []; 

    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

const input7 = [1, 2, 3, 4, 5, 6];
console.log(findEvenNumbers(input7)); 











// ------------------------------Problem 8: Capitalize First Letter of Each Word-------------------------------------
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

//==============================Solution================================
function capitalizeWords(str) {
    let words = str.split(' '); 
    let result = []; 

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        
        let firstLetter = word[0].toUpperCase();
        
        
        let restOfWord = "";
        for (let j = 1; j < word.length; j++) {
            restOfWord += word[j];
        }

        
        result.push(firstLetter + restOfWord);
    }

   
    return result.join(' ');
}

console.log(capitalizeWords("hello world")); 









// ------------------------Problem 9: Find the Factorial of a Number------------------------

// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

//==============================Solution================================
function findFactorial(n) {
   
    let result = 1;

    
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}


const input9 = 5;
console.log(findFactorial(input9)); 












// ----------------------------Problem 10: PingPong Challenge----------------------------

// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..




//==============================Solution================================
function pingPongChallenge() {
    for (let i = 1; i <= 20; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } 
      
        else if (i % 3 === 0) {
            console.log("Ping");
        } 
      
        else if (i % 5 === 0) {
            console.log("Pong");
        } 
       
        else {
            console.log(i);
        }
    }
}


pingPongChallenge();