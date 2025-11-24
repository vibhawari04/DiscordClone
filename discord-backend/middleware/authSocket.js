const jwt = require("jsonwebtoken");

const config = process.env;

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;
  console.log("token -> ", token);

  try {
    console.log("token -> 2");

    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log("token -> 3 decoded value ", decoded);

    socket.user = decoded;
  } catch (err) {
    console.log("eroor aagya ", err);
    const socketError = new Error("NOT_AUTHORIZED");
    return next(socketError);
  }

  next();
};

module.exports = verifyTokenSocket;
