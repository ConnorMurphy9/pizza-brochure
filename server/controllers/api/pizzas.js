const express = require("express");
const router = express.Router();
const { Pizza, User } = require("../../models");
const firebaseAuthMiddleware = require("../../firebaseAuthMiddleware");

router.get("/", async (req, res) => {
  const pizzas = await Pizza.findAll();
  res.send(pizzas);
});

router.post("/", firebaseAuthMiddleware, async (req, res) => {
  const { name, description, price} = req.body;
  const user = await User.findOne({ where: { firebase_id: req.user.uid } });
  const pizza = await user.createPizza({
    name,
    description,
    price,
  });
  res.send(pizza);
});


module.exports = router;
