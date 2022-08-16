// navbar/////
function openNav(){
  document.getElementById("myNav").style.width="100%";
}

function closeNav(){
  document.getElementById("myNav").style.width="0%";
}


// const hamburger =document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links");
// hamburger.addEventListener('click',()=>{
//   navLinks.classList.toggle("open");
//   links.foreach(link =>{link.classList.toggle("fade");
//   });
//   hamburger.classList.toggle("toggle");
// });



/////// slider /////
(function ($) {
    $(function () {
  
      var agSlideFlickity = $('.js-flickity-slider').flickity({
        autoPlay: 2000,
        imagesLoaded: true,
        percentPosition: false,
        prevNextButtons: false,
        initialIndex: 5,
        pageDots: false,
        groupCells: 1
      });
  
      var agCard = agSlideFlickity.find('.js-carousel-cell .js-card-bg'),
        agTransform = 'string' == typeof document.documentElement.style.transform ? 'transform' : 'WebkitTransform',
        agSlide = agSlideFlickity.data('flickity');
  
      agSlideFlickity.on('scroll.flickity', function () {
        agSlide.slides.forEach(function (t, e) {
          var n = agCard[e],
            i = -1 * (t.target + agSlide.x) / 3;
  
          n.style[agTransform] = 'translateX(' + i + 'px)';
        });
      });
  
      agSlideFlickity.on('dragStart.flickity', function (t, e) {
        document.ontouchmove = function (t) {
          t.preventDefault();
        }
      });
  
      agSlideFlickity.on('dragEnd.flickity', function (t, e) {
        document.ontouchmove = function (t) {
          return true;
        }
      });
  
    });
  })(jQuery);
  