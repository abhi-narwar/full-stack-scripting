//synchronous callback
let msg = (name)=> {
    let getText = "Hello" + name ;
    console.log(getText)
}


let nextmsg = (outer,callback)=> {
    console.log(outer)
    callback(" section R javascript session")
}
nextmsg("code red",msg)

   




// create a todo list using javascript




//Asynchronous Call Back

console.log("async call back ,first",1)

setTimeout( ()=> {
    console.log("waiting stage",2)
},2000)

console.log("last call",3)



//try and catch syntax
try {

    
} catch (error) {

}




