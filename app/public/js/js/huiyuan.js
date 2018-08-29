$(".one").next().show();
$(function () {

    $(".one").on("click", function () {




        $(this).addClass("one_actcar");
        $(this).parent().siblings().children(".two").removeClass("two_actcar");
        $(this).next().show().parent().siblings().find("ol").hide();

    });

    $(".two").on("click", function () {
        $(this).addClass("two_actcar");
        $(this).parent().siblings().children(".one").removeClass("one_actcar");
        $(this).next().show().parent().siblings().find("ol").hide();
    });


    $(".first li a").on("click", function () {
        $(".data").hide();
        $(".xiang").hide();
        $(this).siblings().removeClass("cartu")
        $(this).addClass("cartu");
        $(".concar").eq($(this).index()).show().siblings().hide();

    });




    $(".huiyuan li a").on("click", function () {
        $(".concar").hide();
        $(".xiang").hide();
        $(this).siblings().removeClass("cartu")
        $(this).addClass("cartu");
        $(".information .data").eq($(this).index()).show().siblings().hide();

    });




    $(".btn_fl").click(function () {
        $(".data").hide();
        $(".concar").hide();
        $(".reslt1").show();

    })



    $(".btn_f2").click(function () {
        $(".data").hide();
        $(".concar").hide();
        $(".reslt2").show();

    })



    $(".btn_f3").click(function () {
        $(".data").hide();
        $(".concar").hide();
        $(".reslt3").show();
    })



$(".pagere ul li").on("click",function () {

$(this).addClass("current").siblings().removeClass("current");

  })





})