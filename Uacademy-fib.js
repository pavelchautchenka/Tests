function fib(a) {
    if (a === 0 || typeof a !== 'number'|| a <1|| Number.isInteger(a) ){return ""};
    if (a === 1){return "0"};
   let arr = [0,1];
   for (let i = 1; i < a-1; i++){
   arr.push(arr[i]+arr[i-1]);
   }
   return arr.join(" ")
}

console.log(fib(0))