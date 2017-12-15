$("document").ready(function(){



// line out li after click
$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
    
});

// click span and delete
$("ul").on("click","span", function (e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

// enter text in input and add to list
$("input[type='text']").keypress(function(e){
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span> " + todoText + "</li>")
    }
});




});