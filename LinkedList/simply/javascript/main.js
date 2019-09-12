console.log('Hello LinkedList!!!');

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	this.lastNode = null;

	this.push = function(data) {
		if(this.head === null) {
			this.head = new Node(data);
			this.lastNode = this.head;

			return;
		}

		this.lastNode.next = new Node(data);
		this.lastNode = this.lastNode.next;
	}

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

	llist.push(1);
	llist.push(2);
	llist.push(3);
	
	llist.printAll();
}

main();
