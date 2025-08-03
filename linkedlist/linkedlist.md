linkedlist - a type of data strcuture.

  made up of many nodes


what is a node? a container for some data (a circle)
  (a) (2)  ({{}})... linked list -  many nodes

e.g. a -> b -> C - >D
...a is next is B ..b is next i C
bunch of nodes linked together.
last node is D - pointing to nothing (null)

a - head
d - tail

linkedlist - an ordered data structure - inherently ordered

array has elements, into computers memory
linked list - has nodes - separate buy connected nodes

with linkedlist - we can create a new node then jsut isnert it - no more shifting of indexes
no need to modify other nodes - just pointers

linkedlist - usually constant O1 operations

The core? traversing a linked list.

1 - find the head node  - then youll havr sequential list
a - current node
b - current.next - then b becomes the current...and so on.

stop the algorithm when current = null
