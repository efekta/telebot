$(document).ready(function () {

    svg4everybody({});

    // 1 символ - /   console.log(window.location.pathname.slice(1));
    console.log(window.location.pathname.slice(1));
    $('.navbar-menu__item > a[href="' + window.location.pathname.slice(1) + '"]').parent().addClass('active');
    $('.navbar-menu__link > a[href="' + window.location.pathname.slice(1) + '"]').parent().parent().addClass('active');
    $('.navbar-submenu > a[href="' + window.location.pathname.slice(1) + '"]').addClass('active');

    /* User Form*/
    $('.box-drop-down').on('click', function() {
    	$('.form-wrap__user-cab').toggleClass('show');
    })

    $('.close-ico').on('click', function() {
    	$('.form-wrap__user-cab').addClass('hide');
    })

    $('.warning-wrapp__link').on('click', function(event) {
      event.preventDefault();
      $('.wrap__user-cab').hide();
      $('.pass-recovery-wrapp').show();
    })

    $('.pass-recovery__link').on('click', function(event) {
      event.preventDefault();
      $('.wrap__user-cab').show();
      $('.pass-recovery-wrapp').hide();
    })

    $('.user-cab__link-reg').on('click', function() {
      event.preventDefault(); 
      $('.wrap__user-cab').hide();
      $('.user-cab-regisrtation').show();
    })
    /* Показать еще */

    $('.more a').on('click', function(){
      $('.canal_hide').toggleClass('canal_show');
    })
    $('.more a').click(function(){
      if (!$(this).data('status')) {
        $(this).html('Скрыть все');
        $(this).data('status', true);
      }
      else {
       $(this).html('Показать все');
        $(this).data('status', false);
      }
    });

    (function($) {
      $(function() {
       
        $('.tabs__caption').on('click', 'li:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
       
      });
      })(jQuery);

    (function($) {
      $(function() {
       
        $('.tabs__caption2').on('click', 'li:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs2').find('.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
        });
       
      });
      })(jQuery);

    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $(this).addClass('current')
        .siblings().removeClass('current');
      $("#"+tab_id).addClass('current')
        .siblings().removeClass('current');
    })


    if($('.select2').length) {
      $('.select2').select2();
    }
    //submenu 

    if($('.navbar-submenu__title').length) {
      if ( window.innerWidth < 1171 || window.screen.width < 1171) {
        $('.navbar-submenu__title').on('click', function() {
          $this = this;
            if ($(this).parent().parent().hasClass('open')) {
              $(".navbar-submenu--mob").html("");
              $(this).parent().parent().removeClass('open');
            } else {
              $(".navbar-submenu--mob").html("");
              $(this).parent().next().clone().appendTo(".navbar-submenu--mob");
              $(this).parent().parent().toggleClass('open').siblings().removeClass('open');

            }
           




        });
      } else {
        $('.navbar-submenu__title').on('click', function(e) {
          $this = this;
          $(this).parent().parent().toggleClass('open').siblings().removeClass('open');
        });
      }


    }
    //
    if($('.amount').length) {
      var handle = $( "#custom-handle" );
      $( ".price-slider" ).slider({
        orientation: "horizontal",
        range: "min",
        min: 500,
        max: 500000,
        value: 250000,
        create: function() {
          handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
          handle.text( ui.value );
          $this = this;
          $($(this).parent().next().find(".amount")).val(ui.value);
        }
      });
    }
    if($('.amount-gift').length) {
      var handle = $( "#custom-handle" );
      $( ".price-slider" ).slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 90,
        value: 7,
        create: function() {
          handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
          handle.text( ui.value );
          $this = this;
          $($(this).parent().next().find(".amount-gift")).val(ui.value);
        }
      });
    }    


    $('.price-info').on('click', function(e) {
      $this = this;
      if ($('.price-info').has(e.target).length === 0) {
        $('.price-info').removeClass('active');
        $(this).toggleClass('active');
      } 
    });

    $('.price-info .close-ico').on('click', function() {
      $this = this;
      $(this).parent().parent().parent().removeClass('active');
    });

    $('.button-add').on('click', function(e) {
      $this = this;
      if ($('.tracking__add').has(e.target).length === 0) {
        $('.tracking__add').removeClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('modal-open');
      } 
    });

    $('.tracking__add .close-ico').on('click', function() {
      $this = this;
      $(this).parent().parent().parent().parent().removeClass('active');
      $('body').removeClass('modal-open');
    });   
    $('.gifts__more').on('click', function() {
      $this = this;
      $(this).parent().parent().parent().parent().addClass('open').siblings().removeClass('open');
    });
    $('.gifts__about__close').on('click', function() {
      $this = this;
      $(this).parent().parent().parent().parent().removeClass('open');
    });    
    $( ".datepicker" ).datepicker();
    $('input[name="daterangepicker"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        format: 'DD.M.YYYY'
      }
    });
    $('input[name="daterangepicker"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD.M.YYYY') + ' - ' + picker.endDate.format('DD.M.YYYY'));
    });

    $(".fancybox").fancybox();

    // Fires whenever a player has finished loading
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // Fires when the player's state changes.
    function onPlayerStateChange(event) {
      // Go to the next video after the current one is finished playing
      if (event.data === 0) {
          $.fancybox.next();
      }
    }

    // The API will call this function when the page has finished downloading the JavaScript for the player API
    function onYouTubePlayerAPIReady() {
      
      // Initialise the fancyBox after the DOM is loaded

          $(".fancybox")
              .attr('rel', 'gallery')
              .fancybox({
                  openEffect  : 'none',
                  closeEffect : 'none',
                  nextEffect  : 'none',
                  prevEffect  : 'none',
                  padding     : 0,
                  margin      : 50,
                  beforeShow  : function() {
                      // Find the iframe ID
                      var id = $.fancybox.inner.find('iframe').attr('id');
                      
                      // Create video player object and add event listeners
                      var player = new YT.Player(id, {
                          events: {
                              'onReady': onPlayerReady,
                              'onStateChange': onPlayerStateChange
                          }
                      });
                  }
              });

      
    }
    // if ($('.audience__table').length) {
    //   var $table = $('.audience__table');
    //   var $cols = $table.find('col');

    //   $table.on('mouseenter mouseleave', 'th,td', function() {
    //       $cols.eq(this.cellIndex).toggleClass('table-hover');
    //   });
    // }
  /*========================
     fancy
    =========================*/
  $('.fancybox').fancybox({ 
    animationEffect : 'fade'
  }).attr('data-fancybox');
  // $(".fancybox").fancybox();
});









// https://codyshop.ru/litechart-library-for-chart-creation/
// document.addEventListener("DOMContentLoaded", function(){
//   // Create liteChart.js Object
//   let d = new liteChart("chart", {
//     axisX: {
//       show: true,
//       color: "#e9edf1",
//       width: 2,
//       value: "₽",
//     },
//     axisY: {
//       show: true,
//       color: "#e9edf1",
//       width: 2,
//       value: "",
//       minValue: 0,
//       maxValue: 0,
//     },
//     fill: null,
//     gridX: {
//       show: true,
//       interval: 170,
//       fill: 1,
//       label: {
//         show: true
//       },
//       stroke:"#e9edf1",
//       width:2,
//       dasharray:"0 10.04",
//       linecap:"round",
//     },
//     gridY: {
//       show: false,
//     },
//     line: {
//       width: 2,
//       style: "straight",
//       shadow: true,
//     },
//     point: {
//       show: true,
//       radius: 4,
//       strokeWidth: 3,
//       stroke: "#ffffff", // null or color by hex/rgba
//     }
//   });

//   // Set labels
//   d.setLabels(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]);

//   // Set legends and values
//   d.addLegend({"stroke": "#FFC107", "fill": "#fff", "values": [100, 200, 450, 400, -120, 300, 700, 860, 601, 705, 604, 803, 150, 240, 230, 300, 200, 150, 270, 200,100, 200, 450, 400, 240, 230, 300, 200, 180, 270, 134]});
//   d.addLegend({"stroke": "#9E9E9E", "fill": "#fff", "values": [200, 350, 240, 480, 150, 240, 230, 300, 200, 150, 270, 200,100, 200, 450, -50, -220, -300, 400, 860, 601, 705, 604, 803,200, 350, 240, 480, 150,53,423]});

//   // Inject chart into DOM object
//   let div = document.getElementById("publications-chart");
//   d.inject(div);

//   // Draw
//   d.draw();
// });
