AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperA19Pic = new Swiper(".a19_pic_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".a19-next",
        prevEl: ".a19-prev",
    },
    speed: 800,
    allowTouchMove: false,
    pagination: {
        el: "#a19-pagination",
        clickable: true,
    },
})

var swiperA19Text = new Swiper(".a19_text_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".a19-next",
        prevEl: ".a19-prev",
    },
    speed: 800,
    allowTouchMove: false,
    pagination: {
        el: "#a19-pagination",
        clickable: true,
    },
})

var swiperCityPic = new Swiper(".city_pic_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".city-next",
        prevEl: ".city-prev",
    },
    speed: 800,
    allowTouchMove: false,
    pagination: {
        el: "#city-pagination",
        clickable: true,
    },
})

var swiperCityText = new Swiper(".city_text_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".city-next",
        prevEl: ".city-prev",
    },
    speed: 800,
    allowTouchMove: false,
    pagination: {
        el: "#city-pagination",
        clickable: true,
    },
})


function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "dition1118@gmail.com, zhulixdesign@gmail.com, zhuliservice@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "大隱預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>聯絡電話:" + document.getElementById("phone").value
                + "<br>LINE ID:" + document.getElementById("line").value
                + "<br>居住地區:" + document.getElementById("area").value
                + "<br>留言:" + document.getElementById("message").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(window).on("resize", function() {
    mapResize();
})
mapResize();

function mapResize() {
    if($(window).width() <= 991) {
        let mapWidth = $(".map_wrap_pic").height() * 1.79;
        let windowWidth = $(window).width();
        let mapX = (mapWidth - windowWidth ) / 2;
        $(".map_wrap").animate({scrollLeft: mapX});
    }
}