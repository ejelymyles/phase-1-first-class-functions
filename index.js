function callback(){
 console.log("this is a callback function");
}

function receivesAFunction (callback){
    callback ();
}

function returnsANamedFunction(){
    return function callback(){
     console.log("this is a callback function")
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("is this anonymous?")
    };
}