function doTask1(callback) {
    setTimeout(() => {
      console.log("Task 1 finished");
      callback();
    }, 1000);
  }
  
  function doTask2(callback) {
    setTimeout(() => {
      console.log("Task 2 finished");
      callback();
    }, 2000);
  }
  
  function doTask3(callback) {
    setTimeout(() => {
      console.log("Task 3 finished");
      callback();
    }, 3000);
  }
  
  function* runTasks(tasks) {
    for (const task of tasks) {
      yield task;
    }
  }
  
  function exec(gen) {
    const task = gen.next();
    if (!task.done) {
      task.value((_) => exec(gen));
    } else {
      console.log("All tasks finished");
    }
  }
  
  exec(runTasks([doTask1, doTask2, doTask3]));