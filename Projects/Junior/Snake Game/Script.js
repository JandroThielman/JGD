var blockSize = 25; // Grootte van elk blok op het speelbord.

var total_row = 20; //Aantal rijen en kolommen op het speelbord.

var total_col = 20; //Aantal rijen en kolommen op het speelbord.

var board; // Variabelen om het canvas-element en de 2D-context op te slaan.

var context; // Variabelen net als hier boven saat beschreven

var snakeX = blockSize * 5; // Initiële coördinaten van de slang.

var snakeY = blockSize * 5; // Initiële coördinaten van de slang.

var speedX = 0; //snelheid slang X 

var speedY = 0; //snelheid slang Y 

var snakeBody = []; // Array om de coördinaten van de lichaamssegmenten van de slang op te slaan.

var foodX; // Coördinaten van het voedsel.

var foodY; // Ook Coördinaten van het voedsel.

var gameOver = false;  // Boolean vlag om bij te houden of het spel voorbij is of niet.




// Voer de code uit wanneer de pagina is geladen
window.onload = function () {
	
	// canvas hoogte en breedte
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	// Plaats het voedsel op willekeurige positie
	placeFood();

	// Luister naar toetsaanslagen voor het veranderen van de richting van de slang
	document.addEventListener("keyup", changeDirection);
	
	// slang snelte
	setInterval(update, 1000 / 8);
}

// Functie om het spel bij te werken
function update() {
	if (gameOver) {
		return;
	}


	// Achtergrond vullen met kleur
	context.fillStyle = "#343434";
	context.fillRect(0, 0, board.width, board.height);

	// appel kleur en positie
	context.fillStyle = "#E0435A";
	context.fillRect(foodX, foodY, blockSize, blockSize);

		
	// Als de slang het voedsel raakt, voeg een lichaamssegment toe en plaats nieuw voedsel
	if (snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY]);
		placeFood();
	}

	// lichaam wordt langer
	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = snakeBody[i - 1];
	}

	// Het eerste lichaamssegment van de slang krijgt de positie van het hoofd
	if (snakeBody.length) {
		snakeBody[0] = [snakeX, snakeY];
	}

		// Slangkleur en positie bijwerken
	context.fillStyle = "#5CC43F";
	snakeX += speedX * blockSize; //update de slang positie X coords
	snakeY += speedY * blockSize; //update de slang positie Y coords
	context.fillRect(snakeX, snakeY, blockSize, blockSize);
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}

	// Grenzen van het speelveld detecteren voor game-over
	if (snakeX < 0
		|| snakeX > total_col * blockSize - blockSize
		|| snakeY < 0
		|| snakeY > total_row * blockSize - blockSize) {
		
		gameOver = true;
		deathPopup();

	}

				// slang contact detecteren
	for (let i = 0; i < snakeBody.length; i++) {
		if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
			
			gameOver = true;
			deathPopup();
		}
	}
}

// Functie voor het weergeven van het "Game Over"-bericht
function deathPopup()
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:45%; width: 99.5vw; display: flex; justify-content: center; font-size: 80px; color: #E0435A; padding: 0px; margin: 0px; font-family: Times New Roman;");
 el.innerHTML = "Game Over";
 document.body.appendChild(el);
}

// beweging slang control
function changeDirection(e) {
    console.log(e.code);
	
	if (e.code == "KeyW" && speedY != 1) {
		speedX = 0;
		speedY = -1;
	}
	
	else if (e.code == "KeyS" && speedY != -1) {
		speedX = 0;
		speedY = 1;
	}
	
	else if (e.code == "KeyA" && speedX != 1) {
		speedX = -1;
		speedY = 0;
	}
	
	else if (e.code == "KeyD" && speedX != -1) {
		speedX = 1;
		speedY = 0;
	}
    
	else if (e.code == "KeyR") {
        location.reload();
    }
}

// appel plaaten
function placeFood() {

	// in X coords
	foodX = Math.floor(Math.random() * total_col) * blockSize;
	
	//in Y coords
	foodY = Math.floor(Math.random() * total_row) * blockSize;
}
