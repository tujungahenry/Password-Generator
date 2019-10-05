
    //possible password values
    let values4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let values1 = "abcdefghijklmnopqrstuvwxyz";
    let values2 = "1234567890";
    let values3 = "!@#$%^&*()_+"
    let values = "";
    let password = "";


// generate random password
function promptForTypes() {
    if (confirm("Do you want Capital letters?")) {
        values = values + values4;
    }
    if (confirm("Do you want Lowercase letters?")) {
        values = values + values1;
    }
    if (confirm("Do you want a special Character?")) {
        values = values + values3;
    }
    if (confirm("Do you want a number?")) {
        values = values + values2;
    }
}

promptForTypes()

function generate() {
password = "";
    // set password lenght/complexity
    let complexity = document.getElementById("slider").value;

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated password section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default lenght display of 25
document.getElementById("length").innerHTML = "Length: 64";

//function to set length based on slider position
document.getElementById("slider").oninput = function() {

    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length" + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}

//function to copy password to clipboard
function copyPassword() {
    document.getElementById("display").select();
    
    document.execCommand("Copy");
    alert("Password is now copied to clipboard");
}


