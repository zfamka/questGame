let partOneFirstChoise = document.querySelector('.part_1 .one');
let partOneSecondChoise = document.querySelector('.part_1 .two');
let partOneLastChoise = document.querySelector('.part_1 .three');

let partTwoFirstChoise = document.querySelector('.part_2 .one');
let partTwoSecondChoise = document.querySelector('.part_2 .two');
let partTwoLastChoise = document.querySelector('.part_2 .three');

let partOne = document.querySelector('.part_1');
let partTwo = document.querySelector('.part_2');
let partTwoOne = document.querySelector('.part_2-1');
let partTwoTwo = document.querySelector('.part_2-2');
let partTwoThree = document.querySelector('.part_2-3');
let partThree = document.querySelector('.part_3');

partOneFirstChoise.addEventListener('click', () => {
  alert('you die');
  partOne.classList.add('disable');
});

partOneSecondChoise.addEventListener('click', () => {
  partOne.classList.add('disable');
  partTwo.classList.remove('disable');
});

partOneLastChoise.addEventListener('click', () => {
  partOne.classList.add('disable');
  partThree.classList.remove('disable');
});

partTwoFirstChoise.addEventListener('click', () => {
  partTwo.classList.add('disable');
  partTwoOne.classList.remove('disable');
});

partTwoSecondChoise.addEventListener('click', () => {
  partTwo.classList.add('disable');
  partTwoTwo.classList.remove('disable');
})

partTwoLastChoise.addEventListener('click', () => {
  partTwo.classList.add('disable');
  partTwoThree.classList.remove('disable');
})