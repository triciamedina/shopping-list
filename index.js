function testScript() {
    $("#js-shopping-list-form").submit( function(event){
        alert("Files are linked!");
        event.preventDefault();
    })
}

$(testScript)