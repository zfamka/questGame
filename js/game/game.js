const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');
const body = document.querySelector('body');
const mainC = document.querySelector('.mainContent');

function startGame() {
  showTextNode(1)
};


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(elem => elem.id === textNodeIndex);
  const textElem = document.createElement('div');

  // change image -----------------------------------------------------------
  mainC.style.background = textNode.image + 'no-repeat center center fixed';
  mainC.style.backgroundSize = 'cover';
  // ------------------------------------------------------------------------

  //starter game blur @startGameBlur.js --------
  if (textNode.id === 1) {
    startBlur();
  }
  //----------------------------------------------

  //----------------- Elea face memories @eleaFaceMemories.js --------
  if (textNode.id === 4) {
    eleaFaceMemories();
  }
  // --------------------------------------------------------------------


  textElem.textContent = textNode.text;
  textElem.classList.add('text');
  textElement.append(textElem);
  textElement.firstChild.remove();
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }


  gameBtns(textNode.options);
};

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
};

function gameBtns(elem) {
  elem.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.text;

    const gameChangeHoverAudio = document.querySelector('.game__changeHover-audio');
    button.addEventListener('click', () => {
      gameChangeHoverAudio.play();
    });

    button.addEventListener('click', () => {
      selectOption(option);
    });
    optionButtonsElement.appendChild(button);
  });
};

const textNodes = [
  {
    id: 1,
    text: `Ти чув як хтось був поряд з тобою, але ледве ти встиг прокинутись він втік. Цікаво хто це був і що він шукав?`,
    image: 'url(../img/living_room_spaceship.png)',
    options: [
      {
        text: `Далі`,
        nextText: 2,
      },
    ]
  },
  {
    id: 2,
    text: `Здається ти прийшов до тями. "Де я? Хто я? Що зі мною сталось? Як болить голова."`,
    image: 'url(../img/logo.png)',
    options: [
      {
        text: `Піднятись з ліжка та обшукати кімнату.`,
        nextText: 5,
      },
      {
        text: `Трохи полежати на ліжку та спробувати щось згадати.`,
        nextText: 4,
      },
    ]
  },
  {
    id: 4,
    text: `У твоїй пам'яті виплива якась дівчина, ти бачиш дуже не чітке, обличчя. "Хто це міг бути? Може я зможу це з'ясувати обшукавши місцевість.`,
    options: [
      {
        text: `Подивитись навколо.`,
        nextText: 5,
      },
    ]
  },
  {
    id: 5,
    text: `В кімнаті так багато речей що обшукати першим.`,
    options: [
      {
        text: `Заглянути до тумби біля ліжка.`,
        nextText: 11,
      },
      {
        text: `Підійти до вікна`,
        nextText: 6,
      },
      {
        text: `Обшукати шафу`,
        nextText: 7,
      },
    ]
  },
  {
    id: 6,
    text: `Усе вікно засипано землею через нього нічого не побачити.`,
    options: [
      {
        text: `Обшукати шафу.`,
        nextText: 7,
      },
      {
        text: `Заглянути до тумби біля ліжка.`,
        nextText: 11,
      },
    ]
  },
  {
    id: 7,
    text: `У шафі так багато речей але твоє око зачепилось за фотографію дівчини.`,
    options: [
      {
        text: `Взяти в руки.`,
        nextText: 8,
      },
    ]
  },
  {
    id: 8,
    text: `На фото молода дівчина. "Хто це? Я її знаю? питань стає лише більше."`,
    options: [
      {
        text: `Повернути фото.`,
        nextText: 9,
      },
    ]
  },
  {
    id: 9,
    text: `На другій стороні підпис. "Elea".`,
    options: [
      {
        text: `Взяти фото.`,
        nextText: 10,
      },
    ]
  },
  {
    id: 10,
    text: `Від твоїх справ тебе відволікає якийсь шум за дверима.`,
    options: [
      {
        text: `incoming`,
        nextText: 0,
      },
    ]
  },
  {
    id: 11,
    text: `В тумбі ти знайшов лист з підписом "Кращому тату".`,
    options: [
      {
        text: `Читати`,
        nextText: 12,
      },
    ]
  },
  {
    id: 12,
    text: `Я знаю що в нас все було не як у мрії, але ми родина і ми дуже сумуємо за тобою і віримо що ти повернешся до нас. З любовью Elea.`,
    options: [
      {
        text: `Взяти`,
        nextText: 13,
      },
    ]
  },
  {
    id: 13,
    text: `"Цей лист мені? Куди я повинен повернутись? Моя донька? Питань стало лише більше."`,
    options: [
      {
        text: `Піти до шафи`,
        nextText: 10,
      },
    ]
  },
]

startGame()

