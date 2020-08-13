//No private and Protected in Javascript


var person={
    id:1,
    name:"Abhi",
    _salary:5000  //indicate user not use
}
console.log(person._salary);

//_proto _ is not mant to be used by us

console.log(person._proto_.toString); //Dont use 

var bigB={name:"Amitab",surname:"Bachan"};
var smallB=Object.create(bigB);
smallB.name="Abhishek";
console.log("My father",smallB._proto_.name);
console.log("my fathet",Object.getPrototypeOf(smallB).name);