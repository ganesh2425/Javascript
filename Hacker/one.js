var sample_array = [[0,1], [2,3], [4,5]];
var result = sample_array.reduce(function(a,b){
    return a.concat(b);
},[]);
console.log(result);