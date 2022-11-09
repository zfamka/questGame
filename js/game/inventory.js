(function () {
  const itemsBracer = document.querySelector('.itemsBracer');
  const inventoryMenu = document.querySelector('.inventory__menu');
  const inventoryOpenItem = document.querySelector('.inventoryOpenItem');
  const inventoryOpenItemImg = document.querySelector('.inventoryOpenItem img');
  const inventoryOpenItemText = document.querySelector('.invertoryOpenItem__info');
  const inventoryCloseItem = document.querySelector('.inventoryCloseItem');

  inventoryMenu.addEventListener('click', (elem) => {
    const mainC = document.querySelector('.mainContent');

    inventoryCloseItem.style.opacity = '0';
    inventoryCloseItem.style.pointerEvents = 'none';

    setTimeout(() => {
      inventoryCloseItem.style.opacity = '1';
      inventoryCloseItem.style.pointerEvents = 'auto';
      inventoryCloseItem.style.transition = '1s';
    }, 2000)

    inventoryOpenItemImg.src = elem.target.src
    inventoryOpenItem.style.display = 'flex';
    inventoryOpenItem.style.opacity = '1';
    mainC.style.filter = 'grayscale(100%)';
    inventoryOpenItem.style.filter = 'graysclae(0%)';
  });

  inventoryCloseItem.addEventListener('click', () => {
    const mainC = document.querySelector('.mainContent');
    vanishingOpacityWithDisplayFlex(1, 1, inventoryOpenItem, 0, 500);
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
}())

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

function showPreviewItem(item, place, hide) {
  if (item !== undefined) {
    document.querySelector('.previewItem').style.display = 'flex';
    place.style.display = 'block';
    place.src = item;
  } else if (hide === true) {
    setTimeout(() => {
      document.querySelector('.previewItem').style.display = 'none';
    }, 1000)
    vanishingOpacity(1, 1, place, 0, 1000);
    console.log('hello')
  }
}


