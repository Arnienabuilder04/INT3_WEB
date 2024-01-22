const heroAnimator = () =>{
 

  gsap.timeline().from(".hero_button", 1.8, {
    opacity:0,
    y: 20, 
    ease: "sine.in",
    delay: 1,
  })
}
const textAnimator = () =>{
  const persons = document.querySelectorAll('.text');

  persons.forEach((person, index) => {
    const direction = index % 2 === 0 ? -1 : 1; // Alternate between -1 (left) and 1 (right)
    gsap.from(person, {
      opacity: 0,
      x: 100 * direction, // Use direction to determine left or right
      duration: 1,
      scrollTrigger: {
        trigger: person,
        start: 'top 80%', // Adjust the starting point based on your layout
        end: 'top 50%', // Adjust the ending point based on your layout
        toggleActions: 'play none none none',
      },
    });
  });
}
const personLayer = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".departure",
      start: "top 100%",
      end: "bottom 0%",
      scrub: 0.5
    }
  })
    .to(".departure--group__one", { yPercent: 10 }, 0)
    .to(".departure--group__two", { yPercent: 40 }, 0)
    .to(".departure--group__three", { yPercent: 80 }, 0)
}
const init = () => {
  textAnimator()
  heroAnimator()
  personLayer()
  gsap.registerPlugin(ScrollTrigger);
}
init()