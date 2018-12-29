// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", //N, S, W, E
  x: 0,
  y: 0,
  travelLog:[]
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
  console.log("turnLeft was called!");
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
  console.log("turnRight was called!");
}



function moveForward(rover){
  switch (rover.direction) {
    case "N":
    if (rover.x === 0) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x-1][rover.y] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.x -= 1;
    break;}

    case "S":
    if (rover.x === 9) {
      console.log("This move is not possible, please provide a new instruction.");
      break;}
      else if(grid[rover.x+1][rover.y] === "X"){ 
        console.log("There is an obstacle, can we do something else please?")
        break;
      }
    else{ 
    rover.x += 1;
    break;}

    case "W":
    if (rover.y === 0) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y-1] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.y -= 1;
    break;}

    case "E":
    if (rover.y === 9) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y+1] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.y += 1;
    
    
    break;}
  }
  console.log("moveForward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
    if (rover.x === 9) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x+1][rover.y] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.x += 1;
    break;}

    case "S":
    if (rover.x === 0) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x-1][rover.y] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.x -= 1;
    break;}

    case "W":
    if (rover.y === 9) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y+1] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.y += 1;
    break;}

    case "E":
    if (rover.y === 0) {
      console.log("This move is not possible, please provide a new instruction.");
      break;
    }
    else if(grid[rover.x][rover.y-1] === "X"){ 
      console.log("There is an obstacle, can we do something else please?")
      break;
    }
    else{ 
    rover.y -= 1;
    break;}
  }
  console.log("moveBackward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
}

function commands(listOfCommands) {
  for (i=0; i<listOfCommands.length; i++) {
      switch (listOfCommands[i]){
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
      }
    }
}

