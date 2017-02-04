$(function() {
  var $cards = $('.card-content');
  var $cardText = $('p');

  function checkMatch() {
    //if ($revealedCards.length > 1){
      // check to see if values of the cards are the same
      //match ? yesMatch() : noMatch();
  }

  function noMatch() {
    alert('no');
  }

  function yesMatch() {
    alert('yes');
  }

  $cards.children().hide();

  $cards.click(function(){
    $text = $(this).children();
    if (!$text.is(":visible")) {
      $text.show();
    }
    checkMatch();
  });
});
