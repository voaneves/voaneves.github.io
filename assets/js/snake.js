(function () {
  const styles = getComputedStyle(document.body), // get styles from document
    board_background = styles.getPropertyValue("--color-white"),
    snake_color = styles.getPropertyValue("--color-opposite"),
    food_color = styles.getPropertyValue("--color-secondary"),
    up_buttom = document.getElementById("up"), // buttons
    left_buttom = document.getElementById("left"),
    right_buttom = document.getElementById("right"),
    down_buttom = document.getElementById("down"),
    snakeboard = document.getElementById("snakeboard"), // Canvas
    fontWeight = "bold", // font settings
    fontFamily = "Courier",
    fontSize = "24px",
    fontColor = "#5A5A5A",
    FPS = 10; // FPS

  let startText;
  let endText;
  let snakeInitial;

  if (englishOrNot != "-1") {
    startText = `CLICK HERE TO START`;
    endText = `GAME OVER! CLICK TO TRY AGAIN`;
  } else {
    startText = `CLIQUE AQUI PARA COMEÇAR`;
    endText = `ACABOU! CLIQUE PARA TENTAR DENOVO`;
  }

  if (width > 1432) {
    snakeboard.setAttribute("width", "900");
    snakeboard.setAttribute("height", "400");

    snakeInitial = [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];
  } else if (width > 900) {
    snakeboard.setAttribute("width", "400");
    snakeboard.setAttribute("height", "400");

    snakeInitial = [
      { x: 100, y: 200 },
      { x: 90, y: 200 },
      { x: 80, y: 200 },
      { x: 70, y: 200 },
      { x: 60, y: 200 },
    ];
  } else {
    snakeboard.setAttribute("width", "135");
    snakeboard.setAttribute("height", "400");

    snakeInitial = [
      { x: 50, y: 200 },
      { x: 40, y: 200 },
      { x: 30, y: 200 },
      { x: 20, y: 200 },
      { x: 10, y: 200 },
    ];
  }

  let snake = JSON.parse(JSON.stringify(snakeInitial));

  // Return a two dimensional drawing context
  const snakeboard_ctx = snakeboard.getContext("2d");

  // Food position
  let food_x;
  let food_y;

  let dx = 10; // Horizontal velocity
  let dy = 0; // Vertical velocity

  // Start game
  startGame();

  up_buttom.onclick = function () {
    moveUp();
  };
  left_buttom.onclick = function () {
    moveLeft();
  };
  right_buttom.onclick = function () {
    moveRight();
  };
  down_buttom.onclick = function () {
    moveDown();
  };

  // Add event listener for `click` events.
  snakeboard.addEventListener(
    "click",
    function () {
      main();
    },
    false
  );

  gen_food();

  // draw a border around the canvas
  function startGame() {
    snakeboard_ctx.fillStyle = fontColor;
    snakeboard_ctx.font = fontWeight + " " + fontSize + " " + fontFamily;
    snakeboard_ctx.textAlign = "center";
    var textString = startText;
    var lines = fragmentText(
      textString,
      snakeboard.width - parseInt(fontSize, 0),
      snakeboard_ctx
    );
    lines.forEach(function (line, i) {
      snakeboard_ctx.fillText(
        line,
        snakeboard.width / 2,
        snakeboard.height / 2 + (i + 1) * parseInt(fontSize, 0)
      );
    });
  }

  function game_over() {
    snake = JSON.parse(JSON.stringify(snakeInitial));
    dx = 10;
    dy = 0;

    snakeboard_ctx.fillStyle = fontColor;
    snakeboard_ctx.font = fontWeight + " " + fontSize + " " + fontFamily;
    var textString = endText;
    snakeboard_ctx.textAlign = "center";
    var lines = fragmentText(
      textString,
      snakeboard.width - parseInt(fontSize, 0),
      snakeboard_ctx
    );
    lines.forEach(function (line, i) {
      snakeboard_ctx.fillText(
        line,
        snakeboard.width / 2,
        snakeboard.height / 2 + (i + 1) * parseInt(fontSize, 0)
      );
    });
  }

  // draw a border around the canvas
  function clear_board() {
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  }

  // Draw the snake on the canvas
  function drawSnake() {
    // Draw each part
    snake.forEach(drawSnakePart);
  }

  // Draw one snake part
  function drawSnakePart(snakePart) {
    // Set the colour of the snake part
    snakeboard_ctx.fillStyle = snake_color;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  }

  function drawFood() {
    snakeboard_ctx.fillStyle = food_color;
    snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
    snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
  }

  function random_food(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
  }

  function gen_food() {
    // Generate a random number the food x-coordinate
    food_x = random_food(0, snakeboard.width - 10);
    // Generate a random number for the food y-coordinate
    food_y = random_food(0, snakeboard.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == food_x && part.y == food_y;
      if (has_eaten) gen_food();
    });
  }

  function has_game_ended() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }

    hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;

    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
  }

  function moveUp() {
    const goingDown = dy === 10;

    if (!goingDown) {
      dx = 0;
      dy = -10;
    }
  }

  function moveDown() {
    const goingUp = dy === -10;

    if (!goingUp) {
      dx = 0;
      dy = 10;
    }
  }

  function moveLeft() {
    const goingRight = dx === 10;

    if (!goingRight) {
      dx = -10;
      dy = 0;
    }
  }

  function moveRight() {
    const goingLeft = dx === -10;

    if (!goingLeft) {
      dx = 10;
      dy = 0;
    }
  }

  function move_snake() {
    // Create the new Snake's head
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
    if (has_eaten_food) {
      // Generate new food location
      gen_food();
    } else {
      // Remove the last part of snake body
      snake.pop();
    }
  }

  // main function called repeatedly to keep the game running
  function main() {
    if (has_game_ended()) {
      game_over();
      return;
    }

    clear_board();
    drawFood();
    move_snake();
    drawSnake();

    setTimeout(() => {
      requestAnimationFrame(main);
    }, 1000 / FPS);
  }
})();
