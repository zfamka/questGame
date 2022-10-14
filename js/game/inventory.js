const itemsBracer = document.querySelector('.itemsBracer');
const inventoryMenu = document.querySelector('.inventory__menu');
const inventoryOpenItem = document.querySelector('.inventoryOpenItem');
const inventoryOpenItemImg = document.querySelector('.inventoryOpenItem img');
const inventoryOpenItemP = document.querySelector('.inventoryOpenItem p');
const inventoryCloseItem = document.querySelector('.inventoryCloseItem');

inventoryMenu.addEventListener('click', (elem) => {
  const mainC = document.querySelector('.mainContent');

  inventoryOpenItemImg.src = elem.target.src
  inventoryOpenItem.style.display = 'flex';
  inventoryOpenItem.style.opacity = '1';
  mainC.style.filter = 'grayscale(100%)';
  mainC.style.pointerEvents = 'none';
  inventoryOpenItem.style.filter = 'graysclae(0%)';
});

inventoryCloseItem.addEventListener('click', () => {
  const mainC = document.querySelector('.mainContent');
  vanishingOpacityWithDisplayFlex(inventoryOpenItem, 0, 500);
  mainC.style.pointerEvents = 'auto';
  mainC.style.filter = 'grayscale(0%)';
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

function addInventoryItem(object, inventory) {
  if (object !== undefined) {
    try {
      inventory.forEach(elem => {
        if (elem.dataset[''] === '0') {
          elem.dataset[''] = '1';
          elem.style.display = 'block';
          elem.src = object;
          throw ('Break');
        }
      });
    }
    catch {
    }
  }
}



