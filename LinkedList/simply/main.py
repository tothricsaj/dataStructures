class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None

    def printAll(self):
        tmp = self.head

        while tmp:
            print(tmp.data)
            tmp = tmp.next


if __name__ == '__main__':
    print('Hello LinkedList!!!\n')

    llist = LinkedList()

    llist.head = Node(1)
    second = Node(2)
    third = Node(3)

    llist.head.next = second
    second.next = third

    llist.printAll()
