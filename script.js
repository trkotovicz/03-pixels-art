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
//mesma lógica do requisito 7, declaro as variáveis buscando os elementos no html (uma com a classe da cor ".selected" e outra com os pixels que irão ser pintados. Na sequência um for para add escutador em cada pixel para quando forem clicados.
let pixel = document.querySelectorAll(".pixel");

function paintPixel() { 

    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener("click", pixelColor);
    };

    function pixelColor(event) {
        let selectColor = document.querySelector(".selected"); //add na função pois fora ela seleciona como padrão a cor preta qnd a página é carregada e não carrega mais
        event.target.style.backgroundColor = selectColor.style.backgroundColor;
    };
};
paintPixel();

// Requisito 9
let buttonsContainer = document.querySelector(".buttons-container");
let clear = document.createElement("button");
clear.innerText = "Limpar";
clear.id = "clear-board";
buttonsContainer.appendChild(clear);
clear.addEventListener("click", clearButton);

function clearButton() {
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = "white";
    };
};