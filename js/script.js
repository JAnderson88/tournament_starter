//select Elements
var teamContainer = document.querySelector(".container");
var teams = setTeams(getTeamsArray());
//select the divs that will hold the scores
//select the play the game button and set it to a variable called 'play'
//use querySelectorAll to the grab the two boxes with the class 'playing' and use a variable by the same name to store it
//There are two divs that have the same location one is showing currently the other is hidden using the class hide. Use two different variables and set it these elements (class of vs and class of win respectively)

//game states
//What current round is it?
var round = 1;
//What current match is it?
var match = 0;
//The place variable holds at which place in the next round am I going to place the winner
var place = "player1";
//The currentPlayers array holds both players who are currently playing (currentPlayers[0] and currentPlayers[1] respectively). Make sure you reference these players in the playGame function.
var currentPlayers = [];
//The rounds array is the brains of the operation. It's remembers who's playing and when someone wins, we move them to there correct spot in the next round.
var rounds = createRounds(teams);
//The holder variable is a tricky one...it's job is to simply remember which object in the next round array in the rounds object I need to place the player.
var holder = 0;

//function definitions
//The setTeams array randomly selects from the getTeamsArray function 8 teams and creates HTML elements in the teamContainer
function setTeams(teamsArray, MAXPLAYERS = 8) {
  //Clear out the teamContainer using innerHTML
  var temp = [];
  var length = teamsArray.length - 1;
  //This for loop should grab a random string from the teamsArray, add the string (which is actually a html element) to the teamsContainer using innerHTML, and then add the string to the temp array while simultaneoulsy removing it from the teamsArray
  for (var i = length; i > (length - MAXPLAYERS); i--) {
    var random = Math.floor(Math.random() * (i + 1));
    //use innerHTML on the teamContainer and add to the teamContainer the html string from the teamsArray (use the random number you created to reference the index in the teamsArray)
    //push the html string you just added to the teamContainer from the teamsArray into the temp array. Try and simulatenously remove that same element from the teamsArray while you are pushing to the temp array (Hint: use Splice).
  }
  return document.querySelectorAll('.team');
}

//This returns the rounds object that works as the brain of this app. 
function createRounds(teams) {
  return {
    //round 1
    round1: [
      //when round == 1 and match == 0
      { player1: teams[0], player2: teams[1], spot: "spot9" },
      //when round == 1 and match == 1
      { player1: teams[2], player2: teams[3], spot: "spot10" },
      //when round == 1 and match == 2
      { player1: teams[4], player2: teams[5], spot: "spot11" },
      //when round == 1 and match == 3
      { player1: teams[6], player2: teams[7], spot: "spot12" }
    ],
    //round 2
    round2: [
      //when round == 2 and match == 0
      { player1: "", player2: "", spot: "spot13" },
      //when round == 2 and match == 1
      { player1: "", player2: "", spot: "spot14" }
    ],
    //round 3
    round3: [
      //when round == 3 and match == 0
      { player1: "", player2: "", spot: "spot15" }
    ],
    //round 4 (a.k.a: The winner spot)
    round4: [
      //place the winner here in this object
      { player1: "" }
    ]
  }
}

//The set spots function adds the spot classes so that they move to there proper location on the screen
function setSpots(teams) {
  //Loop through the teams nodeList and use classList.toggle to add the appropriate class spot (Hint: In the loop using the ES6 string interpolation method `spot${i}` or 'spot' + i)
  play.disabled = false;
}

function setPlayers() {
  //This updates the currentPlayers array by referecing which current round, which current match, and player1 and player2 respectively
  currentPlayers = [rounds[`round${round}`][match].player1, rounds[`round${round}`][match].player2];
  playing.forEach(function (p, i) {
    //Uncomment when you have the players on the screen
    // p.textContent = currentPlayers[i].dataset.name;
  })
}

//The playGame function calculates the score, decides who wins, places the scores on the screen, and then returns who has won by refrencing the spot in rounds object that the winner has been moved to. 
function playGame(round, place, holder) {
  //The scores for player1 and player2 respectively
  var score1 = Math.random();
  var score2 = Math.random();

  if (score1 > score2) {
    //sets the players scores on the screen
    //reference the spot you wish to place the winner in rounds function and set its value to the winner (This case, player1)
  }
  if (score1 < score2) {
    //sets the players scores on the screen
    //reference the spot you wish to place the winner in rounds function and set its value to the winner (This case, player2)
  }

  //return the winner
}

//The moveTeam function moves the winner to its new spot on the screen
function moveTeam(winner, newSpot) {
  var oldSpot = winner.classList[1];
  //toggle the oldSpot on the winner element
  //toggle the newSpot on the winner element
}

//The changePlayer function switches the value of the place variable
function changePlayer() {
  //if the value of place is equal to "player1" switch it to "player2", else if the value is "player2" turn it back to "player1" and increment the holder variable by 1
}

//The changeMatch function updates which is the currentMatch
function changeMatch() {
  //First check if you are on the last match of the currenct round, if so increment round by 1, set the value of match to 0, set the value of holder to 0, then finally return. If it isn't the last match of the round simply increment match by 1
}

//gameOver function is called when you are ready to display the winner
function gameOver() {
  play.disabled = true;
  //hide the names of the current players, and hide the element that says "VS" and display the element that says "Winner"
}

//The returnToOriginal function returns to its all the values back to its original position to get ready for a new tournament
function returnToOriginal() {
  //Use setTimeout function, wait 3 seconds (in miliseconds) then set all the values by to its orignal position. You should have a brand new set of teams (or at least different orders) in there apropriate spots in round 1.
}

//Event Listeners
play.addEventListener("click", function (e) {
  var winner = playGame(round, place, holder)
  moveTeam(/*place appropriate parameters here*/)
  if (round === 3) {
    gameOver();
    returnToOriginal();
  }
  if (round < 3) {
    changePlayer();
    changeMatch();
    setPlayers();
  }
})

setSpots(teams)
setPlayers()