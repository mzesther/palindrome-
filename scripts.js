const prompt = requi
let isPalindrone = () => {
    let result =prompt("enter a word?")
    let lengthofresult =result, length;
    let newArr ='';
    for (let i =lengthofresult-1; i >=0; i--){
        newArr +=result[i];
    }
    if(result ===newArr){
        console.log("True")
    }else{
        console.log("False")
    }
}
isPalindrone()