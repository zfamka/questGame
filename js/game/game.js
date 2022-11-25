const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');
const mainC = document.querySelector('.mainContent');
const helpHint = document.querySelector('.help')
const eleaPhoto = document.querySelector('.eleaPhoto');
const allInventorySlots = document.querySelectorAll('.invetory__menu-slotImg');
const previewItemImage = document.querySelector('.previewItem__image');
const splashFireAudio = document.querySelector('.splash__fire');
const shipInFire = document.querySelector('.ship__inFire');
const startGameAudio = document.querySelector('.game__audio');
const splashFire = document.querySelector('.activeEvent')

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

  //----------------- func @vanishingOpacity.js vanish eleaMemories ID 4 --------
  vanishingOpacity(textNode.id, 4, eleaPhoto, 5000, 6000)
  // --------------------------------------------------------------------

  // add item in to inventory ---------------------------------
  addInventoryItem(textNode.inventoryItem, allInventorySlots);
  // ----------------------------------------------------------

  //------------------- add elea photo/help hint ID 8 -------------------
  if (textNode.id === 8) {
    eleaPhotoWardrobe.style.display = 'block';
    eleaPhotoWardrobePhoto.style.display = 'block';
    eleaPhotoWardrobeBackground.style.display = 'block';
    helpHint.style.display = 'block';
    helpHint.innerHTML = '(Дізнатись більше деталей зажміть "ЛКМ" на зображені)';
  }

  //----------------- func @vanishingOpacity.js vanish elea photo ID 10 --------
  vanishingOpacity(textNode.id, 10, helpHint, 0, 1000);
  vanishingOpacity(textNode.id, 10, eleaPhotoWardrobe, 0, 1000);
  vanishingOpacity(textNode.id, 10, eleaPhotoWardrobePhoto, 0, 1000);
  vanishingOpacity(textNode.id, 10, eleaPhotoWardrobeBackground, 0, 1000);
  //----------------------------------------------------------------------

  //------------------- show preview item -------------------
  showPreviewItem(textNode.previewItem, previewItemImage, textNode.hidePreviewItem);
  //----------------------------------------------------------------------

  textElem.textContent = textNode.text;
  textElem.classList.add('text');
  textElement.append(textElem);
  textElement.firstChild.remove();
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  // temp effects -------------
  isHot(textNode.isHot);
  isRlyHot(textNode.isRlyHot);
  getAburnTrauma(textNode.gotAburnTrauma);
  // -----------------------------------

  // stop all sounds -----------------
  stopAllSounds(textNode.stopAllSounds);
  // ------------------------------------

  // audio event sound ------------
  audioEvent(textNode.eventSound);
  // ----------------------------------------

  // long audio event sound ------------
  backgroundAudio(textNode.longEventSound);
  // ----------------------------------------
  
  // temp regulate -------------
  tempRegulate(textNode.temp);
  // ------------------------------

  if (textNode.id === 18) {
    mainC.style.filter = 'brightness(250%)';
  }
  if (textNode.id === 21) {
    mainC.style.transition = '7s'
    mainC.style.filter = 'brightness(100%)';
    setTimeout(() => {
      mainC.style.transition = '0.4s'
    }, 7000);
  }

  eventAnimation(textNode.activeEventFire, '200ms', 'splashfire', 'rotate', '../img/fireball.png');

  freezeOptionBtnChoice(textNode.awaitBtns, optionButtonsElement, 2000);

  // setTimeout(() => {
  gameBtns(textNode.options);
  // }, 500);


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
    gotAburnTrauma: false,
    temp: 20,
    options: [
      {
        text: `Далі...`,
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
    awaitBtns: true,
    blurItem: true,
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
        text: `Підійти до вікна.`,
        nextText: 6,
      },
      {
        text: `Обшукати шафу.`,
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
    text: `У шафі купа мотлоху але твоє око зачепилось за фотографію дівчини.`,
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
    awaitBtns: true,
    options: [
      {
        text: `Далі...`,
        nextText: 9,
      },
    ]
  },
  {
    id: 9,
    text: `На іншій стороні підпис 
    @"Еліа".`,
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
    inventoryItem: '../img/eleaInventory.jpg',
    options: [
      {
        text: `Підійти до дверей`,
        nextText: 15,
      },
    ]
  },
  {
    id: 11,
    text: `В тумбі ти знайшов лист з підписом "Для -------".`,
    options: [
      {
        text: `Читати...`,
        nextText: 12,
      },
    ]
  },
  {
    id: 12,
    text: `Я знаю що в нас все було не як у мрії, але ми родина і ми дуже сумуємо за тобою і віримо що ти повернешся до нас. З любовью Еліа.`,
    previewItem: '../img/familisheetstartgame.png',
    inventoryItem: '../img/familisheetstartgame.png',
    awaitBtns: true,
    options: [
      {
        text: `Взяти.`,
        nextText: 13,
      },
    ]
  },
  {
    id: 13,
    text: `"Цей лист мені? Куди я повинен повернутись? Питань стало лише більше."`,
    hidePreviewItem: true,
    options: [
      {
        text: `Піти до шафи.`,
        nextText: 7,
      },
    ]
  },
  {
    id: 14,
    text: `Від твоїх справ тебе відволікає якийсь шум за дверима.`,
    options: [
      {
        text: `Підійти до дверей`,
        nextText: 15,
      },
    ]
  },
  {
    id: 15,
    text: `Підійшовши до дверей ти відчув тепло яке йде від них.`,
    isHot: true,
    temp: 35,
    image: 'url(../img/living_room_metal_door.webp)',
    options: [
      {
        text: `Відкрити двері.`,
        nextText: 16,
      },
    ]
  },
  {
    id: 16,
    text: `В обличча вдарив потужний спалах вогню. "Весь корабель палає!!! Треба шукати вихід." Крізь вогонь ліворуч ти бачиш на стіні висить "Сокира", праворуч відніється вулиця.`,
    isHot: false,
    isRlyHot: true,
    temp: 50,
    image: 'url(../img/burn_inside_the_spaceship.jpg)',
    stopAllSounds: true,
    eventSound: splashFireAudio,
    longEventSound: shipInFire,
    activeEventFire: true,
    options: [
      {
        text: `Побігти до сокири.`,
        nextText: 19,
      },
      {
        text: `Побігти на вихід.`,
        nextText: 17,
      },
    ]
  },
  {
    id: 17,
    text: `"Ледве вижив, добре що я почув шум за дверима."`,
    isHot: true,
    isRlyHot: false,
    temp: 35,
    options: [
      {
        text: `Далі...`,
        nextText: 18,
      },
    ]
  },
  {
    id: 18,
    text: `Ви вибігли на вулицю і в очі вам вдарило різке світло.`,
    isHot: false,
    isRlyHot: false,
    temp: 30,
    stopAllSounds: true,
    image: 'url(../img/desertLocation_1.jpg)',
    options: [
      {
        text: `Далі...`,
        nextText: 21,
      },
    ]
  },
  {
    id: 19,
    text: `Ви добігли до сокири вогню становиться все більше і більше.`,
    isHot: false,
    isRlyHot: true,
    temp: 50,
    previewItem: '../img/axeId19.png',
    awaitBtns: true,
    options: [
      {
        text: `Взяти сокиру та бігти до виходу.`,
        nextText: 20,
      },
    ]
  },
  {
    id: 20,
    text: `Пробігаючи крізь вогонь ви отримали опік рук але тепер у вас є "Сокира".`,
    isHot: false,
    isRlyHot: false,
    gotAburnTrauma: true,
    eventSound: splashFireAudio,
    hidePreviewItem: true,
    inventoryItem: '../img/axeId19.png',
    activeEventFire: true,
    options: [
      {
        text: `Далі...`,
        nextText: 18,
      },
    ]
  },
  {
    id: 21,
    text: `Через декілька хвилин як ващі очі звикли до світла ви зрозуміли що знаходитесь в пустелі.`,
    longEventSound: startGameAudio,
    awaitBtns: true,
    image: 'url(../img/desertLocation_1.jpg)',
    options: [
      {
        text: `Далі...`,
        nextText: 1,
      },
    ]
  },
]

startGame()

