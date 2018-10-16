function buttonDisappear() {
    var reminder_button = document.getElementById("reminder");
    reminder_button.style.display = 'none';
    
    var title_only = document.getElementById("title_only");
    title_only.style.display = 'none';
    
    var blank_email = document.getElementById("blank_email");
    blank_email.style.display = 'none';
}


$(document).ready(function () {
    $("#reminder").click(function () {
        
        buttonDisappear();
    
        var $to_label = $("<label>").text("To: ");
        var $to_textbox = $('<input type="text">').attr({id: 'email_address'});       
        $to_textbox.appendTo($to_label);
        $(".email_area").append($to_label);
        
        var $title_label = $("<label>").text("Title: ");
        var $title_textbox = $('<input type="text">').attr({id: 'title_content'});       
        $title_textbox.appendTo($title_label);
        $(".email_area").append($title_label);
        
        var $content_label = $("<label>").text("Content: ");
        var $email_textarea = $('<input type="text">').attr({id: 'email_textarea'});       
        $email_textarea.appendTo($content_label);
        $(".email_area").append($content_label);
        
        var $submit = $("<button>").text("Submit");
        $submit.attr({id: 'submit_button'});
        
        $(".email_area").append($submit);
        /* check if that is a valid email address */
        
        
        
        

        /* var title_label = 
         
         var content_label = 
         var submit_button = */
    });
    


});



/*
$("#title_only").click( function() {
    
    
});

$("#blank_email").click( function() {
    
    
}); */
