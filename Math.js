const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const pi = 3.14;

//method 1

/*const obj={
    sum:sum,
    mul:mul,
    g:g,
    pi:pi,
};

module.exports = obj;*/


//method 2

/*module.exports={
    sum:sum,
    mul:mul,
    g:g,
    pi:pi,
};*/


//method 3


exports.sum = (a,b) => a+b;
exports.mul = (a,b) => a*b;
exports.g = 9.8;
exports.pi = 3.14;


