import {
  createHelpdesk,
  addTicket,
  serveNextTicket,
  peekNextTicket,
  getQueueLength,
  undoLastAction,
} from './primer1.js';

// To run only this primer's tests: npm test -- primer1
// To run one describe block, e.g.: npm test -- primer1 -t 'Undo'

const ticket = (id, priority) => {
  const t = { id, customer: `Customer ${id}`, issue: `Issue ${id}` };
  if (priority !== undefined) {
    t.priority = priority;
  }
  return t;
};

describe('Help desk ticket queue', () => {
  let helpdesk;

  beforeEach(() => {
    helpdesk = createHelpdesk();
  });

  describe('Adding tickets', () => {
    test('a new help desk has no tickets waiting', () => {
      expect(getQueueLength(helpdesk)).toBe(0);
      expect(peekNextTicket(helpdesk)).toBeNull();
    });

    test('addTicket returns the number of tickets waiting', () => {
      expect(addTicket(helpdesk, ticket('T001'))).toBe(1);
      expect(addTicket(helpdesk, ticket('T002'))).toBe(2);
      expect(getQueueLength(helpdesk)).toBe(2);
    });

    test('each help desk keeps its own tickets', () => {
      const other = createHelpdesk();
      addTicket(helpdesk, ticket('T001'));
      expect(getQueueLength(other)).toBe(0);
    });
  });

  describe('Serving tickets (first in, first out)', () => {
    test('serves tickets in the order they arrived', () => {
      addTicket(helpdesk, ticket('T001'));
      addTicket(helpdesk, ticket('T002'));
      addTicket(helpdesk, ticket('T003'));

      expect(serveNextTicket(helpdesk).id).toBe('T001');
      expect(serveNextTicket(helpdesk).id).toBe('T002');
      expect(serveNextTicket(helpdesk).id).toBe('T003');
      expect(getQueueLength(helpdesk)).toBe(0);
    });

    test('serving returns the whole ticket', () => {
      addTicket(helpdesk, { id: 'T001', customer: 'Priya', issue: 'Cannot log in' });
      expect(serveNextTicket(helpdesk)).toEqual({ id: 'T001', customer: 'Priya', issue: 'Cannot log in' });
    });

    test('peek shows the next ticket without removing it', () => {
      addTicket(helpdesk, ticket('T001'));
      addTicket(helpdesk, ticket('T002'));

      expect(peekNextTicket(helpdesk).id).toBe('T001');
      expect(getQueueLength(helpdesk)).toBe(2);
    });

    test('a served ticket id can be added again later', () => {
      addTicket(helpdesk, ticket('T001'));
      serveNextTicket(helpdesk);
      expect(() => addTicket(helpdesk, ticket('T001'))).not.toThrow();
    });
  });

  describe('Undo (last in, first out)', () => {
    test('undoing an add removes that ticket', () => {
      addTicket(helpdesk, ticket('T001'));
      addTicket(helpdesk, ticket('T002'));

      expect(undoLastAction(helpdesk).id).toBe('T002');
      expect(getQueueLength(helpdesk)).toBe(1);
      expect(peekNextTicket(helpdesk).id).toBe('T001');
    });

    test('undoing a serve puts the ticket back at the front', () => {
      addTicket(helpdesk, ticket('T001'));
      addTicket(helpdesk, ticket('T002'));
      serveNextTicket(helpdesk);

      expect(undoLastAction(helpdesk).id).toBe('T001');
      expect(getQueueLength(helpdesk)).toBe(2);
      expect(serveNextTicket(helpdesk).id).toBe('T001');
    });

    test('several undos reverse actions in the opposite order', () => {
      addTicket(helpdesk, ticket('T001'));
      addTicket(helpdesk, ticket('T002'));
      serveNextTicket(helpdesk);
      addTicket(helpdesk, ticket('T003'));

      expect(undoLastAction(helpdesk).id).toBe('T003');
      expect(undoLastAction(helpdesk).id).toBe('T001');
      expect(undoLastAction(helpdesk).id).toBe('T002');
      expect(getQueueLength(helpdesk)).toBe(1);
      expect(peekNextTicket(helpdesk).id).toBe('T001');
    });
  });

  describe('Error handling', () => {
    test('throws when serving from an empty queue', () => {
      expect(() => serveNextTicket(helpdesk)).toThrow();
    });

    test('throws when there is nothing to undo', () => {
      expect(() => undoLastAction(helpdesk)).toThrow();
    });

    test('throws for a missing or non-object ticket', () => {
      expect(() => addTicket(helpdesk)).toThrow();
      expect(() => addTicket(helpdesk, null)).toThrow();
      expect(() => addTicket(helpdesk, 'T001')).toThrow();
    });

    test('throws for missing, empty or non-string fields', () => {
      expect(() => addTicket(helpdesk, { customer: 'Priya', issue: 'Cannot log in' })).toThrow();
      expect(() => addTicket(helpdesk, { id: 'T001', issue: 'Cannot log in' })).toThrow();
      expect(() => addTicket(helpdesk, { id: 'T001', customer: 'Priya' })).toThrow();
      expect(() => addTicket(helpdesk, { id: '', customer: 'Priya', issue: 'Cannot log in' })).toThrow();
      expect(() => addTicket(helpdesk, { id: 1, customer: 'Priya', issue: 'Cannot log in' })).toThrow();
    });

    test('throws for a duplicate id still waiting in the queue', () => {
      addTicket(helpdesk, ticket('T001'));
      expect(() => addTicket(helpdesk, ticket('T001'))).toThrow();
    });

    test('a failed add does not change the queue or the undo history', () => {
      addTicket(helpdesk, ticket('T001'));
      expect(() => addTicket(helpdesk, ticket('T001'))).toThrow();
      expect(getQueueLength(helpdesk)).toBe(1);
      expect(undoLastAction(helpdesk).id).toBe('T001');
      expect(() => undoLastAction(helpdesk)).toThrow();
    });
  });

  // Stretch (optional): remove .skip below if you attempt urgent tickets.
  describe.skip('Stretch: urgent tickets', () => {
    test('urgent tickets are served before normal tickets', () => {
      addTicket(helpdesk, ticket('N1'));
      addTicket(helpdesk, ticket('U1', 'urgent'));
      addTicket(helpdesk, ticket('N2', 'normal'));

      expect(peekNextTicket(helpdesk).id).toBe('U1');
      expect(serveNextTicket(helpdesk).id).toBe('U1');
      expect(serveNextTicket(helpdesk).id).toBe('N1');
      expect(serveNextTicket(helpdesk).id).toBe('N2');
    });

    test('tickets of the same priority are served first in, first out', () => {
      addTicket(helpdesk, ticket('U1', 'urgent'));
      addTicket(helpdesk, ticket('N1'));
      addTicket(helpdesk, ticket('U2', 'urgent'));

      expect(serveNextTicket(helpdesk).id).toBe('U1');
      expect(serveNextTicket(helpdesk).id).toBe('U2');
      expect(serveNextTicket(helpdesk).id).toBe('N1');
    });

    test('undoing a serve puts a ticket back at the front of its own priority', () => {
      addTicket(helpdesk, ticket('N1'));
      addTicket(helpdesk, ticket('U1', 'urgent'));
      addTicket(helpdesk, ticket('U2', 'urgent'));

      expect(serveNextTicket(helpdesk).id).toBe('U1');
      expect(undoLastAction(helpdesk).id).toBe('U1');
      expect(serveNextTicket(helpdesk).id).toBe('U1');
      expect(serveNextTicket(helpdesk).id).toBe('U2');
      expect(serveNextTicket(helpdesk).id).toBe('N1');
    });

    test('undoing an add removes an urgent ticket', () => {
      addTicket(helpdesk, ticket('N1'));
      addTicket(helpdesk, ticket('U1', 'urgent'));

      expect(undoLastAction(helpdesk).id).toBe('U1');
      expect(peekNextTicket(helpdesk).id).toBe('N1');
    });

    test('duplicate ids are rejected across priorities', () => {
      addTicket(helpdesk, ticket('T001', 'urgent'));
      expect(() => addTicket(helpdesk, ticket('T001'))).toThrow();
    });

    test('throws for an unknown priority', () => {
      expect(() => addTicket(helpdesk, ticket('T001', 'high'))).toThrow();
    });
  });
});
