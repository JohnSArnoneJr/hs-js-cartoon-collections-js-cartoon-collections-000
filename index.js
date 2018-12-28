var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
var words = ["earth", "wind", "fire", "water", "heart"];

function dwarfRollCall(dwarves) {
  var dwarfArray = [];
  for (let i = 0; i < dwarves.length; i++) {
    dwarfArray.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarfArray.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var uppercaseCalls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    var punctuation = "!";
    uppercaseCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase());
  }
  return uppercaseCalls;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
     if (foods[i] ==  "gouda" || foods[i] == "cheddar" || foods[i] == "camembert") {
      return foods[i];
    }
  }
  return "no cheese!";
}
