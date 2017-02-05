$(function() {
  var $cards = $('.card-content');
  var $cardText = $('p');

  var values = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
  var revealedValues = [];

  function checkMatch() {
    var isMatch = revealedValues.every(function(element){
      return element === revealedValues[0]
    });
    isMatch ? match() : noMatch();
  }

  function noMatch() {
    $('.header').fadeOut(function(){
      $(this).text('Not A Match').addClass('red-text').removeClass('green-text').fadeIn();
    });
    $('.revealed').each(function(){
      $(this).removeClass("revealed");
      $(this).children().fadeOut(1000);
      revealedValues = [];
    });
  }

  function match() {

    $('.header').fadeOut(function() {
      $(this).text('Match!').addClass('green-text').removeClass('red-text').fadeIn();
    });
    $('.revealed').each(function(){
      $(this).removeClass("revealed").addClass("matched");
      revealedValues = [];
    });
    checkWin();
  }

  function checkWin() {
    if ( $('.card').find('.matched').length === $('.card').length ){
      $('.header').fadeOut(function(){
        $(this).text('You win!').removeClass('red-text').removeClass('green-text').addClass('orange-text').fadeIn();
      });
    }
  }

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

  $cards.children().hide();

  values = shuffle(values);

  $('p').each(function(){
    $(this).text(values.pop());
  });

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
