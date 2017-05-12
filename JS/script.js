$(document).ready(function(){
     

    var currentPlayer = 1;
    // var player1 = {
    //         class: 'player1',
    //         background: 'blue'
    //     };
        
    // var player2 = {
    //     class: 'player2',
    //     background: 'red'
    //     };    

    $('.cell42 ').on('click', function(event){
        var clickedCellId = event.target.id;
        console.log('callback fired');
        var $cells = $('.cell42');
        console.log($cells);
        
            console.log(clickedCellId);
            var x = parseInt(clickedCellId[0]);
            console.log(x);
            var y = parseInt(clickedCellId[2]);
            console.log(y);

            for(var i = 6; i >= 0; i--) {
                if(gameBoard[x][i].player === null){
                    gameBoard[x][i] = currentPlayer;
                    //jquery to change class to currentplayer color class switch
                    


                     break;

                }   
            }


            gameBoard[x][y].player = currentPlayer;
            console.log(gameBoard[x][y]);
            
        
    });

    //function switchPlayer() {
        $('.wholeBoard').on('click', function(event){
            $(event.target).addClass(`player${currentPlayer}`);
            if(currentPlayer === 1){
                currentPlayer = 2;
            } else if (currentPlayer === 2){
                currentPlayer = 1;
            }
        });
    //}


    

    
    
});

var gameBoard = [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
];







// function initialize() {
//     $('.cell42 ').on('click', function(){
//         console.log('callback fired');
//         var $cells = $('.cell42');
//         console.log($cells);
//         for (var i = 0; i < $cells.length; i++) {
//             console.log('loop hit');
//             var cell42 = $cells[i];
//             console.log(cell42);
//             var x = parseInt(cell42.getAttribute(['id'])[0]);
//             console.log(x);
//             var y = parseInt(cell42.getAttribute(['id'])[2]);
//             console.log(y);
//             gameBoard[x][y].player = cell42.getAttribute(['currentPlayer'])
        
//         }
// });


    
    





 
    


//     var $cells = $('cell42')
//     for (var i = 0; i < $cells.length; i++) {
//         var cell42 = $cells[i];
//         cell42.attr[i]
//         var x = parseInt(cell42.attr['id'][0]);
//         console.log(x);
//         var y = parseInt(cell42.attr['id'][2]);
//         console.log(y);
//         gameBoard[x][y].player = cell42.attr['currentPlayer']
    
// }
// });



  
  





// var gameInfo = {
//             firstPlayerName: "Player1",
//             firstPlayerColor: "Black",
//             secondPlayerName: "Player2",
//             secondPlayerColor: "Red",
//             firstPlayerToStart: "Black",
//             currentPlayer: "Waiting on ",
//             winner: 4,
//         };

// var gameBoard = [[x,x,x,x,x,x,x],
//                  [x,x,x,x,x,x,x],
//                  [x,x,x,x,x,x,x],
//                  [x,x,x,x,x,x,x],
//                  [x,x,x,x,x,x,x],
//                  [x,x,x,x,x,x,x],
//                 ];        

//   $('#player1').css('background-color', theButtonColor);
//  })

//  $('#player2').on('click', function(event){
//   event.stopPropagation();
//   var theButtonColor = $(event.target).css('background-color');
//   $('.button2').css('background-color', theButtonColor);
 
// });
 
//  var moveTracker = [];
//  var rowX = [];
//  var columnY = ["b01",];

// $('x').on('click', function(){
    
//   ]
//})

//var x = ["button1"]

//var y = ["b01"]






