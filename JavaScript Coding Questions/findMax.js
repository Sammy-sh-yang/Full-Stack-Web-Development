
// Find the largest value from array

// 1 2 3 4 100

function maxNum (arr) {

    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }

    return max;

}

var array1 = [1,2,3,200,4,5]
var array2 = [99, 5, 3, 100, 1]

console.log(maxNum(array1));
console.log(maxNum(array2));
