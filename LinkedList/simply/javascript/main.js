console.log('Hello LinkedList!!!');

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;

	this.printAll = function() {
		tmp = this.head;
		while(tmp) {
			console.log(tmp.data);
			tmp = tmp.next;
		}
	}
}

function main() {
	let llist = new LinkedList();

	llist.head = new Node(1);
	second = new Node(2);
	third = new Node(3);

	llist.head.next = second;
	second.next = third;

	llist.printAll();
}

main();
