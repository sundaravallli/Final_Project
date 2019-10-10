
$(document).ready(function() {
    $("form").submit(function() {
        var number_chosen=[ ];
        var size = parseInt($("input#user").val());
        for (var index = 1; index <=size; index += 1) {
    if (index % 3===0) {
        document.write("ping");
    }
    else if(index % 5===0){
        document.write("pong");
    }
    else
    {
    document.write(index);
     }
    }
  
});
});
