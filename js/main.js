"use strict";

let add = require('./add.js'),
	get = require('./get.js'),
	deleter = require('./delete'),
	dom = require('./dom-builder');
	// user = require('./user.js'),
	// currentUser,
	// firebaseID;

/////////////////////////
///// ON PAGE LOAD //////
/////////////////////////

$(document).ready( () => {
		get.getToys().then( (data) => {
			for (var prop in data) {
				console.log('prop', prop);
				data[prop].id = prop;
			}
			dom.buildList(data);

		});
});

/////////////////////////
//////// SIGN IN ////////
/////////////////////////

// $('#signIn').click( () => {
// 	$('#signIn').hide();
// 	$('#logOut').removeClass('hidden');
// 	$('#logOut').show();
// 	user.logInGoogle();
// 	// get.getToys().then( (data) => {
// 	// 	console.log(data);
// 	// });
// });

/////////////////////////
//////// SIGN OUT ///////
/////////////////////////

// $('#logOut').click( () => {
// 	user.logOut();
// 	console.log('user.currentUser', user.currentUser);
// 	$('#signIn').show();
// 	$('#logOut').hide();
// });

/////////////////////////
/////// MAIN VIEW ///////
/////////////////////////

$('#main').click( () => {
	$('#mainView').show();
	$('#listView, #addView, #detailView').hide();
});

/////////////////////////
/////// LIST VIEW ///////
/////////////////////////

$('#list').click( () => {
	$('#listView').removeClass('hidden');
	$('#listView').show();
	$('#mainView, #addView, #detailView').hide();
});

/////////////////////////
/////// ADD VIEW ////////
/////////////////////////

$('#add').click( () => {
	$('#addView').removeClass('hidden');
	$('#addView').show();
	$('#mainView, #listView, #detailView').hide();
});

