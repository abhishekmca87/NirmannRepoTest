class Account{
    constructor(acno,holdername,balance){
        this.acno=acno;
        this.holdername=holdername;
        this.balance=balance;
    }
    deposit(balance1){
        console.log("deposit",balance1);
    }
    withdraw(balance1){
        if(balance1==0){
            console.log("balance not less than zero");
        }
        console.log("withdraw",balance1);
    }
    print(){
        console.log(this.balance);
    }
}

let eich=new Account(1,"Abhi",1000);
eich.deposit(100);
eich.withdraw(50);
eich.print();