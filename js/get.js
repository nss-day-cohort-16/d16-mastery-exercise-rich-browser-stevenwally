"use strict";

function getToys(){
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: `https://toylandia-40ad8.firebaseio.com/toys.json`,
			type: "GET"
		}).done(function(data) {
			resolve(data);
		});
	});
}

function getSpecificToy(id) {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: `https://toylandia-40ad8.firebaseio.com/toys/${id}.json`,
			type: "GET"
		}).done( (data) => {
			resolve(data);
		});
	});
}

module.exports = {getToys, getSpecificToy};