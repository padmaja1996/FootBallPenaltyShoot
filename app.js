let score = [0, 1];
var turn;

//Team 1 details
var team1 = {
  name: "MAXICO",
  goals: [],
  score: 0,
};

//Team 2 details
var team2 = {
  name: "SPANISH",
  goals: [],
  score: 0,
};

window.onload = () => {
  //Decide who's gonna strike first
  selectTurn();
  //Update text of button
  updateButtonText();
  //Update the Initial scores
  updateScore();
  //Update team names
  updateNames();
};

let selectTurn = () => {
  turn = Math.round(Math.random()) + 1;
};

let updateButtonText = () => {
  var button = document.getElementById("strike-button");
  var result = document.getElementById("result");
  result.style.visibility = "";

  //check if the game is over.
  if (team1.goals.length == 6 && team2.goals.length == 6) {
    button.remove();
    //check if match is draw
    result.textContent =
      team1.score === team2.score
        ? `Match Draw`
        : `${team1.score > team2.score ? team1.name : team2.name} Wins`;
  } else {
    turn = team1.goals.length === 6 ? 2 : team2.goals.length === 6 ? 1 : turn;
    button.textContent = `${turn === 1 ? team1.name : team2.name} Strike`;
  }
};

let updateScore = () => {
  document.getElementById("team-1-score").textContent = team1.score;
  document.getElementById("team-2-score").textContent = team2.score;
  UpdateGoals();
};

let updateNames = () => {
  document.getElementById("team-1-name").textContent = team1.name;
  document.getElementById("team-2-name").textContent = team2.name;
};

var ButtonClick = () => {
  var goals = score[Math.floor(Math.random() * score.length)];
  
  if (turn === 1) {
    team1.goals.push(goals);
    team1.score = CalculateScore(team1.goals);
    turn = 2;
  } else {
    team2.goals.push(goals);
    team2.score = CalculateScore(team2.goals);
    turn = 1;
  }

  updateButtonText();
  updateScore();
};

var CalculateScore = (goals) => {
  return goals.reduce((total, num) => total + num);
};

var UpdateGoals = () => {
  var teamOne = document.getElementById("team-1-goals").children;
  var teamTwo = document.getElementById("team-2-goals").children;
  team1.goals.forEach((goals, index) => {
      goals === 1 ? teamOne[index].style.backgroundColor = "green" : teamOne[index].style.backgroundColor = "red";
    
  });
  team2.goals.forEach((goals, index) => {
    goals === 1 ? teamTwo[index].style.backgroundColor = "green" : teamTwo[index].style.backgroundColor = "red";
  });
};