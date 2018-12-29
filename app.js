// Rover Objects 
// ======================
var rover1 = {
  direction: "N", //N, S, W, E
  x: 0,
  y: 0,
  travelLog:[],
  turn: 0,
  name: "rover1"
  };

var rover2 = {
  direction: "W", //N, S, W, E
  x: 0,
  y: 5,
  travelLog:[],
  turn: 0,
  name: "rover2"
  };

// Grid
// ======================
var grid = [[null, null, null, null, "X", null, null, null, null, null],
          ["X", null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, "X", null],
          [null, null, null, "X", null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, "X"],
          [null, null, null, null, "X", null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, "X", null, null, null, null, null],
          ["X", null, null, null, null, null, "X", null, null, null],
          [null, "X", null, null, null, null, null, null, null, null]];
// ===================

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log(rover.name+ " turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
  console.log(rover.name + " turnRight was called!");
}



function moveForward(rover){
  switch (rover.direction) {
    case "N":
    if (rover.x === 0) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x-1][rover.y] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ "  can we do something else please?")
      break;
    }
    else{ 
    rover.x -= 1;
    break;}

    case "S":
    if (rover.x === 9) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;}
      else if(grid[rover.x+1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
    else{ 
    rover.x += 1;
    break;}

    case "W":
    if (rover.y === 0) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y-1] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.y -= 1;
    break;}

    case "E":
    if (rover.y === 9) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y+1] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.y += 1;
    
    
    break;}
  }
  console.log(rover.name + " moveForward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
    if (rover.x === 9) {
      console.log("This move is not possible " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x+1][rover.y] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.x += 1;
    break;}

    case "S":
    if (rover.x === 0) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x-1][rover.y] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.x -= 1;
    break;}

    case "W":
    if (rover.y === 9) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y+1] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.y += 1;
    break;}

    case "E":
    if (rover.y === 0) {
      console.log("This move is not possible for " +rover.name+ " please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y-1] === "X"){ 
      console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
      break;
    }
    else{ 
    rover.y -= 1;
    break;}
  }
  console.log(rover.name + " moveBackward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
}

function commands(listOfCommands) {
  //chosing first player
  rover1.turn = Math.floor(Math.random()*2);
  if (rover1.turn === 0){rover2.turn = 1; console.log("first player is rover2");}
  else {console.log("first player is rover1");}

  for (i=0; i<listOfCommands.length; i++) {
    if (rover1.turn ===1){  
      switch (listOfCommands[i]){
          case "r":
            turnRight(rover1);
            break;
          case "l":
            turnLeft(rover1);
            break;
          case "f":
            moveForward(rover1);
            break;
          case "b":
            moveBackward(rover1);
            break;
        }
        rover1.turn -= 1;
        rover2.turn +=1;
      }
    else if(rover2.turn ===1){
      switch (listOfCommands[i]){
        case "r":
          turnRight(rover2);
          break;
        case "l":
          turnLeft(rover2);
          break;
        case "f":
          moveForward(rover2);
          break;
        case "b":
          moveBackward(rover2);
          break;
      }
      rover2.turn -=1;
      rover1.turn +=1;
    }

    }
}

