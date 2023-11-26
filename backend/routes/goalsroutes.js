const express = require("express");

const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const {protect} = require('../middleware/authMiddleware.js')

// also u can write this way

router.route("/").get(protect,getGoals).post(protect,setGoals);

router.route("/:id").put(protect,updateGoals).delete(protect,deleteGoals);



// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
