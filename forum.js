var comments = [];
var repon = 0;
var reps = [];

var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider' , 
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'forum.html',
				controller:'forum'
			}).
			when('/comment',{
				templateUrl: 'comment.html',
				controller:'forum'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);


app.controller("forum", function($scope) {
		$scope.comments = comments;
		$scope.reps = reps;
		$scope.repon = repon;

		$scope.addMessage = function(){
			var d = Date();
			d = d.split(" ");
			d.splice(5,4);
			d = d.join();
			d = d.replace(/,/g , " ");
			if($scope.mess == ""){
				alert("please input a message");
			}else{
			var data = {
					'mess' : $scope.mess,
					'date' : 	d,
					'reply':['test comment'],
					'likes': 0
			};
			comments.push(data);
			}
		};
		
		$scope.likeComment = function(ix){
			var m = document.getElementsByTagName('button')[2*ix + 1].childNodes[1];
			var count = m.innerHTML;
			count = parseInt(count);
		    count++;
			m.innerHTML = count;
			comments[ix].likes = count;
		};
		
		$scope.setRepon = function(i){
			repon = i;
			reps = comments[repon].reply;
		};
		
		$scope.makeReply = function(){
			var r = document.getElementById('reply').value;
			comments[repon].reply.push(r);
			$scope.reps = comments[repon].reply;
		};

});