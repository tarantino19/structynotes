# Linked Lists: A Practical, Reusable Mental Model (JavaScript, Iterative)

This guide gives you a durable framework for solving linked list problems using iteration, plus patterns and templates in JavaScript that you can adapt directly for LeetCode-style problems.

---

## Core Mental Model

1) **Pointer(s) and Movement**
   - Linked lists are traversed by moving pointers (`node = node.next`).
   - Most problems use one or more pointers (`curr`, `prev`, `fast`, `slow`, etc.).
   - Always know what each pointer represents at every step.

2) **Dummy Node Pattern**
   - Use a dummy node before the head to simplify edge cases (especially for insertions/deletions at the head).
   - This avoids special handling for the first node.

3) **Prev/Curr Tracking**
   - For modifications (insert, delete), track both the current node and its previous node.
   - For single-pass traversal, update pointers in-place.

4) **Fast/Slow Pointer Technique**
   - Use two pointers moving at different speeds for cycle detection, finding the middle, etc.
   - Classic for problems like "detect cycle" or "find kth from end".

5) **Edge Cases**
   - Always consider: empty list, single node, two nodes, head/tail modifications.
   - Test these cases mentally or with code.

6) **In-Place Modification**
   - Most linked list problems require modifying the list without extra space.
   - Carefully update `.next` pointers; avoid breaking the chain.

7) **Multiple Passes**
   - Some problems require traversing the list more than once (e.g., length calculation, then modification).

8) **Reversing a List**
   - Iteratively reverse by re-pointing `.next` using `prev` and `curr`.
   - This is a foundational pattern for many problems.

9) **Building New Lists**
   - When constructing a new list, use a dummy node and append nodes as you go.
   - Always return `dummy.next` as the new head.

10) **Best Practices**
    - Avoid unnecessary variables; keep pointer logic clear.
    - Use descriptive variable names (`curr`, `prev`, `next`, `fast`, `slow`).
    - Draw diagrams for complex pointer manipulations.
    - Log pointer values for debugging.

---

## JavaScript Templates and Examples

Assume the classic singly-linked list node shape:
```js
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
```

---

### 1) Basic Traversal

Iterate through all nodes:
```js
function traverse(head) {
  let curr = head;
  while (curr) {
    // process curr.val
    curr = curr.next;
  }
}
```

---

### 2) Dummy Node for Safe Modification

Insert or delete nodes without special head handling:
```js
function deleteValue(head, target) {
  const dummy = new ListNode(0, head);
  let prev = dummy, curr = head;
  while (curr) {
    if (curr.val === target) {
      prev.next = curr.next; // delete curr
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
}
```

---

### 3) Reverse a Linked List

Classic iterative reversal:
```js
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
```

---

### 4) Fast/Slow Pointer Patterns

Find middle node:
```js
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
```

Detect cycle:
```js
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

---

### 5) Find Kth Node from End (Single Pass)

Use two pointers:
```js
function kthFromEnd(head, k) {
  let fast = head, slow = head;
  for (let i = 0; i < k; i++) {
    if (!fast) return null;
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
```

---

### 6) Merge Two Sorted Lists

Build new list with dummy node:
```js
function mergeLists(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}
```

---

### 7) Remove Nth Node from End

Two-pass (length), or single-pass (fast/slow):
```js
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i < n + 1; i++) fast = fast.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}
```

---

### 8) Partition List

Rearrange nodes based on value:
```js
function partition(head, x) {
  const before = new ListNode(0), after = new ListNode(0);
  let b = before, a = after, curr = head;
  while (curr) {
    if (curr.val < x) {
      b.next = curr;
      b = b.next;
    } else {
      a.next = curr;
      a = a.next;
    }
    curr = curr.next;
  }
  a.next = null;
  b.next = after.next;
  return before.next;
}
```

---

### 9) Cycle Detection and Entry Point

Find start of cycle:
```js
function detectCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
}
```

---

## How To Solve Any New Linked List Problem (Iterative)

1) **Restate the problem and clarify the node structure.**
2) **Decide what pointers you need:** `curr`, `prev`, `fast`, `slow`, etc.
3) **Consider using a dummy node** for safe head/tail modifications.
4) **Identify edge cases:** empty list, single node, head/tail changes.
5) **Choose your traversal pattern:** single pointer, fast/slow, multiple passes.
6) **For modifications, track previous node and update `.next` carefully.**
7) **For building new lists, use a dummy node and append nodes.**
8) **Test with small lists and edge cases.**
9) **Log pointer values or draw diagrams for debugging.**
10) **Return the correct head (often `dummy.next`).**

---

## Debugging Tips

- Print pointer values at each step for small lists.
- Check for infinite loops (broken `.next` pointers).
- Always set `.next = null` for tail nodes if building new lists.
- For deletions, ensure you don't lose reference to the rest of the list.
- For reversals, check that all nodes are re-pointed correctly.

---

## Quick Reference: Minimal Templates (JS)

**Traversal**
```js
let curr = head;
while (curr) {
  // process curr
  curr = curr.next;
}
```

**Dummy Node**
```js
const dummy = new ListNode(0, head);
let prev = dummy, curr = head;
```

**Reverse**
```js
let prev = null, curr = head;
while (curr) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
```

**Fast/Slow**
```js
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
```

**Build New List**
```js
const dummy = new ListNode(0);
let curr = dummy;
// append nodes: curr.next = newNode; curr = curr.next;
return dummy.next;
```

---

With these patterns and mental models, you can map most linked list problems directly to a template, fill in the pointer logic, and code confidently in JavaScript.
