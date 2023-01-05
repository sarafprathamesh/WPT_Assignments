exports.factorial=function(a){
   
    num=parseInt(a);
    for(var i=1;i<parseInt(a);i++){
        console.log(num);
        num=num*i;
    }
    // var fact=1;
    // while(num!=0){
    //     fact=num*fact;
    //     num--;
    // }
    return num;
}
// Response.writeHeader(200,{'content-type':'text/html'});
exports.printable=function(num){
    console.log("Bye");
    a=parseInt(num);
    var str="";
    for(var i=1;i<=10;i++){
        // Response.write("<br>"+a+" * "+ i +" = "+ (a*i));
       str+=(a+" * "+ i +" = "+ (a*i)+"<br>");
    }
    // Response.end();
    return str;
}

exports.prime=function(num){
    var counter=0;
    a=parseInt(num);
    for(var i=2;i<=(a/2);i++){
        if((a%i)!=0){
    
           counter++;
           console.log("counter"+counter);
        }  
    }
    if(counter==(parseInt(a/2)-1)){
        return ("This is a prime number");
    }
    else{
        return ("This is not a prime number");
    }
}