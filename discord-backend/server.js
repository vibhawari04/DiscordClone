const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const socketServer = require("./socketServer");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");

const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
app.use(express.json());

app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);
app.use("/api/friend-invitation", friendInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);
console.log("yeh toh chal raha hai", PORT);

server.listen(PORT, () => {
  console.log("starting server at ", PORT);
});

function dbConnect() {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connection success");
    })
    .catch((err) => console.log("error -> ", err));
}

dbConnect();

app.get("/", (req, res) => {
  res.send("server is running");
});
