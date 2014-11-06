
$(document).ready(function () {

  // add text from input and other functionality
  $('#task').on('keydown', function (e) {

    if (e.which == 13) {
      var value = $(this).val();
      $('.task-list').append('<li class="task"><p> '+value+'</p></li>');
      $(this).val('');
    }

    if (e.which == 27) {
      $(this).val('');
    }

    if (e.which == 40) {
      e.preventDefault();
      var value = $(this).val();
      $(this).hide();
      $('#large-task').show().val(value).focus();
      $('#large-task-button').show();
    }

  });

  // add task from textarea
  $('#large-task-button').on('mousedown', function () {
    var value = $('#large-task').val();
    $('.task-list').append('<li class="task"><p> '+value+'</p></li>');
  })
  .on('mouseup', function () {
    $('#large-task-button').hide();
    $('#large-task').hide();
    $('#task').show().val('').focus();
  });

  // toggle task completion state
  $('.task-list').on('click', '.task', function () {

    if ($(this).is('.complete')) {
      $(this).removeClass('complete');
      $(this).addClass('incomplete');
      $(this).find('.state').text('incomplete');
    } else {
      $(this).removeClass('incomplete');
      $(this).addClass('complete');
      $(this).find('.state').text('complete');
    }

  });

});
