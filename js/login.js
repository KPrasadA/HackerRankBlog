
let emailElem = document.getElementsByTagName('input')[0];
let emailMessage = document.getElementById('emailMessage');
let passwordElem = document.getElementById('passwordElem');
let passMessage = document.getElementById('passMessage')
let btnElem = document.getElementsByTagName('button')[1];



emailElem.oninput = function (){
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailElem.value.match(regEx))
    {
        
        emailElem.classList.add('valid');
        emailMessage.innerHTML = '';

    }
    else
    {
        emailElem.classList.remove("valid"); 
        emailElem.classList.add('invalid');
        emailMessage.innerHTML = "Please enter valid EmailID";
    }
    
};

passwordElem.oninput = function(){
    const passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(passwordElem.value.match(passRegex))
    {
        passwordElem.classList.add('valid');
        passMessage.innerHTML = '';
        
    }
     else
     {
        passwordElem.classList.remove('valid');
        passwordElem.classList.add('invalid');
        passMessage.innerHTML = 'I think you have good memory. Please type your log in password correctly '
     }
}

 btnElem.onclick = function (){
    if((emailElem.value == '') && (passwordElem.value == ''))
    {
        passwordElem.classList.add('invalid');
        emailElem.classList.add('invalid');
        alert('Please fill up the input field to log into your account');
        
    }
    else
    {
        alert('Log in was successfull');
        location.replace('index.html')
    }
    return false
}
