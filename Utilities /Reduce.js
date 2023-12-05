Array.prototype.myReduce = function (callBackFn, initialVal) {
    const noInitialVal = initialVal === undefined;
    const len = this.length;
    let acc = noInitialVal ? this[0] : initialVal;

    if(noInitialVal && len === 0){
        throw new TypeError('Reduce of empty array with no initial value');
    }


    let startIdx = noInitialVal ? 1 : 0;
    for ( let i = startIdx; i < this.length; i++){
        if(this[i]){
            acc = callBackFn(acc, this[i], i, this);
        }
    }
    return acc;
}
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)); // 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4)); // 10