const postInvite = require("./postInvite");
// const postInvite = require("./postInvite"); // ✅ correct

const postAccept = require("./postAccept");
const postReject = require("./postReject");

exports.controllers = {
  postInvite,
  postAccept,
  postReject,
};
