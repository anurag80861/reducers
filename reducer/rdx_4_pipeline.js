const addOne =(x)=>x+1;
const double =(x)=>x*2;
const SubtractThree=(x)=>x*3;

const arr=[addOne,double,SubtractThree];

const input=5;
const result=arr.reduce((acc,fn)=>fn(acc),input);
console.log(result)