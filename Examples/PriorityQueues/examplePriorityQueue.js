class PriorityQueue {
    constructor() {
      this.elements = []; 
    }
  
    enqueue(element, priority) {
      const newNode = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.elements.length; i++) {
        if (newNode.priority < this.elements[i].priority) {
          this.elements.splice(i, 0, newNode);
          added = true;
          break;
        }
      }
  
      if (!added) { 
        this.elements.push(newNode); 
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.elements.shift().element; 
    }
  
    isEmpty() { 
      return this.elements.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.elements[0].element; 
    }
  }
  
  
  class AccidentEmergencyQueue {
    constructor() {
        this.queue = new PriorityQueue();
        this.patientStats = { 
            '🚨': 0, // Critical
            '🤕': 0, // Serious
            '😕': 0  // Non-urgent
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
  
        this.queue.enqueue(patientSymbol, priority); 
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
            const patient = this.queue.dequeue();
            console.log(`Treating ${patient}`);

            this.patientStats[patient]++;
  
        } else {
            console.log("Waiting room is empty.");
        }
    }
  
    displayQueue(timeSequence) {
        let queueVisualisation = `A&E Queue (Time: ${timeSequence}): `; 
        for (const { element } of this.queue.elements) {
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




  export { PriorityQueue, AccidentEmergencyQueue, startSimulation };