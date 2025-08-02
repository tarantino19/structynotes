# structy/recursion.md
# Recursion: A Practical, Reusable Mental Model (JavaScript)

This guide gives you a durable model for solving recursion problems, plus patterns and templates in JavaScript that you can adapt directly for LeetCode-style problems.

## Core Mental Model

1) Contract (Function Promise)
Think: “Given input X, I return Y.” When you call your function recursively, treat it like a black box that keeps its promise for a smaller input. You don’t need to re-derive what it does—trust the contract.

2) Base Case(s)
Define the simplest input where the answer is obvious and return immediately. Without this, recursion won’t stop.

3) Progress Toward Base
Every recursive call must strictly reduce the problem: shrink a range, advance an index, consume an element, or decrease a counter.

4) Combine Sub-results
Ask: “If I could solve smaller subproblems, how do I build the answer for the current case?” Combine those results locally and simply.

5) Linear vs Branching
- Linear: One recursive call per step (e.g., traverse array, linked list).
- Branching: Multiple calls per step (e.g., subsets, permutations, tree DFS). Typically exponential unless pruned or memoized.

6) Carry State via Parameters
Pass indexes, accumulators (like current path or sum), and constraints via parameters to avoid global state pitfalls.

7) Memoization
If the same subproblem is recomputed (same parameters), cache the result to convert exponential work to polynomial.

8) Two Shapes
- Build on the way down: pass accumulators that eventually form the final result at the base.
- Build on the way up: get answers from recursive calls and combine them after they return.

9) Recursion Tree Intuition
Each call is a node; edges are subcalls; leaves are base cases. Total work ≈ number of nodes × work per node. Prune and memoize to reduce nodes.

10) Pattern by Problem Type
- Arrays/strings (index-based): f(i) handles suffix/prefix starting at i.
- Choice/Subset: try include and exclude (branching).
- Trees: combine f(left) and f(right) around the current node.
- Backtracking: build a path, recurse, then undo (pop).
- DP with recursion: top-down memoization by parameters.

11) Sanity Checklist
- Clear base case?
- Guaranteed progress?
- Correct local combination?
- Parameters uniquely define subproblems?
- Overlapping subproblems? Use memo.
- Shared state handled (copy or backtrack)?



## JavaScript Templates and Examples

All examples are plain JS functions. You can adapt them to TypeScript by adding types.

### 1) Linear Recursion (Index on Array/String)

Contract: solve for suffix starting at index i.

Example: Sum array elements
```/dev/null/recursion.js#L1-40
function sumArray(nums, i = 0) {
  // Base: empty suffix
  if (i === nums.length) return 0;
  // Combine: current + sum of rest
  return nums[i] + sumArray(nums, i + 1);
}

// Example usage:
// sumArray([1, 2, 3, 4]) -> 10
```

Example: Reverse a string
```/dev/null/recursion.js#L42-90
function reverseString(s, i = 0) {
  if (i === s.length) return "";
  const ch = s[i];
  // Build on the way up
  return reverseString(s, i + 1) + ch;
}

// reverseString("hello") -> "olleh"
```

Example: Find target in array (first index)
```/dev/null/recursion.js#L92-145
function findIndex(nums, target, i = 0) {
  if (i === nums.length) return -1;
  if (nums[i] === target) return i;
  return findIndex(nums, target, i + 1);
}

// findIndex([4, 2, 7], 7) -> 2
```


### 2) Include/Exclude Pattern (Subsets)

Contract: build all subsets from position i.

Example: Power set (all subsets)
```/dev/null/recursion.js#L147-240
function subsets(nums) {
  const res = [];
  const path = [];

  function dfs(i) {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }
    // Exclude
    dfs(i + 1);

    // Include
    path.push(nums[i]);
    dfs(i + 1);
    path.pop(); // undo (backtrack)
  }

  dfs(0);
  return res;
}

// subsets([1,2]) -> [[], [2], [1], [1,2]] (order may vary)
```

Example: Combination Sum (allow reuse, non-decreasing sequences)
```/dev/null/recursion.js#L242-360
function combinationSum(candidates, target) {
  const res = [];
  const path = [];

  function dfs(i, remain) {
    if (remain === 0) {
      res.push([...path]);
      return;
    }
    if (i === candidates.length || remain < 0) return;

    // Option 1: skip current
    dfs(i + 1, remain);

    // Option 2: include current (can reuse)
    path.push(candidates[i]);
    dfs(i, remain - candidates[i]);
    path.pop();
  }

  dfs(0, target);
  return res;
}
```

Example: Subset Sum decision (can we hit target?)
```/dev/null/recursion.js#L362-430
function canReachTarget(nums, target, i = 0) {
  if (target === 0) return true;
  if (i === nums.length || target < 0) return false;

  // Include or exclude current
  return (
    canReachTarget(nums, target - nums[i], i + 1) ||
    canReachTarget(nums, target, i + 1)
  );
}
```


### 3) Backtracking (Permutations, Combinations, Parentheses)

Permutations (no duplicates in input)
```/dev/null/recursion.js#L432-530
function permutations(nums) {
  const res = [];
  const used = new Array(nums.length).fill(false);
  const path = [];

  function dfs() {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  }

  dfs();
  return res;
}
```

Permutations with duplicates (avoid duplicate permutations)
```/dev/null/recursion.js#L532-640
function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const used = new Array(nums.length).fill(false);
  const path = [];

  function dfs() {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // skip duplicates
      used[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  }

  dfs();
  return res;
}
```

Generate well-formed parentheses
```/dev/null/recursion.js#L642-720
function generateParenthesis(n) {
  const res = [];
  function dfs(open, close, path) {
    if (path.length === 2 * n) {
      res.push(path);
      return;
    }
    if (open < n) dfs(open + 1, close, path + "(");
    if (close < open) dfs(open, close + 1, path + ")");
  }
  dfs(0, 0, "");
  return res;
}
```


### 4) Trees (DFS)

Tree node shape:
```/dev/null/recursion.js#L722-760
// function TreeNode(val, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }
```

Max depth of a binary tree
```/dev/null/recursion.js#L762-820
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

Validate BST
```/dev/null/recursion.js#L822-900
function isValidBST(root) {
  function dfs(node, min, max) {
    if (!node) return true;
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
  return dfs(root, null, null);
}
```

Path sum (root-to-leaf equals target)
```/dev/null/recursion.js#L902-980
function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  const remain = targetSum - root.val;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
}
```


### 5) Graph DFS (Recursive)

Adjacency list assumed.

Cycle detection in directed graph
```/dev/null/recursion.js#L982-1080
function hasCycleDirected(n, edges) {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) g[u].push(v);
  const state = new Array(n).fill(0); // 0=unvisited,1=visiting,2=visited

  function dfs(u) {
    if (state[u] === 1) return true;  // back-edge
    if (state[u] === 2) return false; // processed
    state[u] = 1;
    for (const v of g[u]) {
      if (dfs(v)) return true;
    }
    state[u] = 2;
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (state[i] === 0 && dfs(i)) return true;
  }
  return false;
}
```

Connected components count (undirected)
```/dev/null/recursion.js#L1082-1160
function countComponents(n, edges) {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    g[u].push(v);
    g[v].push(u);
  }
  const seen = new Array(n).fill(false);

  function dfs(u) {
    if (seen[u]) return;
    seen[u] = true;
    for (const v of g[u]) dfs(v);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      count++;
      dfs(i);
    }
  }
  return count;
}
```


### 6) Memoization (Top-Down DP)

Climbing stairs (Fibonacci variant)
```/dev/null/recursion.js#L1162-1220
function climbStairs(n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}
```

Coin change (min coins to form amount, -1 if impossible)
```/dev/null/recursion.js#L1222-1330
function coinChange(coins, amount) {
  const memo = new Map();

  function dp(remain) {
    if (remain === 0) return 0;
    if (remain < 0) return Infinity;
    if (memo.has(remain)) return memo.get(remain);

    let best = Infinity;
    for (const c of coins) {
      const sub = dp(remain - c);
      if (sub !== Infinity) best = Math.min(best, 1 + sub);
    }
    memo.set(remain, best);
    return best;
  }

  const ans = dp(amount);
  return ans === Infinity ? -1 : ans;
}
```

Edit distance (Levenshtein)
```/dev/null/recursion.js#L1332-1450
function minDistance(word1, word2) {
  const memo = new Map();
  function key(i, j) { return `${i},${j}`; }

  function dp(i, j) {
    if (i === word1.length) return word2.length - j; // insert rest of word2
    if (j === word2.length) return word1.length - i; // delete rest of word1
    const k = key(i, j);
    if (memo.has(k)) return memo.get(k);

    let ans;
    if (word1[i] === word2[j]) {
      ans = dp(i + 1, j + 1);
    } else {
      const insert = 1 + dp(i, j + 1);
      const del = 1 + dp(i + 1, j);
      const replace = 1 + dp(i + 1, j + 1);
      ans = Math.min(insert, del, replace);
    }
    memo.set(k, ans);
    return ans;
  }

  return dp(0, 0);
}
```

Longest increasing subsequence (O(n^2) top-down)
```/dev/null/recursion.js#L1452-1545
function lengthOfLIS(nums) {
  const memo = new Map();
  function key(i, prevIndex) { return `${i},${prevIndex}`; }

  function dp(i, prevIndex) {
    if (i === nums.length) return 0;
    const k = key(i, prevIndex);
    if (memo.has(k)) return memo.get(k);

    // Skip nums[i]
    let best = dp(i + 1, prevIndex);
    // Take nums[i] if increasing
    if (prevIndex === -1 || nums[i] > nums[prevIndex]) {
      best = Math.max(best, 1 + dp(i + 1, i));
    }
    memo.set(k, best);
    return best;
  }

  return dp(0, -1);
}
```


### 7) Tail-Style vs Build-on-Return

Factorial (build on return)
```/dev/null/recursion.js#L1547-1590
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

Tail-style sum with accumulator (build on the way down)
```/dev/null/recursion.js#L1592-1650
function sumTail(nums, i = 0, acc = 0) {
  if (i === nums.length) return acc;
  return sumTail(nums, i + 1, acc + nums[i]);
}
```


### 8) Typical LeetCode Transformations

A) String recursion via index
- Contract: solve(s, i) returns something about s[i..].
- Base: i === s.length.
- Step: use s[i] and recurse with i+1.

B) 2D grid recursion
- Contract: dfs(r, c) handles cell (r, c) and moves to neighbors.
- Base: out of bounds or visited.
- Step: mark visited, explore neighbors, optionally unmark for backtracking.

Flood fill (grid)
```/dev/null/recursion.js#L1652-1750
function floodFill(image, sr, sc, newColor) {
  const orig = image[sr][sc];
  if (orig === newColor) return image;
  const R = image.length, C = image[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= R || c >= C) return;
    if (image[r][c] !== orig) return;
    image[r][c] = newColor;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return image;
}
```

Number of islands
```/dev/null/recursion.js#L1752-1860
function numIslands(grid) {
  const R = grid.length, C = grid[0].length;
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= R || c >= C || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  let count = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}
```


## How To Solve Any New Recursion Problem

1) Restate the problem and define the function contract precisely.
2) Identify the smallest input and its output (base case).
3) Decide how to reduce toward the base (indices, counters, node pointers).
4) Decide if it’s linear or branching; if branching, consider pruning and memoization.
5) Define how to combine sub-results for the current result.
6) If building collections, choose copying vs backtracking.
7) Run small test cases mentally; draw a tiny recursion tree if confused.
8) Add memoization if overlapping subproblems exist.

## Debugging Tips

- Log parameters on entry and return values on exit for tiny inputs.
- Ensure parameters strictly move toward base cases.
- Verify that all branches reach a base case.
- For backtracking, ensure you undo state changes (pop, unmark) before returning.
- For memoization, include all relevant parameters in the key.

## Quick Reference: Minimal Templates (JS)

Linear index template
```/dev/null/snippets.js#L1-30
function solve(nums, i = 0) {
  if (i === nums.length) return /* base value */;
  // use nums[i]
  const sub = solve(nums, i + 1);
  return /* combine(nums[i], sub) */;
}
```

Include/Exclude template
```/dev/null/snippets.js#L32-80
function solveChoices(choices) {
  const res = [];
  const path = [];
  function dfs(i) {
    if (i === choices.length) {
      res.push([...path]);
      return;
    }
    // exclude
    dfs(i + 1);
    // include
    path.push(choices[i]);
    dfs(i + 1);
    path.pop();
  }
  dfs(0);
  return res;
}
```

Memoized template
```/dev/null/snippets.js#L82-130
function solveMemo(params) {
  const memo = new Map();
  function key(...args) { return args.join("|"); }
  function dp(a, b, c) {
    const k = key(a, b, c);
    if (memo.has(k)) return memo.get(k);
    // base(s)
    const ans = /* combine of dp(smaller states) */;
    memo.set(k, ans);
    return ans;
  }
  return dp(/* initial args */);
}
```

Tree DFS template
```/dev/null/snippets.js#L132-170
function dfsTree(node) {
  if (!node) return /* base */;
  const left = dfsTree(node.left);
  const right = dfsTree(node.right);
  return /* combine(node.val, left, right) */;
}
```

Backtracking template
```/dev/null/snippets.js#L172-220
function backtrackTemplate(options) {
  const res = [];
  const path = [];
  function dfs(level) {
    if (/* complete */) {
      res.push([...path]);
      return;
    }
    for (const choice of /* available choices at level */) {
      // choose
      path.push(choice);
      dfs(level + 1);
      // un-choose
      path.pop();
    }
  }
  dfs(0);
  return res;
}
```

With these patterns and mental models, you can map most recursion problems directly to a template, fill in the contract/base/reduction/combine, and code confidently in JavaScript.
