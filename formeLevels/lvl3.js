
$(document).ready(function() {
  
  var currentBox = 3;

  function magnetSnap(speed) {
    var snapspeed = speed;
    var p = $(".container div:nth-child(" + currentBox + ")");
    var offset = p.offset();

    $("#dragbox").animate(
      {
        top: offset.top,
        left: offset.left
      },
      snapspeed
    );
  }

  magnetSnap(0);

  $(window).resize(function() {
    magnetSnap(0);
  });

  $("#dragbox")
    .mousedown(function() {
      $(this).addClass("draggingbox");
    })
    .mouseup(function() {
      $(this).removeClass("draggingbox");
    });

  $("#dragbox").draggable();

  $(".dropbox").droppable({
    classes: {
      "ui-droppable-hover": "hoveringbox"
    },

    over: function(event, ui) {
      var p = $(this);
      currentBox = p.index() + 1;
      $("#dragbox p").text(currentBox);
    },

    drop: function(event, ui) {
      magnetSnap(40);
    }
  });
});