var person = {
    Id: 1,   //member variable
    Name: "Name",
    print: function () {   //memeber function
        console.log("Id is", this.Id, "Name is ", this.Name)
    }

}
console.log(person.Id); //object notation
console.log(person["Name"]) //braket notation
//member function call
person.print();