$("document").ready(function(){



// line out li after click
$("li").click(function () {
    $(this).toggleClass("done");
    console.log("connected");
});

// click span and delete
$("span").click(function (e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

});