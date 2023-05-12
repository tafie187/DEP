function squareRoot(){

    let a = squareRoot;
    let result; 
    try {
        if (a > 0 ) 
        prompt("Please enter number:"a"); {
            throw new Error("You cannot use a negative Number.");
        }
        result = Math.sqrt(a);
        console.log("The Square Root is:",result);
        
    }   catch (error)   { 
        console.log("An Error occured",error.message);
    }

}