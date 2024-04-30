
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function homeSectionAnimation() {
    gsap.to(".videodiv", {
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            // markers: true,
            scrub: 3,
            pin: true
        },
        '--clip': "0%",
        ease: Power2,
        duration: 2,

    })


}
homeSectionAnimation()
// gsap.to(".cards__item", {
//     scale: 1.2,
//     borderRadius: "15px",
//     backgroundColor: "black",
//     color: "white",
//     stagger: 0.5,
//     duration: 0.2,
//     scrollTrigger: {
//         trigger: ".card-part", // Corrected the trigger selector
//         start: "top 70%",
//         end: "bottom 30%",
//         scrub: 3,
//         markers: true
//     }
// });

function horizontalScrollbar() {
    let horizontalSection = document.querySelector('.model-container');
    gsap.to('.model-container', {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
            scroller: "body",
            trigger: '.model-container',
            start: 'center center',
            end: '+=2000px',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
        }
    });
}
horizontalScrollbar()

function teamsectionEffect() {
    let teamelem = document.querySelectorAll(".team-elem");
    teamelem.forEach((val) => {
        const childNode = val.childNodes[3];
        console.log(childNode)
        val.addEventListener("mouseenter", () => {
            childNode.style.opacity = "1";
            childNode.style.transform = "scale(1)";
            childNode.style.top = "-9px";
            childNode.style.left = "40%"
        })

        val.addEventListener("mouseleave", () => {
            childNode.style.opacity = "0";
            childNode.style.transform = "scale(0)";
        })




    })
}

teamsectionEffect()



document.querySelectorAll(".section")
    .forEach((elem) => {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 50%",
            end: "bottom 50%",
            markers: true,
            onEnter: function () {
                document.body.setAttribute("theme", elem.dataset.color)
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", elem.dataset.color)
            }
        })



    })