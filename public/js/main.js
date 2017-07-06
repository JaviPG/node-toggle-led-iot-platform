function onReady() {

  var $btn = $('.toggle');

  $.get('/api/checkled')
    .then(
    function (success) {
      if (success) {
        $('#led').addClass('active');
      }
    }
    );

  $btn.on('toggle', function (e) {
    var led = $(this).attr('id');

    if ($(this).hasClass('active')) {
      $.get('/api/' + led + '/on', function (data) {
        console.log(data);
      });
    }
    else {
      $.get('/api/' + led + '/off', function (data) {
        console.log(data);
      });
    }
  });

};

$(document).ready(onReady);