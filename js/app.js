/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-else-if */
/* eslint-disable new-cap */
'use strict';
let attempts = 0;
let maxAttempts = 25;
let attemptsEl = document.getElementById('attempts');
//create empty array
let imagesCon = [];
//getting name just to use in chart
let imgJustName = [];
// two arrays to getting clicks and views
let gettingClicksImg = [];
let gettingViewsImg = [];

// crete array
let imgSet = [];
// eslint-disable-next-line no-unused-vars
function ProductImag(ImgSource) {
  this.ImgSource = ImgSource.split('.')[0];
  this.sourceImg = 'assets/' + ImgSource;
  this.clicksImg = 0;
  this.viewsImg = 0;
  //pushing constructor to array
  imagesCon.push(this);
  imgJustName.push(this.ImgSource);
}
//create function to set data
function setDataInLocalStorage() {
  let result = JSON.stringify(imagesCon);
  console.log(result);
  localStorage.setItem('data', result);
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
// console.log(imagesCon);
// console.log(imgJustName);

// create constructor from array img assetsImage array
for (let index = 0; index < assetsImage.length; index++) {
  new ProductImag(assetsImage[index]);
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
  while (
    lImgR === mImgR ||
    lImgR === rImgR ||
    mImgR === lImgR ||
    imgSet.includes(lImgR) ||
    imgSet.includes(mImgR) ||
    imgSet.includes(rImgR)
  ) {
    lImgR = getRanImg();
    mImgR = getRanImg();
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
  setDataInLocalStorage();
  imgSet[0] = lImgR;
  imgSet[1] = mImgR;
  imgSet[2] = rImgR;
}
// calling function
// renderRimg();

function renderDataIfNotBull() {
  let getResult = localStorage.getItem('data');
  let resulteLocalStorage = JSON.parse(getResult);
  // console.log(resulteLocalStorage);
  if (resulteLocalStorage !== null) {
    imagesCon = resulteLocalStorage;
  }
  renderRimg();
}

lImg.addEventListener('click', clickOnImg);
mImg.addEventListener('click', clickOnImg);
rImg.addEventListener('click', clickOnImg);

function clickOnImg(event) {
  // eslint-disable-next-line no-unused-vars
  attempts++;
  if (attempts <= maxAttempts) {
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
  }
}

function drawData() {
  document.getElementById('ViewResults').addEventListener('click', function () {
    let resdat = document.getElementById('resdat');
    let craeteLiEl;
    for (let index = 0; index < imagesCon.length; index++) {
      console.log('*****', imagesCon);
      craeteLiEl = document.createElement('li');
      resdat.appendChild(craeteLiEl);
      craeteLiEl.textContent = `${imagesCon[index].ImgSource} had ${imagesCon[index].viewsImg} votes, and was seen ${imagesCon[index].clicksImg} times.`;
      gettingClicksImg.push(imagesCon[index].clicksImg);
      gettingViewsImg.push(imagesCon[index].viewsImg);
    }
    lImg.removeEventListener('click', clickOnImg);
    mImg.removeEventListener('click', clickOnImg);
    rImg.removeEventListener('click', clickOnImg);
    setDataInLocalStorage();
    renderChart();
  });
}
drawData();
let drawChart = document.getElementById('myChart').getContext('2d');
function renderChart() {
  // setDataInLocalStorage();
  // eslint-disable-next-line no-undef
  let myChart = new Chart(drawChart, {
    type: 'bar',
    data: {
      labels: imgJustName,
      datasets: [
        {
          label: '# of clicks',
          data: gettingClicksImg,
          backgroundColor: ['rgba(255, 100, 100, 0.6)'],
          borderColor: ['rgba(255, 0, 0, 1)'],
          borderWidth: 1,
        },
        {
          label: '# of views',
          data: gettingViewsImg,
          backgroundColor: ['rgba(153, 12, 155, 0.7)'],
          borderColor: ['rgba(255, 206, 86, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
//Get the button
// eslint-disable-next-line no-var
var buttonToTop = document.getElementById('myBtnToTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunctionToTop();
};

function scrollFunctionToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = 'block';
  } else {
    buttonToTop.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//
// renderChart();
renderDataIfNotBull();
