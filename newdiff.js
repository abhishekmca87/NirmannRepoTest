function add(a,b=0){
    console.log(a,b);
    console.log("argument[0]",arguments[0], "argument[1]", arguments[1]);

}
add(100);
add(5,7);