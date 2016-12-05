"use strict";

let template = require('../templates/toys.hbs');
let detailTemplate = require('../templates/toyDetails.hbs');

function buildList(data) {
		for (var prop in data) {
			$('#listDiv').append(template(data[prop]));
		}
}

// function addSingleToy(toyObj) {
// 	for (var prop in toyObj) {
// 		$('#listView').append(template(toyObj[prop]));
// 	}
// }

function buildDetails(toyData) {
		console.log(toyData);
		$('#detailView').html(detailTemplate(toyData));
}

module.exports = {buildList, buildDetails};