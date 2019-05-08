# Tic-Tac-Toe-project

- List technologies used
    to build tic tac toe I used html , css and js with jquery library
    SweetAlert: https://sweetalert.js.org/guides/
    background pic from pixelbay :https://pixabay.com/images/id-152414/

- user stories
    player 1, by defult click on squre to add X
    player 2, by defult click on squre to add O
    if player 1 cliked on O button so 'O' will be added on squre 
    player 2 will play with 'X' 
    player can play again if he/she clicked on play again button
    in each time there is win the player's score will increse
    if the player click on play with computer button he/she will played with computer

- develpment process 
    1- i wrote html and css code then js code
    2- i defined a variable call player to player turn and switching between player 1 & 2 and two variables for character 'X' and 'O'
    3-I used jquery for click event
    4-I created methode call FindWinner to looking for winner in each time the user add on squre
      to find the winner
    5-i used an empty array called playing for storing the elements from div to this array then i used for loop to comparing 
    6-chooseChar methode will called when X or O buttons clicked is used to change players tokens.
    7- i defined a gloabal variable isCom if the user click on computer button it will turn to be true 

- List unsolved problems which would be fixed in future iterations.
    counting the winning in playing with computer case.
    
- Describe how you solved for the winner
    i used an empty array called playing for storing the elements that get it from div then i used for loop to comparing 
    first if statment for row cases ,second one for column , the last for diagnal
    then if there is a winner the methode will return true otherwise false that means it's tie

