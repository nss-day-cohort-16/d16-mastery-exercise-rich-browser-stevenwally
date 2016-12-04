"use strict";

let template = require('../templates/toys.hbs');

function buildList(data) {
	// $(data).each( (i) => {
		// console.log('data[i]', data[i]);
		for (var prop in data) {
			$('#listView').append(template(data[prop]));
		}
	// });
}

module.exports = {buildList};