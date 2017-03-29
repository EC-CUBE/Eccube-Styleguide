$(function(){

    $(".ec-headerNavSP__itemMenu").on("click",function(){
        $(".ec-layoutRole").toggleClass("active")
        $(".ec-spmenuRole").toggleClass("active")
    })

})

$(function(){
    $(".ec-newsline__close").on("click",function(){
        $(this).parents(".ec-newsline").toggleClass("is_active")
    })
})

// Slick Slide
$(function(){
    $('.main_visual').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300
    });
});