import { readFileSync } from "fs";
import { createServer } from "https";
import { Server } from "socket.io";

const httpServer = createServer({
  key: readFileSync("/www/server/panel/ssl/privateKey.pem"),
  cert: readFileSync("/www/server/panel/ssl/certificate.pem")
});

const io = new Server(httpServer, { /* options */
  cors: {
    origin: "https://yagoo2.xn--ujqyjt8y32c5tfri2791a.xyz"
  }
});

io.on("connection", (socket) => {
  socket.on("danmaku0", (arg) => {
    io.emit("danmaku0", arg);
  });
  socket.on("danmaku1", (arg) => {
    io.emit("danmaku1", arg);
  });
  socket.on("danmaku2", (arg) => {
    io.emit("danmaku2", arg);
  });
  socket.on("danmaku3", (arg) => {
    io.emit("danmaku3", arg);
  });
  socket.on("danmaku4", (arg) => {
    io.emit("danmaku4", arg);
  });
});

httpServer.listen(2083);