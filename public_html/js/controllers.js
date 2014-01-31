app.controller('PlayerController', function($scope) {
    $scope.p1name = {name: 'Player 1'};
    $scope.p1guess = {guess: null};
    $scope.p1score = {score: 0};
    $scope.p1win = {win: false};

    $scope.p2name = {name: 'Player 2'};
    $scope.p2guess = {guess: null};
    $scope.p2score = {score: 0};
    $scope.p2win = {win: false};

    $scope.p3name = {name: 'Player 3'};
    $scope.p3guess = {guess: null};
    $scope.p3score = {score: 0};
    $scope.p3win = {win: false};

    $scope.p4name = {name: 'Player 4'};
    $scope.p4guess = {guess: null};
    $scope.p4score = {score: 0};
    $scope.p4win = {win: false};
    
    $scope.dname = {name: 'Dealer'};
    $scope.dscore = {score: 0};
    $scope.dguess = {guess: null};
    $scope.dwin = {win: false};
    $scope.dealerNum = function(){
        $scope.dguess = {guess: Math.floor((Math.random() * 5) + 1)};
    };
    
    $scope.win = {name: null};
    
    $scope.winner = function(){
        if ($scope.dguess.guess == $scope.p1guess.guess){
            $scope.p1score.score++
            $scope.win = {name: $scope.p1name.name + " has won!"};
            
        } else if($scope.dguess.guess == $scope.p2guess.guess) {
            $scope.p2score.score++
            $scope.win = {name: $scope.p2name.name + " has won!"};
            
        } else if($scope.dguess.guess == $scope.p3guess.guess) {
            $scope.p3score.score++
            $scope.win = {name: $scope.p3name.name + " has won!"};
        
        } else if($scope.dguess.guess == $scope.p4guess.guess) {
            $scope.p4score.score++
            $scope.win = {name: $scope.p4name.name + " has won!"};
            
        } else {
            $scope.dscore.score++
            $scope.win = {name: "The " + $scope.dname.name + " has won!"};
        }
    }
    
    $scope.player2Box = {show: true};
    $scope.player3Box = {show: true};
    $scope.player4Box = {show: true};
    
    $scope.toggle1Player = function(){
        $scope.player2Box.show = false;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle2Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle3Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = false;
    };
    $scope.toggle4Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = true;
    };
});
