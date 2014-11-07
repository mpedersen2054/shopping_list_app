
$(document).ready(function () {

  // add text from input and other keyboard functionality
  $('#task').on('keydown', function (e) {

    if (e.which == 13) {
      var value = $(this).val();
      $('.no-task-notice').hide();
      $('.task-list').prepend('<li class="task incomplete"><p> '+value+'</p><span class="state">incomplete</span></li>');
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
    $('.no-task-notice').hide();
    $('.task-list').prepend('<li class="task incomplete"><p> '+value+'</p><span class="state">incomplete</span></li>');
  })
  .on('mouseup', function () {
    $('#large-task-button').hide();
    $('#large-task').hide();
    $('#task').show().val('').focus();
  });

  // toggle task completion state
  $('.task-list').on('click', '.task', function () {

    // toggle to incomplete
    if ($(this).is('.complete')) {
      $(this).removeClass('complete');
      $(this).addClass('incomplete');
      $(this).find('.state').show().text('incomplete');
      $('.task-list').prepend($(this));
      $(this).css('opacity', '1.0');

    // toggle to complete
    } else {
      $(this).removeClass('incomplete');
      $(this).addClass('complete');
      $(this).find('.state').hide();
      $('.task-list').append($(this));
      $(this).css('opacity', '0.5');
    }

  });

  // iterate and sort 2 states
  // this probably isnt need since there is
  // no persistence
  $('.task').each(function (i) {
    if ($(this).is('.complete')) {
      $(this).find('.state').text('');
      $('.task-list').append($(this));
      $(this).css('opacity', '0.5');
    } else {
      $(this).find('.state').text('incomplete');
      $('.task-list').prepend($(this));
    }
  })

});
