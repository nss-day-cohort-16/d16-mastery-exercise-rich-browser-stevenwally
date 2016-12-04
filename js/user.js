"use strict";

let firebase = require("./firebaseConfig.js"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

firebase.auth().onAuthStateChanged(function(user){
	if(user){
		currentUser = user.uid;
		console.log('currentUser', currentUser);
	} else {
		currentUser = null;
		console.log('currentUser', currentUser);
	}
});

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}

function logOut(){
	return firebase.auth().signOut();
}

function getUser(){
	return currentUser;
}

module.exports = {logInGoogle, logOut, getUser};