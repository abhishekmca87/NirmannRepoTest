//If Single Object Create
var server={ip:"192.168.0.201",port:8080};

//If Multiple Object
class Account{
    constructor(accountNo,Holdername,initialbalance){
        this.accountNo=accountNo;
        this.Holdername=Holdername;
        this.initialbalance=initialbalance;
    }
    print(){
        console.log("Number",this.accountNo,"Name",this.Holdername,"balance",this.initialbalance);
    }
}

let eich=new Account(1,"Abhi",500);
let andreson=new Account(2,"Avi",1000);
eich.print();
andreson.print();

//3.Use arrow function  instend of function use function only for function and not or create object
function add(a,b){
    return a+b;
}
var add=(a,b)=>a+b;