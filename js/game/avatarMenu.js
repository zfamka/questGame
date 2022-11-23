document.querySelector('.characterInfo__temp').addEventListener('mouseover', () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add('statHint');
  newDiv.innerHTML = 'some hint for players';
  document.querySelector('.characterInfo__temp').appendChild(newDiv)
  document.querySelector('.characterInfo__temp').addEventListener('mouseout', () => {
    newDiv.remove();
  })
})

document.querySelector('.characterInfo__wet').addEventListener('mouseover', () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add('statHint');
  newDiv.innerHTML = 'some hint for players';
  newDiv.style.right = '80px';
  document.querySelector('.characterInfo__temp').appendChild(newDiv)
  document.querySelector('.characterInfo__wet').addEventListener('mouseout', () => {
    newDiv.remove();
  })
})

document.querySelector('.characterInfo__stamina').addEventListener('mouseover', () => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = 'some hint for players';
  newDiv.classList.add('statHint');
  newDiv.style.right = '-15px';
  document.querySelector('.characterInfo__temp').appendChild(newDiv)
  document.querySelector('.characterInfo__stamina').addEventListener('mouseout', () => {
    newDiv.remove();
  })
})
