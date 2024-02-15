// Objects are written as name:value
let person = {
    name: 'John',
    age: 13,
    favColor: "blue",
    height : 100,
};
console.log(person); 
// Calling an individual  key value
 console.log(person.name);
 // Example 2
 console.log(person["favColor"]);
 // The dot opeartor is more used than the square brackets


 // Classes 
 class PC {
    constructor(Monitor, SystemUnit){
        this.Monitor = monitor;
        this.SystemUnit = SystemUnit; 
    }
 }
 console.log(constructor);