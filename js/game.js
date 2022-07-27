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
    text: 'Ти приходиш до тями.',
    options: [
      {
        text: 'Піднятись',
        nextText: 2,
      },
    ]
  },
  {
    id: 2,
    text: 'Твої руки не витримують вагу твого тіла і ти знов падаєш.',
    options: [
      {
        text: 'Покликати на допомогу',
        nextText: 3,
      },
      {
        text: 'Ще раз спробувати піднятися',
        nextText: 3, //виделка
      },
    ]
  },
]

startGame()