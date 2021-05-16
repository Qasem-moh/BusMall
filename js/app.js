/* eslint-disable new-cap */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
"use strict";
// eslint-disable-next-line no-unused-vars
//create empty array
let imagesCon = [];
// eslint-disable-next-line no-unused-vars
function productImag(ImgSource) {
  this.ImgSource = ImgSource.split(".")[0];
  this.sourceImg = "assets/" + ImgSource;
  this.clicksImg = 0;
  this.viewsImg = 0;
  //pushing constructor to array
  imagesCon.push(this);
}
// create array for image to random it
let assetsImage = [
  "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "blegum.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "water-can.jpg",
  "wine-glass.jpg",
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
let lImg = document.getElementById("leftImg");
let mImg = document.getElementById("middleImg");
let rImg = document.getElementById("rightImg");

// define three varibels to set random number from getRanImg()
let lImgR;
let mImgR;
let rImgR;

// create function to assign random number to variable and check the is'nt equl togther
function renderRimg() {
  lImgR = getRanImg();
  mImgR = getRanImg();
  rImgR = getRanImg();
//  while(lImg===mImg)
//   console.log(lImgR +" "+ mImgR+" "+rImgR);
}
// calling function
renderRimg();
