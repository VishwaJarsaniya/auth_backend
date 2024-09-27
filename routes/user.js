const express = require("express");
const {handleRegister, handleLogin} = require("../controller/user");
const {authenticateToken} = require("../middleware/authentication");

const router = express.Router();

router.post("/register", handleRegister);

router.post("/login", handleLogin);

// Protected order history route
router.get("/orders", authenticateToken, async (req, res) => {
    // Dummy order data
    const orders = [
      { id: 1, item: "Laptop", price: 80000, date: "2023-07-15" },
      { id: 2, item: "Smartphone", price: 35000, date: "2023-07-20" },
      { id: 3, item: "Headphones", price: 3000, date: "2023-08-10" },
    ];
  
    res.json({
      message: "Order history retrieved successfully",
      userId: req.user._id,  
      orders: orders,
    });
  });

module.exports = router;