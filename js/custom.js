function readyFn(jQuery) {
    gsap.registerPlugin(ScrollTrigger),
    ScrollTrigger.create({
        trigger: ".hero-column",
        start: "top center",
        end: "bottom bottom",
        pin: ".hero-image"
    }),
    gsap.registerPlugin(ScrollTrigger),
    ScrollTrigger.create({
        trigger: ".AccordionGroup",
        start: "top center",
        end: "bottom bottom",
        pin: ".knowledge-content"
    })
}