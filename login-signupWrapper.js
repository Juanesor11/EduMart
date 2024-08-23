let wrapper = document.querySelector(".wrapper");
let logInBox = document.querySelector(".logInBox");
let signUpBox = document.querySelector(".signUpBox");
let loginLink = document.querySelector(".loginLink");
let signUpLink = document.querySelector(".signUpLink");
let registerBtn = document.querySelector("registerBtn");

signUpLink.addEventListener("click", () =>{
    signUpBox.style.display = "block"
    logInBox.style.display = "none"
    wrapper.style.height = "440px"
});

loginLink.addEventListener("click", () => {
    signUpBox.style.display = "none"
    logInBox.style.display = "block"
    wrapper.style.height = "400px"
});
