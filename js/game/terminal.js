const terminal = ['Планета Чівапчічі.\n', 'Десь у галактиці Телепісі.\n', 'Час та пора року невідома.\n', 'Пошкоджено генератор основного блоку.\n', 'Спостерігається стрімке зниження кисню у повітрі.\n', 'Помічено перебої зі світлом.\n', 'Температура - 22oС\n', 'Кисень - 97 %\n', 'Освітленність - 60%'];

const startTerminal = document.querySelector('.preHistory__startTerminal');
const terminalText = document.querySelector('.preHistory__terminal');
const skipTerminal = document.querySelector('.next');
const terminalSound = document.querySelectorAll('.terminal__sound');
terminalSound.forEach(elem => {
  elem.volume = 0.2;
})
const terminalSoundSpace = document.querySelector('.terminal__soundSpace');
terminalSoundSpace.volume = 0.4;
const companyName = document.querySelector('.companyName');
const terminalNoise = document.querySelector('.terminal__noise')

startTerminal.addEventListener('click', () => {
  terminalNoise.play();
  startTerminal.style.display = 'none';
  companyName.style.display = 'block';
  terminalText.style.display = 'block';
  skipTerminal.style.display = 'block';

  function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let terminalWindow = document.querySelector('.preHistory__terminal');

    function typeLine() {
      let interval = setTimeout(function () {
        out += terminal[line][count];
        terminalWindow.innerHTML = out + '|';
        count++;
        if (count >= terminal[line].length) {
          count = 0;
          line++;
          if (line == terminal.length) {
            clearTimeout(interval);
            terminalWindow.innerHTML = out;
            return true
          }
        }

        function getRandomArbitrary(elem) {
          let terminalTypeSound = Math.floor(Math.random() * (elem));
          return terminalTypeSound
        }

        if (terminal[line][count] === ' ') {
          terminalSoundSpace.play();
        } else {
          terminalSound[getRandomArbitrary(terminalSound.length)].play();
        }

        typeLine();
      }, 100);
    }
    typeLine();
  }
  typeText();
});

skipTerminal.addEventListener('click', () => {
  terminalNoise.volume = 0;
  terminalSound.forEach(elem => {
    elem.volume = 0;
  })
})






