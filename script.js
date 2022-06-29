const textElement = document.querySelector('.text');
const optionButtonsElement = document.querySelector('.buttons');

function startGame() {
  showTextNode(1)
}

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
    button.textContent = option.text
    button.addEventListener('click', () => {
      selectOption(option);
    })
    optionButtonsElement.appendChild(button);
  });
};

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Ти прокидаєшься',
    options: [
      {
        text: 'Відкрити очі',
        nextText: 2,
      },
    ]
  },
  {
    id: 2,
    text: 'Ні, ти не прокинувся',
    options: [
      {
        text: 'Відкрити очі',
        nextText: 3,
      },
    ]
  },
  {
    id: 3,
    text: 'Бо ти не спав',
    options: [
      {
        text: 'Спробувати ще раз',
        nextText: 4,
      },
    ]
  },
  {
    id: 4,
    text: 'Ти нарешті відкриваєш очі і поступово встаєш на ноги. Тобі не зрозуміло, що коїться та де ти. Ти навіть не впевненний, хто ти сам',
    options: [
      {
        text: 'Подивитися навколо',
        nextText: 5,
      }
    ]
  },
  {
    id: 5,
    text: 'Крізь блимаюче світло, ти бачиш, що все догори дригом, Усюди лежать люди в такій самій формі, як у тебе. Ти не розумієш, мертві вони чи тільки непритомні. Раптом ти згадуєшь, що це космічний корабель',
    options: [
      {
        text: 'Треба якось діяти',
        nextText: 6,
      }
    ]
  },
  {
    id: 6,
    text: 'Ти помічаєш важіль для включення аварійного світла, озираєшься і з іншого боку від тебе бачиш автоматичні двері. Ти чомусь впевненний, що вони ведуть до містка капітана',
    options: [
      {
        text: 'Піти до важеля',
        nextText: 7,
      },
      {
        text: 'Піти до дверей', // виделка
        nextText: 35,
      }
    ]
  },
  {
    id: 7,
    text: 'Ти підходиш до важеля',
    options: [
      {
        text: 'Піти до важеля',
        nextText: 8,
      },
    ]
  },
  {
    id: 8,
    text: 'Так тобі буде краще орієнтуватися',
    options: [
      {
        text: 'Піти до дверей',
        nextText: 9,
      },
    ]
  },
  {
    id: 9,
    text: 'Коли ти йдешь, помічаєшь тепер багато крові навколо. Не всім пощастило так, як тобі. Тебе починає нудити',
    options: [
      {
        text: 'Йти далі',
        nextText: 10,
      },
    ]
  },
  {
    id: 10,
    text: 'Коли ти підходиш ближче до дверей, щойно почавши відкриватися, вони зупиняються. Певно, механізм несправний або щось заважає. Отвір меж дверами доволі вузький',
    options: [
      {
        text: 'Протиснутися',
        nextText: 11,
      },
    ]
  },
  {
    id: 11,
    text: 'Протиснутися через отвір не виходить, треба спробувати роздвинути двері',
    options: [
      {
        text: 'Роздвинути двері руками',
        nextText: 12,
      },
    ]
  },
  {
    id: 12,
    text: 'Ти хапаєшся за двері та щосили починаєш їх роздвигати',
    options: [
      {
        text: 'Роздвинути', //push more times
        nextText: 13,
      },
    ]
  },
  {
    id: 13,
    text: 'Тобі вдається відкрити їх достатньо щоб зайти всередину',
    options: [
      {
        text: 'Оглянути місток капітана',
        nextText: 14,
      },
    ]
  },
  {
    id: 14,
    text: 'Тут все також далеко не радісно. Ти починаєш шкодувати, що включив аварійне світло. Прямо навпроти тебе панель керування кораблем',
    options: [
      {
        text: 'Підійти ближче до неї',
        nextText: 15,
      },
    ]
  },
  {
    id: 15,
    text: 'Ти бачиш багато різних кнопок, важелів, регуляторів, екранів та іншого. Ти взагалі не розумієш, що робити. Але може десь є інструкція',
    options: [
      {
        text: 'Шукати інструкцію',
        nextText: 16,
      },
    ]
  },
  {
    id: 16,
    text: 'Пошук по всім можливим місьцям не дає потрібного рузультату. Серед знахідок є тільки блокнот і ручка. Але навіщо вони зараз потрібні',
    options: [
      {
        text: 'Взяти блокнот і ручку',
        nextText: 17,
      },
      {
        text: 'Не брати',
        nextText: 27, //виделка
      },
    ]
  },
  {
    id: 17,
    text: `Несподівано ти чуєш чийсь голос "Сюди, скоріше!"`,
    options: [
      {
        text: 'Побігти на голос',
        nextText: 18,
      },
    ]
  },
  {
    id: 18,
    text: 'Ти підбигаєш у дальній кут містка і бачиш чоловіка, який дуже стікає кровью',
    options: [
      {
        text: '"Як я можу тобі допомгти?"',
        nextText: 19,
      },
    ]
  },
  {
    id: 19,
    text: `Чоловік ледве вимовляє "Слухай мене уважно...мені вже не допомогти...проте на кораблі є ще безліч людей...і завдяки тобі...в них ще може бути шанс"`,
    options: [
      {
        text: 'Слухати далі',
        nextText: 20,
      },
    ]
  },
  {
    id: 20,
    text: `"Тобі треба повернутися до панелі керування і... (каже порядок дій, не можу придумати щоб виглядало не безглуздо)"`,
    options: [
      {
        text: 'Записати',
        nextText: 21,
      },
    ]
  },
  {
    id: 21,
    text: `Пощастило, що ти забрав той блокнот "Завдяки цим діям корабель має вирівняти рух, стати на автопілот і полетіти на нашу базу"`,
    options: [
      {
        text: '"Зрозумів"',
        nextText: 22,
      },
    ]
  },
  {
    id: 22,
    text: 'Ти повертаєшся. Знервованний шукаєш очима всі потрібні елементи керування. Ціна твоєї помилки занадто велика',
    options: [
      {
        text: `"Розпочати"`,
        nextText: 23,
      },
    ]
  },
  {
    id: 23,
    text: `Ти дістаєш блокнот і згідно запису робишь необхідні дії`,
    options: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        nextText: 25,
      },
      {
        text: 'Elit ipsum dolor sit adipisicing consectetur amet lorem.',
        nextText: 26,
      },
      {
        text: 'Lorem consectetur sit dolor amet ipsum adipisicing elit.',
        nextText: 26,
      },
      {
        text: 'Lorem ipsum dolor sit consectetur amet elit adipisicing.',
        nextText: 26,
      },
    ]
  },
  {
    id: 25,
    text: 'Ти все зробив правильно! Зореліт вирівняв рух і полетів додому. Здається, щойно ти врятував себе та безліч інших людських життів. Щасливої дороги!',
    options: [
      {
        text: '<3',
        nextText: -1,
      },
    ]
  },
  {
    id: 26,
    text: 'Мабудь через твій поганий почерк ти помилився і тепер цей космічний корабель та всіх, хто на ньому, зможе врятувати тільки диво',
    options: [
      {
        text: 'Спробувати ще раз',
        nextText: -1,
      },
    ]
  },
  {
    id: 27,
    text: 'Несподівано ти чуєш чийсь голос "Сюди, скоріше!"',
    options: [
      {
        text: 'Побігти на голос',
        nextText: 28,
      },
    ]
  },
  {
    id: 28,
    text: 'Ти підбигаєш у дальній кут містка і бачиш чоловіка, який дуже стікає кровью',
    options: [
      {
        text: `"Як я можу тобі допомгти?"`,
        nextText: 29,
      },
    ]
  },
  {
    id: 29,
    text: `Чоловік ледве вимовляє
    "Слухай мене уважно... мені вже не допомогти... проте на кораблі є ще безліч людей... і завдяки тобі... в них ще може бути шанс"""`,
    options: [
      {
        text: `Слухати далі`,
        nextText: 30,
      },
    ]
  },
  {
    id: 30,
    text: `Тобі потрібно повернутися до панелі керування і... (каже порядок дій, не можу придумати щоб виглядало не безглуздо)`,
    options: [
      {
        text: `"Для чого це?"`,
        nextText: 31,
      },
    ]
  },
  {
    id: 31,
    text: `"Завдяки цим діям корабель має вирівняти рух, стати на автопілот і полетіти на нашу базу"`,
    options: [
      {
        text: `"Зрозумів"`,
        nextText: 32,
      },
    ]
  },
  {
    id: 32,
    text: 'Ти повертаєшся. Знервованний шукаєш очима всі потрібні елементи керування. Ціна твоєї помилки занадто велика',
    options: [
      {
        text: `Розпочати`,
        nextText: 33,
      },
    ]
  },
  {
    id: 33,
    text: `Ти згадуєш такий порядок необхідих дій`,
    options: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        nextText: 25,
      },
      {
        text: 'Elit ipsum dolor sit adipisicing consectetur amet lorem.',
        nextText: 34,
      },
      {
        text: 'Lorem consectetur sit dolor amet ipsum adipisicing elit.',
        nextText: 34,
      },
      {
        text: 'Lorem ipsum dolor sit consectetur amet elit adipisicing.',
        nextText: 34,
      },
    ]
  },
  {
    id: 34,
    text: `Нажаль ти погано запам'ятав, що треба робити, і тепер цей космічний корабель та всіх, хто на ньому, зможе врятувати тільки диво`,
    options: [
      {
        text: `Try again`,
        nextText: -1,
      }
    ]
  },
  {
    id: 35,
    text: `Коли ти підходиш до дверей, щойно почавши відкриватися, вони зупиняються. Певно, механізм несправний або щось заважає. Отвір меж дверами доволі вузький`,
    options: [
      {
        text: `Протиснутися`,
        nextText: 36,
      }
    ]
  },
  {
    id: 36,
    text: `Протиснутися через отвір не виходить, треба спробувати роздвинути двері`,
    options: [
      {
        text: `Роздвинути двері руками`,
        nextText: 37,
      }
    ]
  },
  {
    id: 37,
    text: `Ти хапаєшся за двері та щосили починаєш їх роздвигати`,
    options: [
      {
        text: `Роздвинути (треба натиснути багато разів)`,
        nextText: 38,
      }
    ]
  },
  {
    id: 38,
    text: `Тобі вдається відкрити їх достатньо щоб зайти всередину`,
    options: [
      {
        text: `Оглянути місток капітана`,
        nextText: 40,
      }
    ]
  },
  {
    id: 40,
    text: `Коли ти зайшов на місток, у тебе з'явилося відчуття, що може ти і є капітан. Недаремно ж тебе одразу понесло до містка. У блимаючому світлі твій погляд привернуло два місця: капітанське крісло та панель керування`,
    options: [
      {
        text: `Піти до сидиння капітана`,
        nextText: 41,
      },
      {
        text: `Піти до панелі керування`, //виделка
        nextText: 48,
      },
    ]
  },
  {
    id: 41,
    text: `"Ти підходиш до крісла капітана і бачиш, що перед ним на підлозі лежить мертвий чоловік з розбитою головою, на ньому капітаньска форма. Маленьке розчарування швидко минає, бо ти несподівано чуєш чийсь голос
    ""Сюди, скоріше!"""`,
    options: [
      {
        text: `Побігти на голос`,
        nextText: 42,
      }
    ]
  },
  {
    id: 42,
    text: `Ти підбигаєш у дальній кут містка і бачиш чоловіка, який дуже стікає кровью`,
    options: [
      {
        text: `"Як я можу тобі допомгти?"`,
        nextText: 43,
      }
    ]
  },
  {
    id: 43,
    text: `"Чоловік ледве вимовляє
    ""Слухай мене уважно... мені вже не допомогти... проте на кораблі є ще безліч людей... і завдяки тобі... в них ще може бути шанс"""`,
    options: [
      {
        text: `Слухати далі`,
        nextText: 44,
      }
    ]
  },
  {
    id: 44,
    text: `Тобі потрібно повернутися до панелі керування і... (каже порядок дій, не можу придумати щоб виглядало не безглуздо)`,
    options: [
      {
        text: `"Для чого це?"`,
        nextText: 45,
      }
    ]
  },
  {
    id: 45,
    text: `"Завдяки цим діям корабель має вирівняти рух, стати на автопілот і полетіти на нашу базу"`,
    options: [
      {
        text: `"Зрозумів"`,
        nextText: 46,
      }
    ]
  },
  {
    id: 46,
    text: `Ти біжиш до панелі керування. Знервованний шукаєш очима всі потрібні елементи керування. Ціна твоєї помилки занадто велика`,
    options: [
      {
        text: `Розпочати`,
        nextText: 47,
      }
    ]
  },
  {
    id: 47,
    text: `Ти згадуєш такий порядок необхідих дій`,
    options: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        nextText: 25,
      },
      {
        text: 'Elit ipsum dolor sit adipisicing consectetur amet lorem.',
        nextText: 34,
      },
      {
        text: 'Lorem consectetur sit dolor amet ipsum adipisicing elit.',
        nextText: 34,
      },
      {
        text: 'Lorem ipsum dolor sit consectetur amet elit adipisicing.',
        nextText: 34,
      },
    ]
  },
  {
    id: 48,
    text: `Ти бачиш багато різних кнопок, важелів, регуляторів, екранів та іншого. Ти не впевненний, що з ними робити, але якщо ти справді капітан, то можешь спробувати скористуватися м'язовою пам'яттю. Або ж пошукати інструкцію`,
    options: [
      {
        text: `Задіяти м'язову пам'ять`,
        nextText: 49,
      },
      {
        text: `Пошукати інструкцію`,
        nextText: 52,
      },
    ]
  },
  {
    id: 49,
    text: `Твої руки знають, що робити`,
    options: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        nextText: 50,
      },
      {
        text: 'Elit ipsum dolor sit adipisicing consectetur amet lorem.',
        nextText: 51,
      },
      {
        text: 'Lorem consectetur sit dolor amet ipsum adipisicing elit.',
        nextText: 51,
      },
      {
        text: 'Lorem ipsum dolor sit consectetur amet elit adipisicing.',
        nextText: 51,
      },
    ]
  },
  {
    id: 50,
    text: `Так! Ти однозначно капітан... або машиніст... або незрівнянно фартова людина! Ти все зробив правильно! Зореліт вирівняв рух і полетів додому. Здається, щойно ти врятував себе та безліч інших людських життів. Щасливої дороги!`,
    options: [
      {
        text: `u do it bruh`,
        nextText: -1,
      }
    ]
  },
  {
    id: 51,
    text: `Нажаль, ти все-таки мабудь не капітан. і тепер цей космічний корабель та всіх, хто на ньому, зможе врятувати тільки диво`,
    options: [
      {
        text: `сумний трамбон`,
        nextText: -1,
      }
    ]
  },
  {
    id: 52,
    text: `Пошук по всім можливим місьцям не дає потрібного рузультату. Але несподівано ти чуєш чийсь голос
    "Сюди, скоріше!"""`,
    options: [
      {
        text: `Побігти на голос`,
        nextText: 53,
      }
    ]
  },
  {
    id: 53,
    text: `Ти підбигаєш у дальній кут містка і бачиш чоловіка, який дуже стікає кровью`,
    options: [
      {
        text: `"Як я можу тобі допомгти?"`,
        nextText: 54,
      }
    ]
  },
  {
    id: 54,
    text: `Чоловік ледве вимовляє
    "Слухай мене уважно... мені вже не допомогти... проте на кораблі є ще безліч людей... і завдяки тобі... в них ще може бути шанс"""`,
    options: [
      {
        text: `Слухати далі`,
        nextText: 55,
      }
    ]
  },
  {
    id: 55,
    text: `Тобі потрібно повернутися до панелі керування і... (каже порядок дій, не можу придумати щоб виглядало не безглуздо)`,
    options: [
      {
        text: `"Для чого це?"`,
        nextText: 56,
      }
    ]
  },
  {
    id: 56,
    text: `"Завдяки цим діям корабель має вирівняти рух, стати на автопілот і полетіти на нашу базу"`,
    options: [
      {
        text: `"Зрозумів"`,
        nextText: 57,
      }
    ]
  },
  {
    id: 57,
    text: `Ти повертаєшся. Знервованний шукаєш очима всі потрібні елементи керування. Ціна твоєї помилки занадто велика`,
    options: [
      {
        text: `Розпочати`,
        nextText: 58,
      }
    ]
  },
  {
    id: 58,
    text: `Ти згадуєш такий порядок необхідих дій (на екрані близько десятка слів, які треба натискати в правильному порядку, який ніде не записаний, але гравець міг запам'ятати)`,
    options: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        nextText: 25,
      },
      {
        text: 'Elit ipsum dolor sit adipisicing consectetur amet lorem.',
        nextText: 34,
      },
      {
        text: 'Lorem consectetur sit dolor amet ipsum adipisicing elit.',
        nextText: 34,
      },
      {
        text: 'Lorem ipsum dolor sit consectetur amet elit adipisicing.',
        nextText: 34,
      },
    ]
  },
]

startGame()