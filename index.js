var inputdateVal = document.querySelector('#dob')
var numberVal = document.querySelector('#luckyNumber')
var inputButton = document.querySelector('#inputBtn')
var output = document.querySelector('#valBox')


function dateCheckFunc() {
    var dateVal = inputdateVal.value.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < inputdateVal.value.length; i++) {
        sum = sum + Number(dateVal.charAt(i));
    }

    if (sum % numberVal.value === 0) {
        output.innerText = "Congratulations. Your Birthdate is lucky";
    } else {
        output.innerText = "Sorry. Your Birthdate is not lucky";
    }
}

function typeChecker() {
    output.innerText = "";
}

inputButton.addEventListener("click", dateCheckFunc)
numberVal.addEventListener("change", typeChecker)