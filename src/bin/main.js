let canvas = document.getElementById("matrix");
let campoCanvas = canvas.getContext("2d");
let canvas2 = document.getElementById("matrix2");
let campoCanvas2 = canvas2.getContext("2d");
let larguraTotal = window.innerWidth;
let alturaTotal = window.innerHeight;
let caracteres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let maximoDeCaracteres = 50;
let fallingcaracteres = [];
let tamanhoDaFonte = 10.5;
maximoDeColunas = larguraTotal / tamanhoDaFonte;
canvas.width = canvas2.width = larguraTotal;
canvas.height = canvas2.height = alturaTotal;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.draw = function (campoCanvas) {
  this.value = caracteres[randomInt(0, caracteres.length - 1)].toUpperCase();
  this.speed = randomFloat(1, 5);

  campoCanvas2.fillStyle = "rgba(255,255,255,0.8)";
  campoCanvas2.font = tamanhoDaFonte + "px san-serif";
  campoCanvas2.fillText(this.value, this.x, this.y);

  campoCanvas.fillStyle = "#5900ff";
  campoCanvas.font = tamanhoDaFonte + "px san-serif";
  campoCanvas.fillText(this.value, this.x, this.y);

  this.y += this.speed;
  if (this.y > alturaTotal) {
    this.y = randomFloat(-100, 0);
    this.speed = randomFloat(2, 5);
  }
};

for (let i = 0; i < maximoDeColunas; i++) {
  fallingcaracteres.push(new Point(i * tamanhoDaFonte, randomFloat(-500, 0)));
}

var atualizarPagina = function () {
  campoCanvas.fillStyle = "#0000000d";
  campoCanvas.fillRect(0, 0, larguraTotal, alturaTotal);

  campoCanvas2.clearRect(0, 0, larguraTotal, alturaTotal);

  var i = fallingcaracteres.length;

  while (i--) {
    fallingcaracteres[i].draw(campoCanvas);
    var v = fallingcaracteres[i];
  }

  requestAnimationFrame(atualizarPagina);
};

atualizarPagina();
