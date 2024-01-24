
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
    const direction = index % 2 === 0 ? -1 : 1; 
    gsap.from(person, {
      opacity: 0,
      x: 100 * direction,
      duration: 1,
      scrollTrigger: {
        trigger: person,
        start: 'top 80%',
        end: 'top 50%', 
      },
    });
  });
}
const worldAnimator = () =>{
  let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.world',
        start: 'top 50%',
        end: 'top 0%',
        transformOrigin: '50% 50%',
        pin: true,
        scrub:1,
        pinSpacing: true,
      },
  });
  tl.to(".world>img", {
    duration:20,
    rotation: -220,
  });
  tl.to(".world>img", {
    duration: 2,
    y: 500,
  });
}
const dishAnimator = () =>{
  const dishes = document.querySelectorAll('.dish');
  dishes.forEach((dish) =>{
    gsap.from(dish, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: dish,
        start: 'top 80%',
        end: 'top 50%',
      },
    });
  }
  )
  
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

const logoCheckerOne = () => {
  document.querySelector('.louise__three--image--wrong_one').src = "./assets/logo_one_a.png"
  document.querySelector('.emblem__feedback').innerHTML = `You picked the wrong emblem, try again!`

  setTimeout(() => {
    document.querySelector('.louise__three--image--wrong_one').classList.add('hide')
      ;
  }, 1000)
}

const logoCheckerTwo = () => {
  document.querySelector('.louise__three--image--right').src = "./assets/logo_two_a.png"
  document.querySelector('.louise__three--image--wrong_two').classList.add('hide')
  document.querySelector('.louise__three--image--wrong_one').classList.add('hide')
  setTimeout(() => {
    document.querySelector('.emblem__feedback').innerHTML = `This is indeed the right emblem, good job!`
      ;
  }, 1000)
}

const logoCheckerThree = () => {
  document.querySelector('.louise__three--image--wrong_two').src = "./assets/logo_three_a.png"
  document.querySelector('.emblem__feedback').innerHTML = `You picked the wrong emblem, try again!`
  setTimeout(() => {
    document.querySelector('.louise__three--image--wrong_two').classList.add('hide')
      ;
  }, 1000)
}

const cardCheckerOne = () => {
  document.querySelector('.card__one').classList.add('hide');
  document.querySelector('.awnser__one').removeEventListener('click', cardCheckerOne);
  document.querySelector('.card__two').classList.remove('hide');
  document.querySelector('.awnser__two').addEventListener('click', cardCheckerTwo);
  document.querySelector('.awnser__correct').addEventListener('click', awnserChecker);
}

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
  document.querySelector('.result').classList.remove('hide');

};
const yourFunction = (event) => {
  if(event.target.classList.contains('awnser__correct')){
    awnserChecker()
    console.log('correct')
  }else{
    console.log('incorrect')
  }
}

const elements = document.querySelectorAll('.awnser');
  elements.forEach(element => {
    element.addEventListener('click', yourFunction);
  });

let i = 0;

const awnserChecker = () => {
  i = i + 1;
  console.log(i);
  document.querySelector('.result').innerHTML = `<p>Your score is<br><br><span class='result__number'> ${i}/5</span><p>`
  return i;
};

const documentCheckerOne = () => {
  document.querySelector('.document--image--wrong_one').src = "./assets/logo_one_a.png"
  document.querySelector('.document__feedback').innerHTML = `You picked the wrong document, try again!`

  setTimeout(() => {
    document.querySelector('.document--image--wrong_one').classList.add('hide')
      ;
  }, 1000)
}

const documentCheckerTwo = () => {
  document.querySelector('.document--image--right').src = "./assets/logo_two_a.png"
  document.querySelector('.document--image--wrong_two').classList.add('hide')
  document.querySelector('.document--image--wrong_one').classList.add('hide')
  setTimeout(() => {
    document.querySelector('.document__feedback').innerHTML = `This is indeed the right document, good job!`
      ;
  }, 1000)
}

const documentCheckerThree = () => {
  document.querySelector('.document--image--wrong_two').src = "./assets/logo_three_a.png"
  document.querySelector('.document__feedback').innerHTML = `You picked the wrong document, try again!`
  setTimeout(() => {
    document.querySelector('.document--image--wrong_two').classList.add('hide')
      ;
  }, 1000)
}

const init = () => {
 
  document.querySelector('.louise__three--image--wrong_one').addEventListener('click', logoCheckerOne);
  document.querySelector('.louise__three--image--right').addEventListener('click', logoCheckerTwo);
  document.querySelector('.louise__three--image--wrong_two').addEventListener('click', logoCheckerThree);

  document.querySelector('.document--image--wrong_one').addEventListener('click', documentCheckerOne);
  document.querySelector('.document--image--right').addEventListener('click', documentCheckerTwo);
  document.querySelector('.document--image--wrong_two').addEventListener('click', documentCheckerThree);
  
  document.querySelector('.awnser__one').addEventListener('click', cardCheckerOne);

  document.querySelector('.hamburger').addEventListener('click', checkNavigation);

  document.querySelector('.links').addEventListener('click', checkNavigation);

  worldAnimator()
  dishAnimator()
  textAnimator();
  heroAnimator();
  personLayer();
  gsap.registerPlugin(ScrollTrigger);
};

init();
