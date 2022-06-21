const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');

function startGame() {
  showTextNode(1)
};

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.textContent = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  };

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.textContent = option.text;
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
};

function showOption(option) {
  return true
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  showTextNode(nextTextNodeId);
};

const textNodes = [
  {
    id: 1,
    text: 'first page hehe',
    options: [
      {
        text: 'fisrt choise',
        nextText: 2,
      },
      {
        text: 'second choise',
        nextText: 2,
      },
      {
        text: 'last choise',
        nextText: 3,
      },
    ]
  },
  {
    id: 2,
    text: 'second page hehe',
    options: [
      {
        text: '2first choise',
        nextState: 3,
      },
      {
        text: '2second choise',
        nextState: 3
      }
    ]
  },
  {
    id: 3,
    text: 'YOOU DIIIIEEEE hehe',
  }
]

startGame();