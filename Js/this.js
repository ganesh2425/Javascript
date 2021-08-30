const emp = {
    firstName: "Ruth",
    lastName: "samantha",
    age: 33,
    mobile: 8179924835,
    email: "sam123@gmail.com",
    id: 12356
};

function full(){
    return this.firstName
}
console.log(emp.full);