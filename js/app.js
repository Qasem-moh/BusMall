/* eslint-disable no-dupe-else-if */
/* eslint-disable new-cap */
'use strict';
let attempts = 0;
let maxAttempts = 25;
let attemptsEl = document.getElementById('attempts');
//create empty array
let imagesCon = [];
// eslint-disable-next-line no-unused-vars
function productImag(ImgSource) {
  this.ImgSource = ImgSource.split('.')[0];
  this.sourceImg = 'assets/' + ImgSource;
  this.clicksImg = 0;
  this.viewsImg = 0;
  //pushing constructor to array
  imagesCon.push(this);
}
// create array for image to random it
let assetsImage = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'blegum.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg',
];
// consoling data array
console.log(imagesCon);

// create constructor from array img assetsImage array
for (let index = 0; index < assetsImage.length; index++) {
  new productImag(assetsImage[index]);
}

// create random number
function getRanImg() {
  return Math.floor(Math.random() * imagesCon.length);
}
// calling function and it will commenting after testing
getRanImg();

// getting three img HTML tags by using ID
let lImg = document.getElementById('leftImg');
let mImg = document.getElementById('middleImg');
let rImg = document.getElementById('rightImg');

// define three varibels to set random number from getRanImg()
let lImgR;
let mImgR;
let rImgR;

// create function to assign random number to variable and check the is'nt equl togther
function renderRimg() {
  lImgR = getRanImg();
  mImgR = getRanImg();
  rImgR = getRanImg();
  while (lImgR === mImgR || lImgR === rImgR) {
    lImgR = getRanImg();
  }
  while (mImgR === rImgR || mImgR === lImgR) {
    mImgR = getRanImg();
  }
  while (rImgR === mImgR || rImgR === lImgR) {
    rImgR = getRanImg();
  }
  console.log(lImgR + ' ' + mImgR + ' ' + rImgR);
  lImg.setAttribute('src', imagesCon[lImgR].sourceImg);
  lImg.setAttribute('title', imagesCon[lImgR].sourceImg);
  imagesCon[lImgR].viewsImg++;

  mImg.setAttribute('src', imagesCon[mImgR].sourceImg);
  mImg.setAttribute('title', imagesCon[mImgR].sourceImg);
  imagesCon[mImgR].viewsImg++;

  rImg.setAttribute('src', imagesCon[rImgR].sourceImg);
  rImg.setAttribute('title', imagesCon[rImgR].sourceImg);
  imagesCon[rImgR].viewsImg++;
  attemptsEl.textContent = attempts + ' ' + 'of 25';
}
// calling function
renderRimg();

lImg.addEventListener('click', clickOnImg);
mImg.addEventListener('click', clickOnImg);
rImg.addEventListener('click', clickOnImg);

function clickOnImg(event) {
  // eslint-disable-next-line no-unused-vars
  attempts++;
  if (attempts <= maxAttempts) {
    console.log(event.target.id);
    // eslint-disable-next-line no-empty
    if (event.target.id === 'leftImg') {
      imagesCon[lImgR].clicksImg++;
      // eslint-disable-next-line no-empty
    } else if (event.target.id === 'middleImg') {
      imagesCon[lImgR].clicksImg++;
    } else if (event.target.id === 'rightImg') {
      imagesCon[lImgR].clicksImg++;
    }
    renderRimg();
    // eslint-disable-next-line no-empty
  } else {
    document
      .getElementById('ViewResults')
      .addEventListener('click', function () {
        let resdat = document.getElementById('resdat');
        let craeteLiEl;
        for (let index = 0; index < imagesCon.length; index++) {
          craeteLiEl = document.createElement('li');
          resdat.appendChild(craeteLiEl);
          craeteLiEl.textContent = `${imagesCon[index].ImgSource} had ${imagesCon[index].viewsImg} votes, and was seen ${imagesCon[index].clicksImg} times.`;
        }
        lImg.removeEventListener('click', clickOnImg);
        mImg.removeEventListener('click', clickOnImg);
        rImg.removeEventListener('click', clickOnImg);
      });
  }
}
