$(function(){
    
    // 메뉴
    $(".sub").hide(0);
    $(".gnb, .header_b").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({"height" :"400px"}, 500)
    })//
    $(".header_b").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({"height" :"103px"}, 500)
    })//


    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true
    })


    $(".s4_left_move").slick({
        autoplay:true, autoplaySpeed:2000,dots:true,arrows:false,slidesToScroll:2
    })


    $(".section5_inner ul li").click(function(e){
        e.preventDefault();//클릭시 맨위로 안가게 해주는
        $(".section5_inner ul li").toggleClass("on")

    })


    //팝업
    $(".pop").slideDown("fast");

    $(".pop_inner button").click(function(){
        $(".pop").slideUp();
    })

    $(".top").click(function(){
        $("html,body").animate({'scrollTop':"0"},500)
    })

    $("a").click(function(e){
        var attr = $(this).attr("href")

        if( attr == "#" || attr ==""){
        e.preventDefault();
        }

    })

})//jquery