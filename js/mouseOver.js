(function (document, window, undefined) {
  'use strict';
  var tooltip = $('.tooltip');
  tooltip.each(function() {
    var $this = $(this),
    tooltipText = $('<div class="tooltip-text">' + $this.data('tooltip-text') + '</div>');
    $this.on('mouseover', function() {
        tooltipText.appendTo('body');
    });
    $this.on('mouseout', function() {
        tooltipText.remove();
    });
    $this.on('mousemove', function(e) {
        tooltipText.css('top', (e.pageY + 20) + 'px');
        tooltipText.css('left', (e.pageX + 20) + 'px');
    });
  });
})(document, window);