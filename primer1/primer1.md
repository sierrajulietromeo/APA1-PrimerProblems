# Primer Challenge 1: Help Desk Ticket Queue

**Scenario:**

A small IT help desk handles support tickets in the order they arrive: the first ticket in is the first ticket served. Staff sometimes make mistakes, so they need to be able to undo their last action.

**Challenge:**

Write a set of JavaScript functions that manage a help desk's tickets using two linear data structures:

* a **queue** (first in, first out) for tickets waiting to be served
* a **stack** (last in, first out) recording each action, so the most recent action can be undone

Export these functions from `primer1.js`:

| Function | What it does |
|---|---|
| `createHelpdesk()` | Returns a new, empty help desk. How you store its data inside is up to you. |
| `addTicket(helpdesk, ticket)` | Adds a ticket to the back of the queue and returns the number of tickets waiting. |
| `serveNextTicket(helpdesk)` | Removes and returns the ticket at the front of the queue. |
| `peekNextTicket(helpdesk)` | Returns the ticket at the front of the queue without removing it, or `null` if the queue is empty. |
| `getQueueLength(helpdesk)` | Returns the number of tickets waiting. |
| `undoLastAction(helpdesk)` | Reverses the most recent add or serve, and returns the ticket it affected. |

A ticket is an object such as:

```javascript
{ id: 'T001', customer: 'Priya', issue: 'Cannot log in' }
```

`createHelpdesk()` and `getQueueLength()` are already written for you in `primer1.js`, to show one way of storing the data. These JavaScript array methods will help with the rest: `push()` adds to the end, `pop()` removes from the end, `shift()` removes from the front and `unshift()` adds to the front. Part of the challenge is deciding which ones make an array behave as a queue, and which make it behave as a stack.

### Example

```javascript
const helpdesk = createHelpdesk();

addTicket(helpdesk, { id: 'T001', customer: 'Priya', issue: 'Cannot log in' });   // 1
addTicket(helpdesk, { id: 'T002', customer: 'Tom', issue: 'Printer jammed' });    // 2

serveNextTicket(helpdesk);   // { id: 'T001', ... } (first in, first out)
undoLastAction(helpdesk);    // { id: 'T001', ... } T001 goes back to the front
peekNextTicket(helpdesk);    // { id: 'T001', ... }
getQueueLength(helpdesk);    // 2
```

### Constraints

* `addTicket` MUST throw an error when:
  * the ticket is missing, or is not an object
  * `id`, `customer` or `issue` is missing, is not a string, or is an empty string
  * a ticket with the same `id` is already waiting in the queue
* `serveNextTicket` MUST throw an error when there are no tickets to serve.
* `undoLastAction` MUST throw an error when there is nothing to undo.
* Undoing an add removes that ticket from the queue. Undoing a serve puts that ticket back at the front of the queue.
* Several undos in a row reverse actions in the opposite order to the one in which they happened.

### Stretch (optional)

This part is optional and is not required for any grade band. If you attempt it, remove `.skip` from the "Stretch" tests in `primer1.test.js` so that they run.

Extend the program to support **urgent** tickets:

* A ticket may have an optional `priority` property of `'urgent'` or `'normal'`. If it is missing, the ticket is `'normal'`. Any other value MUST throw an error.
* Urgent tickets are always served before normal tickets.
* Within the same priority, tickets are still served first in, first out.
* Undo must still work correctly: undoing a serve puts the ticket back at the front of the tickets with its own priority.

### Notes

* See the tests in `primer1.test.js`. Run them with `npm test -- primer1`.
* You can add tests if you think the current tests don't give complete coverage, and alter existing tests if your implementation means one isn't compatible. Highlight both in your screen recording.
* Give the Big O time complexity of serving a ticket in your `PORTFOLIO.md` table. In your screen recording, explain it: if you used `Array.prototype.shift()`, what does that cost, and could serving be made O(1)?
* Commit and push as you go.
* Your code is marked against the shared rubric in the main [README](../README.md).
