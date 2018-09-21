$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $(".sub-header").addClass('active');
        }else{
            $(".sub-header").removeClass('active');
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}