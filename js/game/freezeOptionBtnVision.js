function freezeOptionBtnChoice(awaitBtns, buttons, freezeTime) {
  if (awaitBtns !== undefined) {
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
    setTimeout(() => {
      buttons.style.opacity = '1';
      buttons.style.pointerEvents = 'all';
    }, freezeTime);
  }
}