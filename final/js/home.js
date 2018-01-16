$(document).ready(function(){
  $(".logbox").hide();
  $("#hide").click(function(){
    $("#hide").hide();
    $(".logbox").fadeIn( "slow" );
    $(".background").css({
                            'opacity': '0.95',
                        });
                      });

  $(".box img").hide();
  $(".a").mouseover(function(){
    $(".one").show();
    $(".a p").hide();
                      });
  $(".a").mouseout(function(){
    $(".one").fadeOut(800);
    $(".a p").fadeIn(800);
                      });
  $(".c").mouseover(function(){
    $(".two").show();
    $(".c p").hide();
                      });
  $(".c").mouseout(function(){
    $(".two").fadeOut(800);
    $(".c p").fadeIn(800);
                      });
  $(".d").mouseover(function(){
    $(".three").show();
    $(".d p").hide();
                      });
  $(".d").mouseout(function(){
    $(".three").fadeOut(800);
    $(".d p").fadeIn(800);
                      });
  $(".h").mouseover(function(){
    $(".four").show();
    $(".h p").hide();
                      });
  $(".h").mouseout(function(){
    $(".four").fadeOut(800);
    $(".h p").fadeIn(800);
                      });
  $(".f").mouseover(function(){
    $(".five").show();
    $(".f p").hide();
                      });
  $(".f").mouseout(function(){
    $(".five").fadeOut(800);
    $(".f p").fadeIn(800);
                      });
  $(".r").mouseover(function(){
    $(".six").show();
    $(".r p").hide();
                      });
  $(".r").mouseout(function(){
    $(".six").fadeOut(800);
    $(".r p").fadeIn(800);
                      });

                      var offsetTop = $('#rates').offset().top;
                    	$(window).scroll(function() {
                      var height = $(window).height();
                      if($(window).scrollTop()+height > offsetTop) {
                        jQuery('.ratebar').each(function(){
                          jQuery(this).find('.ratebar-bar').animate({
                            width:jQuery(this).attr('data-percent')
                          },2000);
                        });
                      }
                    });
    $(".sidebar a").hide();
    $( ".sidebtn" ).click(function(){
      $(".sidebar a").show();
      $( ".all" ).toggleClass("whole")
      $( ".sidebar" ).toggleClass("active")
      $( ".sidebtn" ).toggleClass("toggle")
    });


});
