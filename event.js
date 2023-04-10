const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", (data) => {
  console.log("received");
  console.log(data);
});

customEvent.emit("response", { name: "ricardo", lastname: "asadasdasada" });
