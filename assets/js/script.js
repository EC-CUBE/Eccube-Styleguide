$(function(){

    $(".ec-headerNavSP__itemMenu").on("click",function(){
        $(".ec-layoutRole").toggleClass("is_active")
        $(".ec-drawerRole").toggleClass("is_active")
    })

})
$(function(){

    $(".ec-headerRole__cart").on("click",function(){
        $(".ec-cartNaviNull").toggleClass("is_active")
        $(".ec-headerRole__cart").toggleClass("is_active")
    })

})

$(function(){
    $(".ec-newsline__close").on("click",function(){
        $(this).parents(".ec-newsline").toggleClass("is_active")
    })
})

$(function(){
    $(".is_inDrawer").each(function(){
        var html = $(this).html();
        $(html).appendTo(".ec-drawerRole")
    })
})

// Slick Slide
// TODO FIX CLASS NAME
$(function(){
    $('.main_visual').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300
    });
});