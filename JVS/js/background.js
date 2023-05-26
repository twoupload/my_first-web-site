//배경화면 추가

// 이미지를 import를 한다. 
const images = ["0.jpg", "1.jpg", "2.jpg"];

// random을 이용해 이미지의 배열에서 이미지를 랜덤으로 뽑아낸다. 
const chosenImage = images[Math.floor(Math.random()*images.length)];

// createElement("파일확장자") : javascript에서 파일 확장자를 가져오는 것.
// javascript에서 html에서 가져오는 것
// 이미지 파일을 생성하라.
const bgImage = document.createElement("img");

// 선택된 이미지를 가져온다
bgImage.src = `img/${chosenImage}`

console.log(bgImage);

// 만든 javascript에서 만든 것을 body에 추가.
document.body.appendChild(bgImage)