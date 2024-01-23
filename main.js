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

const checkNavigation = () => {
  if (document.querySelector(".hamburger").style.transform === "rotate(90deg)") {
    document.querySelector(".hamburger").style.transform = 'rotate(0deg)';

    document.querySelector(".links").style.transform = "translateY(0rem)";


  } else {
    document.querySelector(".hamburger").style.transform = 'rotate(90deg)';

    document.querySelector(".links").style.transform = "translateY(40rem)";


  }
}
const cardCheckerOne = () => {
  document.querySelector('.card__one').classList.add('hide');
  document.querySelector('.awnser__one').removeEventListener('click', cardCheckerOne);
  document.querySelector('.card__two').classList.remove('hide');
  document.querySelector('.awnser__two').addEventListener('click', cardCheckerTwo);
};

const cardCheckerTwo = () => {
  document.querySelector('.card__two').classList.add('hide');
  document.querySelector('.awnser__two').removeEventListener('click', cardCheckerTwo);
  document.querySelector('.card__three').classList.remove('hide');
  document.querySelector('.awnser__three').addEventListener('click', cardCheckerThree);
};

const cardCheckerThree = () => {
  document.querySelector('.card__three').classList.add('hide');
  document.querySelector('.awnser__three').removeEventListener('click', cardCheckerThree);
  document.querySelector('.card__four').classList.remove('hide');
  document.querySelector('.awnser__four').addEventListener('click', cardCheckerFour);
};

const cardCheckerFour = () => {
  document.querySelector('.card__four').classList.add('hide');
  document.querySelector('.awnser__four').removeEventListener('click', cardCheckerFour);
  document.querySelector('.card__five').classList.remove('hide');
  document.querySelector('.awnser__five').addEventListener('click', cardCheckerFive);
};

const cardCheckerFive = () => {
  document.querySelector('.card__five').classList.add('hide');
  document.querySelector('.awnser__five').removeEventListener('click', cardCheckerFive);
};

const init = () => {
  document.querySelector('.awnser__one').addEventListener('click', cardCheckerOne);
  document.querySelector('.hamburger').addEventListener('click', checkNavigation);
  textAnimator();
  heroAnimator();
  personLayer();
  gsap.registerPlugin(ScrollTrigger);
};

init();
