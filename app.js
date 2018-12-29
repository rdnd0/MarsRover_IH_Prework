// Rover Objects 
// ======================
var rover1 = {
  direction: "E", //N, S, W, E
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
var grid = [["00", "01", "02", "03", "04", "05", "06", "X", "08", "09"],
          ["X", "11", "12", "13", "14", '15', '16', '17', '18', '19'],
          ["20", "21", "22", "23", "24", "25", "26", "27", "X", "29"],
          ["30", "31", "32", "X", "34", "35", "36", "37", "38", "39"],
          ["40", "41", "42", "43", "44", "45", "46", "47", "48", "X"],
          ["50", "51", "52", "53", "X", "55", "56", "57", "58", "59"],
          ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
          ["70", "71", "72", "73", "X", "75", "76", "X", "78", "79"],
          ["X", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
          ["90", "X", "92", "93", "94", "95", "96", "97", "98", "99"]];
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
  var notCurrentRover = rover;
  if(rover === rover1){notCurrentRover = rover2;} else {notCurrentRover = rover1;}
  switch (rover.direction) {
    case "N":
      if (rover.x === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x-1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ "  can we do something else please?")
        break;
      }
      else if(grid[rover.x-1][rover.y] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.x -= 1;
      break;}

    case "S":
      if (rover.x === 9) {
      console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
      break;}
      else if(grid[rover.x+1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x+1][rover.y] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.x += 1;
      break;}

    case "W":
      if (rover.y === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y-1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x][rover.y-1] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.y -= 1;
      break;}

    case "E":
      if (rover.y === 9) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y+1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x][rover.y+1] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
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
  var notCurrentRover;
  if(rover === rover1){notCurrentRover = rover2;} else {notCurrentRover = rover1;}
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
      else if(grid[rover.x+1][rover.y] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.x += 1;
      break;}

    case "S":
      if (rover.x === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x-1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x-1][rover.y] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.x -= 1;
      break;}

    case "W":
      if (rover.y === 9) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y+1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x][rover.y+1] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
        break;
      }
      else{ 
      rover.y += 1;
      break;}

    case "E":
      if (rover.y === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ " please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y-1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " can we do something else please?")
        break;
      }
      else if(grid[rover.x][rover.y-1] === grid[notCurrentRover.x][notCurrentRover.y]){ 
        console.log("You are about to crash into " +notCurrentRover.name+ " can we do something else please?")
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
  //choosing first player
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

