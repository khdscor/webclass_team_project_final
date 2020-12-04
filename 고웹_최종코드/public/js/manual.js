function myFunction(){

  aa = jQuery('a');
  
 for(var i=0; i<3; i++){
    $(aa[i]).hover(function(){
     $(this).css("background-color", "rgba(13, 240, 62, 0.918)");
    },
    function(){
    $(this).css("background-color", "rgba(221, 241, 173, 0.918)");
    });
    $(aa[i]).css("position", "absolute ");
    $(aa[i]).css("width"," 200px ");
    $(aa[i]).css("height"," 63px ");
    $(aa[i]).css("border","4px solid rgba(13, 240, 62, 0.918)");
    $(aa[i]).css("text-align", "center");
    $(aa[i]).css("padding-top", "12px");
    $(aa[i]).css("border-radius", "30px");
    $(aa[i]).css("color", "#007bff");
    $(aa[i]).css("text-decoration", "none");
    $(aa[i]).css("font-size", "30px");
    $(aa[i]).css("font-weight", "700");
  }

  $(aa[0]).offset({
    left : 260,
    top : 30
});
$(aa[1]).offset({
    left : 510,
    top : 30
});
$(aa[2]).offset({
    left : 760,
    top : 30
});
}


