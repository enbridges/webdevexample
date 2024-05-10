function validateForm(){
    let x = document.forms["messageForm"]["Email"].value;
    if (x == ""){
        alert("Email must be filled out");
        return false;
    }
    else if (x == "enbridges@eagles.usi.edu"){
        alert("Enter YOUR email please");
        return false;
    }
    x = document.forms["messageForm"]["Subject"].value;
    if (x == ""){
        alert("Please choose a subject");
        return false;
    }
    x = document.forms["messageForm"]["Message"].value;
    if (x == ""){
        alert("Please enter a message");
        return false;
    }
}