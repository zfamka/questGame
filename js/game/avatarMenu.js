document.querySelector('.characterInfo__temp').addEventListener('mouseover', () => {
  changeStatColor('temp')
})

document.querySelector('.characterInfo__wet').addEventListener('mouseover', () => {
  changeStatColor('wet', '75px')
})

document.querySelector('.characterInfo__stamina').addEventListener('mouseover', () => {
  changeStatColor('stamina', '-15px')
})

function changeStatColor(color, position = null) {
  const statBlock = document.querySelector(`.characterInfo__${color}`);
  const statChanger = document.querySelector(`.characterInfo__bar--${color}`);

  const newDiv = document.createElement("div");
  newDiv.classList.add('statHint');
  newDiv.style.borderColor = statChanger.style.color;
  newDiv.style.boxShadow = '3px 3px 11px 3px ' + statChanger.style.color;
  newDiv.innerHTML = 'some hint for players';
  newDiv.style.right = `${position}`;

  statBlock.style.borderColor = statChanger.style.color;
  statBlock.style.boxShadow = '3px 3px 11px 3px ' + statChanger.style.color;
  statBlock.appendChild(newDiv)

  statBlock.addEventListener('mouseout', () => {
    statBlock.style.borderColor = 'rgb(193,243,182)';
    statBlock.style.boxShadow = '3px 3px 11px 3px rgb(58 149 64)';
    newDiv.remove();
  })
}