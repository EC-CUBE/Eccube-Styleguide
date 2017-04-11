$(function(){
    $(".ec-headerNavSP__itemMenu").on("click",function(){
        $(".ec-layoutRole").toggleClass("is_active")
        $(".ec-drawerRole").toggleClass("is_active")
        $("body").toggleClass("have_curtain")
    })
})
$(function(){
    $(".ec-overlayRole").on("click",function(){
        $("body").removeClass("have_curtain")
        $(".ec-layoutRole").removeClass("is_active")
        $(".ec-drawerRole").removeClass("is_active")
    })
})

$(function(){
    $(".ec-cartNavi").on("click",function(){
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

// Slick Slide★
// TODO FIX CLASS NAME
$(function(){
    $('.main_visual').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300
    });
});