const Queue = require("./queue");
// const queueFuncs = require('./queueFuncs')

const newQueue = () => {
  const starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
};
