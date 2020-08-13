var Emp ={Id:1,Name:"Abhishek"}
console.log(Emp);

function emp(Id,Name){
    this.Id=Id;
    this.Name=Name;
}

let result=new emp(1,"Avi");
console.log(result);
