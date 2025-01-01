// function binarySearch(arr, target) {
let arr=[1,2,3,4,5]
    let left = 0;
    let right = arr.length - 1;
    let target=4;
  for(let i=0;i<arr.length;i++){
    // while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid[i] === target) {
            return mid; // Target found, return its index
            console.log(`Element found at index ${mid[i]}`);
        } else if (mid[i] < target) {
            left = mid + 1; // Search in the right half
        } else if(mid[i] >target){
            right = mid - 1; // Search in the left half
        }
        else{
            console.log("Element not found");
    }

    return -1;
 } // Target not found


// Example usage:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let target = 7;
// let result = binarySearch(arr, target);

// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log("Element not found");
// }