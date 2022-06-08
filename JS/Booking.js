// ---------Checking HTML Elements are Loaded Or Not To The Page
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    //Submit Button Function Implementing
    document.getElementsByClassName('submitBtn')[0].addEventListener('click', submitClicked)
}

function submitClicked() {
    var inputNameValue = document.getElementById('name').value;
    var inputPartiValue = document.getElementById('member').value;
    var inputPhoneValue = document.getElementById('phone').value;
    var inputEmailValue = document.getElementById('email').value;
    console.log(inputNameValue, inputPartiValue, inputPhoneValue, inputEmailValue)

    if (inputNameValue == '' || inputEmailValue == '' || inputPhoneValue == '' || inputPartiValue == ''){
        alert('All the fields must fill!')
    } else{
        alert('Table Booked!')
    }
}