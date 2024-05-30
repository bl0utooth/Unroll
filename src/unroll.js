export function unroll(squareArray) {
    let result = [];
    let n = squareArray.length

    if (n === 0) return result

    let top = 0, bottom = n -1;
    let left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(squareArray[top][i])
        }
        top++

        for (let i = top; i <= bottom; i++) {
            result.push(squareArray[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(squareArray[bottom][i])
            }
            bottom--;
        }
        
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(squareArray[i][left]);
            }
            left++;
        }
    }
    return result;
}


// let squareArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// let squareArray2 = [
//     [17, 18, 19, 20],
//     [21, 22, 23, 24],
//     [25, 26, 27, 28],
//     [29, 30, 31, 32]
// ];

// console.log(unroll(squareArray));
// console.log(unroll(squareArray2));

const square = [
    [1, 3, 6, 7],
    [8, 9, 10, 11],
    [14, 16, 19, 21]
]

console.log(unroll(square))