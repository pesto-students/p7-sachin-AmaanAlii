function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log();


//----------- Explaination -------------
// We are getting the output as "Count is 0", this is beacause when the "message" is defined, 
// it is defined with the intial value of 'count' that is '0' .
// And then nowhere else in the code, the "message" is updated with new values of "count".

