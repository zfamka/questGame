const textNodes = [
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

let textElement = document.querySelector('.text');
let btns = document.querySelector('.buttons');

function showText(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    for (let k = 0; k < text[i].option.length; k++) {
      console.log(text[i].option)
    }
  }

};

showText(textNodes);