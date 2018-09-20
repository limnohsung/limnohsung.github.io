$(function(){
  //기본설정
  var flag=true;
  var imageWidth=$('.worldwide .slide .slide-image').outerWidth();
  var imageLength=$('.worldwide .slide img').length;
 console.log(imageWidth,imageLength);
  play=setInterval(slideimg, 2000);
  var k=0;
  var arrow=$('.slide .next');
  function slideimg(){
    if (flag) {
      flag=false;
      if(arrow.hasClass('next')){
        k++;
      }else{
        k--;
      }
    }
      console.log(k);
    if(k<0){k=imageLength;}

    if(k>=imageLength){k=0;}

    $('.slide-image ul').animate({
      'margin-left':-(k*imageWidth)
    },500, function(){
      flag=true;
      console.log(flag);
    });
    $('.slide .pagination a').removeClass();
    $('.slide .pagination a').eq(k).addClass('on');
  }

  $('.arrow').click(function(){
    arrow=$(this);
    $('.slide .next span').text('다음');
    var index=$(this).index();
    $('li'),eq(index);
    k=index;
    console.log(index);
  })


//공지사항 버튼
  $('.allbox .news-press h2 a, .allbox .news-box .press ul li a').click(function(evt){
    evt.preventDefault();
  })


//이메일 뉴스래터 팝업창
  $('.allbox .email-box .wrap button').click(function(){
    $('#popup, #popup-bg').fadeIn('fast');
  })
  $('#popup button').click(function(){
    $('#popup, #popup-bg').fadeOut('fast');
  })
})



  /*$(window).resize(function(){
      var w=$(window).width();
      console.log(w);
      if(w<768){
        $('header .center .ultra-logo img').attr('src','images/UMF_Logo_width.png');
      }else {
        $('header .center .ultra-logo img').attr('src','images/UMF_Logo_height.png');
      }
    })
  })
*/
