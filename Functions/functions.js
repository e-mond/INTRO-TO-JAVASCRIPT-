// Creating a function
function Box() {
        console.log("Heyyyyyyyyyyy")
        document.write("<h1>Hello</h1>")
}

//Calling of a function
 Box()

 // Resuse
 Box()
 if (true) {} 
 Box()  

 //Adding Parameter and Aruguments in a function
 // Function parameters
 
 function coWorker(name,age,position )// A parameter can be more than one
 {
        console.log("Hello, " + name)
        console.log("My name is " + name +  ", " + age   + " years of age" +  position )
 }
 coWorker("Jack!",  40 , " former CEO of Twitter")
 coWorker("William! ", 25 , " employee of Twitter")
 coWorker("Roberta! ", 22 , " I used to work at Twitter")

 // Function Return
 function addTwonumbers(num1,num2){
        let answer=num1 + num2
        return answer
 }
 
console.log(addTwonumbers(30,30));


// Pre Built Functions
//Alert Box
alert("Good Day!")

// Prompt Box
 let age = prompt("Please enter your age");
 console.log(age)

// Confirm Box
 let result = confirm("Close this page?");
 console.log(result)
 // result can be true or false


 // Arrow Functions
 const arrowFun=(type)=>{
     console.log("Arrow Functions "  +  type);
}
arrowFun(1);