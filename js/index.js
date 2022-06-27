$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false ,
    arrows:true,
    prevArrow:'.myslider-prev1' ,
    nextArrow:'.myslider-next1' ,
    autoplayspeed:500 , 
    
   
   
  });




  $('.slider2').slick({
    dots:false,
    infinite: false,
    speed:300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true ,
    arrows:true,
    prevArrow:'.myslider-prev' ,
    nextArrow:'.myslider-next' ,
    autoplayspeed:100 , 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false ,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
  });



  $('.slider4').slick({
    dots:true,
    infinite: false,
    speed:300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true ,
    arrows:false,
   
    autoplayspeed:100 , 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots:true,
          infinite: true,
         
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false ,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });




  $('.slider3-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider3'
  });
  $('.slider3').slick({
    slidesToShow: 7,

    slidesToScroll: 1,
    asNavFor: '.slider3-nav',
   // asNavFor: '.slider3-botom',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false ,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false ,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
    
  }); 

  

 
// $("#ax0").click(function(){
  // if($(".dis0").css("display")=="none"){
  //    $(".dis0").css("display","block")
  //}
 // else{
  //   $(".dis0").css("display","none")
 //  }
  // })
  
 

 // $("#ax0").click(function(){
  //  if($(".matnzirax0").css("display")=="none"){
  //     $(".matnzirax0").css("display","block")
   //    $("#ax0").css("display","none")
     //  $(".matnzirax1").css("display","none")
       //$(".matnzirax2").css("display","none")
   //    $("#ax1").css("display","block")
   //    $("#ax2").css("display","block")
   // }
   // else{
    //  $(".matnzirax0").css("display","block")
   //   $("#ax0").css("display","none")
   //   $("#ax1").css("display","block")
    //  $("#ax2").css("display","block")
   // }
    
  //  })

  //  $("#ax1").click(function(){
  //    if($(".matnzirax1").css("display")=="none"){
   //      $(".matnzirax1").css("display","block")
   //      $("#ax1").css("display","none")
    //     $(".matnzirax0").css("display","none")
    //     $(".matnzirax2").css("display","none")
    //     $("#ax0").css("display","block")
    //     $("#ax2").css("display","block")


   //   }
   //   else{
   //     $(".matnzirax1").css("display","block")
   //     $("#ax1").css("display","none")
   //     $("#ax0").css("display","block")
  //      $("#ax2").css("display","block")
  //    }
      
   //   })


  //    $("#ax2").click(function(){
   //     if($(".matnzirax2").css("display")=="none"){
   //        $(".matnzirax2").css("display","block")
  //         $("#ax2").css("display","none")
   //        $(".matnzirax1").css("display","none")
   //        $(".matnzirax0").css("display","none")
    //       $("#ax0").css("display","block")
     //      $("#ax1").css("display","block")
    //    }
    //    else{
     //     $(".matnzirax2").css("display","block")
    //      $("#ax2").css("display","none")
    //      $("#ax0").css("display","block")
    //      $("#ax1").css("display","block")
        // }
        
   //     })


  


  $(".navbar-toggler").click(function(){
  if($(".disnonlogo2").css("display")=="none"){
     $(".disnonlogo2").css("display","block")
     $(".disnonlogo1").css("display","none")
  }
  else{
  $(".disnonlogo1").css("display","block")
  $(".disnonlogo2").css("display","none")
   }
   });







   $("#btnheder1").click(function(){
    if($(".flashdown").css("display")=="none"){
       $(".flashup").css("display","none")
       $(".flashdown").css("display","block")
    }
    else{
    $(".flashup").css("display","block")
    $(".flashdown").css("display","none")
     }
     });



     $("#btnheder2").click(function(){
      if($(".flashdown2").css("display")=="none"){
         $(".flashup2").css("display","none")
         $(".flashdown2").css("display","block")
      }
      else{
      $(".flashup2").css("display","block")
      $(".flashdown2").css("display","none")
       }
       });


       $("#btnheder3").click(function(){
        if($(".flashdown3").css("display")=="none"){
           $(".flashup3").css("display","none")
           $(".flashdown3").css("display","block")
        }
        else{
        $(".flashup3").css("display","block")
        $(".flashdown3").css("display","none")
         }
         });
    
  


         $(window).scroll(function(){ 
          if($(".flashdown").css("display")=="block"){
             $(".flashdown").css("display","none")
         }
         else{
         
         $(".flashdown").css("display","none")
          }
          });

          $(window).scroll(function(){ 
            if($(".flashup2").css("display")=="block"){
               $(".flashup2").css("display","none")
           }
           else{
           
           $(".flashup2").css("display","none")
            }
            });



         $(window).scroll(function(){ 
          if($(".flashup3").css("display")=="block"){
             $(".flashup3").css("display","none")
         }
         else{
         
         $(".flashup3").css("display","none")
          }
          });
     


  //$(".navbar-bg").click(function(){
  //  $(".navbar-collapse").removeClass("show");
  //  $(".navbar-bg").css("display","none")
  //  $(".navbar-toggler").addClass("collapsed");

//  })
  

//$(window).scroll(function(){ 
 // if ($(window).scrollTop() > aboveHeight){ 
  //  $('.MainMenu').css('position','fixed'); }
  //  else { $('.MainMenu').css('position','static'); 
 // } });

 //$(window).scroll(function(){
  //if ($(window).scrollTop() >= 500) {
   //   $("#123").removeClass("bgsoratinav");
    //  $('#123').addClass('.bgsefidnav');
 // }
  // else {
  //  $a('#123').removeClass('.bgsefidnav');
// }
//});

//$(window).scroll(function(){ 
 // if($(".bgsefidnav").css("display")=="none"){
  //   $(".bgsefidnav").css("display","flex")
  //   $(".bgsorati").css("display","none")
 //}
// else{
 
// $(".bgsefidnav").css("display","flex")
//  }
//  });


    


$(window).scroll(function(){ 
  if ($(window).scrollTop() >= 100) {
      $(".bgsoratinav").css("background-color","#ffff")      
      //$(".navbar-collapse").css("transition","top , 0.3s , linear , 0s")
      //  $(".navbar-collapse.show").css("transition","top  0.3s  linear  0s")
      //  $(".navbar-collapse.show").css("transition-duration","2s")
      $(".disnonlogo1").css("display","none ")
      $(".disnonlogo2").css("display","block ")
      $(".navbar-light  .navbar-nav  .nav-link").css("color","#000 ")
      $(".navbar-light .navbar-text").css("color","#000 ")
      $(".bgsoratinav").css("box-shadow","0px 9px 4px -3px rgb(0,0,0,47%)")
      //$("").css("transition","top 0.3s linear 0s")
     
      
  }
 else{
  
      $(".bgsoratinav").css("background-color","#e83a5e")
      $(".disnonlogo1").css("display","block ")
      $(".disnonlogo2").css("display","none")
      $(".navbar-light  .navbar-nav  .nav-link").css("color","#ffff ")
      $(".navbar-light .navbar-text").css("color","#ffff ")
      $(".bgsoratinav").css("box-shadow","0px 0px 0px 0px rgb(0,0,0,0)")
  }
   });
