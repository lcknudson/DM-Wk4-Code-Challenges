// Write your solution below:

//Write a function to remove all duplciate letters from a provided string. 
// The string will only contail lowercase letters between a - z. 
//The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu


const makeUnique= (string) => {
    let arr = string.split("")
    // console.log(arr);
    let arr2 = [];

    arr.forEach((el, i) => {
        if (!arr2.includes(el)) {
            arr2.push(el);
        }
    });
    
    return arr2.join("").replace(",", "");
}

console.log(makeUnique('helloworld'))
console.log(makeUnique('iwanttoclimbamountain'))