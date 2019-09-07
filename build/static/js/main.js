$(document).ready(function () {
    svg4everybody({});
    $('.box-drop-down').on('click', function() {
    	$('.user-cab').toggleClass('user-cab_show');
    })

    $('.close-ico').on('click', function() {
    	$('.user-cab').removeClass('user-cab_show');
    })
});


