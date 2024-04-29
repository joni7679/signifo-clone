

function homeSectionAnimation() {
    gsap.to(".videodiv", {
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            markers: true,
            scrub: 3,
            pin: true
        },
        '--clip': "0%",
        ease: Power2,
        duration: 2,

    })


}

homeSectionAnimation()

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
            markers: true,
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

