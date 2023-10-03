const numbers = [2, 3, 4, 5, 6];

// time compl - O(n * n)
// space compl - O(1)
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        for (let j = i + 1; j < nums.lengthl; j++) {
            if (numToFind === nums[j]) {
                return [i, j];
            }
        }
    }
    return null;
}

// console.log(twoSum(numbers, 7))

// O(N) Solution
// store nums as a map to make search more efficient. Hash maps has lookups of O(n)
const twoSumV2 = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
};

// console.log(twoSumV2(numbers, 7))