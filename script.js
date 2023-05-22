let mainForm = document.querySelector(".mainForm");
let LoginForm = document.querySelector(".LoginForm");
let signUP = document.querySelector(".signUP");
let logInBtn = document.querySelector(".logInBtn");
let signUpBtn = document.querySelector(".signUpBtn");
let backBtn = document.querySelector(".backBtn");
let backBtn2 = document.querySelector(".backBtn2");
let signUpImage = document.querySelector(".signUpImage");

logInBtn.addEventListener("click", () => {
  mainForm.classList.remove("active");
  signUP.classList.remove("active");
  LoginForm.classList.add("active");
  signUpImage.style.cssText = ` background: url('./images/login-page.jpg')
    no-repeat; background-size: cover;
    background-position: center;`;
});

signUpBtn.addEventListener("click", () => {
  mainForm.classList.remove("active");
  LoginForm.classList.remove("active");
  signUP.classList.add("active");
  signUpImage.style.cssText = ` background: url("./images/signup-page.jpg")
  no-repeat; background-size: cover;
  background-position: center;`;
});
backBtn.addEventListener("click", (e) => {
  console.log(e);
  signUP.classList.remove("active");
  LoginForm.classList.remove("active");
  mainForm.classList.add("active");
  signUpImage.style.cssText = ` background: url("./images/mainImage.jpg")
  no-repeat; background-size: cover;
  background-position: center;`;
});
backBtn2.addEventListener("click", (e) => {
  console.log(e);
  signUP.classList.remove("active");
  LoginForm.classList.remove("active");
  mainForm.classList.add("active");
  signUpImage.style.cssText = ` background: url("./images/mainImage.jpg")
    no-repeat; background-size: cover;
    background-position: center;`;
});
