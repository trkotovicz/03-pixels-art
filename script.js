// Requisito 6
window.onload = inicialBlack;

function inicialBlack() {
    let black = document.getElementById("black");
    black.classList.add("selected");
};

// Requisito 7
let cores = document.querySelectorAll(".color");

//o for percorre as cores e add o escutador de click em cada uma delas. Também chama a função "selectedColor" no escutador.
for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', selectedColor);
};

//remove a classe "selected" já existente e adiciona ela no novo elemento (o que foi clicado).
function selectedColor(event) {
    for (let index = 0; index < cores.length; index += 1 ) {
        cores[index].classList.remove("selected");
    };
    event.target.classList.add("selected");
};

// Requisito 8
