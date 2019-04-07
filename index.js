$(function() {
   
    $("#js-shopping-list-form").submit( function(event){
        alert("Files are linked!");
        event.preventDefault();
    });

    $(".shopping-item-toggle").click( function(event){
        $(this)
        .closest("li").children(".shopping-item")
        .toggleClass("shopping-item__checked");
    });

    $(".shopping-item-delete").click( function(event){
        $(this)
        .closest("li")
        .remove();
    });

});