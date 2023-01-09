let container = document.getElementById("container");
let clear = document.getElementById("clear");

let colorChoosed;

console.log(clear);

//let colorChoosed;
console.log(container);
let color = document.getElementById("color");

//console.log(color);

for(let div of color.children){
    div.addEventListener("click", (ev)=>{
      colorChoosed = ev.target.style.backgroundColor;
    })
}

for (let div of container.children){

    div.addEventListener("click", (ev)=>{
        ev.target.style.backgroundColor = colorChoosed;
    })

}

for (button of clear.children){
    button.addEventListener("click", (ev)=>{
       window.location.reload();
    })
}


