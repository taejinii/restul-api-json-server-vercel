const fs = require("fs");
const os = require("os");

fs.copyFile("db.json", os.tmpdir() + "/db.json", function (err) {
  if (err) console.log(err);
  else console.log("copy success");
});

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
