
//varsion 5
// function Emp(id,name){


// }
//class is keyword but there are no class in js

//2015 javascript version 6
class Emp{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    print(){
        console.log(this.id,this.name);
    }   
   
}
let eich=new Emp(1,"Abhi");
console.log(eich);
console.log(typeof eich);
console.log(typeof Emp);
eich.print();