//Introduction to ES6___scrimba 

//Tempelate Literals


// let firstName = 'Bibek';
// let lastName = 'Chapagain';

// //const fullName = `${firstName} ${lastName}`;

// let example = `${firstName}
// ${lastName}
// `;

// console.log(example);
// document.getElementById('example').innerText = example; //Error Document is not defined


//Destructuring Objects

// const personalInformation = {
//     firstName: 'Bibek',
//     lastName: 'Chapagain',
//     city: 'Kathmandu',
//     state: 'Texas',
//     zipCode: 73301
// };

// console.log(`${personalInformation.firstName} ${personalInformation.lastName} is from ${personalInformation.city}`);

// const {firstName: fn, lastName: ln, city: ci} = personalInformation;


// console.log(`${fn} Prasad ${ln} is from ${ci}`);


/////Destructuring array


// let [firstName, middleName, lastName] = ['Bibek', 'Prasad', 'Chapagain'];

// lastName = 'Guragain';

// console.log(lastName)


////Object literals

// function addressMaker(city, state) {
//     const newAdress = {city, state};
    
//     console.log(newAdress);
// }

// addressMaker('Kathmandu', 'Bagmati');


// ////For of loop

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     console.log(income)
//     total += income;
// }

// console.log(total);

// let fullName = "Bibek Chapagain";


// for (const letter of fullName) {
//     console.log(letter);
// }


// //Spread Operator


// let example1 = [1,2,3,4,5,6];
// let example2 = [...example1];
// example2.push(true);
// console.log(example2);


// //rest operator


// function add(...nums) {
    
//     console.log(nums);
// }

// add(4, 5, 7, 8, 12);


// //Arrow function


// function add(...nums) {
//     let total = nums.reduce(function (x, y) {
//         return x+y;
//     });
    
//     console.log(total);
// }

// add(4, 5, 7, 8, 12);


// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
    
//     console.log(total);
// }

// add(4, 5, 7, 8, 12)


// //includes

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(2));
// console.log(numArray.includes(8));


// /// Import & Export

// import { data } from './example.js';

// console.log(data);


// //padend & padstart


// let example = 'Dylan';


// console.log(example.padStart(10, 'a'));
// console.log(example.padEnd(10, 'a'));