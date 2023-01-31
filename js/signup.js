//full name validation block

let fullName = document.getElementsByTagName('input')[0];
let nameMessage = document.getElementById('nameMessage');

fullName.oninput = function(){
    if(fullName.value.length == " ")
    {
        fullName.classList.add('invalid');
        nameMessage.innerHTML= 'Full Name cannot be empty';
    }
    else if (fullName.value.length <8)
    {
        fullName.classList.add('invalid');
        nameMessage.innerHTML ='Please feel free to type your full name';
    }
    else
    {
        fullName.classList.remove('invalid');
        fullName.classList.add('valid');
        nameMessage.innerHTML = ' ';
    }
}

// email validation block

let emailElement = document.getElementById('emailElement');
let emailMessage = document.getElementById('emailMessage');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
emailElement.oninput = function(){
    
    if(emailElement.value.match(emailRegex))
    {
        emailElement.classList.add('valid');
        emailMessage.innerHTML = '';
    }
    else
    {
        emailElement.classList.remove('valid');
        emailElement.classList.add('invalid');
        emailMessage.innerHTML = "Please enter a valid EmailID";
    }
}

// Password input validation section

let passwordElement = document.getElementById('passwordElement');
let passMessage = document.getElementById('passMessage');
const passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
passwordElement.oninput = function(){
    

    if(passwordElement.value.match(passRegex)){
        passwordElement.classList.remove('invalid');
        passMessage.innerHTML = '';
    }
    else
    {
        passwordElement.classList.remove('valid');
        passwordElement.classList.add('invalid');
        passMessage.innerHTML ='Your password must contain at least one lower case letter, one upper case letter , more than one number and special character. Most important you should have 8 inputs';
    }
}

// Confirm Password validation section

let confirmPassMessage = document.getElementById('confirmPassMessage');
let confirmPassword = document.getElementById('confirmPassword');

confirmPassword.oninput =function (){
    if(confirmPassword.value != passwordElement.value)
    {
        confirmPassword.classList.add('invalid');
        confirmPassMessage.innerHTML = 'We have found a mismatch on your entered password, kindly correct this to create an account';
    }
    else
    {
        confirmPassword.classList.remove('invalid');
        passwordElement.classList.add('valid');
        confirmPassword.classList.add('valid');
        confirmPassMessage.innerHTML='';
    }
}

// Sign in button validation
 let signinBtnElem = document.getElementsByTagName('button')[2];

 signinBtnElem.onclick = function(){
    if((fullName.value.length == '') && (emailElement.value.length == '') && (passwordElement.value.length == ''))
    {
        fullName.classList.add('invalid');
        emailElement.classList.add('invalid');
        passwordElement.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        alert('Please fill up the input fields to create an account');
    }
    else if((fullName.value == '') && (fullName.value.length <8))
    {
        fullName.classList.add('invalid');
        nameMessage.innerHTML ='Please feel free to type your full name';
    }
    else if(emailRegex.test(emailElement.value) == false)
    {
        emailElement.classList.add('invalid');
        emailMessage.innerHTML = 'Email ID cannot be empty'
    }
    else if(passwordElement.value == '')
    {
        passwordElement.classList.add('invalid');
        passMessage.innerHTML = 'Enter the password';
    }
    else if (confirmPassword.value.length == '')
    {
        confirmPassword.classList.add('invalid');
        confirmPassMessage.innerHTML = 'Please re-enter the password';
    }
    else{
        alert ('Hacker Rank welcome you to our Blogs')
        location.replace('login.html');
    }
    return false;
 }