document.addEventListener('DOMContentLoaded', function() {
    $("#m100, #m101, #m102, #m103, #m104, #m105").click(function(){
    $("#collapseComunicado, #collapseCircular, #collapseDestruccion").collapse('hide');
    $("#m100, #m101, #m102, #m103, #m104, #m105").hide();
    $("#m0").show();
  });
  $("#m1").click(function(){
        $("#m0").hide(); 
        $("#collapseComunicado").collapse('hide');
        $("#collapseDestruccion").collapse('hide');
        $("#m100, #m101").show();
  });  
  $("#m2").click(function(){
        $("#m0").hide(); 
        $("#collapseCircular").collapse('hide');
        $("#collapseDestruccion").collapse('hide');
        $("#m102, #m103").show();
  });
  $("#m3").click(function(){
        $("#m0").hide(); 
        $("#collapseCircular").collapse('hide');   
        $("#collapseComunicado").collapse('hide');   
        $("#m104, #m105").show();
  });
})