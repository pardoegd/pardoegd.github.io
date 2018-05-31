      $("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

      $("ul li").click(function() {
            $("ul ul").slideDown();
            $(this).find('ul').slideToggle();
      });

      $(window).resize(function() {
            if($(window).width() > 768) {s
                  $("ul").removeAttr('style');
            }
      });