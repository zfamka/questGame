const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');

function startGame() {
  showTextNode(1)
};

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(elem => elem.id === textNodeIndex);
  const textElem = document.createElement('div');
  textElem.textContent = textNode.text;
  textElem.classList.add('text');
  textElement.append(textElem);
  textElement.firstChild.remove();
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
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

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
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
]

startGame()