const wordList=["Reducers"," ","are"," " ,"awesome"]

const reducer=(acc,str)=>{
    return acc+str; 
}

const result=wordList.reduce(reducer," ")
console.log(result)
