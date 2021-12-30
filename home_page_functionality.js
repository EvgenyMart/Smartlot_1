document.getElementById("login_button").addEventListener("click", function() {  
var username_input =  document.getElementById("username_input").value;
var password_input =  document.getElementById("password_input").value;
//here I want to check whether the account is related to the "user" collection ot the "parking_owners" collection
if (username_input == "dandi" && password_input == 12345) {
    //if it is an owner then the redirect will be to "owner_logged_in.html"
    window.location.href = "client_logged_in_page.html";
}
else{
    //if it is an owner then the redirect will be to "owner_logged_in.html"
    window.location.href = "owner_logged_in.html"
}
})