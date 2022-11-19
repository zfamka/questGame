const startBlur = function () {
  const body = document.querySelector('body');
  const invPanel = document.querySelector('.navPanel ')
  //starter blur --variables @terminal.js ---
  skipTerminal.addEventListener('click', () => {
    let addBlur = 8;
    body.style.filter = 'blur(8px)';
    (function loop() {
      setTimeout(() => {
        body.style.filter = `blur(${addBlur}px)`;
        addBlur = addBlur - 0.50;
        //0.05 for fast 0.50
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
    addBlur = 8;
  });
  //----------------------------------------------

  //timeout for first choise
  optionButtonsElement.style.opacity = '0';
  textElement.style.display = 'none';
  invPanel.style.opacity = '0';
  invPanel.style.transition = 'opacity 1s'

  setTimeout(() => {
    optionButtonsElement.style.opacity = '1';
    textElement.style.display = 'block';
    invPanel.style.opacity = '1';
  }, 1.5);
  //--------15000 for fast 1.5---------------------------
};


