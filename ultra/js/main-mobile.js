$(function(){
  $(window).resize(function(){
    var w=$(window).width();
    console.log(w);
    if(w<768){
      $('header .center .ultra-logo img').attr('src','images/UMF_Logo_width.png');
    }else {
      $('header .center .ultra-logo img').attr('src','images/UMF_Logo_height.png');
    }
  })

  //토글버튼
  $('#btn-menu').click(function(){
    $('nav').toggleClass('open');
    $(this).find('i').toggleClass('fa-bars fa-times');
  })

  //네비게이션 메뉴
  $('.gnb > li > a').click(function(e){
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
  })

  //lineups



  //Swiper
  var swiper = new Swiper('.lineups .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      slideShadows : true,
      modifier: 1,
    },
      navigation: {
      nextEl: '.lineups .swiper-button-next',
      prevEl: '.lineups .swiper-button-prev',
    },
    pagination: {
      el: '.lineups .swiper-pagination',
    },
  });
  var swiper = new Swiper('.worldwide .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
