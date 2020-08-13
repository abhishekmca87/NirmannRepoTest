g=10;
var x=5;
var y=7;
function add(a,b){
    var c;
    c=a+b;
    return c;
}
var result= add(x,y);
console.log(result);
function sum(){
var output=0;

for(var element=0;element<arguments.length;element++){
 output +=arguments[element];
}
return output;
}
result=sum(1,5,7,9,2,3);
console.log(result);
result=sum(1,5,7);
console.log(result);