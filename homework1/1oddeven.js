// 1. Write a program that prints all even numbers from 1 to 50 
// using proper indentation and comments to explain your code.

let even="" //creating string to store even numbers and print them in single line
for(i=1;i<=50;i++){
    if(i%2==0){       //checking if even
        even+=i+" "  //storing numbers in string if even
    }
}
console.log(even) //printing the numbers in a single line