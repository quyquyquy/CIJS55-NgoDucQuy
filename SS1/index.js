//Bai 3
function fun(ar){
    let find = ar[0]*ar[1];
    for(let i=0; i<ar.length; i++){
        const n = ar[i]*ar[i+1];
        if(find < n){
            find = n;
        }
    }
    return find;
};
console.log(fun([3, 6, -2, -5, 7, 3]));

//Bai 4
//a
function fun2(array){
    let arr =[];
    for (let i=0; i<array.length; i++){
        if (array[i] % 2 === 0){
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(fun2([1,2,3,4,5,6,7,8,9,10]));
//b

function fun3(array2){
    return array2.filter(a => a % 2 === 0);
}
console.log(fun3([10, 9, 8, 7, 6, 5, 3, 4, 2, 1]));
