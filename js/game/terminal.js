const terminal = ['Планета: невідома.\n', 'Галактика: невідома.\n', 'Час та пора року: невідома.\n', 'Пошкоджено генератор основного блоку.\n', 'Спостерігається стрімке зниження кисню у повітрі.\n', 'Помічено перебої зі світлом.\n', 'Температура - 42°\n', 'Кисень - 42%\n', 'Освітленність - 50%'];

document.querySelector('.preHistory__startTerminal').addEventListener('click', () => {
  const startTerminal = document.querySelector('.preHistory__startTerminal');
  const terminalText = document.querySelector('.preHistory__terminal');
  const skipTerminal = document.querySelector('.next');
  const terminalSound = document.querySelectorAll('.terminal__sound');
  const terminalSoundSpace = document.querySelector('.terminal__soundSpace');
  const companyName = document.querySelector('.companyName');
  const terminalNoise = document.querySelector('.terminal__noise');

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








