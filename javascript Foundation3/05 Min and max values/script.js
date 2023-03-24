function findMaxAndMin(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {max, min};
}
const arr = [1,3,4,5,6,9, -1];
let result = findMaxAndMin(arr);
console.log(result);