/* global $ */
var that = this;
var Aarray = ["Junta de Gobierno",'Rectoria', 'Defensoría de los Derechos Universitarios', 'Secretaría Académica', 'Secretaría de Administración y Finanzas', 'Secretaría de Desarrollo Institucional'];
var pre='<i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;';
var nex='&nbsp;<i class="next fa fa-arrow-right" aria-hidden="true"></i>';
var i = 0;

$(function(){
     $("#JG, #Rec, #DDU, #SA, #SAF, #SDI").hide();
     $("#btn-group").hide();
     i = 0;
});

 $(document).ready(function(){
     
     $("button.home").click(function(){
	 $("#JG, #Rec, #DDU, #SA, #SAF, #SDI").hide();
         $(".entry-title").toggle();
         $("#inicio").toggle();
         $("#btn-group").hide();
         window.location.href = window.location.href;
         $("html, body").animate({ scrollTop: 0 }, 1000);
         return false;
     });

     $("button.previous").click(function(){
         $("button.next").show();
         $("#JG, #Rec, #DDU, #SA, #SAF, #SDI").hide();
         switch(i){
             case 1:
                 i = 0; //"Junta de Gobierno",
                 $("#JG").show();                            
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").hide();
                 $("button.next").html(Aarray[1] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 2:
                 i = 1; //'Rectoria',
                 $("#Rec").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[0]);
                 $("button.next").html(Aarray[2] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 3:
                 i = 2; 
                 $("#DDU").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[1]);
                 $("button.next").html(Aarray[3] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 4:
                 i = 3;
                 $("#SA").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[2]);
                 $("button.next").html(Aarray[4] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 5:
                 i = 4; 
                 $("#SAF").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[3]);
                 $("button.next").html(Aarray[5] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
         };
     });

     $("button.next").click(function(){
         $("#JG, #Rec, #DDU, #SA, #SAF, #SDI").hide();
         switch(i){
             case 0:
                 i = 1;
                 $("#Rec").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").show();
                 $("button.previous").html(pre + Aarray[0]);
                 $("button.next").html(Aarray[2] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 1:
                 i = 2;
                 $("#DDU").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[1]);
                 $("button.next").html(Aarray[3] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);    
                 return false;
             case 2:
                 i = 3;
                 $("#SA").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[2]);
                 $("button.next").html(Aarray[4] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 3:
                 i = 4;
                 $("#SAF").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[3]);
                 $("button.next").html(Aarray[5] + nex);
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
             case 4:
                 i = 5;
                 $("#SDI").show();
                 $("#inicio").hide();
                 $(".entry-title").hide();
                 $("button.previous").html(pre + Aarray[4]);
                 $("button.next").hide();
                 $("html, body").animate({ scrollTop: 0 }, 1000);
                 return false;
         };
     });

     $("#jg").click(function(){
         i = 0;
         $("#JG").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").hide();
         $("button.next").html(Aarray[1] + nex);
         return false;
     });               

     $("#rec").click(function(){
         i = 1;
         $("#Rec").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").show();                    
         $("button.previous").html(pre + Aarray[0]);
         $("button.next").html(Aarray[2] + nex);
         return false;
     });

     $("#ddu_").click(function(){
         i = 2;
         $("#DDU").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").show();    
         $("button.previous").html(pre + Aarray[1]);
         $("button.next").html(Aarray[3] + nex);
         return false;
     });

     $("#sa_").click(function(){
         i = 3;
         $("#SA").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").show();    
         $("button.previous").html(pre + Aarray[2]);
         $("button.next").html(Aarray[4] + nex);
         return false;
     });

     $("#saf_").click(function(){
         i = 4;
         $("#SAF").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").show();    
         $("button.previous").html(pre + Aarray[3]);
         $("button.next").html(Aarray[5] + nex);
         return false;
     });

     $("#sdi_").click(function(){
         i = 5;
         $("#SDI").show();
         $("#inicio").hide();
         $(".entry-title").hide();
         $("#btn-group").show();
         $("button.previous").show();    
         $("button.previous").html(pre + Aarray[4]);
         $("button.next").hide();
         return false;
     });


 });