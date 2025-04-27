const jwt = require("jsonwebtoken");
const JWTSECRET =
  "b8c562cd073d0491c1bd69e75656f959d1b34f3652f000eec90e65e60861112d";
SALT = 10;
module.exports = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(403)
        .json({ success: false, msg: "User Access denied." });

    const decoded = jwt.verify(token, JWTSECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ success: false, msg: "Invalid token." });
  }
};
