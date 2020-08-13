var num1;
var num2;
var oprand;
var answer;

num1=10;
num2=10;

operand = "-";
switch (operand)
    {
        case "-":
            answer = num1 - num2;
            break;
        case "+":
            answer = num1 + num2;
                break;
        case "/":
            answer = num1 / num2;
                break;
        case "*":
            answer = num1 * num2;
                 break;
        default:
            answer = 0;
                 break;
    } 
     console.log(num1 + " " + operand + " " + num2 + " = " + answer);
     
               