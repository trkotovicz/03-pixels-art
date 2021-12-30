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
//cria botão com escutador de click, id, texto e add na section entre cores e quadro
let buttonsContainer = document.querySelector(".buttons-container");
let clear = document.createElement("button");
clear.innerText = "Limpar";
clear.id = "clear-board";
buttonsContainer.appendChild(clear);
clear.addEventListener("click", clearButton);

//faz pintar todos os pixels de branco quando é clicado
function clearButton() {
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = "white";
    };
};

// Requisito 10
/* Referências dos atributos do input:
https://www.w3schools.com/tags/att_input_type_number.asp
https://blog.betrybe.com/html/input-html/ */
//cria botão "VQV" e input
let input = document.createElement("input");
input.id = "board-size";
buttonsContainer.appendChild(input);
input.type = "number";
input.min = "1";

let vqv = document.createElement("button");
vqv.id = "generate-board";
vqv.innerText = "VQV";
buttonsContainer.appendChild(vqv);
vqv.addEventListener("click", generateBoard)

// // cria novo pixel-board
// let pixelBoard = document.getElementById("pixel-board");

// function newBoard() {
//     if (input.value < 5) {
//         for ()         // precisa de um for para criar as novas linhas (div) dos pixels. Mas como esse for vai contar o valor do input para criar as novas divs??
//             let line = document.createElement("div");
//             pixelBoard.appendChild(line);

//     } 
// };

// função pra remover o board
function eraseBoard() {
    let filhosPixelBoard = document.getElementById("pixel-board").children;

    for (let index = 0; index < filhosPixelBoard.length; index += 1) {
        filhosPixelBoard[index].remove();
    };
};

//se nenhum valor for colocado no input, ao clicar no botão mostre um ALERT "Board inválido!"
//quadro tem que permitir tamanho entre 5 e 50
function generateBoard() {
    if (input.value === "") {
        alert("Board inválido!");
    } else if (input.value < 5) {
        input.value = 5;
    } else if (input.value > 50) {
        input.value = 50;
    };

    // eraseBoard(); // chama pra excluir o board atual
    //               // chama função para construir novo quadro
    // paintPixel(); // chama a função de pintar pixel para recontar o número de pixels que poderão ser pintados
};


// Requisito 11
// caso o valor do input fuja do intervalo 5 a 50
// valor menor que 5, considerar 5 como padrão
// valor maior que 50, considerar 50 como padrão




// Requisito 12
//as cores devem ser geradas automaticamente
// a preta ainda deve ser a primeira e deve ser carregada no window.onload
