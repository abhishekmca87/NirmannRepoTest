function Employee(id,name){
    this.id=id;
    this.name=name;
    Employee.count=0;
    Employee.prototype.salary=100;

    this.print()=function(){
        console.log("id", this.id,"name",this.name);
    }
    Employee.prototype.commonprint=function(){
        console.log("id", this.id,"name",this.name);
    }
}
var eich=new Employee(1,"Abhishek");