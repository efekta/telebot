$(document).ready(function () {

    svg4everybody({});

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
