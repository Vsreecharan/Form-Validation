function seterror(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    let returnval = true;

    const name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "Required and must be at least 5 characters.");
        returnval = false;
    } else {
        seterror("name", "");
    }

    const userid = document.forms['myForm']["formuserid"].value;
    if (userid.length < 5 || userid.length > 12) {
        seterror("userid", "Required and must be of length 5 to 12.");
        returnval = false;
    } else {
        seterror("userid", "");
    }

    const password = document.forms['myForm']["formpassword"].value;
    if (password.length < 7 || password.length > 12) {
        seterror("password", "Required and must be of length 7 to 12.");
        returnval = false;
    } else {
        seterror("password", "");
    }

    const address = document.forms['myForm']["formaddress"].value;
    if (address.length == 0) {
        seterror("address", "Optional");
    } else {
        seterror("address", "");
    }

    const about = document.forms['myForm']["formabout"].value;
    if (about.length == 0) {
        seterror("about", "Optional");
    } else {
        seterror("about", "");
    }

    const country = document.forms['myForm']["country"].value;
    if (country == "(Please choose a country)") {
        seterror("country", "Required. Must select a country");
        returnval = false;
    } else {
        seterror("country", "");
    }

    const zipcode = document.forms['myForm']["formzipcode"].value;
    if (!zipcode.match(/^\d+/)) {
        seterror("zipcode", "Required. Must be numeric only");
        returnval = false;
    } else {
        seterror("zipcode", "");
    }

    const email = document.forms['myForm']["formemail"].value;
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        seterror("email", "Required. Must be a valid email.");
        returnval = false;
    } else {
        seterror("email", "");
    }

    const sex = document.forms['myForm']["formsex"].value;
    if (!sex) {
        seterror("sex", "Required");
        returnval = false;
    } else {
        seterror("sex", "");
    }

    const language = document.forms['myForm']["formlanguage"].value;
    if (!language) {
        seterror("language", "Required");
        returnval = false;
    } else {
        seterror("language", "");
    }

    if (returnval) {
        // Show the success message
        document.getElementById('successMessage').style.display = 'block';
        // Optionally clear the form after submission
        document.getElementById('registrationForm').reset();
    }

    return returnval;
}

// Attach the validateForm function to the form's submit event
document.getElementById('registrationForm').onsubmit = validateForm;
