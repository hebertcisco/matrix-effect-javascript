let canvas = document.getElementById("matrix");
let fieldCanvas = canvas.getContext("2d");
let canvas2 = document.getElementById("matrix2");
let fieldCanvas2 = canvas2.getContext("2d");
let overallWidth = window.innerWidth;
let totalHeight = window.innerHeight;
let characters = [
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
let maximumOfCharacters = 50;
let fallingcharacters = [];
let fontSize = 10.5;
MaximumColumns = overallWidth / fontSize;
canvas.width = canvas2.width = overallWidth;
canvas.height = canvas2.height = totalHeight;

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

Point.prototype.draw = function (fieldCanvas) {
  this.value = characters[randomInt(0, characters.length - 1)].toUpperCase();
  this.speed = randomFloat(1, 5);

  fieldCanvas2.fillStyle = "rgba(255,255,255,0.8)";
  fieldCanvas2.font = fontSize + "px san-serif";
  fieldCanvas2.fillText(this.value, this.x, this.y);

  fieldCanvas.fillStyle = "#5900ff";
  fieldCanvas.font = fontSize + "px san-serif";
  fieldCanvas.fillText(this.value, this.x, this.y);

  this.y += this.speed;
  if (this.y > totalHeight) {
    this.y = randomFloat(-100, 0);
    this.speed = randomFloat(2, 5);
  }
};

for (let i = 0; i < MaximumColumns; i++) {
  fallingcharacters.push(new Point(i * fontSize, randomFloat(-500, 0)));
}

var updatePage = function () {
  fieldCanvas.fillStyle = "#0000000d";
  fieldCanvas.fillRect(0, 0, overallWidth, totalHeight);

  fieldCanvas2.clearRect(0, 0, overallWidth, totalHeight);

  var i = fallingcharacters.length;

  while (i--) {
    fallingcharacters[i].draw(fieldCanvas);
    var v = fallingcharacters[i];
  }

  requestAnimationFrame(updatePage);
};

updatePage();
