// Canvas en context voor de game
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Canvas en context voor de collision detection
const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCtx = collisionCanvas.getContext('2d');
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

// Instellingen en variabelen voor de game
let gameSpeed = 5;
let score = 0;
let gameOver = false;
let timeToNextRobot = 0;
let robotInterval = 400;
let lastTime = 0;

// Achtergrondafbeeldingen
const backgroundLayer1 = new Image();
backgroundLayer1.src = './Images/layer07_Sky.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './Images/layer06_Rocks.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './Images/layer05_Hills.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './Images/layer04_Clouds.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './Images/layer03_Hills_Castle.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = './Images/layer02_Trees_rocks.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = './Images/layer01_Ground.png';

// Event listener voor het laden van de pagina
window.addEventListener('load', function load() {
    document.getElementById('GameStart').style.zIndex = '2';

    // Geluid instellen en afspelen
    sound = new Audio();
    sound.src = './Sound/music.mp3';
    sound.volume = .1;
    sound.play();

    // Functie om de score weer te geven
    function drawScore() {
        ctx.font = '75px Impact';
        ctx.fillStyle = 'goldenrod';
        ctx.fillText('score: ' + score, 50, 85);
        ctx.fillStyle = 'gold';
        ctx.fillText('score: ' + score, 55, 90);
        }

    // Klasse voor het beheren van achtergrondlagen
    class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
        this.x = this.x - this.speed;
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
    }

    // Initialisatie van achtergrondlagen
    const layer1 = new Layer(backgroundLayer1, 1);
    const layer2 = new Layer(backgroundLayer2, .2);
    const layer3 = new Layer(backgroundLayer3, .3);
    const layer4 = new Layer(backgroundLayer4, .1);
    const layer5 = new Layer(backgroundLayer5, .5);
    const layer6 = new Layer(backgroundLayer6, .5);
    const layer7 = new Layer(backgroundLayer7, .6);

    // Array met game objecten
    const gameObject = [layer1, layer2, layer3, layer4, layer5, layer6, layer7];

    // Klasse voor het creëren van robots
    let robots = [];
    class Robot {
    constructor(){
        this.spriteWidth = 482;
        this.spriteHeight = 483;
        this.sizeModifier = Math.random() * 0.3 + 0.2;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;
        this.markedForDeletion = false;
        this.image = new Image();
        this.image.src = './Images/Bird.png';
        this.frame = 0;
        this.maxFrame = 9;
        this.timeSinceFlap = 0;
        this.flapInterval = Math.random() * 50 + 50;
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
        this.hasTrail = Math.random() > 0.5;
    }
    update(deltatime){
        if (this.y < 0 || this.y > canvas.height - this.height){
            this.directionY = this.directionY * -1;
        }
        this.x -= this.directionX;
        this.y += this.directionY;
        if (this.x < 0 - this.width) this.markedForDeletion = true;
        this.timeSinceFlap += deltatime;
        if (this.timeSinceFlap > this.flapInterval){
            if (this.frame > this.maxFrame) this.frame = 0;
            else this.frame++;
            this.timeSinceFlap = 0;
            if (this.hasTrail){
                for (let i = 0; i < 5; i++) {
                    particles.push(new Particle(this.x, this.y, this.width, this.color));
                }
            }
        }
        if (this.x < 0 - this.width) gameOver = true;
    }
    draw(){
        collisionCtx.fillStyle = this.color;
        collisionCtx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    }

    // Klasse voor explosie-effecten
    let explosions = [];
    class Explosions{
    constructor(x, y, size){
        this.image = new Image();
        this.image.src = './Images/explosion_01_strip13.png';
        this.spriteWidth = 196;
        this.spriteHeight = 190;
        this.size = size;
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.sound = new Audio();
        this.sound.src = './Sound/Fire impact 1.wav';
        this.sound.volume = .1;
        this.timeSinceLastFrame = 0;
        this.frameInterval = 50;
        this.markedForDeletion = false;
    }
    update(deltatime){
        if (this.frame === 0) this.sound.play();
        this.timeSinceLastFrame += deltatime;
        if (this.timeSinceLastFrame > this.frameInterval){
            this.frame++;
            this.timeSinceLastFrame = 0;
            if (this.frame > 5) this.markedForDeletion = true;
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size);
    }
    }

    // Klasse voor deeltjes (particles)
    let particles = [];
    class Particle {
    constructor(x, y, size, color){
        this.size = size;
        this.x = x + this.size/2 + Math.random() * 50 - 25;
        this.y = y + this.size/3 + Math.random() * 50 - 25;
        this.radius = Math.random() * this.size/10;
        this.maxRadius = Math.random() * 20 + 35;
        this.markedForDeletion = false;
        this.speedX = Math.random() * 1 + .1;
    }
    update(){
        this.x += this.speedX;
        this.radius += 0.3;
        if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
    }
    draw(){
        ctx.save();
        ctx.globalAlpha = 1 - this.radius / this.maxRadius;
        ctx.beginPath();
        ctx.fillStyle = 'teal';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); 
        ctx.fill();
        ctx.restore();
    }
    }

    // Functie om het game-over scherm weer te geven
    function drawGameOver() {
    const GameOver = document.getElementById('GameOver');
    GameOver.style.zIndex = '3';
    document.getElementById("Score").innerHTML = 'Score: ' + score;
    }

    // Event listener voor muisklik
    window.addEventListener('click', function(e){
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1);
    const pc = detectPixelColor.data;
    robots.forEach(object => {
        if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2]){
            object.markedForDeletion = true;
            score++;
            explosions.push(new Explosions(object.x, object.y, object.width));
        }
    });
    });

    // Hoofdanimatiefunctie
    function animate(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameObject.forEach(object => {
        object.update();
        object.draw();
    });

    drawScore();

    collisionCtx.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRobot += deltatime;
    // Genereren van nieuwe robots op basis van interval
    if (timeToNextRobot > robotInterval) {
        robots.push(new Robot());
        timeToNextRobot = 0;
        robots.sort(function(a,b){
            return a.width - b.width;
        });
    };
    
    // Update en tekenen van game objecten
    [ ...particles, ...robots, ...explosions].forEach(object => object.update(deltatime));
    [ ...particles, ...robots, ...explosions].forEach(object => object.draw());
    robots = robots.filter(object => !object.markedForDeletion);
    explosions = explosions.filter(object => !object.markedForDeletion);
    particles = particles.filter(object => !object.markedForDeletion);

    // Doorgaan met de animatie tenzij het spel voorbij is
    if (!gameOver) requestAnimationFrame(animate);
    else drawGameOver();
    }

    // Event listener voor het starten van het spel
    document.getElementById('start').addEventListener('click', function(){
        canvas.style.zIndex = '3';
        animate(0);
    });

    // Event listener voor het herladen van de pagina
    document.getElementById('Exit').addEventListener('click', function(){
        location.reload();
    });
    
});