const terminal = ['Планета Чіпуюхі.', 'Десь у галактиці Телепісі', 'Час та пора року невідома.', 'Пошкоджено генератор основного блоку через зіткнення з астероїдом.', 'Спостерігається стрімке зниження кисню у повітрі та перебої із світлом', 'Температура - 22oС', 'Кисень - 97 %', 'Освітленність - 60 %'];



const startTerminal = document.querySelector('.preHistory__startTerminal');
const terminalText = document.querySelector('.preHistory__terminal');
const skipTerminal = document.querySelector('.next');
const terminalSound = document.querySelector('.terminal__sound');

startTerminal.addEventListener('click', () => {
  startTerminal.style.display = 'none';
  terminalText.style.display = 'block';
  skipTerminal.style.display = 'block';
  // terminalSound.loop = true;

  function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let terminalWindow = document.querySelector('.preHistory__terminal');

    function typeLine() {
      let interval = setTimeout(function () {
        out += terminal[line][count];
        terminalWindow.innerHTML = out;
        count++;
        if (count >= terminal[line].length) {
          count = 0;
          line++;
          if (line == terminal.length) {
            clearTimeout(interval);
            return true
          }
        }
        terminalSound.play();
        typeLine();
      }, 200);
    }
    typeLine();
  }

  typeText();
})






