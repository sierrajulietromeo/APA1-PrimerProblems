// Import the necessary modules
import {PriorityQueue, AccidentEmergencyQueue, startSimulation}  from './examplePriorityQueue.js'; 

describe('PriorityQueue', () => {
    let queue;
  
    beforeEach(() => {
      queue = new PriorityQueue();
    });
  
    it('should enqueue elements with correct priority', () => {
      queue.enqueue('A', 3);
      queue.enqueue('B', 1);
      queue.enqueue('C', 2);
  
      expect(queue.elements).toEqual([
        { element: 'B', priority: 1 },
        { element: 'C', priority: 2 },
        { element: 'A', priority: 3 },
      ]);
    });
  
    it('should dequeue elements in priority order', () => {
      queue.enqueue('A', 3);
      queue.enqueue('B', 1);
      queue.enqueue('C', 2);
  
      expect(queue.dequeue()).toBe('B');
      expect(queue.dequeue()).toBe('C');
      expect(queue.dequeue()).toBe('A');
    });
  
    it('should return null when dequeuing from an empty queue', () => {
      expect(queue.dequeue()).toBeNull();
    });
  
    it('should peek at the highest priority element without dequeuing', () => {
      queue.enqueue('A', 3);
      queue.enqueue('B', 1);
  
      expect(queue.peek()).toBe('B');
      expect(queue.elements.length).toBe(2); // Ensure element is not removed
    });
  
    it('should return null when peeking into an empty queue', () => {
      expect(queue.peek()).toBeNull();
    });
  
    it('should correctly identify an empty queue', () => {
      expect(queue.isEmpty()).toBe(true);
  
      queue.enqueue('A', 1);
      expect(queue.isEmpty()).toBe(false);
    });
  });
  
  describe('AccidentEmergencyQueue', () => {
    let aeQueue;
  
    beforeEach(() => {
      aeQueue = new AccidentEmergencyQueue();
    });
  
    it('should generate patients with varying priorities', () => {
      // Mock Math.random to control patient generation
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.2; // Critical condition
      global.Math = mockMath;
  
      aeQueue.generatePatient();
      expect(aeQueue.queue.elements[0].priority).toBe(1);
  
      mockMath.random = () => 0.5; // Serious condition
      global.Math = mockMath;
  
      aeQueue.generatePatient();
      expect(aeQueue.queue.elements[1].priority).toBe(2);
  
      mockMath.random = () => 0.8; // Non-urgent condition
      global.Math = mockMath;
  
      aeQueue.generatePatient();
      expect(aeQueue.queue.elements[2].priority).toBe(5);
    });
  
    it('should generate a random number of patients', () => {
      // Mock Math.random to control patient generation
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.5; // Generate 1 new patient
      global.Math = mockMath;
  
      const initialQueueLength = aeQueue.queue.elements.length;
      aeQueue.generateRandomPatients();
      expect(aeQueue.queue.elements.length).toBe(initialQueueLength + 1);
    });
  
    it('should treat the next patient and log the output', () => {
      console.log = jest.fn(); // Mock console.log
  
      aeQueue.queue.enqueue('🤕', 2);
      aeQueue.treatNextPatient();
  
      expect(console.log).toHaveBeenCalledWith('Treating 🤕');
    });
  
    it('should log a message when the waiting room is empty', () => {
      console.log = jest.fn(); // Mock console.log
  
      aeQueue.treatNextPatient();
  
      expect(console.log).toHaveBeenCalledWith('Waiting room is empty.');
    });
  
    it('should update patient statistics when treating patients', () => {
      aeQueue.queue.enqueue('🚨', 1);
      aeQueue.queue.enqueue('🤕', 2);
      aeQueue.queue.enqueue('😕', 5);
  
      aeQueue.treatNextPatient(); // Treat 🚨
      aeQueue.treatNextPatient(); // Treat 🤕
      aeQueue.treatNextPatient(); // Treat 😕
  
      expect(aeQueue.patientStats).toEqual({
        '🚨': 1,
        '🤕': 1,
        '😕': 1,
      });
    });
  
    it('should display the correct statistics at the end of the simulation', () => {
      console.log = jest.fn(); // Mock console.log
  
      // Mock the simulation to run quickly for a few iterations
      const originalSetImmediate = global.setImmediate;
      global.setImmediate = jest.fn((callback) => callback());
  
      startSimulation(aeQueue); // Run the simulation
  
      // Restore the original setImmediate
      global.setImmediate = originalSetImmediate;
  
      // Check if the statistics were displayed
      expect(console.log).toHaveBeenCalledWith('\n--- Simulation Statistics ---\n');
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('🚨'));
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('🤕'));
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining('😕'));
    });
  });