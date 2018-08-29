$(function () {

    $(".container .sdf li").on("click", function () {
        $(this).addClass('active').siblings().removeClass("active");
        $(".car").eq($(this).index()).show().siblings().hide();

    })

})