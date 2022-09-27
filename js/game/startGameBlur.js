const startBlur = function () {
  const body = document.querySelector('body');
  //starter blur --variables @terminal.js ---
  skipTerminal.addEventListener('click', () => {
    let addBlur = 8;
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
    addBlur = 8;
  });
  //----------------------------------------------

  //timeout for first choise
  optionButtonsElement.style.display = 'none';
  textElement.style.display = 'none';
  setTimeout(() => {
    optionButtonsElement.style.display = 'block';
    textElement.style.display = 'block';
  }, 15000);
  //-----------------------------------
};


