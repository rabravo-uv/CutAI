document.addEventListener('DOMContentLoaded', function() {
    $("#m100, #m101, #m102, #m103, #m104, #m105").click(function(){
    $("#collapseComunicado, #collapseCircular, #collapseDestruccion").collapse('hide');
    $("#m100, #m101, #m102, #m103, #m104, #m105").hide();
    $("#m000").show();
  });
})