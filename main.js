const textAnimator = () => {
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



const worldAnimator = () => {
  const mm = gsap.matchMedia();

  mm.add("(max-width: 1028px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.world',
        start: 'top 50%',
        end: 'bottom 0%',
        transformOrigin: '50% 50%',
        pin: true,
        scrub: 3,
        pinSpacing: true,
      },
    });
    tl.to(".world>picture", {
      rotation: -220,
    });
  });

  mm.add("(min-width: 1029px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.world',
        start: 'top 20%',
        end: 'bottom 0%',
        transformOrigin: '50% 50%',
        pin: true,
        scrub: 3,
        pinSpacing: true,
      },
    });
    tl.to(".world>picture", {
      rotation: -220,
    });
  });
}
const dishAnimator = () => {
  const dishes = document.querySelectorAll('.dish');
  dishes.forEach((dish) => {
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

const trainAnimator = () => {
  gsap.from('.hero_two', {
    delay:2,
    x:-2000,
    duration:3,
    ease:'sine-in',
  })

  gsap.from('.hero_three', {
    x: 2000,
    duration: 3,
    ease: 'sine-in',
  })
  gsap.from('.hero_four', {
    x: 2000,
    duration: 2.5,
    ease: 'sine-in',
  })
  gsap.from('.hero_five', {
    x: -2000,
    duration: 2.5,
    ease: 'sine-in',
  })
  gsap.from('.hero_six', {
    x: -2000,
    duration: 2.8,
    ease: 'sine-in',
  })
  gsap.from('.hero_seven', {
    x: -2000,
    duration: 3.2,
    ease: 'sine-in',
  })
  setTimeout(() => {
    trainAnimatorExtra()
  }, 5000)
   
  }
const trainAnimatorExtra = () =>{
  gsap.to('.hero_two', {
    delay: 10,
    x: 2000,
    scrollTrigger: {
      trigger: '.intro',
      start: 'top 100%',
      end: 'top 0%',
      scrub: 3,
    },
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

const logoCheckerOne = () => {
  document.querySelector('.emblem__feedback').innerHTML = `You picked the wrong emblem, try again!`

  setTimeout(() => {
    document.querySelector('.louise__three--image--wrong_one').classList.add('hide')
      ;
  }, 1000)
}

const logoCheckerTwo = () => {
  document.querySelector('.louise__three--image--wrong_two').classList.add('hide')
  document.querySelector('.louise__three--image--wrong_one').classList.add('hide')
  setTimeout(() => {
    document.querySelector('.emblem__feedback').innerHTML = `This is indeed the right emblem, good job!`
      ;
  }, 1000)
}

const logoCheckerThree = () => {
  document.querySelector('.emblem__feedback').innerHTML = `You picked the wrong emblem, try again!`
  setTimeout(() => {
    document.querySelector('.louise__three--image--wrong_two').classList.add('hide')
      ;
  }, 1000)
}


const yourFunction = (event) => {
  if (event.target.classList.contains('awnser__correct')) {
    awnserChecker()
  }
}

const elements = document.querySelectorAll('.awnser');
elements.forEach(element => {
  element.addEventListener('click', yourFunction);
});

let i = 0;

const awnserChecker = () => {
  i = i + 1;
  document.querySelector('.result').innerHTML = `<p>Your score is<span class='result__number'> ${i}/5</span><p>`
  return i;
};

const documentCheckerOne = () => {
  document.querySelector('.document__feedback').innerHTML = `You picked the wrong document, try again!`
  setTimeout(() => {
    document.querySelector('.document--image--wrong_one').classList.add('hide')
      ;
  }, 1000)
}

const documentCheckerTwo = () => {
  document.querySelector('.document__feedback').innerHTML = `This is indeed the right document, good job!`
  setTimeout(() => {
    document.querySelector('.document--image--wrong_two').classList.add('hide')
    document.querySelector('.document--image--wrong_one').classList.add('hide');
  }, 1000)
}

const documentCheckerThree = () => {
  document.querySelector('.document__feedback').innerHTML = `You picked the wrong document, try again!`
  setTimeout(() => {
    document.querySelector('.document--image--wrong_two').classList.add('hide')
      ;
  }, 1000)
}


const checkNavigationDesktop = () => {
  if (document.querySelector(".chapter__list").style.transform === "translateY(-30rem)") {
    document.querySelector(".chapter__list").style.transform = "translateY(0.5rem)";

  } else {
    document.querySelector(".chapter__list").style.transform = "translateY(-30rem)";

  }
}
const landscapeAnimator = () => {
  gsap.to('.landscape__animation--train', {
    backgroundPosition: "100% 0",
    scrollTrigger: {
      trigger: '.landscape__animation--train',
      start: 'center 80%',
      end: 'center 20%',
      scrub: 3,
    },
  });
}

const cardCheckerOne = () => {
  document.querySelector('.person__item--one').style.transform = "translateY(60rem)";
  document.querySelector('.person__item--two').style.transform = "translateY(0rem)";
  document.querySelector('.card__one').classList.add('hide');
  document.querySelector('.awnser__one').removeEventListener('click', cardCheckerOne);
  document.querySelector('.card__two').classList.remove('hide');
  document.querySelector('.awnser__two').addEventListener('click', cardCheckerTwo);
  document.querySelector('.awnser__correct').addEventListener('click', awnserChecker);
}

const cardCheckerTwo = () => {
  document.querySelector('.person__item--two').style.transform = "translateY(40rem)";
  document.querySelector('.person__item--three').style.transform = "translateY(0rem)";
  document.querySelector('.card__two').classList.add('hide');
  document.querySelector('.awnser__two').removeEventListener('click', cardCheckerTwo);
  document.querySelector('.card__three').classList.remove('hide');
  document.querySelector('.awnser__three').addEventListener('click', cardCheckerThree);
};

const cardCheckerThree = () => {
  document.querySelector('.person__item--three').style.transform = "translateY(40rem)";
  document.querySelector('.person__item--four').style.transform = "translateY(0rem)";
  document.querySelector('.card__three').classList.add('hide');
  document.querySelector('.awnser__three').removeEventListener('click', cardCheckerThree);
  document.querySelector('.card__four').classList.remove('hide');
  document.querySelector('.awnser__four').addEventListener('click', cardCheckerFour);
};

const cardCheckerFour = () => {
  document.querySelector('.person__item--four').style.transform = "translateY(40rem)";
  document.querySelector('.person__item--five').style.transform = "translateY(0rem)";
  document.querySelector('.card__four').classList.add('hide');
  document.querySelector('.awnser__four').removeEventListener('click', cardCheckerFour);
  document.querySelector('.card__five').classList.remove('hide');
  document.querySelector('.awnser__five').addEventListener('click', cardCheckerFive);

};

const cardCheckerFive = () => {
  document.querySelector('.person__item--five').style.transform = "translateY(40rem)";
  document.querySelector('.card__five').classList.add('hide');
  document.querySelector('.cards__container>div>h3').classList.add('hide');

  document.querySelector('.awnser__five').removeEventListener('click', cardCheckerFive);
  document.querySelector('.result').classList.remove('hide');
  document.querySelector('.booking').style.transform = "translateY(12rem)";

};
  
document.addEventListener('DOMContentLoaded', landscapeAnimator)

const temperatureAnimator = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.temperature',
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 1,
      pinSpacing: true,
    },
  });
  tl.to(".temperature", {
    scale:1.1,
    innerHTML: '-1°C',
  });
  
  tl.to(".temperature", {
    color:'black',
    backgroundColor:'#FEFEFE',
    scale: 2,
    innerHTML: '-10°C',

  });
}

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelector(".chapter__list").style.transform = "+ translateY(-30rem)";

  document.querySelector('.chapters').addEventListener('click', checkNavigationDesktop);
  document.querySelector('.links__desktop').addEventListener('click', checkNavigationDesktop);

  document.querySelector('.louise__three--image--wrong_one').addEventListener('click', logoCheckerOne);
  document.querySelector('.louise__three--image--right').addEventListener('click', logoCheckerTwo);
  document.querySelector('.louise__three--image--wrong_two').addEventListener('click', logoCheckerThree);

  document.querySelector('.document--image--wrong_one').addEventListener('click', documentCheckerOne);
  document.querySelector('.document--image--right').addEventListener('click', documentCheckerTwo);
  document.querySelector('.document--image--wrong_two').addEventListener('click', documentCheckerThree);

  document.querySelector('.awnser__one').addEventListener('click', cardCheckerOne);
  
  document.querySelector('.hamburger').addEventListener('click', checkNavigation);

  document.querySelector('.links').addEventListener('click', checkNavigation);
  trainAnimator();
  worldAnimator();
  dishAnimator();
  textAnimator();
  personLayer();
  temperatureAnimator()
};

init();



