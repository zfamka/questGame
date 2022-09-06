const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');
const scrim = document.querySelector('.scrim');
const body = document.querySelector('body');
const mainC = document.querySelector('.mainContent');
const eleaPhoto = document.querySelector('.eleaPhoto');


const allAudio = document.querySelectorAll('audio')
const volume = localStorage.getItem('volume');
allAudio.forEach(elem => {
  elem.volume = volume;
})

function addGameImage(gameObj, id, gameImg, url) {
  if (gameObj === id) {
    gameImg.style.background = url + 'no-repeat center center fixed';
    gameImg.style.backgroundSize = 'cover';
  }
};

function addSound(elem, id) {
  if (elem === id) {
    scrim.play();
  }
};

function startGame() {
  showTextNode(1)
};

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(elem => elem.id === textNodeIndex);
  const textElem = document.createElement('div');

  addGameImage(textNode.id, 1, mainC, 'url(../img/living_room_spaceship.png)');
  addSound(textNode.id, 3);

  if (textNode.id === 3) {
    body.classList.add('scareOpa');
  }

  //----------------- Elea photo ID 4
  if (textNode.id === 4) {
    eleaPhoto.style.display = 'block';
    optionButtonsElement.style.opacity = '0';
    setTimeout(() => {
      eleaPhoto.style.opacity = '0';
      optionButtonsElement.style.opacity = '1';
    }, 5000);
    setTimeout(() => {
      eleaPhoto.style.display = 'none';
    }, 6000);
  };
  // --------------------------------------

  textElem.textContent = textNode.text;
  textElem.classList.add('text');
  textElement.append(textElem);
  textElement.firstChild.remove();
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  if (textNode.id === 1) {
    optionButtonsElement.style.display = 'none';
    textElement.style.display = 'none';
    setTimeout(() => {
      optionButtonsElement.style.display = 'block';
      textElement.style.display = 'block';
    }, 15000)
  }

  btnSounds(textNode.options);
};

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
};

function btnSounds(elem) {
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
}

const textNodes = [
  {
    id: 1,
    text: `Ти чув як хтось був поряд з тобою, але ледве ти встиг прокинутись він втік. Цікаво хто це був і що він шукав?`,
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

