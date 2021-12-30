//need to work on how to retrieve the data from the first line of the date and time inputs
//at the end of the process need to redirect to the firs page



var counter = 0;

document.getElementById("yes_button").addEventListener("click", function() {
    var orders = document.getElementById("orders");
    var div = document.createElement("div");
    var date_label = document.createElement("label");
    date_label.innerHTML = " Date: ";
    var secondary_counter = 0;
    var date_input = document.createElement("input");
    date_input.type = "date";
    date_input.id = counter.toString()+"."+secondary_counter.toString();
    secondary_counter++;
    var from_label = document.createElement("label");
    from_label.innerHTML = " From: ";
    var from_input = document.createElement("input");
    from_input.type = "time";
    from_input.id = counter.toString()+"."+secondary_counter.toString();
    secondary_counter++;
    var to_label = document.createElement("label");
    to_label.innerHTML = " To: ";
    var to_input = document.createElement("input");
    to_input.type = "time";
    to_input.id = counter.toString()+"."+secondary_counter.toString();

    div.innerHTML = date_label.outerHTML + date_input.outerHTML + from_label.outerHTML + from_input.outerHTML + to_label.outerHTML + to_input.outerHTML;
    orders.appendChild(div);
    counter++;
})



document.getElementById("no_button").addEventListener("click", function(){
    
    var orders_confirmation = document.getElementById("confirmation");
    var date = document.getElementById("date");
    var from = document.getElementById("from");
    var to = document.getElementById("to");

    var div = document.createElement("div");
    div.innerHTML += " Date: "+date.value+" From: "+from.value+" To: "+to.value+"</br>";
    for (let index = 0; index < counter; index++) {
        for (let secondary_index = 0; secondary_index < 3; secondary_index++) {
            if(secondary_index == 0){
                var date_input = document.getElementById(index.toString()+"."+secondary_index.toString());
                var date_label = document.createElement("label");
                date_label.innerHTML = " Date: ";
                div.innerHTML += date_label.outerHTML + date_input.value;
            }
            else if(secondary_index == 1){
                var from_input = document.getElementById(index.toString()+"."+secondary_index.toString());
                var from_label = document.createElement("label");
                from_label.innerHTML = " From: ";
                div.innerHTML += from_label.outerHTML + from_input.value;
            }
            else{
                var to_input = document.getElementById(index.toString()+"."+secondary_index.toString());
                var to_label = document.createElement("label");
                to_label.innerHTML = " To: ";
                var br = document.createElement("br");
                div.innerHTML += to_label.outerHTML + to_input.value + br.outerHTML;
            }  
        }  
        orders_confirmation.innerHTML = div.outerHTML
    }
    counter = 0;
    var orders = document.getElementById("orders");
    orders.innerHTML = "";
    var question = document.getElementById("question");
    question.innerHTML = "Please review the opening dates and hours and confirm";
    var second_question = document.getElementById("second_question");
    second_question.innerHTML = "";
    var confirm_button = document.createElement("button");
    confirm_button.innerText = "Confirm";
    confirm_button.addEventListener("click", function(){
        var message = document.getElementById("main");
        message.innerHTML = "";
        var paragraph = document.createElement("b2");
        paragraph.innerText = "Thank you for working with us :)";
        message.innerHTML = paragraph.outerHTML;
        setTimeout(function () {
            window.location.href = "home_page.html"; //will redirect to your blog page (an ex: blog.html)
         }, 3000);
    })
    var cancel_button = document.createElement("button");
    cancel_button.innerText = "Cancel";
    var buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    buttons.appendChild(confirm_button);
    buttons.appendChild(cancel_button);
})