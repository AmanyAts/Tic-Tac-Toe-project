let playing = [
  "", "", "",
  "", "", "",
  "", "", ""
];
let player = 1;
let x = "X";
let o = "O";
let isWin=false;
let isCom=false;
let score1=0;
let score2=0;

function withComputer(){
  $('#player2').text('computer/'+o+'');
  isCom=true;
}

function selecting(){
  //this methode allow the player 1 to select between X and O
  x=$(event.target).text();
  if($(event.target).text()!='X'){//swithcing between X and O for the players
     o='X'
  }else if($(event.target).text()=='X'){
    o='O'
  }
  //priniting the letter choosed for each player 
  $('#player-char').text('player 1/'+x+'');
  if(!isCom){
    $('#player2-char').text('player 2/'+o+'');
  }else{
    $('#player2').text('computer/'+o+'');
  }

  $('#p1').off('click');
  $('#p2').off('click');

}

function displayChar(event) {
  $('#p1').off('click');
  $('#p2').off('click');
  if(!isCom){
  
    if (player == 1) {
      //draw x if player is 1
      //make off to other buttons
      $('#com').off("click");
      
      $(event.target).html('<strong class="XandO">' + x + "</strong>");
      $(event.target).off("click"); //off click on the same div
      let index = $("div").index(this); //get div index to store the char in right postion in array
      playing[index] = x; 
      isWin = FindWinner(event);
      $('#player2').addClass('turn');
      $('#player1').removeClass('turn');
      
      if(isWin) {
        //if player 1 win
        console.log('ttttttttttt')
        
        score1++;
        console.log(score1);
      $('#socre1').text('='+score1)
      }
      
    } else if (player == 2) {
      //draw o if player is 1
      
      $(event.target).html('<strong class="XandO">' + o + "</strong>");
      $(event.target).off("click");
      let index = $("div").index(this);
      playing[index] = o;
      isWin = FindWinner(event);
      $('#player2').removeClass("turn");
      $('#player1').addClass('turn');
      if(isWin){
        score2++;
        $('#socre2').text('='+score2)
        console.log(score2);
      } 
      
    }

    if (!isWin) {
      player++;
      if (player > 2) {
          //to make sure is switching between 1 and 2
          player = 1;
      }
      tie(isWin);
    }
  }else{//computer playing
    
    player=1;
    $(event.target).html('<strong class="XandO">' + x + "</strong>");
    let index = $("div").index(this); //get div index to store the char in right postion
    playing[index] = x;
    isWin = FindWinner(event);
    
    if(!isWin){
    let random;
    let emptyBoardSpaces = []
    playing.forEach( (arrayElement, index) => {
      if (arrayElement === "") {
        emptyBoardSpaces.push(index)
      }
    })
    // emptyBoardSpaces [1,2,5,8]
    random= Math.floor(Math.random() * emptyBoardSpaces.length);
    let computerChoice = emptyBoardSpaces[random]
    $("#"+computerChoice).html('<strong class="XandO">' + o + "</strong>");
    playing[computerChoice] =o;
    // player=$(event.target).text();
    player='Computer';
    console.log("board after turn is ", playing);
    isWin = FindWinner(event);
  }
    
    if (!isWin) {
      tie(isWin);
    }
  }

}

function FindWinner(event) {
  //this methode to looking for winner
  console.log("playerrr  " + player);


  for (let i = 0; i < playing.length; i++) {
      console.log("hi")
    if (i == 0 || i == 3 || i == 6) {
      //row cases
      console.log("ok")
      if ( playing[i] !== "" && playing[i] == playing[i + 1] &&playing[i] == playing[i + 2] &&playing[i] != null) {
        
          console.log("winner")
          swal("player " + player + " is winner");
          // $('#'+i).toggleClass('win');
          // $('#'+(i+1)).css('color','gold');
          // $('#'+(i+2)).css('color','gold');
          $("div").off("click");
           return true;
      }
    }
    if (i == 0 || i == 1 || i == 2) {
      //column cases
      if (playing[i] !== "" && playing[i] == playing[i + 3] &&playing[i] == playing[i + 6] &&playing[i] != null) {
        swal("player " + player + " is winner");
        $("div").off("click");
        return true;
      }
    }
  }
  if (playing[0] !== "" && playing[0] == playing[4] &&playing[0] == playing[8] &&playing[0] != null) {
    //diagnols
    swal("player " + player + " is winner");


    $("div").off("click");
    return true;
  } else if ( playing[2] !== "" && playing[2] == playing[4] &&playing[2] == playing[6] &&playing[2] != null) {
    //diagnols
    swal("player " + player + " is winner");

    $("div").off("click");
    return true;
  }

  return false;
}

function tie(isWin) {
  if (
    $(".board")
      .children()
      .text().length == 9
  ) {
    //to make sure all boxes is full
    if (isWin === false) {
      //Findwinner will return false if there is no winner
      swal("No winner");

    }
  }
}

function restGame() {
  $("#y").text("");
  $('.box').text('');
  playing=[
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  player=1;
  isWin = false;
  $('#player2').removeClass("turn");
  $('#player1').addClass('turn');
  console.log($('.box').text())
  console.log(playing)
  $(".box").off("click");
  $(".box").on("click", displayChar);
  $('#p1').off('click');
  $('#p1').on('click',selecting);
  $('#p2').off('click');
  $('#p2').on('click',selecting);
  // location.reload();
}

// start the game
$('#p1').on('click', selecting);
$('#p2').on('click', selecting);
$("#rest").on("click", restGame);
$(".box").on("click", displayChar);
$('#com').on("click", withComputer);


