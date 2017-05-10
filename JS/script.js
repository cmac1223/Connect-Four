$(document).ready(function(){

    var currentPlayer = 1;





 $('.wholeBoard').on('click', function(event){
    $(event.target).addClass(`player${currentPlayer}` );
    if(currentPlayer === 1){
        currentPlayer = 2
    } else if (currentPlayer === 2){
        currentPlayer = 1
    }
    
});


});


    // $('.button2').on('click', function(event){
    //     $(event.target).addClass('player1' );
    // })

    // $('.button3').on('click', function(event){
    //     $(event.target).addClass('player1' );
    // })

    // $('.button4').on('click', function(event){
    //     $(event.target).addClass('player1' );
    // })

    // $('.button5').on('click', function(event){
    //     $(event.target).addClass('player1' );
    // })

    // $('.button6').on('click', function(event){
    //     $(event.target).addClass('player1' );
    // })
    

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






