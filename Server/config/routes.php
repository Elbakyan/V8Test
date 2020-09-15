<?php
return array(
	//Login user 
	'login' => 'user/login',
    'UbdateUserData' => 'user/Update',
	//Registration new user 
	'Reg' => 'user/Reg',
	//checks whether you signed in or not
	'corona' => 'user/Exist',
	//Get location city
	'location/city' => 'json/GetLocationById/$1',
	//Get location sircle
	'location' => 'json/location',
	//Get auto model
	'auto/model' => 'json/GetAutoById/$1',
	//Get auto mark
	'auto' => 'json/auto',
	//Get services
    'services' => 'json/GetServices',
	//Logout user
	'logout' => 'user/Logout',
    //add user auto
    'AddUserAuto' => 'myauto/index',
    //add user auto
    'GetUserAuto' => 'myauto/GetUserAuto',
    //Delite auto
    'DeleteUserAuto' => 'myauto/DeleteUserAuto',
    //Add Score
    'AddScoreAccount' => 'score/AddScoreAccount',
    //Get score
    'GetScoreAccount'=> 'score/GetScoreAccount'


	
);
