
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