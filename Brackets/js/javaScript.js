$(document).ready(function () {
    /*
    var landingPage = document.getElementsByClassName(".landing_page");
    var landingPageHeight = document.getElementsByClassName(".landing_page").height;
    var navbar = document.getElementsByClassName("nav");
    */

    $("#nav_frame").hide();

    $("html, body").hover(function () {
        $(".right-side").fadeIn(1000, "swing");
        $(".left-side").fadeIn(2500, "swing");
        $(".landing_page_arrow").css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1 }, 3500);
    });

    $(".page_arrow").click(function () {
        $("html, body").animate({
            scrollTop: $(".main").offset().top
        }, 1000);
        /*$("nav").fadeIn(500, "swing");*/
    });

    $("nav img").click(function () {
        $("html, body").animate({
            scrollTop: $(".landing_page").offset().top
        }, 1000);
        /*$(".landing_page").fadeIn(500);
        $("nav").fadeOut(500);*/
    });

    $("#nav_tjenester").click(function () {
        $("html, body").animate({
            scrollTop: $("#tjenester").offset().top
        }, 500);
        /*$("nav").fadeIn(500, "swing");*/
    });

    $("#nav_om").click(function () {
        $("html, body").animate({
            scrollTop: $("#om").offset().top
        }, 500);
        /*$("nav").fadeIn(500, "swing");*/
    });


    $("#nav_kontakt").click(function () {
        $("html, body").animate({
            scrollTop: $("#kontakt").offset().top
        }, 500);
        /*$("nav").fadeIn(500, "swing");*/
    });

    $("nav a.menu").click(function () {
        $("nav a.menu").removeClass("nav_selected");
        $(this).addClass("nav_selected");
    });

    $("nav a.menu").mouseover(function () {
        $(this).addClass("nav_hover");
    });

    $("nav a.menu").mouseout(function () {
        $("nav a.menu").removeClass("nav_hover");
    });

   /*Nav fader inn/ut på*/
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $("#nav_frame").fadeIn();
            } else {
                $("#nav_frame").fadeOut();
            }
        });
    });

    /*$("window").scroll(function () {
        var landingPageHeight = document.getElementsByClassName(".landing_page").height;
        var scroll = $(window).scrollTop();
        
        if (scroll >= landingPageHeight) {
            $("html, body").animate({
                scrollTop: $(".landing_page").offset().top
            }, 1000);
            $(".landing_page").fadeIn(500);
            $("nav").fadeOut(500);
        } else if (scroll < landingPageHeight) {
            $("nav").fadeIn(500);
        }*/

    });
