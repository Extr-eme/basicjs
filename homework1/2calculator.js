// 2. Create a calculator function that takes two numbers and an operator 
// (+, -, *, /) as argument of the function and returns the result

function calculate(n1,n2,op){
    let result;
    let operation;
    switch(op){
        case '+':
            operation="sum"
            result=n1+n2
            break
        case '-':
            operation="diference"
            result=n1-n2
            break;
            case '*':
                operation="product"
            result=n1*n2
            break
        case '/':
            operation="quotient"
            result=n1/n2
            break;
        default:
            operation="operation"
            result="invalid"
    }
    console.log(`the ${operation} is: ${result}`)
}
calculate(2,3,'+')
calculate(2,3,'-')
calculate(2,3,'*')
calculate(2,3,'/')