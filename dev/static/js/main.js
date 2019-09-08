$(document).ready(function () {
    svg4everybody({});
    $('.box-drop-down').on('click', function() {
    	$('.head-wrap__user-cab').toggleClass('head-wrap__user-cab_show');
    })

    $('.close-ico').on('click', function() {
    	$('.head-wrap__user-cab').removeClass('head-wrap__user-cab_show');
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

});


$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $(this).addClass('current')
      .siblings().removeClass('current');
    $("#"+tab_id).addClass('current')
      .siblings().removeClass('current');
  })

})
