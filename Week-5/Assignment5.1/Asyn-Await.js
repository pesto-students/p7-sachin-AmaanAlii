async function doTask1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 finished");
        resolve();
      }, 1000);
    });
  }
  
  async function doTask2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 2 finished");
        resolve();
      }, 2000);
    });
  }
  
  async function doTask3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 finished");
        resolve();
      }, 3000);
    });
  }
  
  async function runTasks() {
    await doTask1();
    await doTask2();
    await doTask3();
    console.log("All tasks finished");
  }
  
  runTasks();
  