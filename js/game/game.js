const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');
const scrim = document.querySelector('.scrim');
const image = document.querySelector('.image');
const body = document.querySelector('body');


const allAudio = document.querySelectorAll('audio')
const volume = localStorage.getItem('volume');
allAudio.forEach(elem => {
  elem.volume = volume;
})

function addGameImage(gameObj, id, gameImg, url) {
  if (gameObj === id) {
    gameImg.style.background = url;
    gameImg.style.backgroundRepeat = 'no-repeat center';
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

  addGameImage(textNode.id, 1, image, 'url(../img/startGameLocation.jpg)');
  addGameImage(textNode.id, 3, image, 'url(../img/scary_face.jfif)');
  addSound(textNode.id, 3);

  if (textNode.id === 3) {
    body.classList.add('scareOpa')
  }

  textElem.textContent = textNode.text;
  textElem.classList.add('text');
  textElement.append(textElem);
  textElement.firstChild.remove();
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  if (textNode.id === 1) {
    optionButtonsElement.style.display = 'none';
    setTimeout(() => {
      optionButtonsElement.style.display = 'block';
    }, 21000)
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
    text: 'бла бла бла',
    options: [
      {
        text: 'бла бла бла',
        nextText: 2,
      },
    ]
  },
  {
    id: 2,
    text: 'бла бла бла',
    options: [
      {
        text: 'бла бла бла',
        nextText: 3,
      },
    ]
  },
  {
    id: 3,
    text: 'Ти приходиш до тями.',
    options: [
      {
        text: 'Піднятись',
        nextText: 4,
      },
    ]
  },
  {
    id: 4,
    text: 'Твої руки не витримують вагу твого тіла і ти знов падаєш.',
    options: [
      {
        text: 'Покликати на допомогу',
        nextText: 5,
      },
      {
        text: 'Ще раз спробувати піднятися',
        nextText: 7,
      },
    ]
  },
  {
    id: 5,
    text: 'Ти кличеш, чекаєш, але ніхто до тебе не підходить.',
    options: [
      {
        text: 'Ще раз покликати на допомогу',
        nextText: 6,
      },
      {
        text: 'Ще раз спробувати піднятися',
        nextText: 3,
      },
    ]
  },
  {
    id: 6,
    text: 'Усе марно. Краще вкласти свої сили в більш корисні речі.',
    options: [
      {
        text: 'Ще раз спробувати піднятися',
        nextText: 7,
      },
    ]
  },
  {
    id: 7,
    text: 'Ти підбираєш спочатку руки, потім ноги та щосили намагаєшся встати.',
    options: [
      {
        text: 'Встати (швидко натискати декілька разів)',
        nextText: 8,
      },
    ]
  },
  {
    id: 8,
    text: 'Ти піднімаєшся та відчуваєш пекельну біль по всьому тілу, більше за все болить голова.',
    options: [
      {
        text: 'Оглянути себе',
        nextText: 9,
      },
      {
        text: 'Помацати голову',
        nextText: 10,
      },
      {
        text: 'Ігнорувати біль',
        nextText: 11,
      },
    ]
  },
  {
    id: 9,
    text: 'У темряві ти помічаєш лиш декілька синців, крові начебто не має.',
    options: [
      {
        text: 'Озирнутися навколо',
        nextText: 13,
      },
      {
        text: 'Обшукати кишені',
        nextText: 12,
      },
    ]
  },
  {
    id: 10,
    text: 'Ти не відчуваєш, що десь тиче кров, на лобі є тільки велика гуля.',
    options: [
      {
        text: 'Озирнутися навколо',
        nextText: 13,
      },
      {
        text: 'Обшукати кишені',
        nextText: 12,
      },
    ]
  },
  {
    id: 11,
    text: 'Ти вирішив потім розібратися зі своїм самопучуттям, зараз треба скоріш діяти',
    options: [
      {
        text: 'Озирнутися навколо',
        nextText: 13,
      },
      {
        text: 'Обшукати кишені',
        nextText: 12,
      },
    ]
  },
  {
    id: 12,
    text: 'Пройшовши руками по одягу ти розумієш, що, на жаль, кишень у тебе взагалі не має.',
    options: [
      {
        text: 'Озирнутися навколо',
        nextText: 13,
      },
    ]
  },
  {
    id: 13,
    text: 'Ти озираєшся навколо. Усюди темрява, деінде блимає світло та іскрить.',
    options: [
      {
        text: 'Прислухатися',
        nextText: 0,
      },
      {
        text: 'Придивитись',
        nextText: 0,
      },
    ]
  },
]

startGame()