const openSignUp = () => {
    let overlay = document.getElementById("overlay");
    let leftText = document.getElementById("sign-in");
    let rightText = document.getElementById("sign-up");
    let accountForm = document.getElementById("sign-in-info")
    let signinForm = document.getElementById("sign-up-info");
    leftText.classList.remove("overlay-text-left-animation-out");
    overlay.classList.remove("open-sign-in");
    rightText.classList.remove("overlay-text-right-animation");
    accountForm.className += " form-left-slide-out"
    rightText.className += " overlay-text-right-animation-out";
    overlay.className += " open-sign-up";
    leftText.className += " overlay-text-left-animation";
    setTimeout(function () {
        accountForm.classList.remove("form-left-slide-in");
        accountForm.style.display = "none";
        accountForm.classList.remove("form-left-slide-out");
    }, 700);
    setTimeout(function () {
        signinForm.style.display = "flex";
        signinForm.classList += " form-right-slide-in";
    }, 200);
}

// Open the Sign In page
const openSignIn = () => {
    // Remove classes so that animations can restart on the next 'switch'
    let overlay = document.getElementById("overlay");

// The sidebars
    let leftText = document.getElementById("sign-in");
    let rightText = document.getElementById("sign-up");

// The forms
    let accountForm = document.getElementById("sign-in-info")
    let signinForm = document.getElementById("sign-up-info");
    leftText.classList.remove("overlay-text-left-animation");
    overlay.classList.remove("open-sign-up");
    rightText.classList.remove("overlay-text-right-animation-out");
    // Add classes for animations
    signinForm.classList += " form-right-slide-out";
    leftText.className += " overlay-text-left-animation-out";
    overlay.className += " open-sign-in";
    rightText.className += " overlay-text-right-animation";
    // hide the sign in form once it is out of view
    setTimeout(function () {
        signinForm.classList.remove("form-right-slide-in")
        signinForm.style.display = "none";
        signinForm.classList.remove("form-right-slide-out")
    }, 700);
    // display the sign up form once the overlay begins moving left
    setTimeout(function () {
        accountForm.style.display = "flex";
        accountForm.classList += " form-left-slide-in";
    }, 200);
}