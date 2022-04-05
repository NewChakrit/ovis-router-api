var net = require("net");
const fs = require("fs");

let file;
var client = new net.Socket();
client.connect(9990, "192.168.10.150", function () {
  console.log("Connected");
  file = fs.createWriteStream("./out.txt");
  //   client.write("Hello, server! Love, Client.");
});

client.on("data", function (data) {
  console.log("Received: " + data);
  file.write(data);
  //   client.destroy(); // kill client after server's response
});

client.on("close", function () {
  console.log("Connection closed");
});
