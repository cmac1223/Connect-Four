$(document).ready(function(){

//  $('#b01').on('click', function(){
//    alert('Test');
//  })
//  $('#b02').on('click', function(){
//    alert('Test');
//  })
//  $('#b03').on('click', function(){
//    alert('Test');
//  })
//  $('#b04').on('click', function(){
//    alert('Test');
//  })
//  $('#b05').on('click', function(){
//    alert('Test');
//  })
//  $('#b06').on('click', function(){
//    alert('Test');
//  })

// $('.btn').on('click', function(){
//   alert('YES!');
// })

 $('#player1').on('click', function(event){
  event.stopPropagation();
  var theButtonColor = $(event.target).css('background-color');
  $('.button1').css('background-color', theButtonColor);
 })

 $('#player2').on('click', function(event){
  event.stopPropagation();
  var theButtonColor = $(event.target).css('background-color');
  $('.button2').css('background-color', theButtonColor);
 })
});


//var arry = [  ]

// for(var 0 = i;)






