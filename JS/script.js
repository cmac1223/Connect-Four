$(document).ready(function(){
     

    
    
    var player1 = {
        class: 'player1',
        background: 'blue'
    };



    var player2 = {
        class: 'player2',
        background: 'red'
    }


    var currentPlayer = player1;

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


            for(var i = 6; i >= 0; i--) {
                console.log(gameBoard[x][i].player);
                if(!gameBoard[x][i].player){
                    
                    gameBoard[x][i] = currentPlayer;
                    //jquery to change class to currentplayer color class switch
                    // console.log(currentPlayer)
                   $(event.target).addClass(currentPlayer.class);
                   
                   console.log('Class: ' + currentPlayer.class);
                  
                if(currentPlayer === player1){
                    currentPlayer = player2;
                } else if (currentPlayer === player2){
                    currentPlayer = player1;
                }
        
                     break;

                }   
            }
     
    });
    
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






