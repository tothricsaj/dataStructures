function Node(data) {
	this.data = data;
	this.next = null;
}

exports.LinkedList = function() {
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

	this.shift = function(data) {
		if(this.head === null) {
			this.head = new Node(data);
			this.lastNode = this.head;

			return;
		}

		let tmp = this.head;
		this.head = new Node(data);
		this.head.next = tmp;
	}

	this.printAll = function() {
		tmp = this.head;
		while(tmp) {
			console.log(tmp.data);
			tmp = tmp.next;
		}
	}
}

