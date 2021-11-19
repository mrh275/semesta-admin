$('.toggle-sidebar').on('click', () => {
    $('.sidebar').toggleClass('collapse');
    $('.sidebar').toggleClass('expand');
    $('.bottom-side').toggleClass('collapse');
    $('.main-container').toggleClass('expand');
})

// $('.klik').on('click', () => {
//     $('.dropdown-menu').toggleClass('hide');
// }, 500);

// Dropdown toggle
$('ul.nav-menu').on('click', '.dropdown', function() {
    $(this).find('.dropdown-menu').toggleClass('show', 300);
    $(this).find('.dropdown-menu').toggleClass('hide', 300);
    $(this).find('.dropdown-menu').prev().toggleClass('active-open');
})

$('.sidebar.collapse li.dropdown').hover( function() {
    $(this).find('.dropdown-menu').toggleClass('showMenu');
})

    // $('.nav-list').hover(function() {
    //     $(this).find('ul').css('opacity', '1');
    //     $(this).find('ul').css('transform', 'translateY(0%)');
    //     $(this).find('ul').css('visibility', 'visible');
    // }, function(e){
    //     $(this).find('ul').css('opacity', '0');
    //     $(this).find('ul').css('transform', 'translateY(-25%)');
    //     $(this).find('ul').css('visibility', 'hidden');
    // })
