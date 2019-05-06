let playing = [];
let player = 1;
let x = "X";
let o = "O";
let isWin;

function displayChar(event) {
  if (player == 1) {
    //draw x if player is 1
    $(event.target).html('<strong class="XandO">' + x + "</strong>");
    $(event.target).off("click"); //off click on the same div
    let index = $("div").index(this); //get div index to store the char in right postion
    playing[index] = x;
    isWin = FindWinner(event);
  } else if (player == 2) {
    //draw o if player is 1
    $(event.target).html('<strong class="XandO">' + o + "</strong>");
    $(event.target).off("click");
    let index = $("div").index(this);
    playing[index] = o;
    isWin = FindWinner(event);
  }

  if (!isWin) {
    player++;
    if (player > 2) {
        //to make sure is switching between 1 and 2
        player = 1;
    }
    $("#y").text("player " + player + "'s turn");
    tie(isWin);
  }
  //     if(playing[0]==playing[0+1]&&playing[0+1]==playing[0+2]&&playing[0]!=null){
  // console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwww')
  //     }
  // if($('#1').text() == $('#2').text() && $('#2').text()==$('#3').text()){
  //     console.log('firstCase')
  //     console.log($(event.target).text()+' isWinner')
  // }
  // else if($('#4').text() == $('#5').text() && $('#5').text()==$('#6').text()){
  //     console.log('secCase')
  //     console.log($(event.target).text()+' isWinner')
  // }
  // else if($('#7').text() == $('#8').text() && $('#8').text()==$('#9').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }else if($('#1').text() == $('#4').text() && $('#4').text()==$('#7').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }else if($('#2').text() == $('#5').text() && $('#5').text()==$('#8').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }else if($('#3').text() == $('#6').text() && $('#6').text()==$('#9').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }else if($('#1').text() == $('#5').text() && $('#5').text()==$('#9').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }else if($('#3').text() == $('#5').text() && $('#5').text()==$('#7').text()){
  //     console.log($(event.target).text()+' isWinner')
  // }
}

function FindWinner(event) {
  //this methode to looking for winner
  console.log("playerrr  " + player);

  for (let i = 0; i < playing.length; i++) {
      console.log("hi")
    if (i == 0 || i == 3 || i == 6) {
      //row cases
      console.log("ok")
      if (
        playing[i] == playing[i + 1] &&
        playing[i] == playing[i + 2] &&
        playing[i] != null
      ) {
          console.log("winner")
        $("#y").html("<h3>player " + player + " is winner</h3>");
        $("div").off("click");
        return true;
      }
    }
    if (i == 0 || i == 1 || i == 2) {
      //column cases
      if (
        playing[i] == playing[i + 3] &&
        playing[i] == playing[i + 6] &&
        playing[i] != null
      ) {
        $("#y").html("<h3>player " + player + " is winner</h3>");
        $("div").off("click");
        return true;
      }
    }
  }
  if (
    playing[0] == playing[4] &&
    playing[0] == playing[8] &&
    playing[0] != null
  ) {
    //diagnols
    $("#y").html("<h3>player " + player + " is winner</h3>");

    $("div").off("click");
    return true;
  } else if (
    playing[2] == playing[4] &&
    playing[2] == playing[6] &&
    playing[2] != null
  ) {
    //diagnols
    $("#y").html("<h3>player " + player + " is winner</h3>");
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
      $("#y").html("<h3>Tie</h3>");
    }
  }
}

function restGame() {
  location.reload();
}

$("button").on("click", restGame);
$(".box").on("click", displayChar);
