async function myFunction(){
    return await Promise.resolve("Hi");
}

var x = myFunction();
console.log(x)