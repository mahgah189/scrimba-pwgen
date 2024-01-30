const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwOneEl = document.getElementById("pw1");
let pwTwoEl = document.getElementById("pw2");
let pwLength = document.getElementById("length-el");
let errorMessage = document.getElementById("error-msg");

let pwLengthCache;

function passwordLength() {
    pwLengthCache = pwLength.value;
    pwLength.value = "";
    errorMessage.textContent = "";
}

function passwordGenerator() {
    // create variable to store password1
    // create variable to store password2
    let passwordOne = "";
    let passwordTwo = "";

    console.log(pwLengthCache);

    if (pwLengthCache === undefined || pwLengthCache === "") {
        errorMessage.textContent = "Please set a password length";
        return;
    }

    // create a for loop to generate each character (up to 15 characters)
    for (let i = 0; i < pwLengthCache; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)];
        passwordTwo += characters[Math.floor(Math.random() * characters.length)];
    }

    // push each password to its respective field
    pwOneEl.textContent = passwordOne;
    pwTwoEl.textContent = passwordTwo;
}

function copyPasswordOne() {
    navigator.clipboard.writeText(pwOneEl.textContent);
    alert("Copied password one: " + pwOneEl.textContent);
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(pwTwoEl.textContent);
    alert("Copied password two: " + pwTwoEl.textContent);
}