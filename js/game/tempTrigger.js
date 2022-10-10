function temperatureTriger(event, text, btns, inventory, cssStyleText) {
  if (event === true) {
    text.classList.add(`${cssStyleText}`);
    btns.classList.add(`${cssStyleText}`);
    inventory.classList.add(`${cssStyleText}`);
  } else if (event === false) {
    text.classList.remove(`${cssStyleText}`);
    btns.classList.remove(`${cssStyleText}`);
    inventory.classList.remove(`${cssStyleText}`);
  }
}