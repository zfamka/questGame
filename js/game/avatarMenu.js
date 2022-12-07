document.querySelector('.characterInfo__temp').addEventListener('mouseover', () => {
  function temp() {
    const elem = document.querySelector('.characterInfo__bar--tempCount');
    if(elem.innerHTML > 20 && elem.innerHTML <= 40) {
      return 'you are good';
    } else if(elem.innerHTML <= 20) {
      return 'a bit cold but you are old and gold';
    } else if (elem.innerHTML >= 50) {
      return 'speka';
    }
  }
  changeStatColor('temp', temp());
})

document.querySelector('.characterInfo__wet').addEventListener('mouseover', () => {
  changeStatColor('wet', 'wet');
})

document.querySelector('.characterInfo__stamina').addEventListener('mouseover', () => {
  changeStatColor('stamina', 'stamina');
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