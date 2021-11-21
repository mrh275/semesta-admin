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

// $('.nav-list a').on('click', function(e) {
//     e.preventDefault();

//     let linkAttr = $(this).attr('href');
//     console.log(linkAttr);
//     if(linkAttr != null) {
//         Swal.fire({
//             title: "Memuat...",
//             timer: 1000,
//             width: "15rem",
//             didOpen: () => {
//                 Swal.showLoading()
//             }
//         }).then((result) => {
//             $('div.content').load(linkAttr);
//         })
//     }
// })



// $(document).ready(function(){

//     $(".nav-list a").click(function(e){
//         e.preventDefault();
//         let linkAttr = $(this).attr('href');
//         console.log(linkAttr);
//         $.ajax({
//             success: function(result){
//             if(linkAttr != null) {
//                 Swal.fire({
//                     title: "Memuat...",
//                     timer: 1000,
//                     width: "15rem",
//                     didOpen: () => {
//                         Swal.showLoading()
//                     }
//                 }).then((result) => {
//                     $('div.content').load(linkAttr);
//                 })
//             }
//           }});
//       });

      
// })

// Popular post vertical carousel
$("div.popular-post-body").slick({
    vertical: true,
    accessibility: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

//   Visitor chart
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Weekly Statistics',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
  };
  const myChart = new Chart(
    document.getElementById('visitor-chart'),
    config
  );
