Array.prototype.myBind = function (thisArgs, ...argsArray) {
    const originalMethod = this;
    return function (...args){
        originalMethod.apply(thisArgs, [...argsArray, ...args]);
    }
}