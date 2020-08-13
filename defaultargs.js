//                          ||default argument
//                          v
function calculate(param,print=true){  //print is true if not pass
    console.log("param",param,"print",print);
    console.log("argumaent[0]",arguments[0],"argument[1]",arguments[1]);
   
}
calculate(5*7)  //only one param is pass second is by default true

