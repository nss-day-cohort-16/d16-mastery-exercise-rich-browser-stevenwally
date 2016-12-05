"use strict";

function addToy(toyObj) {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: `https://toylandia-40ad8.firebaseio.com/toys.json`,
			type: "POST",
			data: JSON.stringify(toyObj)
		}).done(function(toyObj) {
			resolve(toyObj);
		});
	});
}

module.exports = {addToy};