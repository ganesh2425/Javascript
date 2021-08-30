// const variables are block scoped
// const variables can not ben Redeclared
// const variables can not be Reassigned

const cars = ["volvo","audi","benz","bmw"];

cars[0] = "toyota"
cars.push("rolls")

console.log(cars);

/////////
const bike = {type:"enfield", owner:"ram", color:"blue"};

bike.model = "2021"
console.log(bike.color);
console.log(bike);

////////
const x = 4;

{
    const x = 6;
}
console.log(x)