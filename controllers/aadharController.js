const userModel = require("../models/aadharModel");

exports.addUserData = async (req, res, next) => {
  try {
    const { firstName, lastName, phoneNumber, email, homeAddress, password } =
      req.body;
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next("Email already exist");
    }
    const aadharNumber = Math.random().toFixed(12).replace("0.", "");
    const user = await userModel.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      homeAddress,
      aadharNumber,
    });
    res.status(201).json({
      data: user,
      message: "Aadhar number successfully generated",
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while creating aadhar number", success: false });
  }
};

exports.getUserData = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (user) {
      res.status(200).send({ data: user, success: true });
    } else {
      res.status(401).json({ error: "Invalid login credentials" });
    }
  } catch (error) {
    next(error);
  }
};
