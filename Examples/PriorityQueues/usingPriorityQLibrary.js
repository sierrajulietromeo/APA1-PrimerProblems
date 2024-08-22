import PriorityQueue from 'priorityqueuejs';

class AccidentEmergencyQueue {
    constructor() {
      // Initialize the priority queue from priorityqueuejs
      this.queue = new PriorityQueue((a, b) => b.priority - a.priority); // Lower priority number means higher priority
      this.patientStats = {
        '🚨': 0, 
        '🤕': 0, 
        '😕': 0  
      };
    }
  
    generatePatient() {
        const CRITICAL_CONDITION_THRESHOLD = 0.4;
        const SERIOUS_CONDITION_THRESHOLD = 0.65;
         
  
        const conditionSeverity = Math.random();
        let priority, patientSymbol;
  
        if (conditionSeverity < CRITICAL_CONDITION_THRESHOLD) { 
            priority = 1;
            patientSymbol = "🚨"; 
        } else if (conditionSeverity < SERIOUS_CONDITION_THRESHOLD) { 
            priority = 2;
            patientSymbol = "🤕"; 
        } else { 
            priority = 5;
            patientSymbol = "😕";
        }
  
        this.queue.enq({ element: patientSymbol, priority }); 
    }

    generateRandomPatients() {
        const MAX_NEW_PATIENTS = 3;
    
          const numNewPatients = Math.floor(Math.random() * (MAX_NEW_PATIENTS));
          for (let i = 0; i < numNewPatients; i++) {
              this.generatePatient();
          }
      }
  
    
  
    treatNextPatient() {
      if (!this.queue.isEmpty()) {
        const { element: patient } = this.queue.deq(); // Destructure the element from the dequeued object
        console.log(`Treating ${patient}`);
  
        this.patientStats[patient]++; 
  
      } else {
        console.log("Waiting room is empty.");
      }
    }
  

    // The forEach method of priorityqueuejs iterates over the elements in no particular order. If you need to display the elements in priority order, you'll need to dequeue all elements from the tempQueue and then re-enqueue them back into the original queue after displaying them.
    displayQueue(timeSequence) {
        let queueVisualisation = `A&E Queue (Time: ${timeSequence}): `;
    
        // Create a temporary copy of the queue to avoid modifying the original
        const tempQueue = new PriorityQueue((a, b) => b.priority - a.priority);
        this.queue.forEach(item => tempQueue.enq(item)); 
    
        while (!tempQueue.isEmpty()) {
          const { element } = tempQueue.deq();
          queueVisualisation += element + " ";
        }
    
        console.log(queueVisualisation);
      }

    displayStats() {
        console.log("\n--- Simulation Statistics ---\n");
        for (const [patientType, count] of Object.entries(this.patientStats)) {
          console.log(`Patients with ${patientType} condition: ${count}`);
        }
      }
  }
  
  function startSimulation(aeQueue) {
    const INITIAL_PATIENTS = 10;
    const NEW_PATIENT_PROBABILITY = 0.8;
    const MAX_ITERATIONS = 50;
  
    // Add initial patients
    for (let i = 0; i < INITIAL_PATIENTS; i++) {
      aeQueue.generatePatient();
    }
  
    let timeSequence = 1;
  
    function simulate() {
      const randomNum = Math.random();
      if (randomNum < NEW_PATIENT_PROBABILITY) {
        aeQueue.generateRandomPatients();
      }
  
      aeQueue.displayQueue(timeSequence);
      timeSequence++;
  
      aeQueue.treatNextPatient();
  
      if (timeSequence <= MAX_ITERATIONS) {
        setImmediate(simulate);
      } else {
        // Display statistics at the end of the simulation
        aeQueue.displayStats();
      }
    }
  
    // Start the simulation
    setImmediate(simulate);
  }



  // Usage
  const aeQueue = new AccidentEmergencyQueue();
  startSimulation(aeQueue);



  export { AccidentEmergencyQueue, startSimulation };