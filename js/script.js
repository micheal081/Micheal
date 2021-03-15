$(document).ready(function() {
    $('.menu-toggle').on('click',function() {
      $('.nav-link').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
      });

      $(function(){
          $('.chart1').easyPieChart({
            size: 150,
            barColor: '#0c00ff',
            scaleColor: false,
            lineWidth: 7,
            trackColor: 'white',
            animate: 1800,
          });

          $('.chart2').easyPieChart({
            size: 150,
            barColor: '#ff7200',
            scaleColor: false,
            lineWidth: 7,
            trackColor: 'white',
            animate: 1800,
          });

          $('.chart3').easyPieChart({
            size: 150,
            barColor: '#00ffd8',
            scaleColor: false,
            lineWidth: 7,
            trackColor: 'white',
            animate: 1800,
          });

          $('.chart4').easyPieChart({
            size: 150,
            barColor: '#12ff00',
            scaleColor: false,
            lineWidth: 7,
            trackColor: 'white',
            animate: 1800,
          });
      });

      $('.counter').counterUp({
        delay: 10,
        time: 800
      });

      $('.test-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
      });

      $('.text-wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

});