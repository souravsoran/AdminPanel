$(document).ready(function(){

    $(".bar").click(function(){
        $(".sidebar").toggleClass("hideShow");
        $("header ,.main-content").toggleClass("slide-left");
    });
});