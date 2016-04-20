angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController)
  .directive('card', CardViewDirective)
  .directive('scores', ScoreViewDirective);

function CardViewDirective() {
  var directive = {
    restrict: 'E',
    replace: false,
    templateUrl: './templates/_cardView.html',
    scope: {
      question: '@'
    }

  };
  return directive;
}

function ScoreViewDirective() {
  var directive = {
    restrict: 'E',
    replace: false,
    templateUrl: './templates/_scoreView.html',
    scope: {
      name: '@',
      points: '@'
    }
  };
  return directive;
}

// controllers start here
function CardsController() {
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"},
    {question: "My finger smells like ___________."}
  ];
}

function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Gilligan', points: 2},
    {name: 'Mary Ann', points: 16},
    {name: 'Ginger', points: 12},
    {name: 'Thurson', points: 6},
    {name: 'Skipper', points: 9},
    {name: 'The Professor', points: 21}
  ];
}
