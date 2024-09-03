
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();


// Set the initial scale of the ".sildeTxt" element
gsap.set(".sildeText", { scale: 3 });


// Create a GSAP timeline with ScrollTrigger
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",       // Element that triggers the scroll animation
        start: "top top",       // Start the animation when the ".home" section reaches the top of the viewport
        end: "bottom top",      // End the animation when the bottom of ".home" reaches the top of the viewport
        scrub: 1,               // Smoothly scrub the timeline as the user scrolls
        pin: true               // Pin the ".home" section during the animation
    }
});


// Define a function for the home section animation

tl.to(".videodiv", {
    '--clip': "0%",
    ease: Power2.easeInOut,
    duration: 2,
}, 'a')
    .to(".sildeText", {
        scale: 1,
        ease: Power2.easeInOut
    }, 'a');

tl.to(".lft", {
    xPercent: -10,
    ease: Power2
}, 'b')

tl.to(".rgt", {
    xPercent: 10,
    ease: Power2
}, 'b')






// Add another animation to the timeline to scale ".sildeTxt" back to 1


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



function themeChange() {
    document.querySelectorAll(".section")
        .forEach((elem) => {
            ScrollTrigger.create({
                trigger: elem,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", elem.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", elem.dataset.color)
                }
            })
        })
}

themeChange();

function TextAnimation() {
    let clutter = '';
    let testimonialsHeading = document.querySelector(".testimonials-heading");
    testimonialsHeading.textContent.split("").forEach((elem) => {
        clutter += `<span>${elem}</span>`;
    });
    testimonialsHeading.innerHTML = clutter;

    gsap.to(".testimonials-heading span", {
        scrollTrigger: {
            trigger: `.testimonials-heading`,
            start: `top 80%`,
            end: `bottom 50%`,
            scroller: `body`,
            scrub: 4,

        },
        stagger: .2,
        color: `blue`,
    });
}
TextAnimation()


function exploreText() {
    let text = '';
    let exploreText = document.querySelector(".explore-text");
    exploreText.textContent.split("").forEach((e) => {
        text += `<span>${e}</span>`;
    })
    exploreText.innerHTML = text;
    let tl = gsap.timeline();
    tl.from(".explore-text span", {
        y: 100,
        opacity: 0,
        duration: 0.1,
        scrollTrigger: {
            trigger: ".explore-text", // Corrected selector
            scroller: 'body',
            start: "top 70%",
            end: "bottom 90%",
            scrub: 2,

        },
        stagger: 0.2, // Adding stagger effect
    })
}

exploreText();

