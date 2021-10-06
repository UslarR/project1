/* Preloader */

    window.onload = function() {
        $('#preloader').fadeOut();
        $('body').removeClass('hidden');
        $('.bg-video').removeClass('absolute');
        $('.cont-loader').addClass('absolute');
    };

/* Glide Slide */

    new Glide(".images",{
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    gap: 40,
    breakpoints: {
        1200:{
        perView: 3
        },
        800:{
        perView: 2
        }
    }
    }).mount();

    /* ScrollTrigger */

    const reveal = gsap.utils.toArray('.reveal');
    reveal.forEach((text, i)=>{
        ScrollTrigger.create({
            trigger: text,
            toggleClass: 'active',
            start: 'top 90%',
            end: 'top 20%',
            markers: true
        })
    })

    const images = gsap.utils.toArray('.img_about');
    images.forEach((img, i)=>{
        ScrollTrigger.create({
            trigger: img,
            toggleClass: 'active',
            start: 'top 90%',
            end: 'top 20%',
            markers: true
        })
    })