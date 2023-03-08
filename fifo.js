let myArray = [1,2,3,4]
// Push To Array
const pushToArray = (thisArray,newVariable) => {
    const newArray = [newVariable]
    for(let i = 0; i <thisArray.length ; i++){
       newArray[i+1] = thisArray[i]
    //    console.log("thisArray[i]=" , thisArray[i])
    //    console.log("newArray[i+1]=" , newArray[i+1])
    }
    return newArray
}
myArray = pushToArray(myArray,10);
console.log("myArray added 10 in first index:", myArray);

// pull from Array
let newArray = []
const popFromArray = () =>{
    
    for( i=myArray.length ; i > 0 ; i--){
        myArray.length = i
        console.log("index is:", i);
        newArray = myArray[i-1]
        console.log("generate Array is: ", newArray)  
    }
        return myArray
}
const newArrayGenerate = popFromArray(myArray);
console.log(newArrayGenerate); 



/*const popFromArray = () =>{
    for(let i=myArray.length ; i > 0 ; i--){
        myArray.length = myArray.length -1
    }
        return myArray
}
const newArrayGenerate = popFromArray(myArray);
console.log(newArrayGenerate);*/



