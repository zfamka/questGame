document.querySelector('.characterInfo__temp').addEventListener('mouseover', () => {
  function temp() {
    const elem = document.querySelector('.characterInfo__bar--tempCount');
    if(elem.innerHTML > 20 && elem.innerHTML <= 40) {
      return `"I like this temperature."`;
    } else if(elem.innerHTML <= 20) {
      return `"It's a little chilly, but I'm fine."`;
    } else if (elem.innerHTML >= 50) {
      return `"It's really hot!"`;
    }
  }
  changeStatColor('temp', temp());
})

document.querySelector('.characterInfo__wet').addEventListener('mouseover', () => {
  function wet() {
    const elem = document.querySelector('.characterInfo__bar--wetCount');
    if(elem.innerHTML == 0) {
      return `"Well, at least I'm dry."`;
    } else if(elem.innerHTML > 0 && elem.innerHTML <= 20) {
      return  `A little wet. "I would not like to get sick."`;
    } else if (elem.innerHTML >= 30 && elem.innerHTML < 50) {
      return  `"I need to find a place where I can dry off."`;
    } else if (elem.innerHTML >= 50) {
      return `"It's not funny anymore."`
    }
  }
  changeStatColor('wet', wet());
})

document.querySelector('.characterInfo__stamina').addEventListener('mouseover', () => {
  function stamina() {
    const elem = document.querySelector('.characterInfo__bar--staminaCount');
    if(elem.innerHTML == 100) {
      return `"I have so much energy!"`;
    } else if(elem.innerHTML <= 70 && elem.innerHTML > 50) {
      return  `"A little tired, but we have to move on."`;
    } else if (elem.innerHTML <= 50 && elem.innerHTML > 20) {
      return  `"I would not give up rest."`;
    } else if (elem.innerHTML <= 20) {
      return `"I need to rest."`
    }
  }
  changeStatColor('stamina', stamina());
})

function changeStatColor(color, hintText) {
  const statBlock = document.querySelector(`.characterInfo__${color}`);
  const statChanger = document.querySelector(`.characterInfo__bar--${color}`);
  const audio = document.querySelector('.inventory__open');

  audio.play();
  
  const newDiv = document.createElement("div");
  newDiv.classList.add('statHint');
  newDiv.style.borderColor = statChanger.style.color;
  newDiv.style.boxShadow = '3px 3px 11px 3px ' + statChanger.style.color;
  newDiv.innerHTML = hintText;
  
  statBlock.style.borderColor = statChanger.style.color;
  statBlock.style.boxShadow = '3px 3px 11px 3px ' + statChanger.style.color;
  statBlock.appendChild(newDiv)
  
  statBlock.addEventListener('mouseout', () => {
    statBlock.style.borderColor = 'rgb(193,243,182)';
    statBlock.style.boxShadow = '3px 3px 11px 3px rgb(58 149 64)';
    newDiv.remove();
    audio.stop();
  })
}