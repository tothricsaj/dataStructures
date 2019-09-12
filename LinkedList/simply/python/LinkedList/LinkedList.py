class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None
        self.lastNode = None

    def add(self, data):

        if self.head == None:
            self.head = Node(data)
            self.lastNode = self.head
            
            return

        self.lastNode.next = Node(data)
        self.lastNode = self.lastNode.next

    def printAll(self):
        tmp = self.head

        while tmp:
            print(tmp.data)
            tmp = tmp.next

