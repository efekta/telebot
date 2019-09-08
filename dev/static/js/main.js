$(document).ready(function () {
    svg4everybody({});
    $('.box-drop-down').on('click', function() {
    	$('.user-cab').toggleClass('user-cab_show');
    })

    $('.close-ico').on('click', function() {
    	$('.user-cab').removeClass('user-cab_show');
    })
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
