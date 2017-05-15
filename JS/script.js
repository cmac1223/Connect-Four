$(document).ready(function(){
     
const gameBoard = [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
    ];
    const Player1 = {
        class: 'player1',
        background: 'blue'

    };

    const Player2 = {
        class: 'player2',
        background: 'red',

    }
    //gameBoard loop
    for (var i = 0; i < gameBoard.length; i++) {
        for (var j = 0; j < 7; j++) {
            gameBoard[i][j].player = null;
        }
    }
    var currentPlayer = Player1;

    //target id want x & y values
    //create a click function when each button is clicked
    $('.cell42 ').on('click', function(event){
        console.log(currentPlayer);
        //assign event.target.id to var clickedCellId
        var clickedCellId = event.target.id;
        console.log('callback fired');
        //assign each button to var cells
        var $cells = $('.cell42');
        console.log($cells);
        
            console.log(clickedCellId);
            // x value
            var x = parseInt(clickedCellId[0]);
            console.log(x);
            // y value
            var y = parseInt(clickedCellId[2]);
            console.log(y);

            // starting point row0
            for(var i = 0; i < 6; i++) {
                console.log(gameBoard[x][i].player);
                if(!gameBoard[x][i].player){
                    console.log('x is ' + x);
                    console.log('i is ' + i);
                    console.log(gameBoard);
                    gameBoard[x][i].player = currentPlayer;
                    //jquery to change class to currentplayer color class switch
                    
                    var $cell = $(`#${x}-${i}`);
                    $cell.addClass(currentPlayer.class);
                   $(`#${x}-${i}`).addClass(currentPlayer.class);
                   
                // alternate between players
                // alternating colors 
                //player1 Blue
                //player2 Red 
                if(currentPlayer === Player1){
                    currentPlayer = Player2;
                } else if (currentPlayer === Player2){
                    currentPlayer = Player1;
                }
        
                     break;

                }   
            }

            // vertical win 4 in a column
            // looping through the X values
            for (var i = 0; i < gameBoard.length; i++) {
                console.log('check row: ' + i);
                // looping through the Y values
                for (var j = 0; j < 5; j++) {
                    //since gameBoard is undefined starting off
                    if (gameBoard[i][j].player ){
                        // then cycle through ths if statement checking conditions
                        if (j <= 3 && gameBoard[i][j].player === gameBoard[i][j].player
                        && gameBoard[i][j].player === gameBoard[i][j+1].player 
                        && gameBoard[i][j].player === gameBoard[i][j+2].player 
                        && gameBoard[i][j].player === gameBoard[i][j+3].player){
                            //once condition is met alert user
                            console.log('game Over');
                            alert("Game Over");
                        
                        }
                    }
                }    
                    
            }
            //horiz win 4 in a row
            for (var i = 0; i < gameBoard.length; i++) {
                for ( var j = 0; j < gameBoard.length; j++) {
                    if (gameBoard[i][j].player) {
                        if (i <= 3 && gameBoard[i][j].player === gameBoard[i][j].player 
                        && gameBoard[i][j].player === gameBoard[i+1][j].player 
                        && gameBoard[i][j].player === gameBoard[i+2][j].player 
                        && gameBoard[i][j].player === gameBoard[i+3][j].player) {
                            console.log('game Over')
                            alert('Game Over')
                        }
                    }
                }
            }
            //diagonal win 4 in a line(right)
            for (var i = 0; i < gameBoard.length; i++) {
                for ( var j = 0; j < gameBoard.length; j++) {
                    if (gameBoard[i][j].player) {
                        if (i <= 3 && j <= 2 && gameBoard[i][j].player === gameBoard[i][j].player 
                        && gameBoard[i][j].player === gameBoard[i+1][j+1].player 
                        && gameBoard[i][j].player === gameBoard[i+2][j+2].player 
                        && gameBoard[i][j].player === gameBoard[i+3][j+3].player) {
                            console.log('game Over')
                            alert('Game Over')
                        }
                    }
                }
            }
            // diagonal win 4 in a line(left)
            for (var i = 0; i < gameBoard.length; i++) {
                for ( var j = 0; j < gameBoard.length; j++) {
                    if (gameBoard[i][j].player) {
                        if (i >= 3 && j >= 2 && gameBoard[i][j].player === gameBoard[i][j].player 
                        && gameBoard[i][j].player === gameBoard[i-1][j+1].player 
                        && gameBoard[i][j].player === gameBoard[i-2][j+2].player 
                        && gameBoard[i][j].player === gameBoard[i-3][j+3].player) {
                            console.log('game Over')
                            alert('Game Over')
                        }
                    }
                }
            }



                   
     
    });


    
});









