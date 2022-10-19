
5.1
function second(w){
    let secondArray = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log(secondArray.indexOf("Wednesday"))
    
    }
    console.log(second())    
   
    5.1.b
    function second(){
        let secondArray = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let variable = (secondArray.indexOf("Wednesday"))
            if("Wednesday".length>variable){
                
               console.log(secondArray.reverse())
            }
        }
        console.log(second())

5.2
function compare(){
    let secondArray = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let one= secondArray[0]
    let sec= secondArray[1]
    if (one<sec){
    console.log(secondArray.slice(0,3))
}
}
console.log(co
    
5.3
function compruebo(){
    let secondArray = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
if(secondArray.includes("Sunday")){
    console.log("That's nice!")
}else {
    secondArray.push("Sunday")
    console.log("Oh no!")
}
}
console.log(compruebo())

6.
function revertir(string){
    return string.split("").reverse().join("");

}
console.log(revertir("Paralelepipedo"))

7.
function swap(){
    let arrayy= [1,2]
    return arrayy.reverse()
}
console.log(swap())