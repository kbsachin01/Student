var student = angular.module('student', []);

student.controller('StudentController', ['$scope', function($scope) {
 console.log('in controller');
 $scope.studentDetails = {
 	name : '',
 	usn : '',
 	branch : '',
 	course : '',
 	email : '',
 	phone : ''
 }
 console.log($scope.studentDetails);
 $scope.sendDetails = function() {
$scope.errorArray = [];
 	console.log($scope.studentDetails);
 	if ($scope.studentDetails.name == '' | $scope.studentDetails.name == '   ') {
 		$scope.errorArray.push('Name'); 
 	}
 	if ($scope.studentDetails.usn == '' | $scope.studentDetails.usn == '   ') {
 		$scope.errorArray.push('USN'); 
 	}
 	if ($scope.studentDetails.branch == '' | $scope.studentDetails.branch == '   ') {
 		$scope.errorArray.push('Branch'); 
 	}
 	if ($scope.studentDetails.course == '' | $scope.studentDetails.course == '   ') {
 		$scope.errorArray.push('Course'); 
 	}
 	if ($scope.studentDetails.email == '' | $scope.studentDetails.email == '   ') {
 		$scope.errorArray.push('Email'); 
 	}
 	if($scope.errorArray.length == 0) {
 		$.ajax ({
	 		url: "/api/stuform",
	 		type: "POST",
	 		data: $scope.studentDetails,
	 		success: function(data) {
	 			console.log(data);
	 			$scope.successMessage = true;
	 			$scope.errorMessage = false;
	 			$scope.successMsg = "student deatils successfully updated";

	 		},
	 		error: function(data){
	 			console.log(data);
	 		}
 		});	
 	} else {
 		console.log('inside error');
 		$scope.errorMessage = true;
 		$scope.successMessage = false;
 		$scope.errorMsg = "Please enter the following details : " + $scope.errorArray;

 	}
 	
 }

 $scope.buttonClicked = function(data) {
 	if (data == 'form') {
 		$scope.showStudentForm = true;
 		$scope.showStudentDatabse = false;
 	} else {
 		
 		$.getJSON("/api/all_studetails", function(data){
 			$scope.studentsData = data;
 			$scope.showStudentDatabse = true;
 			$scope.showStudentForm = false;
 		}).fail(function(){
 			console.log("error happend");
 		});
 		

 	}
 }

}])