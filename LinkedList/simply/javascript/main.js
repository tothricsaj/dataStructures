console.log('Hello LinkedList!!!');

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
}

function main() {
	let llist = new LinkedList();

	llist.head = Node(1);
	second = Node(2);
	third = Node(3);

	llist.head.next = second;
	second.next = third;
}

main();
