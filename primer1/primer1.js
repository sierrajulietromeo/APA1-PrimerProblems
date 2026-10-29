// Primer 1: Help Desk Ticket Queue
// Read primer1.md for the requirements.
// The function names below must stay the same so that the tests can find them.

// A help desk holds two arrays:
//   queue   - tickets waiting to be served, used as a queue (first in, first out)
//   history - actions that can be undone, used as a stack (last in, first out)
// You can change this structure if you have a better design, for example for the stretch task.
function createHelpdesk() {
  return {
    queue: [],
    history: [],
  };
}

// Worked example: returns how many tickets are waiting.
function getQueueLength(helpdesk) {
  return helpdesk.queue.length;
}

function addTicket(helpdesk, ticket) {

}

function serveNextTicket(helpdesk) {

}

function peekNextTicket(helpdesk) {

}

function undoLastAction(helpdesk) {

}

export {
  createHelpdesk,
  addTicket,
  serveNextTicket,
  peekNextTicket,
  getQueueLength,
  undoLastAction,
};
