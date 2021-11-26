$('.toggle-sidebar').on('click', () => {
    $('.sidebar').toggleClass('collapse');
    $('.sidebar').toggleClass('expand');
    $('.sidebar').toggleClass('overflow-x-hidden');
    $('.sidebar').toggleClass('overflow-y-auto');
    $('.bottom-side').toggleClass('collapse');
    $('.main-container').toggleClass('expand');
    // $('.navbar').toggleClass('expand');
})

// Navbar sticky on scroll
// let lastScrollTop = 0;
// $(window).scroll(function(event){
//   let st = $(this).scrollTop();
//   if(st > lastScrollTop) {
//     // $('.navbar').removeClass('absolute');
//     $('.navbar').addClass('fixed');
//     $('.navbar').addClass('sticky');
//   } else {
//     $('.navbar').removeClass('sticky');
//     $('.navbar').removeClass('fixed');
//     // $('.navbar').addClass('absolute');
//   }
// });

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
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Pengunjung',
      backgroundColor: '#0099ff',
      borderColor: '#0099ff',
      data: [70, 30, 54, 70, 120, 210, 463],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugin: {
          title: {
            display: true,
            text: "Data pengunjung bulanan"
          },
        },
    }
  };
  const myChart = new Chart(
    document.getElementById('visitor-chart'),
    config
  );

  // List Post Datatable
  $(document).ready(function() {
    $('.list-posts').DataTable({
      "lengthMenu": [
        [5, 10, 25, 50, 100, -1],
        [5, 10, 25, 50, 100, "All"]
      ],
      "pagingType": "full_numbers",
      "language": {
        "paginate": {
          "previous": "<i class='bx bx-chevron-left'></i>",
          "next": "<i class='bx bx-chevron-right' ></i>"
        }
      }
    });
} );