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
        background: 'red'
    }

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
            var x = parseInt(clickedCellId[0]);
            console.log(x);
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
                    // console.log(currentPlayer)
                    var $cell = $(`#${x}-${i}`);
                    $cell.addClass(currentPlayer.class);
                   $(`#${x}-${i}`).addClass(currentPlayer.class);
                   
                   console.log('Class: ' + currentPlayer.class);
                  
                if(currentPlayer === Player1){
                    currentPlayer = Player2;
                } else if (currentPlayer === Player2){
                    currentPlayer = Player1;
                }
        
                     break;

                }   
            }




            for (var i = 0; i < gameBoard.length; i++) {
                console.log('check row: ' + i);
                for (var j = 0; j < 7; j++) {
                    if (gameBoard[i][j].player ){
                        
                     
                  
                            if (j <= 3 && gameBoard[i][j].player === gameBoard[i][j].player
                            && gameBoard[i][j].player === gameBoard[i][j+1].player 
                            && gameBoard[i][j].player === gameBoard[i][j+2].player 
                            && gameBoard[i][j].player === gameBoard[i][j+3].player){
                        
                            console.log('game over');
                        
                        }
                    }
            }
    };                
     
    });


    // //fourInARowColumn
    // for (var i = 0; i < gameBoard.length; i++) {
    //     console.log('check row: i')
	// 		for (var j = 0; j < 7; j++) {
    //             console.log('check column: j '+ gameBoard[i][j].player);
    //             console.log('check column: j '+ gameBoard[i][j+1].player);
    //             console.log('check column: j '+ gameBoard[i][j+2].player);
    //             console.log('check column: j '+ gameBoard[i][j+3].player);
	// 			// if (j <= 3 
    //             //     && gameBoard[i][j].player === gameBoard[i][j+1].player 
    //             //     && gameBoard[i][j].player === gameBoard[i][j+2].player 
    //             //     && gameBoard[i][j].player === gameBoard[i][j+3].player){
                   
	// 			// 	alert("Game Over"); 
					
					
	// 			// 	//return;
    //             // }
    //         }
    // };                
    
});









