const randomNumber=Math.floor(Math.random()*100) 

const message = document.getElementById('message')
const guessInput=document.getElementById('guessInput')
console.log(randomNumber);

function compareNumber(){
    if (randomNumber == guessInput.value){
        message.innerHTML = "You guessed right!"
    }else if (randomNumber > guessInput.value){
        message.innerHTML = "Go Higher!"
    }else {
        message.innerHTML = "Go Lower!"
    }
}