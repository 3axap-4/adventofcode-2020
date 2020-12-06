import { source } from "./2.js"

var rows = source.split(/\r?\n/);
var mapWidth = rows[0].length-1;

var ruleSets = [
	{ r: 1, d: 1 },
	{ r: 3, d: 1 },
	{ r: 5, d: 1 },
	{ r: 7, d: 1 },
	{ r: 1, d: 2 }
];

var result = 1;
for(var rule of ruleSets) {

	var position = 0;
	var rowIndex = 0;
	var trees = 0;

	for(var row of rows) {
		rowIndex += rule.d;
		if(rowIndex >= rows.length) {
			break;
		}
		position += rule.r;

		if(mapWidth < position) {
			position = position - mapWidth - 1
		}

		if(rows[rowIndex][position] === "#") {
			trees ++;
		}
	}
	
	result *= trees;
}

console.log(result);
