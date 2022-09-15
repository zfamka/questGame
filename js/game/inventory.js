const itemsBracer = document.querySelector('.itemsBracer');
const inventoryMenu = document.querySelector('.inventory__menu');

let inventoryMenuToogle = false;
itemsBracer.addEventListener('click', () => {

  if (inventoryMenuToogle === false) {
    inventoryMenu.style.left = '0px';
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



