$(function(){
  //윈도우창의 높이
  var wh=$(window).height();
  $(window).on('scroll',function(){
    var scroll=$(window).scrollTop();
    var profile=$('#profile').offset().top;
    var resume=$('#resume').offset().top;
    var introduction=$('#introduction').offset().top;
    var portfolio=$('#portfolio').offset().top;
    if(scroll > profile){
      $('.nav-top').addClass('fixed');
    }else{
      $('.nav-top').removeClass('fixed');
    }
    for (var i = 0; i <= 4; i++) {
      if (scroll>=(i)*wh && scroll<=(i+1)*wh){
        index=i;
        $('.nav-top li a').removeClass();
        if(i!=0){
          $('.nav-top li a').eq(i-1).addClass('active');
        }
      }
    }
  })
  $(window).trigger('scroll');

  //버튼 클릭시 아래로가기
  $('#intropage button').click(function(){
    $('html, body').stop().animate({
      scrollTop:$('#profile').offset().top
    },500);
  })

  $('.nav-top li a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    articleIndex=$('.nav-top li a').index(this);
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top
    },500);
  })

  $('article').on('mousewheel',function(e,delta){
    if(delta>0){
      if(index>0){
        var prev=$(this).prev().offset().top;
        $('html').stop().animate({
          scrollTop:prev
        },500);
      }
    }else if(delta<0){
      if(index<4){
        var next=$(this).next().offset().top;
        $('html').stop().animate({
          scrollTop:next
        },500);
      }
    }
  })

  //팝업창 스크롤
   $('.scrollbar-inner').scrollbar();

 //팝업띄우기
  $('#portfolio .work ul li:nth-child(4) a').click(function(evt){
    evt.preventDefault();
    // var src=$('.popup .swiper-slide img').attr('src');
    var alt=$('.popup .work img').attr('alt');
    // console.log(alt);
    $('#portfolio .popup').fadeIn(500);
    //팝업 body의 높이 구하기
    $('.img-box').height($('.popup').height()-50);
    $('html, body').css('overflow','hidden');
  })

  var design=[
    ['Galaxys8','img/galaxys8.jpg'],
    ['BeatsX','img/beatsX.jpg'],
    ['Winix','img/winix.jpg'],
    ['disk.Dr','img/diskDr.jpg']
  ];

  $('.popup ul a').click(function(evt){
    evt.preventDefault();
    var index=$('.popup ul a').index(this);

    $('.popup-title span').text(design[index][0]);
    $('.popup-contents img').attr('src',design[index][1]);
  })

  $('.popup button').click(function(){
    $('.popup').fadeOut(500);
    $('html, body').removeAttr('style');
  })
})
//
