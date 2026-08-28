
// Find the largest value from array

// 1 2 3 4 100

function maxNum (arr) {

    debugger;
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[0] < arr[i]){
            max = arr[i];
        }else {
            max = arr[0];
        }

    }

    return max;

}

var array = [1,2,3,100,4,5]

console.log(maxNum(array));