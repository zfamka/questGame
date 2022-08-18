const tapPush = document.querySelector('.tapPush');
const tapProgressPush = document.querySelector('.tapProgressPush');
let count = 5;

tapPush.addEventListener('click', () => {
  tapProgressPush.style.width = `${count}%`;
  count += 5;
})