var myModule = angular.module('myApp', []);

function BusinessCtrl($scope) {
	$scope.firstInterviewList = [
		{firstinterview: 'yes'},
		{firstinterview: 'no'}
	];
    $scope.statusList = [ 
      {"paidvolunteer": 'Paid' },
      {"paidvolunteer": 'Volunteer' } ];
    $scope.list = [
    {name:'Hamburglar',industry:'Porn Industry', "paidvolunteer": 'Volunteer', location: "New York", firstinterview: "yes", company_size: 100000, "keyworddescription": "After the Hamburglar was fired from McDonalds for burger theft, he invested 2.5 million dollars into the porn industry and now it has become the booming porn company you see today"},
      {name:'GOD YWH', industry:'Finance', "paidvolunteer": 'Volunteer', location: "New York", firstinterview: "yes",  company_size: 1100, "keyworddescription": "I love money. Banks own everything, but who owns the bank? Heaven does bitches. I'm writing more so this box fills out."},
      {name:'Jesus Christ',industry:'Web Development', "paidvolunteer": 'Paid', location: "Boston", firstinterview: "no",   company_size: 400, "keyworddescription": "We make things look cool because people like cool stuff.If you shorten this decription, this box will get smaller. It's weird"},
      {name:'Allah',industry:'Corn Dogs', "paidvolunteer": 'Paid', location: "Boston", firstinterview: "no",  company_size: 40, "keyworddescription": "Our hotdogs are the largest and firmest hotdogs in all the land. We protect each hotdog with a cushy breading" },
      {name:'Mcdonalds',industry:'Porn Industry', "paidvolunteer": 'Volunteer', location: "New York", firstinterview: "yes", company_size: 100000, "keyworddescription": "After the Hamburglar was fired from McDonalds for burger theft, he invested 2.5 million dollars into the porn industry and now it has become the booming porn company you see today"},
      {name:'Burger King', industry:'Finance', "paidvolunteer": 'Volunteer', location: "New York", firstinterview: "yes",  company_size: 1100, "keyworddescription": "I love money. Banks own everything, but who owns the bank? Heaven does bitches. I'm writing more so this box fills out."},
      {name:'Jesus Christ',industry:'Web Development', "paidvolunteer": 'Paid', location: "Boston", firstinterview: "no",   company_size: 400, "keyworddescription": "We make things look cool because people like cool stuff.If you shorten this decription, this box will get smaller. It's weird"},
      {name:'Allah',industry:'Corn Dogs', "paidvolunteer": 'Paid', location: "Boston", firstinterview: "no",  company_size: 40, "keyworddescription": "Our hotdogs are the largest and firmest hotdogs in all the land. We protect each hotdog with a cushy breading" }
      
    	];
}Description