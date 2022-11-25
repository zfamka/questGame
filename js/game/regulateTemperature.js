function tempRegulate (elem) {
    if(elem !== undefined) {
      document.querySelector('.characterInfo__bar--tempCount').innerHTML = elem;
      if(elem > 20 && elem <= 40) {
        document.querySelector('.characterInfo__bar--temp').style.color = 'rgb(225, 154, 0)';
      } else if (elem <= 20) {
        document.querySelector('.characterInfo__bar--temp').style.color = 'rgb(116, 182, 239)';
      } else if (elem >= 50) {
        document.querySelector('.characterInfo__bar--temp').style.color = 'rgb(225, 82, 0)';
      }
    }
  }