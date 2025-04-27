const userData = require("../json/userData.json");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWTSECRET =
  "b8c562cd073d0491c1bd69e75656f959d1b34f3652f000eec90e65e60861112d";
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "You must enter an email address.",
        key: "email",
      });
    }
    if (!password) {
      return res.status(400).json({
        success: false,
        error: "You must enter a password.",
        key: "password",
      });
    }
    let payload;

    const user = userData.find((item) => item.email == email);
    console.log("user", user);
    if (!user) {
      return res.status(400).send({
        success: false,
        error: "The email address you entered isn't connected to an account.",
        key: "email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "The password that you've entered is incorrect",
        key: "password",
      });
    }
    payload = {
      id: user.id,
    };
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const token = jwt.sign(payload, JWTSECRET, {
      expiresIn: "7d",
    });

    if (!token) {
      throw new Error();
    }

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true, // Use secure cookies in production
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.status(200).json({
      success: true,
      msg: "Login successful",
      user,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      success: false,
      error: "Your request could not be processed. Please try again.",
    });
  }
};

const logoutController = (req, res) => {
  res.send("Logout Controller");
};

module.exports = {
  loginController,
  logoutController,
};
