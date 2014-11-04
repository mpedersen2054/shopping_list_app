$(document).ready(function () {

  $('#task').on('keydown', function (e) {

    if (e.which == 13) {
      var value = $(this).val();
      $('.task-list').append('<li class="task"><h4> '+value+'</h4></li>');
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

  $('#large-task-button').on('mousedown', function () {
    var value = $('#large-task').val();
    $('.task-list').append('<li class="task"><h4> '+value+'</h4></li>');
    $('#large-task-button').hide();
    $('#large-task').hide();
    $('#task').show().val('');
  });

});
