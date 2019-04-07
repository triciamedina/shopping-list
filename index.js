$(function() {
    
    $("ul").on("click", ".shopping-item-toggle", function(event){
        $(this)
        .closest("li").children(".shopping-item")
        .toggleClass("shopping-item__checked");
    });
   
    $("ul").on("click", ".shopping-item-delete", function(event){
        $(this)
        .closest("li")
        .remove();
    });

    $("#js-shopping-list-form").submit( function(event){
        
        let entry = $("#shopping-list-entry").val();
       
        let newItem = 
        `<span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
        </div>`;
        
        $(".shopping-list").prepend(`<li>${newItem}</li>`);

        $(this).find("input[type=text], textarea").val("");

        event.preventDefault();
    });

});