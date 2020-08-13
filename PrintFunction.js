function dosomthing(param){
    if(param<0){
        console.log("negative value no accept")
        return false;
    }
    console.log("Sqrt of",param,"is",Math.sqrt(param));
    return true;
}
console.log(1,dosomthing(9));
console.log(2,dosomthing);
console.log(3,dosomthing.name);
console.log(4,dosomthing.toString());