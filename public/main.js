const app = angular.module("geopardyApp", [])
  .controller("mainController", ['$scope', '$http', ($scope, $http) => {


    $scope.categories = [
      {
        title: "1", question: [{ value: 200, clue: "" }]
      },
      {
        title: "2", question: [{ value: 200, clue: "" }]
      },
      {
        title: "3", question: [{ value: 200, clue: "" }]
      },
      {
        title: "4", question: [{ value: 200, clue: "" }]
      },
      {
        title: "5", question: [{ value: 200, clue: "" }]
      }
    ];


    $scope.displayQuestion = (value) => {
      $http({
        method: "GET",
        url: "http://jservice.io/api/clues",
      }).then(response => {
        console.log("loaded question", response)
        console.log("loaded data", response.data)
        $scope.data = response.data;
        for (let i = 0; i < 5; i++) {
          $scope.statment = data[i].question;
          $scope.values = data[i].value;
          $scope.answers = data[i].answer;
        }
      })
      return categories.question={
        value: $scope.values,
        answers: $scope.answers,
      };
    }

  }
  ]);