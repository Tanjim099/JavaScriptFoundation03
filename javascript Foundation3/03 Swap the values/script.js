function swapValue(x, y){
    [x, y] = [y, x];
    return [x, y];
};
let x = 20;
let y = 30;
[x, y] = swapValue(x, y);
console.log(x, y);