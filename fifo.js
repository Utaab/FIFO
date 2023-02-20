
const myarray=[];
function pushItem(item){
    const lengthOfArray = myarray.length;
    for(i=0; i<lengthOfArray; i++){
        myarray[lengthOfArray-i] = myarray[lengthOfArray-i-1]
    }
    myarray[0]=item;
}
function pullItem(){
    
    const lengthOfArray = myarray.length;
    if(lengthOfArray>0){
       return myarray.splice(lengthOfArray-1,1);

    }
}
pushItem(1);
pushItem(2);
pushItem(3);
pushItem(4);
console.log(myarray);
console.log(pullItem());
console.log(myarray);