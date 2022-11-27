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

function wetRegulate(elem) {
      if(elem !== undefined) {
        document.querySelector('.characterInfo__bar--wetCount').innerHTML = elem;
        if(elem < 20) {
          document.querySelector('.characterInfo__bar--wet').style.color = '#c8f7ff';
        } else if (elem >= 20 && elem < 50) {
          document.querySelector('.characterInfo__bar--wet').style.color = '#90efff';
        } else if (elem >= 50 && elem < 90) {
          document.querySelector('.characterInfo__bar--wet').style.color = '#7fa3f5';
        } else if (elem >= 90) {
          document.querySelector('.characterInfo__bar--wet').style.color = '#326ef7';
        }
      }
  }

function staminaRegulate(elem) {
      if(elem !== undefined) {
        document.querySelector('.characterInfo__bar--staminaCount').innerHTML = elem;
        if(elem == 100) {
          document.querySelector('.characterInfo__bar--stamina').style.color = 'rgb(109 253 0)';
        } else if (elem <= 70 && elem > 50) {
          document.querySelector('.characterInfo__bar--stamina').style.color = 'rgb(202 253 0)';
        } else if (elem <= 50 && elem > 20) {
          document.querySelector('.characterInfo__bar--stamina').style.color = 'rgb(253 245 0)';
        } else if (elem <= 20) {
          document.querySelector('.characterInfo__bar--stamina').style.color = 'rgb(253 152 0)';
        }
      }
  }