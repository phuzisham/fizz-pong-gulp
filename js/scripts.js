$(document).ready(function() {
  $('#pingForm').submit(function(event) {
      event.preventDefault();
      //clearList();
      var userInput = $('#userInput').val();
      ping(userInput);
  });
  // $('#reset').click(function(event) {
  //     //event.preventDefault();
  //     clearList();
  // });
});

function clearList() {
  //$('#resultList ul').text('<li>' '</li>');
  $('#resultList').empty();
}


function ping(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      $('#resultList ul').append('<li>'+'ping-pong'+'</li>');
    } else if (i % 5 == 0) {
        $('#resultList ul').append('<li>'+'ping'+'</li>');
    } else if (i % 3 == 0) {
        $('#resultList ul').append('<li>'+'pong'+'</li>');
    } else {
      $('#resultList ul').append('<li>'+i+'</li>');
    }
  }
}
