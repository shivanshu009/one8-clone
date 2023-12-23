gsap.to("#slide-page-bar",{
    scrollTrigger:{
        trigger:"#page1",
        // scroller:"#main",
        // markers:true,
        start:"27% 15%",
        end:"39% 0%",
        scrub:1,
        pin :true,
        anticipatePin: 1
    },
    x:"-100%",
})
gsap.form(".imgs1",{
    y:-100,
    delay:5,
    opacity:0,
    stagger:0.3
})