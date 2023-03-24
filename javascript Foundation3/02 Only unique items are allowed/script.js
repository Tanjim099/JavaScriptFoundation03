function duplicatenumbers(a){
    return [... new Set(a)]
};
const arr = [1,2,3,2,3,4,55,55,6,3,7];
const result = duplicatenumbers(arr);
console.log(result);
