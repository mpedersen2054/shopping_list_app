(function($, document) {
  var $task = $('#task'),
      $noTaskNotice = $('.no-task-notice'),
      $taskList = $('.task-list'),
      $largeTask = $('#large-task'),
      $largeTaskBtn = ('#large-task-button');

  // add text from input and other keyboard functionality
  $task.on('keydown', function (e) {
    var $this = $(this);

    if (e.which === 13) {
      var value = $this.val();
      $noTaskNotice.hide();
      $taskList.prepend('<li class="task incomplete"><p> '+value+'</p><span class="state">incomplete</span></li>');
      $this.val('');
    }

    if (e.which === 27) {
      $this.val('');
    }

    if (e.which === 40) {
      e.preventDefault();
      var value = $this.val();
      $this.hide();
      $largeTask.show().val(value).focus();
      $largeTaskBtn.show();
    }

  });

  // add task from textarea
  $('#large-task-button').on('mousedown', function () {
    var value = $largeTask.val();

    $noTaskNotice.hide();
    $taskList.prepend('<li class="task incomplete"><p> '+value+'</p><span class="state">incomplete</span></li>');
  })
  .on('mouseup', function () {
    $largeTaskBtn.hide();
    $largeTask.hide();
    $task.show().val('').focus();
  });

  // toggle task completion state
  $taskList.on('click', '.task', function () {
    var $this = $(this);

    // toggle to incomplete
    if ($this.is('.complete')) {
      $this.removeClass('complete');
      $this.addClass('incomplete');
      $this.find('.state').show().text('incomplete');
      $taskList.prepend($this);
      $this.css('opacity', '1.0');

    // toggle to complete
    } else {
      $this.removeClass('incomplete');
      $this.addClass('complete');
      $this.find('.state').hide();
      $taskList.append($this);
      $this.css('opacity', '0.5');
    }

  });

  // iterate and sort 2 states
  // this probably isnt need since there is
  // no persistence
  $('.task').each(function (i) {
    var $this = $(this);

    if ($this.is('.complete')) {
      $this.find('.state').text('');
      $taskList.append($this);
      $this.css('opacity', '0.5');
    } else {
      $this.find('.state').text('incomplete');
      $taskList.prepend($this);
    }
  })
})(jQuery, document);
