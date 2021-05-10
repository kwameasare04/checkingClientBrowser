function featureCheck(){
    try{
eval("`test string`;");
    }
    catch(e){
        return false;
    }
return true;
}

if(featureCheck()){
    console.log("hello from es6");
}
else {
    console.log("hello from es5!")
}
