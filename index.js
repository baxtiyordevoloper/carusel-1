const elImgs = document.getElementById("imgs");
const elLeftBtn = document.getElementById("left");
const elRightBtn = document.getElementById("right");
const elImg = document.querySelectorAll("#imgs img");

let idx = 0;
function changeImage(){
  if(idx > elImg.length -1){
    idx = 0;
  } else if(idx < 0){
    idx = elImg.length -1;
  }
  elImgs.style.transform = `translateX(${-idx * 500}px)`;
}

elRightBtn.addEventListener('click', function change(){
  idx++;
  changeImage();
  resetInterval();
});
elLeftBtn.addEventListener('click', function change(){
  idx--;
  changeImage();
  resetInterval();
});

let interval = setInterval(run, 3000);

function run(){
  idx++;
  changeImage();
  
}

function resetInterval(){
  clearInterval(interval);

  interval = setInterval(run,3000);
}