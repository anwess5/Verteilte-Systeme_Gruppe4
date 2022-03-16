import express from "express";
import {
  getHotels,
  getHotelsById,
  getHotelsByName,
  addHotel,
  newHotelValidators,
} from "../controllers/hotelControllers.js";

const router = express.Router();

router.get("/", getHotels);
router.get("/:id", getHotelsById);
router.get("/search", getHotelsByName);
router.post("/", newHotelValidators, addHotel);

export default router;
