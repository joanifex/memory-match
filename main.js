$(function() {
  var $cards = $('.card-content');
  var $cardText = $('p');
  var revealedValues = [];


  function checkMatch() {
    var isMatch = revealedValues.every(function(element){
      return element === revealedValues[0]
    });
    isMatch ? match() : noMatch();
  }

  function noMatch() {
    console.log('no match');
    $('.revealed').each(function(){
      $(this).removeClass("revealed");
      $(this).children().hide();
      revealedValues = [];
    });
  }

  function match() {
    $('.revealed').each(function(){
      $(this).removeClass("revealed").addClass("matched");
      revealedValues = [];
    });
    checkWin();
  }

  function checkWin() {
    if ( $('.card').find('.matched').length === $('.card').length ){
      alert('win');
    }
  }

  $cards.children().hide();

  $cards.click(function(){
    $cardContent = $(this).children();
    if (!$cardContent.is(":visible")) {
      $(this).addClass("revealed");
      $cardContent.show();
      revealedValues.push($cardContent.text());
      if (revealedValues.length === 2 )
        checkMatch();
    }
  });
});
