var balance=0;
function deposit(amount){
balance +=amount;
}
function withdraw(amount){
    balance -=amount;
}
function print(){
    console.log(balance);
}
deposit(100);
withdraw(10);
print();