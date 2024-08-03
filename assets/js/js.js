// recommed car carousel

const recommed = $('.recommed-carousel');
$('#recommed-prev').click(function () {
    recommed.trigger('prev.owl.carousel');
});
$('#recommed-next').click(function() {
    recommed.trigger('next.owl.carousel');
});
$('.recommed-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});

// latest car carousel
const latest = $('.latest-car-carousel');
$('#latest-car-prev').click(function () {
    latest.trigger('prev.owl.carousel');
});
$('#latest-car-next').click(function() {
    latest.trigger('next.owl.carousel');
});
$('.latest-car-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});

// menu-tab
const btn = $('.tab-menu .tab-menu-links a');
const tab = $('.tab-menu .menu-tab > div ');
btn.click(function() {
    btn.removeClass('active');
    $(this).addClass('active');
    tab.removeClass('active');
    $($(this).data('menu')).addClass('active');
    console.log( $(this).data('menu') );
});

// menu-tab carousel
// suv carousel
const suv = $('.suv-carousel');
$('#suv-prev').click(function () {
    suv.trigger('prev.owl.carousel');
});
$('#suv-next').click(function() {
    suv.trigger('next.owl.carousel');
});
$('.suv-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});
// hatchback
const hatchback = $('.hatchback-carousel');
$('#hatchback-prev').click(function () {
    hatchback.trigger('prev.owl.carousel');
});
$('#hatchback-next').click(function() {
    hatchback.trigger('next.owl.carousel');
});
$('.hatchback-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});
// sedan
const sedan = $('.sedan-carousel');
$('#sedan-prev').click(function () {
    sedan.trigger('prev.owl.carousel');
});
$('#sedan-next').click(function() {
    sedan.trigger('next.owl.carousel');
});
$('.sedan-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});
// muv
const muv = $('.muv-carousel');
$('#muv-prev').click(function () {
    muv.trigger('prev.owl.carousel');
});
$('#muv-next').click(function() {
    muv.trigger('next.owl.carousel');
});
$('.muv-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});
// luxury
const luxury = $('.luxury-carousel');
$('#luxury-prev').click(function () {
    luxury.trigger('prev.owl.carousel');
});
$('#luxury-next').click(function() {
    luxury.trigger('next.owl.carousel');
});
$('.luxury-carousel').owlCarousel({
    loop:true,
    margin: 20,
    autoplay:true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:4,
        }
    }
});
