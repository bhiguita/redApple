$(document).ready(function() {

    var trigger = $('#transition');
    var content = $('#mainPage');

    trigger.on('click', function() {
      // var $this = $(this);
      //   target = $this.data('target');

    content.load('content.php');
    return false;

    })

});
