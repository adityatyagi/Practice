// Reverse the elements of the passed array
// donot use the array.reverse() method
// Do not make a new array and push the items into that array
// This is reversing a array in place

function revArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) { // arr.length/2 because while looping till the first half, we replace the nth element with its counterpart, but when we go to the second half, we again change the array and as a result get the same array.
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]; // The "i" in arr,length-1-i takes i places from the end, aka Counterpart
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
arr1 = [1, 2, 3, 4, 5, 6]
answer = revArrayInPlace(arr1);
console.log(answer);