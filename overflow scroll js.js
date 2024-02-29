<script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"></script>
$(window).on("load",function(){
    $(".slider__content").mCustomScrollbar({
      theme:"light-thick"
    });
    $(".section--slider").css("visibility", "visible");
  });