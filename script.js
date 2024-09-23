
const show = document.getElementById('showPassword');
show.addEventListener("click", function () {
    if (this.checked) {
        document.getElementById('password').type = "text";
    } else {
        document.getElementById('password').type = "password";
    }
})
const signinButton = document.getElementById("login")
const email = document.getElementById("email");
const password = document.getElementById("password");
const wrongInfo = document.getElementById("errorMassege")
signinButton.addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = email.value;
    const passwordInput = password.value;
    if (emailInput === "admin@admin.com" & passwordInput === "admin") {
        document.location.href = './infoPage.html'
    } else{
       wrongInfo.innerHTML="Wrong Email / Password";
       email.innerHTML="";
       password.innerHTML="";
    }
})