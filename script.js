let passwordShow = document.getElementById('passwordGeneratorField');
let passLengthRange = document.getElementById('passwordLength');
let passLengthShow = document.getElementById('passLengthShow');
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}:";
passLengthRange.addEventListener('input',() => {
    passLengthShow.innerHTML = passLengthRange.value;
})

function passwordGenerator(){
    let generatedPassword = "";

    for(var i = 0;  i < passLengthRange.value ;i++){
        let randomizedNumber = Math.floor(Math.random() * charset.length);
        generatedPassword += charset.substring(randomizedNumber,randomizedNumber+1);
        passwordShow.value = generatedPassword;

    }
    console.log(passwordShow.value);
    
}
function copyPassword(){
    if(passwordShow.value != ""){
        navigator.clipboard.writeText(passwordShow.value);
        alert('successfully copied!');
    }else{
        console.warn('input was empty!');
    }
}