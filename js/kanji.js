 const quizLenght = quiz.length;//クイズの数
 const $Qanime = document.getElementById('Qanime');
 let quiznow = 0;
 let life = 3;

/////////////blackout/////////////////
function blackout(){
  $.when(
  $('.black').show().animate({'opacity':1},500)
  ).done(function(){
  $('#msg').effect('drop',{direction:'down',distance:'21px' ,mode:'show'},800)
  });
  setTimeout(function(){
  $.when(
    $('#msg').effect('puff',{mode:'hide',percent:160},400)).done(function(){
  $('.black').animate({'opacity':0},550,
  function(){ $('.black').hide();})
    });
},2400);}
///////////////問題書き換え////////////////////
function quizset(){
   if(quiznow == 9){
     $('.Qtext').css('color','#FF2428');
   }
  $Qanime.innerHTML = quiz[quiznow].question;
  $Qanime.style.opacity = 0;
}
///////////スライムセット/////////////////////
function Slaset(){
   $('.Soti-link').addClass("Soti");
  $('.Soti').on('animationend', function (){
     $('.Qanime').addClass("scale-up");
     $('.Aanime').addClass("slide");
     $('.Sbody').addClass("purun");
     $('.Shidari').addClass("haneL");
     $('.Smigi').addClass("haneR");
  });
}
//////////////スライム退場///////////////
function Slaout(){
  $('.Soti-link').removeClass("Soti");
  $('.Qanime').removeClass("scale-up");
  $('.Aanime').removeClass("slide");
  $('.Sbody').removeClass("purun");
  $('.Shidari').removeClass("haneL");
  $('.Smigi').removeClass("haneR");
  $('.Syarare').children('img').show();
$('.Syarare').children('img').addClass("yarare");
  setTimeout(function(){
  $('#Syarare').effect('drop',{direction:'down',mode:'hide'},550);},400);
  }
  /////////////ヤドカリセット/////////////////
 function Yset(){
  $('.Yin-link').addClass("Yin");
  $('.Yin').on('animationend', function (){
    $('.Qanime').addClass("scale-up");
    $('.Aanime').addClass("slide");
    $('.Ybody').addClass("Yengine");
    $('.Yjump-link').addClass("Yjump");
 });
 }
 //////////////ヤドカリ退場///////////////
 function Yout(){
   $('.Yin-link').removeClass("Yin");
   $('.Qanime').removeClass("scale-up");
   $('.Aanime').removeClass("slide");
   $('.Ybody').removeClass("Yengine");
   $('.Yjump-link').removeClass("Yjump");
   $('.Yyarare').children('img').show();
 $('.Yyarare').children('img').addClass("yarare");
   setTimeout(function(){
   $('#Yyarare').effect('drop',{direction:'down',mode:'hide'},550);},400);
   }
/////////////イヌセット/////////////////
function Dset(){
   $('.Din-link').addClass("Din");
   $('.Din').on('animationend', function (){
     $('.Qanime').addClass("scale-up");
     $('.Aanime').addClass("slide");
     $('.Dbody-link').addClass("Dbody");
     $('.Dtate-link').addClass("Dtate");
     $('.Dyari-link').addClass("Dyari");
  });
}
//////////////イヌ退場///////////////
function Dout(){
  $('.Din-link').removeClass("Din");
  $('.Qanime').removeClass("scale-up");
  $('.Aanime').removeClass("slide");
  $('.Dbody-link').removeClass("Dbody");
  $('.Dtate-link').removeClass(".Dtate");
  $('.Dyari-link').removeClass(".Dyari");
  $('.Dyarare').children('img').show();
$('.Dyarare').children('img').addClass("yarare");
  setTimeout(function(){
  $('#Dyarare').effect('drop',{direction:'down',mode:'hide'},550);},400);
  }
  /////////////女神セット/////////////////
function Ain(){
$('#blackF').show();
  $('#akaIn-link').addClass("akaIn");
  $('.akaIn').on('animationend', function (){
    $('#akafuwa-link').addClass("akafuwa");
    });
  $('#aoIn-link').addClass("aoIn");
  $('.aoIn').on('animationend', function (){
    $('#aofuwa-link').addClass("aofuwa");
    });
    Ain2();
}
function Ain2(){
setTimeout(function(){
  $.when(
  $('#efect').fadeIn(150)
).done(function(){
    $('#efect').effect('puff',{mode:'hide',percent:200},490);
    $('#blackF').fadeOut(600);
  });
},2510);

  $('#Ain-link').addClass("Ain");
  $('.Ain').on('animationend', function (){
     $('.Qanime').addClass("scale-up");
     $('.Aanime').addClass("slide");
     $('#Abody-link').addClass("Abody");
     $('#Afuwa-link').addClass("Afuwa");
     $('#Aasi-link').addClass("Aasi");
     $('#Rwing-link').addClass("Rwing");
     $('#Lwing-link').addClass("Lwing");
     $('#Rhane-link').addClass("Rhane");
     $('#Lhane-link').addClass("Lhane");
     $('#breath-link').addClass("breath");
     $('#Aken-link').addClass("Aken");
     $('#Amigi-link').addClass("migi");
  });
}
//////////////女神退場///////////////
function Aout(){
    $('#Ain-link').removeClass("Ain");
    $('.Qanime').removeClass("scale-up");
    $('.Aanime').removeClass("slide");
    $('#Abody-link').removeClass("Abody");
    $('#akaIn-link').removeClass("akaIn");
    $('#aoIn-link').removeClass("aoIn");
    $('.Ayarare').children('img').show();
  $('.Ayarare').children('img').addClass("yarare");
    setTimeout(function(){
    $('#Ayarare').effect('drop',{direction:'down',mode:'hide'},550);},900);
    }
///////////////不正解✖処理/////////////////////
function batu(){
    $('.black').addClass("red");
    $('.batu-link').addClass("batu");
  setTimeout(function(){
    $('#msg').attr('src','images/over.png');
    $('.batu-link').removeClass("batu");
    $('.black').show().animate({'opacity':.2},300, function(){
    $('.black').animate({'opacity':0},750, function(){
      $('.black').hide();
      $('.black').removeClass("red");});
      });
   },800);

  setTimeout(function(){
    $('#life' + life).attr('src','images/Noheart.png');
    life--;
  },1100);
  //game over//
  setTimeout(function(){
  if(life == 0){
  $('.over').show().animate({'opacity':.7},600);
  $('#msg').effect('drop',{direction:'down',distance:'21px' ,mode:'show'},900);
  $('.Qtext').fadeOut(400); $('.area').fadeOut(400);
              }
  },1800);
  }
///////////正誤判定/////////////////////////
$('#go').click(function(){
  if(quiz[quiznow].answer == $('#yomi').val()){

   if(quiznow < 3){
     Slaout();
   }else if(quiznow >= 3 && quiznow < 6){
     Yout();
   }else if(quiznow >= 6 && quiznow < 9){
     Dout();
   }else{
     Aout();
   }
   setTimeout(function(){
     if(quiznow != 9){
       maru();
     }else{
       //最終問題のみ//
        setTimeout(function(){
       $('#num10').addClass("add");
       $('#ed').effect('puff',{mode:'show',percent:170},600);
     },900);
     }
  },1000);

  }else{
     batu();
  }
})
////////////////判定後画面表示/////////////////
function maru(){
  $('.che-wrap').children('img').effect('blind',
  {mode:'show'},400);
  $('.Qtext').css('z-index','-1');
  $('.next').effect('drop',{direction:'down',distance:'20px' ,mode:'show'},400);
  quiznow++;
  $('#num' + quiznow).addClass("add");
}
//////////////判定後リセット処理///////////////
function reset(){
  $('.che-wrap').children('img').effect('blind',
  {mode:'hide'},400);
  $('.Qtext').css('z-index','');
  $('.next').effect('drop',{direction:'down',distance:'20px' ,mode:'hide'},400);
  $('#yomi').val("");
}
////////////////next処理////////////////////
$('#next').click(function(){
    reset();//共通リセット//

  if(quiznow < 3){
     quizset(); Slaset();
  }else if(quiznow == 3){
     $('#msg').attr('src','images/2.png');
     $('#sla-all').remove();
     blackout();
     setTimeout(function(){
     $('body').css('background-image', 'url(images/mori.png)');
     },2000);
     setTimeout(function(){
      quizset(); Yset();
     },2800);
  }else if(quiznow > 3 && quiznow < 6){
     quizset(); Yset();
  }else if(quiznow == 6){
     $('#Y-all').remove();
     $('#msg').attr('src','images/3.png');
     blackout();
     setTimeout(function(){
     $('body').css('background-image', 'url(images/sinden.png)');
     },2000);
     setTimeout(function(){
     quizset(); Dset();
     },2800);
  }else if(quiznow > 6 && quiznow < 9){
     quizset(); Dset();
  }else{
    $('#msg').attr('src','images/final.png');
    blackout();
    setTimeout(function(){
    $('body').css('background-image', 'url(images/sora.png)');
    },2000);
    setTimeout(function(){
    quizset(); Ain();
    },2800);
  }

})
/////////////処理開始/////////////////////
$('#start').click(function(){
  $('#title-all').fadeOut(400).remove(400);
  $('.gauge').fadeIn(400);
  blackout();

  setTimeout(function(){
  $('body').css('background-image', 'url(images/sougen.png)');
  },2000);
  setTimeout(function(){
  quizset();
  Slaset();
},2800);
})

$('#how').click(function(){
  $('.title-wrap').fadeOut(500);
  $('.asobikata-wrap').fadeIn(600);
  $('.how').effect('drop',{direction:'down',distance:'20px' ,mode:'hide'},300);
  $('.start').addClass("leftIn");
})
/////////////ページ読み込み時/////////////////
WebFont.load(
  {custom:
    {
      families: ['Nico Moji']
    },loading: function(){},
    active: function()
    {
      setTimeout(function(){
    $('.title-back').addClass("addback");
    },400);
    setTimeout(function(){
    $('#title,.start,.how').effect('drop',{direction:'down',distance:'21px' ,mode:'show'},800);
    },1400);

    },inactive: function(){
      //console.log('失敗したとき');
    }
});
/////////////apng/////////////////
APNG.ifNeeded().then(function(){
var images = document.querySelectorAll(".apng-image");
for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
});
