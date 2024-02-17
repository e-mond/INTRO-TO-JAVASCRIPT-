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
        constructor(monitor, systemUnit){
            this.monitor = monitor;
            this.systemUnit = systemUnit; 
        }
    }
    console.log(constructor);

 //Instantiating a class
 class Profile {

    constructor(id,email,passoword,address,age){

    this.id = id;
    this.email = email;
    this.passoword = passoword;
    this.address = address;
    this.age = age;
    }
    
 }

 const user1 = new Profile("BLACK07", "BLACK@EMAIL.COM" ,"B7@123", "AD12ST",30); 
 console.log(user1)


 const user2 = new Profile("ROB21", "robert@yahoo.com" ,"BOB403", "Tema",29);
console.log(user2)


// Creating methods in classes
class studentDetails{
    constructor(name, id, level, course ) {
         this.name = name;
         this.id = id;
          this.level = level;
           this.course = course;
        }
        getNameAndCourse(){
            return this.name + " " + this.course;
}

}
const freshStudent = new studentDetails ("Ablerta", "BC2202","L200","Civil Engineering");
console.log(freshStudent.getNameAndCourse());

// inheritance in classes
 
