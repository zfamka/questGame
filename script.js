const textNode = [
  {
    id: 1,
    text: 'firstText',
    option: [
      {
        textBtn: 'choise one',
        nextText: 2,
      },
      {
        textBtn: 'choise two',
        nextText: 2,
      }
    ]
  },
  {
    id: 2,
    text: 'secondText',
    option: [
      {
        textBtn: 'choise two',
        nextText: 3,
      }
    ]
  }
];

let text = document.querySelector('.text');
let btns = document.querySelector('.buttons button:first-child');
let btn = document.querySelectorAll('button');

btn.forEach(i => {
  i.addEventListener('click', elem => {
    if (elem.target.classList.contains('1')) {
      text.textContent = textNode[0].text;
    }
  })
})

function showText(text) {

}

function showChoise(choise) {

}



showText(text);