/* eslint-disable no-use-before-define */
/* eslint-disable radix */
// Requisito 6
function inicialBlack() {
  const black = document.getElementById('black');
  black.classList.add('selected');
}

window.onload = inicialBlack;

// Requisito 7
const cores = document.querySelectorAll('.color');

function selectedColor(event) {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selectedColor);
}

// Requisito 8
const pixel = document.querySelectorAll('.pixel');

function paintPixel() {
  function pixelColor(event) {
    const selectColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectColor.style.backgroundColor;
  }
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pixelColor);
  }
}
paintPixel();

// Requisito 9
const buttonsContainer = document.querySelector('.buttons-container');
const clear = document.createElement('button');
clear.innerText = 'Limpar';
clear.id = 'clear-board';
buttonsContainer.appendChild(clear);

function clearButton() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearButton);

// Requisito 10
const input = document.createElement('input');
input.id = 'board-size';
buttonsContainer.appendChild(input);
input.type = 'number';
input.min = '1';
input.placeholder = 'Digite um número';

const vqv = document.createElement('button');
vqv.id = 'generate-board';
vqv.innerText = 'VQV';
buttonsContainer.appendChild(vqv);
vqv.addEventListener('click', generateBoard);

// função pra remover o board
function eraseBoard() {
  const filhosPixelBoard = document.getElementById('pixel-board').children;

  for (let index = 0; index < filhosPixelBoard.length; index += 1) {
    filhosPixelBoard[index].remove();
  }
}

function generateBoard() {
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
}

// Requisito 11

// Requisito 12
function generateColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b})`;
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].style.backgroundColor = generateColor();
}
cores[0].style.backgroundColor = 'black';
