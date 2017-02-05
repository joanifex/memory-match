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
    $('.revealed').each(function(){
      $(this).removeClass("revealed");
      $(this).children().fadeOut(1000);
      revealedValues = [];
    });
  }

  function match() {
    $('.header').fadeOut(function() {
      $(this).text('MATCH!').addClass('green-text').removeClass('orange-text').fadeIn();
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
        $(this).text('YOU WIN!').removeClass('green-text').addClass('orange-text').fadeIn();
        $('.header').delay(1000).fadeOut(function(){
          $(this).text('NEW GAME').fadeIn();
        });
        // $('.header').hover(
        //   function(){
        //     $('this').removeClass('orange-text').addClass('red-text');
        //   }, function() {
        //     $('this').removeClass('red-text').addClass('orange-text');
        //   }
        // );
        $('.header').click(function(){
          $('.header').fadeOut(function(){
            $(this).text('MEMORY MATCH').fadeIn();
          });
          newGame();
        });
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

  function newGame() {
    $cards.children().hide();
    $cards.children().fadeOut(1000);
    var randomValues = values.slice(0);
    randomValues = shuffle(randomValues);
    $('p').each(function(){
      $(this).text(randomValues.pop());
    });
    revealedValues = [];
  }

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

  newGame();
});
