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
class Phone {
    constructor(model, storage, os, batterylife, brand) {
        this.model = model;
        this.storage = storage;
        this.os = os;
        this.batterylife = batterylife;
        this.brand = brand;
    }
}

const iphone = new Phone("XR", 32, "iOS", "100%", "Apple");
console.log(iphone);

class Iphone extends Phone {
    features() {
        return this.model + " 11 Promax";
    }
}

const iphone11promax = new Iphone("11", 128, "iOS", "100%", "Apple");
console.log(iphone11promax.features());

// Example 3
class Movie {
    constructor(title, genre, releaseYear) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }
}

class Title extends Movie {
    constructor(title, genre, releaseYear, rating) {
        super(title, genre, releaseYear);
        this.rating = rating;
    }

    getTitleDetails() {
        return `${this.title} (${this.releaseYear}) - ${this.genre} - Rated ${this.rating}`;
    }
}

const movie1 = new Title("Inception", "Sci-Fi", 2010, "PG-13");


console.log(movie1.getTitleDetails());


// 

