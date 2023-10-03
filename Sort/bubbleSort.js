const arr = [1, 3, 5, 6, 2, 4, 8, 11, 23, 12, 56, -5, 34]
let count = 0;

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            count+=1;
        }
    }
    return arr;
}


console.log(bubbleSort(arr));
console.log(arr.length, '🙂 arr length');
console.log(count, '👨🏼‍💻 count');
// O(n * n)