// 10. Write a program that filters out even numbers from an array
//  and returns a new array with only the odd numbers.

let a=[1,2,3,4,5,7,9,11]
let b=[]
let i=0

for(i=0;i<a.length;i++){
if(a[i]%2!=0){
    b.push(a[i])
}
}
console.log(b)