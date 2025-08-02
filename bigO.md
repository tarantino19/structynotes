# Big-O Cheat Sheet: Quick Ways to Spot Time & Space Complexity

This guide gives you practical heuristics and patterns to quickly estimate Big-O for algorithms you encounter in interviews and real code.

## Core Time Complexities (from fastest to slowest)
- O(1) — Constant: does the same amount of work regardless of input size.
- O(log n) — Logarithmic: halves the work each step (binary-ish).
- O(n) — Linear: touches each element once or a constant number of times.
- O(n log n) — Linearithmic: “do a log n thing for each of n items” (e.g., efficient sorts).
- O(n^2) — Quadratic: nested loops over the same input.
- O(n^3), O(n^k) — Polynomial: multiple nested loops.
- O(2^n) — Exponential: branching recursion (e.g., include/exclude decisions).
- O(n!) — Factorial: permutations of n items.

Space complexities mirror the above patterns for memory usage.

---

## Quick Pattern-Spotting Heuristics

### Constant — O(1)
- Doing a fixed number of operations, independent of n.
- Accessing an array by index, hash map get/set, swapping two variables.
- Simple arithmetic or a few if checks.

Pattern:
- No loops, no recursion, no data structures growing with n.

### Logarithmic — O(log n)
- Cutting the problem size by a constant factor each step.
- Binary search, heap operations (insert/pop), balanced BST operations.

Pattern:
- While loop like: `while (n > 1) n = n / 2`
- Divide-and-conquer where only one branch is taken each time.

### Linear — O(n)
- Single loop through the input.
- Counting, scanning, finding a max/min, simple filter/map.

Pattern:
- One loop over array/list; constant work per element; no nested loops on the same input.

### Linearithmic — O(n log n)
- Sorting via mergesort/quicksort/heap sort.
- Divide-and-conquer where you split into parts and process all parts, with linear merging.

Pattern:
- “Split → solve subproblems → combine in linear time.”
- Or: “Do a log n operation for each of n items.”

### Quadratic — O(n^2)
- Two nested loops over the same input.
- Comparing all pairs, building n×n matrices, naive substring checks.

Pattern:
- for i in range(n):
  for j in range(n):
    constant work

### Polynomial — O(n^k)
- k nested loops over the same input.
- Dynamic programming with k dimensions of size n.

Pattern:
- Multiply loops or state space dimensions.

### Exponential — O(2^n)
- Recursion that branches into multiple subcalls without memoization.
- Subset generation, naive Fibonacci, decision trees exploring all choices.

Pattern:
- “Try both choices” at each step → 2 branches → 2^n states explored.

### Factorial — O(n!)
- Generating all permutations or all orderings.
- Backtracking that fixes elements one by one in all possible orders.

Pattern:
- “All permutations/arrangements/sequencings.”

---

## Common Structures and Their Big-O

### Arrays
- Index access: O(1)
- Search unsorted: O(n)
- Insert/delete at end (amortized): O(1)
- Insert/delete in middle: O(n)

### Hash Map / Set
- Average get/set/has/delete: O(1)
- Worst-case (pathological hashing): O(n)
- Iteration over all entries: O(n)

### Balanced BST (e.g., Red-Black Tree)
- Search/insert/delete: O(log n)
- In-order traversal: O(n)

### Heaps / Priority Queues
- Insert: O(log n)
- Pop min/max: O(log n)
- Peek: O(1)
- Build heap from array: O(n)

### Graphs
Let V = vertices, E = edges
- BFS/DFS: O(V + E)
- Dijkstra (binary heap): O((V + E) log V)
- Topological sort: O(V + E)

### Sorting
- Comparison sorts (merge/heap/quick average): O(n log n)
- Counting/Radix/Bucket (when constraints allow): O(n + k)

---

## Recursion & Dynamic Programming

### Recurrence Relations (Master-ish intuition)
- T(n) = aT(n/b) + f(n)
  - If f(n) is small (e.g., constant) and a = 1: O(log n)
  - If you split into a parts and combine in linear time: Often O(n log n)
  - If you explore all branches without pruning: Often exponential

### Fibonacci Examples
- Naive recursion:
  - T(n) = T(n-1) + T(n-2) + O(1) → O(φ^n) exponential
- Memoized recursion or bottom-up:
  - O(n) time, O(n) space (iterative can be O(1) space)

### DP Thumb Rules
- State count × transition cost = time
- Number of states often equals size of DP table (dimensions multiply)
- Space can often be optimized if only previous row/column is needed

---

## Nested Loops Patterns

1. Nested loops over same input size:
   - Two loops: O(n^2)
   - Three loops: O(n^3)

2. Nested loops where inner loop depends on i:
   - for i in 1..n:
       for j in 1..i:
         work
   - Total ≈ n(n+1)/2 → O(n^2)

3. Nested loops where j doubles:
   - for i in 1..n:
       for j = 1; j < n; j *= 2:
         work
   - Outer O(n) × inner O(log n) → O(n log n)

---

## Input Size Combinations

If you have multiple inputs:
- for each a in A:
    for each b in B:
      work
Time = O(|A| × |B|). Don’t collapse into O(n^2) unless A and B are the same size.

---

## Early Exits and Best/Worst/Average Case

- Best case: early return might be O(1) (e.g., find-first matching item at start).
- Worst case: assume full traversal or deepest recursion.
- Average case: depends on distribution; be explicit if asked.

---

## Space Complexity Shortcuts

- Extra arrays proportional to input: O(n)
- Recursion depth:
  - Linear recursion depth → O(n) stack space
  - Divide-and-conquer with halving depth → O(log n) stack
- Using only a few scalars: O(1)

---

## Common “Gotchas”

- Hidden constants: O(1) isn’t always “fast” if constant is large—still use Big-O, but be aware.
- Hash maps are average O(1), not guaranteed O(1) in worst case.
- Sorting dominates: “loop + sort” is often O(n log n), not O(n).
- String concatenation in a loop can be O(n^2) if immutable strings are repeatedly rebuilt; use builders/join.

---

## Quick Decision Tree

1) Do you loop over n items once with constant work? → O(n)
2) Do you have a nested loop over the same n? → O(n^2)
3) Does your loop halve n each iteration? → O(log n)
4) Do you do a log n operation per item? → O(n log n)
5) Are you exploring subsets/choices recursively without caching? → O(2^n) (or worse)
6) Are you generating permutations? → O(n!)

---

## Examples at a Glance

- Max in array: O(n) time, O(1) space
- Binary search: O(log n) time, O(1) space
- Merge sort: O(n log n) time, O(n) space
- Quicksort (average): O(n log n) time, O(log n) space
- BFS/DFS: O(V + E) time, O(V) space
- Fibonacci (iterative): O(n) time, O(1) space
- Two-sum with hash: O(n) time, O(n) space
- Two-pointer sorted array sum: O(n) time, O(1) space

---

Use this as a mental checklist: loops, nesting, branching, halving, sorting, and data structure operations. Identify the dominant part and you’ll get the right Big-O most of the time.
