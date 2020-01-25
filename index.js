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

const personalInformation = {
    firstName: 'Bibek',
    lastName: 'Chapagain',
    city: 'Kathmandu',
    state: 'Texas',
    zipCode: 73301
};

console.log(`${personalInformation.firstName} ${personalInformation.lastName} is from ${personalInformation.city}`);

const {firstName: fn, lastName: ln, city: ci} = personalInformation;


console.log(`${fn} Prasad ${ln} is from ${ci}`);


