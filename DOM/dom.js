// Manipulating DOM in JS

// Using the document Object

document.body.style.backgroundColor = '#636a3c';

document.write("The document object is the root/parent of all the elements on your html page");


// Targeting the elements using their id
document.getElementById('Short').innerHTML = "Short Message";

// Targeting using the class name
let className = document.getElementsByClassName('main')[0];
className.style.border = '8px solid brown';
className.style.textAlign = 'center';
className.style.backgroundColor = 'skyblue';


let image = document.getElementById('image');
 image.src= "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
image.style.width = "100%"; // Example width
image.style.height = "auto";





