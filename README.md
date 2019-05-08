# Tic-Tac-Toe-project
to build tic tac toe I used html , css and js with jquery library
As player 1, by defult click on squre to add X
As player 2, by defult click on squre to add O
As player 1 if I cliked on O button so 'O' will be added on squre 
As player 2, 'X' will be added on squre 
As player , I sould play again if I clicked on play again button
As player , my score will store it if I press play again so each game I win will counted
As player , when my turn it 
--------------------------------------------------------------------------------------
during develpment process 
first writing html and css code then js code
i defined a variable call player to player turn and switching between player 1 & 2 and 
two variables for character 'X' and 'O' then I used jquery for click event
I created methode call FindWinner to looking for winner in each time the user add on squre
to find the winner i used an empty array called playing for storing the elements from div to this array then i used for loop to comparing 
first if statment for row cases ,second one for column , the last for diagnal
then if there is a winner the methode will return true otherwise false that is means it's tie
chooseChar methode this methode will called when X or O buttons clicked is used to change players tokens.

