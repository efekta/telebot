$(document).ready(function () {
    svg4everybody({});
    $('.box-drop-down').on('click', function() {
    	$('.user-cab').toggleClass('user-cab_show');
    })
    // $('.box-drop-down').on('click', function() {
    // 	$($(this)).toggleClass('box-drop-down_up');
    // })
    $('.close-ico').on('click', function() {
    	$('.user-cab').removeClass('user-cab_show');
    	// if ($(body).hasClass('user-cab_show')) {
    	// 	$('.box-drop-down').removeClass('box-drop-down_up');
    	// };
    })
});


