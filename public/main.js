const app = angular.module("geopardyApp", [])
  .controller("mainController", ['$scope', '$http', ($scope, $http) => {

    const CATEGORY_URL = "http://jservice.io/api/category?id=11547";
    $scope.player = {
      money: 0,
    }

      $http({
        method: "GET",
        url: CATEGORY_URL,
      }).then(response => {
        console.log("loaded data", response.data)
        $scope.category = {
          title: response.data.title,
          clues: response.data.clues.slice(0,5),
        }

        $scope.category.clues = $scope.category.clues.map((clue, index) =>{
          clue.value = (index +1) *100;
          return clue;
        })
      })

      $scope.questionClicked=(clue)=>{
        console.log("question clicked", clue)
        $scope.questionWasClicked = true;
        $scope.questionSelected = clue;
      }

      $scope.checkAnswer=()=>{
        console.log("here")
        const isCorrectAnswer = $scope.userAnswer.toLowerCase() === $scope.questionSelected.answer.toLowerCase();
        if(isCorrectAnswer){
          $scope.player.score += parseInt($scope.questionSelected.value);
        }
        else{
          $scope.player.score -= parseInt($scope.questionSelected.value);
        }
      } 
    
  }
  ]);