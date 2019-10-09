
$(document).ready(function() {
    $("form").submit(function() {
        var number_chosen=[1,2,3,4,5,6,7,8];
        for (var index = 1; index <=number_chosen.length; index += 1) {
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
