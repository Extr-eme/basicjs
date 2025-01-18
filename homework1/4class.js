// 4.  Create a Person class with properties name and age, 
// and a method introduce that logs a message like "Hi, my name is [name] and I am [age] years old."

class person{
    constructor(namee,age){
        this.namee=namee
        this.age=age
    }
     display(){
    console.log(`Hi,my name is ${this.namee} and i am ${this.age} years old`)
    }
}
let a=new person("ram",20)
a.display();
