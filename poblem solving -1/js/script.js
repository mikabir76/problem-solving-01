
// ================================================== Task - 1
function reversedString (str){
    let reversedStr = "";
    for(let i = str.length -1; i>=0; i--){
       reversedStr += str[i] 
    }
    return reversedStr
}
const inputWords = reversedString("hello world");
// console.log(inputWords)


// ================================================== Task - 2

function sumPositiveNumber(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }
    }

    return sum
}
const sumValue = [2, -5, 10, -3, 7];
const result = sumPositiveNumber(sumValue);
// console.log(result)

// ================================================== Task - 3

function findMostFrequentElement(arr) {
    
    const frequencyMap = {};
  
    
    for (const element of arr) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
  
    
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > highestFrequency) {
        highestFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  };

  const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(numbers);
// console.log(mostFrequent);

// ================================================== Task - 4

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    
    return [];
  }
  const sortedArray = [-3, 1, 4, 6, 8, 11];
  const targetSum = 10;
  const indices = findTwoNumbersWithSum(sortedArray, targetSum);
//   console.log(indices)

// ================================================== Task - 5
function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        return num1 / num2;
      default:
        return 'Invalid operator';
    }
  }

//   console.log(calculate(5, '+', 3));
// console.log(calculate(10, '-', 4)); 
// console.log(calculate(3, '*', 6)); 
// console.log(calculate(15, '/', 5)); 
// console.log(calculate(7, '/', 0));
// console.log(calculate(4, '^', 2));
    // ================================================== Task - 6

    function generateRandomPassword(length) {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_-+=<>?/{}~|';
      
        const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
      
        let password = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allCharacters.length);
          password += allCharacters.charAt(randomIndex);
        }
      
        return password;
      }
      
      const password = generateRandomPassword(12);
      console.log(password);