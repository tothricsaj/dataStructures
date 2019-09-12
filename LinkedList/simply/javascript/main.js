var ll = require('./LinkedList/LinkedList.js')
console.log('Hello LinkedList!!!');


function main() {
	let llist = new ll.LinkedList();

	llist.push(1);
	llist.push(2);
	llist.push(3);

	llist.shift(0);
	llist.shift(-1);
	llist.shift(-2);
	llist.shift(-3);

	
	llist.printAll();
}

main();
