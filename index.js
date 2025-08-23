class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;



const longestStreak = (head) => {
  let maxStreak = 0
  let currentStreak = 0
  let previousValue = null
  let current = head

  while (current !== null) {
    if (current.val === previousValue) {
        currentStreak++
    } else {
        currentStreak = 1
    }

      if (currentStreak > maxStreak) {
         maxStreak = currentStreak;
       }

       previousValue = current.val;
       current = current.next;

  }
  return maxStreak
}

//GOAl - return the longest streak. e.g. 7 is the longest streak at 3.
//we need maxvalue logic
// let maxStreak = 0
// let currentStreak = 0
// previousValue =  null
// let current = head
//
// current Value - compared to prevValue   - store currvalue to prevvalue
// if currstreak > maxstreak  - replace maxstreak with that value'
// if notequal -reset streak to 1
// maxstreak dont get reset untul new one
// prevvalue is set again

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3

//know hat to return from the very beginning and ill likely have to
// set a variable for it from the start
// head.val never changes but current.val changes where it points to
//      current = current.next; almost always at the end of the while null loop
//prevvalue gets set afer the first loop gets to else
