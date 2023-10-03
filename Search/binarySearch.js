const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

const binarySearch = (arr, item) => {
    // position of first element
    let start = 0;
    // posit of last el
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count +=1;
        middle = Math.floor((start + end) /2);
        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

//recursive way for binary search
const recursiveBinarySearch = (arr, item, start, end) => {
    let middle = Math.floor((start + end) /2);
    if (item === arr[middle]) {
        return middle
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle -1);
    } else {
        return recursiveBinarySearch(arr, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(arr, 12, 0, arr.length));
// console.log(binarySearch(arr, 10));
console.log(count);