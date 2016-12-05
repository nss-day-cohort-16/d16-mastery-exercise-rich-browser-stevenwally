"use strict";

function deleteToy(id) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: `https://toylandia-40ad8.firebaseio.com/toys/${id}.json`,
			method: "DELETE",
		}).done( () => {
			resolve();
		});
	});
}

module.exports = {deleteToy};