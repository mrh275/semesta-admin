$('.toggle-sidebar').on('click', () => {
    $('.sidebar').toggleClass('collapse');
    $('.sidebar').toggleClass('expand');
    $('.sidebar').toggleClass('overflow-x-hidden');
    $('.sidebar').toggleClass('overflow-y-auto');
    $('.bottom-side').toggleClass('collapse');
    $('.main-container').toggleClass('expand');
})

// Dropdown toggle
$('ul.nav-menu').on('click', '.dropdown', function() {
    $(this).find('.dropdown-menu').toggleClass('show', 300);
    $(this).find('.dropdown-menu').toggleClass('hide', 300);
    $(this).find('.dropdown-menu').prev().toggleClass('active-open');
})

$('.sidebar.collapse li.dropdown').hover( function() {
    $(this).find('.dropdown-menu').toggleClass('showMenu');
})

$('.btn-notif').on('click', function() {
    $(this).parent().find('.nav-dropdown').toggleClass('showNavDropdown')
})

$('.btn-user').on('click', function() {
    $(this).parent().find('.nav-dropdown').toggleClass('showNavDropdown')
})