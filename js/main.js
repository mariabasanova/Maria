// $('.collapse').collapse()

$(document).ready(function () {
    $(".learn").click(function () {
        stt("learn-click", "#a3d0ae")
    });
    $(".define").click(function () {
        stt("define-click", "#ffc365");
        $(".define-click").css("margin-top","-12px");

    });
    $(".build").click(function () {
        stt("build-click", "#ff916c");
        $(".build-click").css("margin-top","-12px");

    });
    $(".deliver").click(function () {
        stt("deliver-click", "#92c2e8");
        $(".deliver-click").css("margin-top","-12px");

    });

    function stt(conentClass, color) {
        $("."+conentClass +" #learn-arrow").toggleClass( "fa-chevron-down fa-chevron-up" );
        if($("."+conentClass+ " #learn-arrow").hasClass("fa-chevron-up")) {

            $("."+conentClass +" .learn-arrow").css("color","#fff");
            $("."+conentClass+" .learn-collapse-section").css({backgroundColor: color});
            $("."+conentClass+" .learn, .define, .build, .deliver").css("color","#fff");
            $("."+conentClass+" .plus-icon > i").css("color","#fff");
            $("."+conentClass+" .help1").css("color","#fff")
            $("."+conentClass+" .help").css("color","#fff")
        }else{
            if($(window).width() <= 767) {
                $("."+conentClass+" .learn-arrow").css("color",color);
            }else{
                $("."+conentClass+" .learn-arrow").css("color","#595959");
            }
            $("."+conentClass+" .learn-collapse-section").css({backgroundColor: "#fff"});
            $("."+conentClass+" .learn, .define, .build, .deliver").css("color","#595959");
            $("."+conentClass+" .plus-icon > i").css("color","#595959");
            $("."+conentClass+" .help1").css("color","#595959");
            $("."+conentClass+" .help").css("color","#595959");
        }
    }
});


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction3() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction4() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}