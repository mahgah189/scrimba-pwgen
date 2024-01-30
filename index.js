const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersLettersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let pwOneEl = document.getElementById("pw1");
let pwTwoEl = document.getElementById("pw2");
let pwLength = document.getElementById("length-el");
let errorMessage = document.getElementById("error-msg");
let successMessage = document.getElementById("success-msg");
let toggleText = document.getElementById("toggle-state");
let copyPasswordOneButton = document.getElementById("pw1-copy");
let copyPasswordTwoButton = document.getElementById("pw2-copy");

let toggleState = false;
let pwLengthCache;

function passwordLength() {
    pwLengthCache = pwLength.value;
    errorMessage.textContent = "";

    copyPasswordOneButton.textContent = "Copy password one";
    copyPasswordTwoButton.textContent = "Copy password two";
    pwOneEl.textContent = "";
    pwTwoEl.textContent = "";

    if (pwLengthCache === undefined || pwLengthCache === "") {
        errorMessage.textContent = "Please set a password length";
        successMessage.textContent = "";
    } else {
        successMessage.textContent = "Password length set.";
        errorMessage.textContent = "";
    }
}

function toggle() {
    if (toggleState === true) {
        toggleState = false;
        toggleText.textContent = "Symbols & numbers are enabled."
    } else {
        toggleState = true;
        toggleText.textContent = "Symbols & numbers are disabled."
    }
}

function passwordGenerator() {
    // create variable to store password1
    // create variable to store password2
    let passwordOne = "";
    let passwordTwo = "";

    pwLength.value = "";
    successMessage.textContent = "";
    copyPasswordOneButton.textContent = "Copy password one";
    copyPasswordTwoButton.textContent = "Copy password two";

    if (pwLengthCache === undefined || pwLengthCache === "") {
        errorMessage.textContent = "Please set a password length";
        return;
    }

    // create a for loop to generate each character (up to 15 characters)
    if (toggleState === false) {
        for (let i = 0; i < pwLengthCache; i++) {
            passwordOne += characters[Math.floor(Math.random() * characters.length)];
            passwordTwo += characters[Math.floor(Math.random() * characters.length)];
        }
    } else {
        for (let i = 0; i < pwLengthCache; i++) {
            passwordOne += charactersLettersOnly[Math.floor(Math.random() * charactersLettersOnly.length)];
            passwordTwo += charactersLettersOnly[Math.floor(Math.random() * charactersLettersOnly.length)];
        }
    }

    // push each password to its respective field
    pwOneEl.textContent = passwordOne;
    pwTwoEl.textContent = passwordTwo;
}

function copyPasswordOne() {
    navigator.clipboard.writeText(pwOneEl.textContent);
    copyPasswordOneButton.textContent = "Copied!"
    copyPasswordTwoButton.textContent = "Copy password two";
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(pwTwoEl.textContent);
    copyPasswordTwoButton.textContent = "Copied!"
    copyPasswordOneButton.textContent = "Copy password one";
}