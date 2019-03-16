// JavaScript source code

function init() {

    //fill in the select drop down for CustomerInfo
    document.getElementById('selectCountry').options.length = 0;
    document.getElementById('selectCountry')[0] = new Option("", 1);
    document.getElementById('selectCountry')[1] = new Option("Canada", 2);
    document.getElementById('selectCountry')[2] = new Option("Mexico", 3);
    document.getElementById('selectCountry')[3] = new Option("United States", 4);
    document.getElementById('selectCountry')[4] = new Option("Other", 5);

}

function init_lifestyle() {

    //fill in the select drop down for LifeStyleInfo - method of travel
    document.getElementById('selectTravel').options.length = 0;
    document.getElementById('selectTravel')[0] = new Option("", 1);
    document.getElementById('selectTravel')[1] = new Option("Public transportation", 2);
    document.getElementById('selectTravel')[2] = new Option("No vehicle", 3);
    document.getElementById('selectTravel')[3] = new Option("Private vehicle", 4);
    document.getElementById('selectTravel')[4] = new Option("Carpool", 5);


    document.getElementById('selectMeat').options.length = 0;
    document.getElementById('selectMeat')[0] = new Option("", 1);
    document.getElementById('selectMeat')[1] = new Option("Never", 2);
    document.getElementById('selectMeat')[2] = new Option("1-2 times", 3);
    document.getElementById('selectMeat')[3] = new Option("1-5 times", 4);
    document.getElementById('selectMeat')[4] = new Option("Everyday", 5);


    document.getElementById('selectSquareFoot').options.length = 0;
    document.getElementById('selectSquareFoot')[0] = new Option("", 1);
    document.getElementById('selectSquareFoot')[1] = new Option("900 square feet", 2);
    document.getElementById('selectSquareFoot')[2] = new Option("1500 square feet", 3);
    document.getElementById('selectSquareFoot')[3] = new Option("2500 square feet", 4);
    document.getElementById('selectSquareFoot')[4] = new Option("Other", 5);


    document.getElementById('selectFamily').options.length = 0;
    document.getElementById('selectFamily')[0] = new Option("", 1);
    document.getElementById('selectFamily')[1] = new Option("1 person", 2);
    document.getElementById('selectFamily')[2] = new Option("2 people", 3);
    document.getElementById('selectFamily')[3] = new Option("3-5 people", 4);
    document.getElementById('selectFamily')[4] = new Option("Other", 5);
}

/*
function validateName() {
    var firstNameField = document.getElementById('firstname').value;
    var lastNameField = document.getElementById('lastname').value;

    if (firstNameField.length === 0 || firstNameField === firstNameValue) {
        alert('Please ' + firstNameValue);
        document.getElementById('firstname').style.backgroundColor = "#11D4CB";
        return false;
    }
    else if (checkForNumbers(firstNameField) === true) {
        alert('Please only input letters into the first name field');
        return false;
    }

    if (lastNameField.length === 0 || lastNameField === lastNameValue) {
        alert('Please ' + lastNameValue);
        document.getElementById('lastname').style.backgroundColor = "#11D4CB";
        return false;
    }
    else if (checkForNumbers(lastNameField) === true) {
        alert('Please only input letters into the last name field');
        return false;
    }
} 

function checkForNumbers(inputText) {

    //Create the number to be checked
    var nums = '0123456789';

    //Flag to return
    var isNumber = false;

    // Loop through all the characters in the input text
    for (var i = 0; i < inputText.length; i++) {
        // Extract the next character from the string
        var loopChar = inputText.charAt(i);
        // if the character is found in our list (nums), then it is a number
        if (nums.indexOf(loopChar) >= 0) {
            isNumber = true;
        }
    }
    return isNumber;
} */