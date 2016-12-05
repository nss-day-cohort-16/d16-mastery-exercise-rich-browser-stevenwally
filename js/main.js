"use strict";

let add = require('./add.js'),
	get = require('./get.js'),
	deleter = require('./delete'),
	dom = require('./dom-builder'),
	toyObj = {},
	toyArr = [];
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
				toyArr.push(data[prop].name.toLowerCase());
			}
			dom.buildList(data);
			console.log(toyArr);

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
	$('#toySearch').focus();
});

////////////////////////
////// TOY SEARCH //////
////////////////////////

$('#toySearch').keyup( () => {
	// console.log('toy search', $('#toySearch').val());
	let toyNames = $('.name');
	// let userInput = $('#toySearch').toLowerCase();
	$(toyArr).each( (i) => {
		if ($(toyNames[i]).html() === ($('#toySearch').val())) {
			console.log($(toyNames[i]).html().toLowerCase());
			console.log('Match!');
		}
	});
});

////////////////////////
////// TOY DETAILS /////
////////////////////////

$(document).click( () => {
	let toyPick = event.target.parentNode;
	let toyID = $(toyPick).attr('id');
	if ($(event.target).hasClass('details')) {
		console.log(toyID);
		get.getSpecificToy(toyID).then( (toyData) => {
			dom.buildDetails(toyData);
			showDetails();
		});
	}
});

function showDetails() {
	$('#listView').hide();
	$('#detailView').removeClass('hidden');
	$('#detailView').show();
}

//////////////
//BACK CLICK//
//////////////

$(document).click( () => {
	if ($(event.target).html() === 'Back') {
		$('#listView').show();
		$('#mainView, #addView, #detailView').hide();
		$('#toySearch').focus();
	}
});

/////////////////////////
/////// ADD VIEW ////////
/////////////////////////

$('#add').click( () => {
	$('#listDiv').empty();
	loadToysBuildList();
	$('#addView').removeClass('hidden');
	$('#addView').show();
	$('#mainView, #listView, #detailView').hide();
});

////////////////////////
/////// ADD TOY ////////
////////////////////////

$('#addToy').click( () => {
	$('#listDiv').empty();
	toyObj.name = $('#addName').val();
	toyObj.image = $('#addImage').val();
	toyObj.price = $('#addPrice').val();
	toyObj.desc = $('#addDesc').val();
	console.log('add toy', toyObj);
	add.addToy(toyObj);
	loadToysBuildList();
	$('#addName, #addImage, #addPrice, #addDesc').val("");

});

/////////////////////////////////////////
/////// LOAD TOYS FROM FIREBASE /////////
/////////// BUILD LIST VIEW /////////////
/////////////////////////////////////////
function loadToysBuildList() {
	get.getToys().then( (data) => {
		for (var prop in data) {
			console.log('prop', prop);
			data[prop].id = prop;
		}
		dom.buildList(data);
	});
}

//////////////////////////
/////// DELETE TOY ///////
//////////////////////////

$(document).click( () => {
	if ( $(event.target).hasClass('remove')) {
		console.log("Delete this", event.target.parentNode.id);
		event.target.parentNode.remove();
		deleter.deleteToy(event.target.parentNode.id);
	}
});