import LinkedList as ll

if __name__ == '__main__':
    print('Hello LinkedList!!!\n')

    llist = ll.LinkedList()

    llist.add(1)
    llist.add(2)
    llist.add(3)

    llist.add('What the bloody horse lungs....????')

    # llist.printAll()

    llist.shift(0)
    llist.shift(-1)
    llist.shift(-2)
    llist.shift(-3)

    llist.printAll()
