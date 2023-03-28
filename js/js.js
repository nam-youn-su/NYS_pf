$(function () {
  /*  $('.header_gmb > li').click(function(){
    $(this).find('.gnb_sub').toggle();
  });*/

  let profile_1_height = $(".profile_1").height();
  $(".profile_2").height(profile_1_height);

  $(".next_btn").click(function () {
    $(".home_slide").css("transform", "translateX(-50%)");
    $(".next_btn").css("display", "none");
    $(".prev_btn").css("display", "block");
  });

  $(".prev_btn").click(function () {
    $(".home_slide").css("transform", "translateX(0%)");
    $(".prev_btn").css("display", "none");
    $(".next_btn").css("display", "block");
  });

  let slide_X = $("home_slide").css("transform", "translateX");

  $(window).scroll(function () {
    let scrollValue = $(document).scrollTop();
    //console.log(scrollValue);

    if (scrollValue >= 2000) {
      $(".left_con").addClass("fexd_box");
    } else {
      $(".left_con").removeClass("fexd_box");
    }

    if (scrollValue >= 3300) {
      $(".left_con").removeClass("fexd_box");
    }

    if (scrollValue >= 600) {
      $(".profile_detail>div:nth-child(2)>.chart>p").addClass("on");
      $(".profile_detail>div:nth-child(3)>.chart>p").addClass("on");
      $(".profile_detail>div:nth-child(4)>.chart>p").addClass("on");
      $(".profile_detail>div:nth-child(5)>.chart>p").addClass("on");
      $(".profile_detail>div:nth-child(6)>.chart>p").addClass("on");
    }

    if (scrollValue >= 400) {
      $(".logo_1").css("display", "block");
      $(".logo_2").css("display", "none");
    } else {
      $(".logo_2").css("display", "block");
      $(".logo_1").css("display", "none");
    }

    if (scrollValue <= 400) {
      $(".header_gmb>li:nth-child(1)").css({
        "font-weight": "normal",
        color: "#333",
      });
      $(".header_gmb>li:nth-child(2)>.gnb_sub").css("display", "none");
      $(".header_gmb>li:nth-child(1)>span>.gnb_point").hide();
      $(".gnb_sub").css("font-weight", "normal");
      $(".header_gmb>li>span>.gnb_point").css("display", "none");
    }

    if (scrollValue >= 400) {
      $(".header_gmb>li:nth-child(1)").css({
        "font-weight": "bold",
        color: "#224AAF",
      });
      $(".header_gmb>li:nth-child(1)>span>.gnb_point").show();
      $(".header_gmb>li:nth-child(2)>span>.gnb_point").hide();
      $(".header_gmb>li:nth-child(2)>.gnb_sub").css("display", "none");
      $(".header_gmb>li:nth-child(2)").css({
        "font-weight": "normal",
        color: "#333",
      });
    }

    if (scrollValue >= 1500) {
      $(".header_gmb>li:nth-child(1)").css({
        "font-weight": "normal",
        color: "#333",
      });
      $(".header_gmb>li:nth-child(3)").css({
        "font-weight": "normal",
        color: "#333",
      });
      $(".header_gmb>li:nth-child(2)>span>.gnb_point").show();
      $(".header_gmb>li:nth-child(1)>span>.gnb_point").hide();
      $(".header_gmb>li:nth-child(3)>span>.gnb_point").hide();
      $(".header_gmb>li:nth-child(2)>.gnb_sub").css("display", "block");
      $(".header_gmb>li:nth-child(2)").css({
        "font-weight": "bold",
        color: "#224AAF",
      });
      $(".header_gmb>li:nth-child(3)>.gnb_sub").css("display", "none");
      $(".gnb_sub").css("font-weight", "normal");
    }

    if (scrollValue >= 3900) {
      $(".header_gmb>li:nth-child(2)").css({
        "font-weight": "normal",
        color: "#333",
      });
      $(".header_gmb>li:nth-child(2)>.gnb_sub").css("display", "none");
      $(".header_gmb>li:nth-child(3)>span>.gnb_point").show();
      $(".header_gmb>li:nth-child(2)>span>.gnb_point").hide();
      $(".header_gmb>li:nth-child(3)").css({
        "font-weight": "bold",
        color: "#224AAF",
      });
      $(".header_gmb>li:nth-child(3)>.gnb_sub").css("display", "block");
      $(".gnb_sub").css("font-weight", "normal");
    }
  });

  let left_width = $(".left_con").width();
  $(".moer_con").css("width", left_width);

  //크기조절
  /*1
$('.por_box_2').resizable();
$( "#resizable" ).resizable({ ghost: true });
*/
  /*2
  let drag_btn = $('.width_box_btn');
  let resize_box1 = $('.por_box_1');
  let resize_box2 = $('.por_box_2');

  // 마우스의 위치값 저장을 위해 선언
  let x = 0;
  // 초기값
  let box_width = 0;

  //마우스가 영역에 들어가면 마우스 x값저장
  resize_box1.mousemove(function(e){
    x = e.pageX;
    let total_widht = Math.ceil((x-325)/10);
    console.log(total_widht);

    resize_box2.css('width',total_widht+'%');

  });
*/
  let slide_all_x = 0;

  $(".por_2_prev_btn").click(function () {
    if (slide_all_x == 0) {
      return false;
    } else {
      slide_all_x = slide_all_x + 720;
      $(".slide_all").css("transform", "translateX(" + slide_all_x + "px)");
      console.log(slide_all_x);
    }

    if (slide_all_x == 0) {
      $(".por_2_slide_btn>a:nth-child(1)").css("opacity", ".3");
    }

    if (slide_all_x > -8640) {
      $(".por_2_slide_btn>a:nth-child(2)").css("opacity", ".7");
    }
  });

  $(".por_2_next_btn").click(function () {
    if (slide_all_x == -8640) {
      return false;
    } else {
      slide_all_x = slide_all_x - 720;
      $(".slide_all").css("transform", "translateX(" + slide_all_x + "px)");
      // console.log(slide_all_x);
    }

    if (slide_all_x < 0) {
      $(".por_2_slide_btn>a:nth-child(1)").css("opacity", ".7");
    }

    if (slide_all_x == -8640) {
      $(".por_2_slide_btn>a:nth-child(2)").css("opacity", ".3");
    }
  });

  $("div.right_con>label").click(function () {
    if ($("input.right_menu_1").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_01").show();
    }
    if ($("input.right_menu_2").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_02").show();
    }
    if ($("input.right_menu_3").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_03").show();
    }
    if ($("input.right_menu_4").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_04").show();
    }
    if ($("input.right_menu_5").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_05").show();
    }
  });

  $("div.moer_con>label").click(function () {
    $("html, body").stop().animate({
      scrollTop: "2000",
    });

    if ($("input.right_menu_6").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_06").show();
    }
    if ($("input.right_menu_7").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_07").show();
    }
    if ($("input.right_menu_8").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_08").show();
    }
    if ($("input.right_menu_9").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_09").show();
    }
    if ($("input.right_menu_10").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_10").show();
    }
    if ($("input.right_menu_11").is(":checked")) {
      $(".left_con").hide();
      $(".left_con_11").show();
    }
  });

  var reset_slide = function () {
    slide_all_x = 0;
    $(".slide_all").css("transform", "translateX(" + slide_all_x + "px)");
    if (slide_all_x == 0) {
      $(".por_2_slide_btn>a:nth-child(1)").css("opacity", ".3");
    }

    $(".PS_2_1").css("transform", "translateX(0)");
    $(".PS_2_2").css("transform", "translateX(0)");
    $(".PS_2_3").css("transform", "translateX(0)");
    $(".PS_2_4").css("transform", "translateX(0)");
    $(".PS_2_5").css("transform", "translateX(0)");
    $(".PS_2_6").css("transform", "translateX(0)");
    $(".PS_2_7").css("transform", "translateX(0)");
    $(".PS_2_8").css("transform", "translateX(0)");
    $(".PS_2_9").css("transform", "translateX(0)");
    $(".PS_2_10").css("transform", "translateX(0)");
    $(".PS_2_11").css("transform", "translateX(0)");
    $(".PS_2_12").css("transform", "translateX(0)");
    $(".PS_2_13").css("transform", "translateX(0)");
    $(".PS_2_14").css("transform", "translateX(0)");
    $(".PS_2_15").css("transform", "translateX(0)");
    $(".PS_2_16").css("transform", "translateX(0)");
    $(".PS_2_17").css("transform", "translateX(0)");
    $(".PS_2_18").css("transform", "translateX(0)");
    $(".PS_2_19").css("transform", "translateX(0)");
    $(".PS_2_20").css("transform", "translateX(0)");
    $(".PS_2_21").css("transform", "translateX(0)");
    $(".PS_2_22").css("transform", "translateX(0)");
    $(".PS_2_23").css("transform", "translateX(0)");
    $(".PS_2_24").css("transform", "translateX(0)");
    $(".PS_2_25").css("transform", "translateX(0)");
    $(".PS_2_26").css("transform", "translateX(0)");
    $(".PS_2_27").css("transform", "translateX(0)");
    $(".PS_2_28").css("transform", "translateX(0)");
  };

  $(".gnb_num_1").click(function () {
    reset_slide();
    setTimeout(function () {
      $(".PS_2_4").css("transform", "translateX(-720px)");
      $(".PS_2_2").css("transform", "translateX(3240px)");
      $(".PS_2_9").css("transform", "translateX(-1800px)");
      $(".PS_2_3").css("transform", "translateX(5760px)");
      $(".PS_2_11").css("transform", "translateX(-2880px)");
      $(".PS_2_5").css("transform", "translateX(1440px)");
      $(".PS_2_19").css("transform", "translateX(-5040px)");
      $(".PS_2_27").css("transform", "translateX(-7560px)");
      $(".PS_2_6").css("transform", "translateX(7560px)");
    }, 200);
  }); //click

  $(".gnb_num_2").click(function () {
    reset_slide();
    setTimeout(function () {
      $(".PS_2_2").css("transform", "translateX(-360px)");
      $(".PS_2_5").css("transform", "translateX(-1080px)");
      $(".PS_2_6").css("transform", "translateX(-1080px)");
      $(".PS_2_8").css("transform", "translateX(-1440px)");
      $(".PS_2_10").css("transform", "translateX(-1800px)");
      $(".PS_2_12").css("transform", "translateX(-2160px)");
      $(".PS_2_13").css("transform", "translateX(-2160px)");
      $(".PS_2_14").css("transform", "translateX(-2160px)");
      $(".PS_2_18").css("transform", "translateX(-3240px)");
      $(".PS_2_20").css("transform", "translateX(-3600px)");
      $(".PS_2_22").css("transform", "translateX(-3960px)");
      $(".PS_2_23").css("transform", "translateX(-3960px)");
      $(".PS_2_24").css("transform", "translateX(-3960px)");
      $(".PS_2_25").css("transform", "translateX(-3960px)");
      $(".PS_2_26").css("transform", "translateX(-3960px)");
      $(".PS_2_28").css("transform", "translateX(-4320px)");
      $(".PS_2_1").css("transform", "translateX(6120px)");
      $(".PS_2_3").css("transform", "translateX(6120px)");
      $(".PS_2_4").css("transform", "translateX(6480px)");
      $(".PS_2_7").css("transform", "translateX(6480px)");
      $(".PS_2_9").css("transform", "translateX(6120px)");
      $(".PS_2_11").css("transform", "translateX(6120px)");
      $(".PS_2_15").css("transform", "translateX(2880px)");
      $(".PS_2_16").css("transform", "translateX(2880px)");
    }, 200);
  }); //click

  $(".gnb_num_3").click(function () {
    reset_slide();
    setTimeout(function () {
      $(".PS_2_3").css("transform", "translateX(-720px)");
      $(".PS_2_7").css("transform", "translateX(-1800px)");
      $(".PS_2_15").css("transform", "translateX(-3960px)");

      $(".PS_2_16").css("transform", "translateX(-3600px)");
      $(".PS_2_17").css("transform", "translateX(-4320px)");
      $(".PS_2_21").css("transform", "translateX(-6480px)");

      $(".PS_2_1").css("transform", "translateX(2160px)");
      $(".PS_2_2").css("transform", "translateX(4680px)");
      $(".PS_2_4").css("transform", "translateX(4680px)");
      $(".PS_2_5").css("transform", "translateX(3960px)");
      $(".PS_2_6").css("transform", "translateX(5400px)");
    }, 200);
  }); //click

  $(".header_top>a:nth-child(1)").click(function () {
    $("html, body").stop().animate({
      scrollTop: "0",
    });
  }); //click 1084

  $(".header_gmb>li:nth-child(1)").click(function () {
    $("html, body").stop().animate({
      scrollTop: "1084",
    });
  }); //click 1084

  $(".header_gmb>li:nth-child(2)").click(function () {
    $("html, body").stop().animate({
      scrollTop: "1999",
    });
  });

  $(".header_gmb>li:nth-child(3)").click(function () {
    $("html, body").stop().animate({
      scrollTop: "4205",
    });
  });

  let con_on = 0;

  $(".close_btn").click(function () {
    $(".show_portfolio").hide();
    con_on = 0;
  });

  let content;

  $(".slid_img_1").click(function () {
    $(".show_portfolio").show();
    con_on = 1;
    $(".show_container>video").hide();
    $(".show_container>img").show();
    content = $(this).attr("id");
    $(".show_container>img").attr("src", "img/portfolio_2/" + content + ".jpg");
  });

  $(".PS_2_3>.slid_img_1,.PS_2_16>.slid_img_1,.PS_2_17>.slid_img_1").click(
    function () {
      $(".show_portfolio").show();
      con_on = 1;
      $(".show_container>img").hide();
      $(".show_container>video").show();
      content = $(this).attr("id");
      $(".show_container>video").attr(
        "src",
        "img/portfolio_2/" + content + ".mp4"
      );
    }
  );

  if ((con_on = 1)) {
    $(".con_BG").on("scroll touchmove mousewheel", function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  } else if (con_on < 1) {
    $(".con_BG").off("scroll touchmove mousewheel");
  }

  $(".PS_2_7>.slid_img_1,.PS_2_15>.slid_img_1,.PS_2_21>.slid_img_1").click(
    function () {
      content = $(this).attr("id");
      $("<a>")
        .prop({
          target: "_blank",
          //        href: 'img/portfolio_2/'+content+'/index.html'
          href: "img/portfolio_2/" + content + "/index.html",
        })[0]
        .click();
      $(".show_portfolio").hide();
    }
  );

  function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }

  $("#Phone_nys").click(function () {
    copyToClipboard("010-3312-9022");
    alert("복사하였습니다");
  });

  $("#Email_nys").click(function () {
    copyToClipboard("ndbstn9022@naver.com");
    alert("복사하였습니다");
  });
}); //document ready
