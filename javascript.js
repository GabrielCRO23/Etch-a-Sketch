const container = document.querySelector('#container')
for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>';
 }
const boxes = document.querySelectorAll('.box');



 boxes.forEach((box) => { 

function getEffect() {
     box.style.backgroundColor = "red";
}






box.addEventListener('mouseover', function() {
    getEffect();
})

});
