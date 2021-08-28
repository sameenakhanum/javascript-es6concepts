let person = {
    name: 'sameena',
    age: 22,
    city: 'banglore'
};
console.log(person);
console.log(person.name);

// destructing of object

let {fname,age,cityname} = person;
console.log(person);

let {fname,age,cityname} = person;
console.log(person.cityname);


// spread operator

const num1 = ['1','2','3','4'];
const num2 = ['5','6','7','8'];

const combine = [...num1, ...num2,9];
console.log(combine);


const first = {name: 'sameena'};
const secomd = {place: 'karnataka'}

const combine = {...first,...secomd}
console.log(combine);
