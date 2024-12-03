const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
 const reducer=(acc,word)=>{
    acc[word]=(acc[word] || 0)+1
    return acc
 }
const result=words.reduce(reducer,{})
console.log(result) 