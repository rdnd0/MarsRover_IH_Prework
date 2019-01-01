// Rover Objects 
// ======================
var rover1 = {
  direction: "E", //N, S, W, E
  x: 0,
  y: 0,
  travelLog:["["+rover1.x+" , "+rover1.y+"]"],
  // turn: 0,
  name: "Rover1"
  };

var rover2 = {
  direction: "W", //N, S, W, E
  x: 0,
  y: 5,
  travelLog:["["+rover2.x+" , "+rover2.y+"]"],
  // turn: 0,
  name: "Rover2"
  };

var rover3 = {
    direction: "S", //N, S, W, E
    x: 5,
    y: 5,
    travelLog:["["+rover3.x+" , "+rover3.y+"]"],
    // turn: 0,
    name: "Rover3"
    };

var rover4 = {
    direction: "N", //N, S, W, E
    x: 9,
    y: 5,
    travelLog:["["+rover4.x+" , "+rover4.y+"]"],
    // turn: 0,
    name: "Rover4"
    };

var rovers = [rover1, rover2, rover3, rover4];

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
  var crashN = 0;
  var crashS = 0;
  var crashW = 0;
  var crashE = 0;
  switch (rover.direction) {
    case "N":
      if (rover.x === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
        break;
      }
      else if(grid[rover.x-1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.x !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x-1][rover.y] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashN = 1
          ;break
          } 
        }
      }
        if (crashN === 0) {
          rover.x -= 1;
          } break;  

    case "S":
      if (rover.x === 9) {
      console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
      break;}
      else if(grid[rover.x+1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.x !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x+1][rover.y] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashS = 1
          ;break
          } 
        }
      }
        if (crashS === 0) {
          rover.x += 1;
          } break;  

    case "W":
      if (rover.y === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y-1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.y !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x][rover.y-1] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashW = 1
          ;break
          } 
        }
      }
        if (crashW === 0) {
          rover.y -= 1;
          } break; 

    case "E":
      if (rover.y === 9) {
        console.log("You are about to get out of the grid with " +rover.name+ " ,please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y+1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " ,can we do something else please?");
        break;
      }
      else if(rover.y !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x][rover.y+1] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashE = 1
          ;break
          } 
        }
      }
        if (crashE === 0) {
          rover.y += 1;
          } break; 
  }
  console.log(rover.name + " moveForward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
  
}

function moveBackward(rover){
  var crashBN = 0;
  var crashBS = 0;
  var crashBW = 0;
  var crashBE = 0;
  switch (rover.direction) {
    case "N":
      if (rover.x === 9) {
        console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
        break;
      }
      else if(grid[rover.x+1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.x !== 9){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x+1][rover.y] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashBN = 1
          ;break
          } 
        }
      }
        if (crashBN === 0) {
          rover.x += 1;
          } break;  

    case "S":
      if (rover.x === 0) {
      console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
      break;}
      else if(grid[rover.x-1][rover.y] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.x !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x-1][rover.y] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashBS = 1
          ;break
          } 
        }
      }
        if (crashBS === 0) {
          rover.x -= 1;
          } break;  

    case "W":
      if (rover.y === 9) {
        console.log("You are about to get out of the grid with " +rover.name+ ", please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y+1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ ", can we do something else please?");
        break;
      }
      else if(rover.y !== 9){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x][rover.y+1] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashBW = 1
          ;break
          } 
        }
      }
        if (crashBW === 0) {
          rover.y += 1;
          } break; 

    case "E":
      if (rover.y === 0) {
        console.log("You are about to get out of the grid with " +rover.name+ " ,please provide a new instruction.");
        break;
      }
      else if(grid[rover.x][rover.y-1] === "X"){ 
        console.log("There is an obstacle for " +rover.name+ " ,can we do something else please?");
        break;
      }
      else if(rover.y !== 0){
        for (h=0; h<rovers.length; h++){ 
          if(grid[rover.x][rover.y-1] === grid[rovers[h].x][rovers[h].y]){ 
          console.log("You are about to crash into " +rovers[h].name+ ", can we do something else please?")
          crashBE = 1
          ;break
          } 
        }
      }
        if (crashBE === 0) {
          rover.y -= 1;
          } break; 
  }
  console.log(rover.name + " moveBackward was called: current position: " + rover.x + " / " + rover.y);
  rover.travelLog.push("["+rover.x+" , "+rover.y+"]");
  
}


function commands(listOfCommands) {
  //choosing first player - this would be cool with multiple rovers, but I am not sure how to at this point :)
  // for (i=0 ; i<rovers.length; i++){
  //   if(Math.floor(Math.random()*2 === 1)){
  //     rovers[i].turn = 1;
  //     break;
  //   }
  //   else {rover1.turn = 1;}
  // }

  for (i=0; i<listOfCommands.length; i++) {
    for (j=0 ; j<rovers.length; j++){
 
      switch (listOfCommands[i]){
          case "r":
            turnRight(rovers[j]);
            break;
          case "l":
            turnLeft(rovers[j]);
            break;
          case "f":
            moveForward(rovers[j]);
            break;
          case "b":
            moveBackward(rovers[j]);
            break;
        }
    }
}
}
