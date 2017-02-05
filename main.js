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
    $('.header').text('Not A Match').addClass('red-text').removeClass('green-text');
    $('.revealed').each(function(){
      $(this).removeClass("revealed");
      $(this).children().hide();
      revealedValues = [];
    });
  }

  function match() {
    $('.header').text('Match!').addClass('green-text').removeClass('red-text');
    $('.revealed').each(function(){
      $(this).removeClass("revealed").addClass("matched");
      revealedValues = [];
    });
    checkWin();
  }

  function checkWin() {
    if ( $('.card').find('.matched').length === $('.card').length ){
      $('.header').text('You win!').removeClass('red-text').removeClass('green-text').addClass('orange-text');;
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
