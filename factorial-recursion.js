// 6! = 6*5*4*3*2*1
// let factorial = 1;
// for(i = 6; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i){
    if(i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
console.log(factorial(6));