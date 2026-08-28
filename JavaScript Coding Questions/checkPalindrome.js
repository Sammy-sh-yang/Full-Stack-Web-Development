
function checker (str) {
    
    var blank = "";

    for (var i = str.length - 1; i >=0; i--){
        blank += str[i]; 
    }

    return blank === str;
}


console.log(checker("ABC"));
console.log(checker("AAABAAA"));
console.log(checker("AGA")); 
