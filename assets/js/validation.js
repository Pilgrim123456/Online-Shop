function validateForm(){

    const firstName = document.getElementById("firstname").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phonenumber").value.trim();
    const userName = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const verificationCode = document.getElementById("verificationCode").value.trim();
    const errorMessage = document.getElementById("errorMessage");


    errorMessage.innerHTML = "";
    let error = 0;

    if(firstName=="") {
        document.getElementById("firstname-error").innerHTML= "Enter your name."; 
        document.getElementById("firstname-error").style.color = "red";
        document.getElementById("firstname").style.borderBottom = "solid red 2px";
        error ++;
    }
    

    if(!surname) {
        document.getElementById("surname-error").innerHTML = " Please enter your Surname.";
        error ++;
    }

    if(!email) {
        document.getElementById("email-error").innerHTML = " Please enter your email."; 
        error ++;
    }

    if(!phoneNumber) {
        document.getElementById("phonenumber-error").innerHTML = " Phone number is required."; 
        error ++;
    }

    if(!userName) {
        document.getElementById("username-error").innerHTML = " Please enter a username."; 
        error ++;
    }


    if(!password) {
        document.getElementById("password-error").innerHTML = " Please enter a password."; 
        document.getElementById("password-error").style.color = "red";
        document.getElementById("password").style.borderBottom = "solid red 2px"; 
        error ++;
    }

    if(!confirmPassword) {
        document.getElementById("confirmPassword-error").innerHTML = " Please confirm the password you entered.";
        document.getElementById("confirmPassword-error").style.color = "red";
        document.getElementById("confirmPassword").style.borderBottom = "solid red 2px"; 
        error ++; 
    }
 
    document.getElementById("errorMessage").innerHTML = "password : " + password + "  confirmPassword : " + confirmPassword;
    
    let cp = document.getElementById("confirmPassword-error"); 

    if (password !== confirmPassword) {
        
        cp.innerHTML = "Passwords do not match !"; 
        cp.style.color = "red";
        error ++;
    }
    else
    {
        cp.innerHTML = ""; 
        document.getElementById("confirmPassword").style.borderBottom = "solid green 2px"; 
        document.getElementById("password").style.borderBottom = "solid green 2px"; 
         
    }

    if (password.length < 8) {

        document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long."; 
        error ++;
    }


    if (error>0) {
        document.querySelector("#errorMessage").innerHTML="Please ensure that all fields have been properly filled."
    } else {
        document.querySelector("#errorMessage").innerHTML="Account created successfully.";
        
    }

}