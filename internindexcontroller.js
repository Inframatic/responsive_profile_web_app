function InternCtrl($scope) {
  $scope.hoveredIntern;
  $scope.hovering = false;


  $scope.firstInterviewList = [
    {firstinterview: 'yes'},
    {firstinterview: 'no'}
  ];
    $scope.internList = [ 
      {"paidvolunteer": 'Paid' },
      {"paidvolunteer": 'Volunteer' },
      {"paidvolunteer": 'Either'}];

    $scope.interns = [
      {first_name:"Meg",last_name:"Griffin", industry: "Web Development", dob:"3/27/1991", email:"megrif@hotmail.com", "paidvolunteer":"Paid", country:"America", city:"Cleaveland", postal:"17543",description:"I love to work hard"},
      {first_name:"Peter",last_name:"Griffin", industry: "Web Development", dob:"6/27/1972", email:"Peetear@hotmail.com", "paidvolunteer":"Either", country:"America", city:"Cleaveland", postal:"17543",description:"I work hard but also drink hard. My bff is homer."},
      {first_name:"Louis",last_name:"Griffin", industry: "Food", dob:"7/26/1973", email:"Hoodrate@yahoo.com", "paidvolunteer":"Paid", country:"America", city:"Cleaveland", postal:"17543",description:"I like to steal."},
      {first_name:"Brian",last_name:"Griffin", industry: "Accounting", dob:"2/12/2007", email:"dogdays@me.com", "paidvolunteer":"Volunteer", country:"America", city:"Cleaveland", postal:"17543",description:"I'm a talking dog"},
      {first_name:"Homer",last_name:"Simpson", industry: "Food",dob:"8/2/1965", email:"BeersandTears@yahoo.com", "paidvolunteer":"Paid", country:"'Murica", city:"Springfield", postal:"16043",description:"I drink too much"},
      {first_name:"Marge",last_name:"Simpson", industry: "Bike Sales", dob:"5/23/1922", email:"bluewig@wiggy.com", "paidvolunteer":"Volunteer", country:"'Murica", city:"Springfield", postal:"16043",description:"I'm eye candy"},
      {first_name:"Bart",last_name:"Simpson", industry: "Priest", dob:"8/9/2013", email:"FutureStoneHead@yahoo.com", "paidvolunteer":"Volunteer", country:"'Murica", city:"Springfield", postal:"16043",description:"I skateboard very well"},
      {first_name:"Lisa",last_name:"Simpson", industry: "Adult Entertainment", dob:"beyond time", email:"SexySaxGurl@hotmail.com", "paidvolunteer":"Either", country:"'Murica", city:"Springfield", postal:"16043",description:""}
      ];

    $scope.showDetails = function(intern) {
      $scope.hoveredIntern = intern;
      $scope.hovering = true;
    }
}