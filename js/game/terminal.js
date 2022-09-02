const terminal = ['Планета: невідома.\n', 'Галактика: невідома.\n', 'Час та пора року: невідома.\n', 'Пошкоджено генератор основного блоку.\n', 'Спостерігається стрімке зниження кисню у повітрі.\n', 'Помічено перебої зі світлом.\n', 'Температура - 42°\n', 'Кисень - 42%\n', 'Освітленність - 50%'];

const startTerminal = document.querySelector('.preHistory__startTerminal');
const terminalText = document.querySelector('.preHistory__terminal');
const skipTerminal = document.querySelector('.next');
const terminalSound = document.querySelectorAll('.terminal__sound');
const terminalSoundSpace = document.querySelector('.terminal__soundSpace');
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
          terminalSoundSpace.currentTime = 0;
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

let addBlur = 8;
skipTerminal.addEventListener('click', () => {
  body.style.filter = 'blur(8px)';
  (function loop() {
    setTimeout(() => {
      body.style.filter = `blur(${addBlur}px)`;
      addBlur = addBlur - 0.05;
      if (Math.floor(addBlur) === -1) {
        body.style.filter = 'blur(0px)';
        return
      }
      loop();
    }, 100);
  })();
  terminalNoise.volume = 0;
  terminalSoundSpace.volume = 0;
  terminalSound.forEach(elem => {
    elem.volume = 0;
  })
  skipTerminal.style.display = 'none';
});






