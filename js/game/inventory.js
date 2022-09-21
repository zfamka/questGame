const itemsBracer = document.querySelector('.itemsBracer');
const inventoryMenu = document.querySelector('.inventory__menu');

inventoryMenu.addEventListener('click', (elem) => {
  console.log(elem);
})

let inventoryMenuToogle = false;
itemsBracer.addEventListener('click', () => {

  if (inventoryMenuToogle === false) {
    inventoryMenu.style.left = '-15px';
    inventoryMenuToogle = true;
  } else {
    inventoryMenu.style.left = '-300px';
    inventoryMenuToogle = false;
  }

  itemsBracer.style.transform = 'scale(1)';
  setTimeout(() => {
    itemsBracer.style.transform = 'scale(1.1)';
  }, 100);
});

function addItemInToInventory(textNode, id, allSlots, imgUrl) {
  try {
    if (textNode === id) {
      allSlots.forEach(elem => {
        if (elem.dataset[''] === '0') {
          elem.dataset[''] = '1';
          elem.style.display = 'block';
          elem.src = imgUrl;
          throw ('Break');
        }
      });
    }
  }
  catch {
  }
  // if (textNode === id) {
  //   for (let i = 0; i < allSlots.length; i++) {
  //     if (allSlots[i].dataset[''] === '0') {
  //       allSlots[i].dataset[''] = '1';
  //       allSlots[i].style.display = 'block';
  //       allSlots[i].src = imgUrl;
  //       break;
  //     }
  //   }
  // }
};



