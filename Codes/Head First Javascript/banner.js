// to validate the non-empty fields
function validateNonEmpty(inputField, helpText) {
    if (inputField.value.length === 0) {

        if (helpText !== "") {
            helpText.innerHTML = "Please enter a value&nbsp;";
            return false;
        }

    } else {
        if (helpText != null) {
            helpText.innerHTML = "";
            return true
        }
    }
}

function validateLength(minLength, maxLength, inputField, helpText) {
    // to check if the character length of the input is within limits
    if (inputField.value.length < minLength || inputField.value.length > maxLength) {
        // check if the <span> is there or not
        if (helpText !== null) {
            helpText.innerHTML = "Enter value between " + minLength + " and " + maxLength + " characters. &nbsp;"
            return false;
        }
    } else {
        if (helpText !== null) {
            helpText.innerHTML = "";
            return true;
        }
    }
}


function validateZipCode(inputField, helpText) {
    // check if the length of the input is anything other than 5 characters
    if (inputField.value.length !== 5) {
        if (helpText !== null) {
            helpText.innerHTML = "Please enter valid 5 Number ZIP Code.&nbsp;";
            return false;
        }
    } else if (isNaN(inputField.value)) {
        if (helpText !== null) {
            helpText.innerHTML = "ZIP Code with numbers only.&nbsp;";
            return false;
        }
    } else {
        if (helpText !== null) {
            helpText.innerHTML = "";
            return true;
        }
    }
}


// the function expects a form object to be passed as its only argument so that it can access individual form
// fields. form is an passive array with all the fields.
function placeOrder(form) {
    if (
        validateLength(1, 32, form["message"], document.getElementById('message_help')) &&
        validateZipCode(form["zip"], document.getElementById('zip_help')) &&
        validateNonEmpty(form["date"], document.getElementById('date_help')) &&
        validateNonEmpty(form["name"], document.getElementById('name_help')) &&
        validateNonEmpty(form["phone"], document.getElementById('number_help')) &&
        validateNonEmpty(form["email"], document.getElementById('email_help'))
    ) {

        form.submit();

    } else {
        alert("Sorry, something went wrong!");
    }
}

function validateRegExp(regexp, inputString, helpText, helpMessage) {
    // See if the inputString data validates 
    if (!regexp.test(inputString)) {
        // the data is invalid, set the helpMessage and return false
        if (helpText !== null) {
            helpText.innerHTML = helpMessage;
            return false;
        }
    } else {
        if (helpText !== null) {
            helpText.innerHTML = "";
            return true;
        }
    }
}


// function to validate the Date input field
function validateDate(inputField, helpText) {
    // Non-Empty Test
    if (!validateNonEmpty(inputField, helpText)) {
        return false;
    } else {
        var RegExpDate = /^\d{2}\/\d{2}\/\d{2}|\d{4}$/; // the user can enter both 2 digit year or 4 digit year
        return validateRegExp(RegExpDate, inputField.value, helpText, "Please enter valid date MM/DD/YYYY &nbsp;");
    }
}


// function to validate phone number
function validatePhone(inputField, helpText) {
    // Non-Empty test
    if (!validateNonEmpty(inputField, helpText)) {
        return false;
    } else {
        var RegExpPhone = /^\d{3}-\d{3}-\d{4}$/;
        return validateRegExp(RegExpPhone, inputField.value, helpText, "Please enter valid number (e.g 987-654-321). &nbsp;")
    }
}


// function to validate Email
function validateEmail(inputField, helpText) {
    // Non-Empty Check
    if (!validateNonEmpty(inputField, helpText)) {
        return false;
    } else {
        var RegExpEmail = /^[\w\-_\.]+@[\w-]+(\.\w{2,4})+$/;
        return validateRegExp(RegExpEmail, inputField.value, helpText, "Enter valid email (e.g abc@xyz.com)");
    }
}