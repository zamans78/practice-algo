//1
//An arry contains a string ["thief"]. Create afunction that recieves an arry & when it finds thief it displayes "Found that Person"

let box = [1, 2, "thief"];

function nemoFinder(array) {
	for (let i = 0; i < array.length; i++) {
		//console.log(i);
		if (array[i] === "thief") {
			console.log("Found that Person.");
		}
	}
}
