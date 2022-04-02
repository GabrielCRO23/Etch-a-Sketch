const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector('#resetButton');
const slider = document.querySelector("#myRange")

    function createGrid() {
    for (i = 0; i < 256; i++) {
        gridContainer.innerHTML += '<div class = "box"></div>'
    }
    }; 

    createGrid();

    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => { 

            function getEffect() {
            box.style.backgroundColor = getRandomColor();
        };

            box.addEventListener('mouseover', function() {
            getEffect();
        })
        });

            function removeAllChildNodes(parent) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        };

        

    slider.addEventListener('input', function() {
    let val = document.getElementById('myRange').value;
    removeAllChildNodes(gridContainer);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        });
        gridContainer.appendChild(div); 
    };
});
    
resetButton.addEventListener('click', function(){
    let val = document.getElementById('myRange').value;
    let box = gridContainer.children;
    for (let i = 0; i < val * val; i++) {
        box[i].style.backgroundColor = 'white';
    }
});
        
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}