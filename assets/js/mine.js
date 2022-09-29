var grid = document.getElementById("mine-grid");
var game_active = true;
// var testMode = false; //Turn this variable to true to see where the mines are

const refresh = document.querySelector(".refresh");

function generateGrid() {
  // generate 10 by 10 grid
  grid.innerHTML = "";

  for (var i = 0; i < 10; i++) {
    row = grid.insertRow(i);

    for (var j = 0; j < 10; j++) {
      cell = row.insertCell(j);
      cell.addEventListener("click", function () {
        clickCell(this);
      });
      var mine = document.createAttribute("data-mine");
      mine.value = "false";
      cell.setAttributeNode(mine);
    }
  }
  addMines();
  game_active = true;
}

function addMines() {
  // Add mines randomly
  for (var i = 0; i < 20; i++) {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    var cell = grid.rows[row].cells[col];
    cell.setAttribute("data-mine", "true");
    // if (testMode) cell.innerHTML = "X";
  }
}

function revealMines() {
  //Highlight all mines in red
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var cell = grid.rows[i].cells[j];
      if (cell.getAttribute("data-mine") == "true") cell.className = "mine";
    }
  }

  game_active = false;
}

function checkLevelCompletion() {
  var levelComplete = true;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (
        grid.rows[i].cells[j].getAttribute("data-mine") == "false" &&
        grid.rows[i].cells[j].innerHTML == ""
      )
        levelComplete = false;
    }
  }
  if (levelComplete) {
    revealMines();
  }
}

function clickCell(cell) {
  // Check if the end-user clicked on a mine
  if (cell.getAttribute("data-mine") == "true") {
    revealMines();
  } else if (game_active != false) {
    cell.className = "clicked";
    // Count and display the number of adjacent mines
    var mineCount = 0;
    var cellRow = cell.parentNode.rowIndex;
    var cellCol = cell.cellIndex;
    // alert(cellRow + " " + cellCol);
    for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
      for (
        var j = Math.max(cellCol - 1, 0);
        j <= Math.min(cellCol + 1, 9);
        j++
      ) {
        if (grid.rows[i].cells[j].getAttribute("data-mine") == "true")
          mineCount++;
      }
    }

    cell.innerHTML = mineCount;
    if (mineCount == 0) {
      // Reveal all adjacent cells as they do not have a mine
      for (
        var i = Math.max(cellRow - 1, 0);
        i <= Math.min(cellRow + 1, 9);
        i++
      ) {
        for (
          var j = Math.max(cellCol - 1, 0);
          j <= Math.min(cellCol + 1, 9);
          j++
        ) {
          //Recursive Call
          if (grid.rows[i].cells[j].innerHTML == "") {
            clickCell(grid.rows[i].cells[j]);
          }
        }
      }
    }
    checkLevelCompletion();
  }
}

function main() {
  generateGrid();
  refresh.addEventListener("click", generateGrid);
}

main();
