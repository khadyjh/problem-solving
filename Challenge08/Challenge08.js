"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.value, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {

    let result = [];
    let names = Object.keys(obj);
    let age = Object.values(obj);

    console.log(age);
    console.log(names);

    for (let i = 0; i < names.length; i++) {
        result.push(`Customer Name :${names[i]} , Age :${age[i]}`)
    }
    return result;
    // write your code here
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

const getEntries = (obj) => {

    let result = [];
    let key = Object.entries(obj);
    for (const [key, value] of Object.entries(obj)) {
        let result1 = (`${key}: ${value}`);
        result.push(result1);
    }
    return result;
    // write your code here
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
    {
        course: 'Java',
        Instructor: 'David',
        Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
        GroupName: 'Stars',
    },
    {
        course: 'JavaScript',
        Instructor: 'Van',
        Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
        GroupName: 'Nerd-ware',
    },
    {
        course: 'Python',
        Instructor: 'Delaney',
        Students: ['Barney', 'Kalé', 'Alisha'],
        GroupName: 'Whats-Up',
    },
    {
        course: 'DotNet',
        Instructor: 'Keanna',
        Students: ['Oli', 'Gisselle', 'Pru'],
        GroupName: 'Lol',
    },
];

const getInfo = (courses) => {
    let coursesName = [];
    let studentsName = [];
    for (const value of courses) {

        const val = Object.values(value);
        let l = val.length;
        //  console.log(l)
        for (let n = 0; n < l; n++) {
            studentsName.push(val[n][2]);
        }

        coursesName.push(value.course);
        // studentsName.push(value.Students);

    }
    // write your code here

    return { coursesName, studentsName };
};

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
    // write your code here

};

module.exports = {
    customerAndAge,
    getEntries,
    courses,
    getInfo,
    getStudents,
};