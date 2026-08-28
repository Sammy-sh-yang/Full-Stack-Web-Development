

// Write with inbuilt function
function reverseString (str) {

    return str.split("").reverse().join("");

}

// Without inbuilt function
function rString (str) {

    var blank = "";

    for (var i = str.length-1; i >= 0; i--){
        blank += str[i]; 
    }

    return blank;
}

// console.log(reverseString("ABC")); 
console.log(rString('ABC'));

