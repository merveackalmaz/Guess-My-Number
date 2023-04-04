'use strict';
/*
console.log(document.querySelector('.message').textContent);
//textContent .message classında yazanı okumamızı sağlıyor.
document.querySelector('.message').textContent = '🎉Correct Number';
//burada = ile .messageda html tarafında yazan start guessing
// kısmını correct number olarak manipüle ettik.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);
//.guess classında ? olan yeri .value ile ifade ettik
document.querySelector('.guess').value = 23;
//ve burda value 23e eşitledik
console.log(document.querySelector('.guess').value);
//bunu tekrar aşağıya çekerek konsolda yazmasını sağladık
*/

/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  //queryselector ile butonu seçtik
  //check butonunu aktive etmek için addeventlistener methodunu çağırıyoruz
  //element.addEventListener(event, fonksiyon, useCapture şeklinde yazılır
  //event: olay türüdür click veya mousedown gibi
  //fonksiyon: olay tetiklendikten sonra çağırılan işlem

  document.querySelector('.message').textContent = '🎉Correct Number';
  //numarayı girip butona bastıktan sonra gösterilecek mesajı ekledik
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //we save it into a variable
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔no number!';
    displayMessage('⛔no number!');

    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? '⬆  Too high!' : '⬇  Too low!';
      displayMessage(guess > secretNumber ? '⬆  Too high!' : '⬇  Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the game';
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
    //when gues is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⬆  Too high!' : '⬇  Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇  Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
