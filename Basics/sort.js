var numbers = [1,2,6,8,9,55,81,104];

numbers.sort()
console.log(numbers);

numbers.sort(function(a,b){
    return a-b
});
console.log(numbers)