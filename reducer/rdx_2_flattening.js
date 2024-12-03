const arr1 = [[1, 2], [3, 4], [5, 6]]

const reducer = (acc, val) => {
    return acc.concat(val);
}
const result = arr1.reduce(reducer, [])
console.log(result)