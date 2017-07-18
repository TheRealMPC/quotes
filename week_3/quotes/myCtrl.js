angular.module('quoteBook').controller('myCtrl',function($scope, myService){

  $scope.quotes = myService.getQuotes();
  $scope.deleteMe = function(dataRemove){
    myService.removeData(dataRemove);
  }

  $scope.addQuote = function(){
    var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(myService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
})
