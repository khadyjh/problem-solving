'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
let arr = [12, 32, 22, 45, 78, 12, 50];
const findMax = (arr) => {
    let size = arr.length;
    let max = arr[0];
    for (let i = 1; i < size; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    // write your code here
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
let arr2 = [20, '234', 'car', 41, 20, 'chair']
const sumNums = (arr2) => {
    let sizeOfArr = arr2.length;
    let sum = 0;
    for (let i = 0; i <= sizeOfArr; i++) {

        if (typeof arr2[i] === 'number')
            sum = sum + arr2[i];
        else
            continue

    }

    // write your code here
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
let arr1 = ['C#', 'JS', 'Ruby', 'Python']
// let arrSize = arr1.length;

// const reverseArray = (arr1) => {
//     let arrReverse = [];
//     for (let i=0; i< arr1.length;i++) {
//         arrReverse.unshift(arr1[i])
//     }
//     return arrReverse;

//     // write your code here
// }


const reverseArray = (arr1) => {
    let arrReverse = [];
    for (let i=arr1.length-1 ; i>=0 ;i--) {
        arrReverse.push(arr1[i])
    }
    return arrReverse;

    // write your code here
}

module.exports = { findMax, sumNums, reverseArray };