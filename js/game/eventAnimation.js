function eventAnimation(textNode, animationTime, blockAnimation, imgAnimation, srcImage) {
  if (textNode === true) {
    splashFire.style.display = 'block';
    splashFire.style.animation = `${animationTime} linear ${blockAnimation}`;
    document.querySelector('.activeEvent__img').src = `${srcImage}`
    document.querySelector('.activeEvent__img').style.animation = `${animationTime} linear ${imgAnimation}`;

    let stringToNumber = animationTime.split('');
    stringToNumber.pop();
    stringToNumber.pop();
    animationTime = stringToNumber.toString();
    animationTime = animationTime.replace(/,/g, '');

    setTimeout(() => {
      splashFire.style.display = 'none';
    }, animationTime);
  }
}