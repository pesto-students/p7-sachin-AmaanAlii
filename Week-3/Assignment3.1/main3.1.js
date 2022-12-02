

function memoize(fn){
    const cache = new Map();
    return function (n) {
        const key = n.toString();
        if (cache.has(key)){
            console.log("Memoized Value-")
            return cache.get(key);
        }
        cache.set(key, fn(n));
        return cache.get(key);

    };
    
    
}

function square(a){
    console.log("Calculating Value -")
    return a*a;
}


const squareM = memoize(square);

console.log(squareM(20));
console.log(squareM(20));
console.log(squareM(30));
console.log(squareM(30));
console.log(squareM(40));
console.log(squareM(40));

