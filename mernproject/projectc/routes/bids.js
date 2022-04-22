const Bids = require("../models/Bids");
const {
  verifyToken,
  verifyTokenAndDeveloper,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//set bids
router.post("/bids", async (req, res) => {
    const newBids = new Bids(req.body);
  
  console.log(req.body);
    try {
      const savedBids = await newBids.save();
      res.status(200).json(savedBids);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get all bids 
  router.get("/bid",  async (req, res) => {
    try {console.log('hi');
      const Bid = await Bids.find();
      res.status(200).json(Bid);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //delete Bids
  router.delete("/", async (req, res) => {
    try {
      await Bids.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  



module.exports = router;

