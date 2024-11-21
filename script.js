let passwordShow = document.getElementById('passwordGeneratorField');
let passLengthRange = document.getElementById('passwordLength');
let passLengthShow = document.getElementById('passLengthShow');


passLengthRange.addEventListener('input',() => {
    passLengthShow.innerHTML = passLengthRange.value;
})

function passwordGenerator(){
    //charset containers here...
    let defaultCharset = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let symbolsCharset = "!@#$%^&*()_+{}";

    let generatedPassword = "";

    //check if user selected an option by toggling the checkboxes...
    let optionUpperCase = document.getElementById('uppercaseToggle');
    let optionNumbers = document.getElementById('numbers');
    let optionSymbolsCharset = document.getElementById('optionSymbolsCharset');

    if(optionUpperCase.checked){
        defaultCharset += upperCaseCharset;
    }
    if(optionNumbers.checked){
        defaultCharset += numbers;
    }
    if(optionSymbolsCharset.checked){
        defaultCharset += symbolsCharset;
    }

    //password generation system with for loop
    for(var i = 0;  i < passLengthRange.value ;i++){
        let randomizedNumber = Math.floor(Math.random() * defaultCharset.length);
        generatedPassword += defaultCharset[randomizedNumber];
        passwordShow.value = generatedPassword;

    }
    //just for test nothing more
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