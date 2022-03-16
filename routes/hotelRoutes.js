import express from "express";
import {
  getHotels,
  getHotelsByName,
  getHotelsByCity,
  addHotel,
  newHotelValidators,
} from "../controllers/hotelControllers.js";

const router = express.Router();

router.get("/", getHotels);
router.get("/search", getHotelsByName);
router.get("/search", getHotelsByCity);
router.post("/", newHotelValidators, addHotel);

export default router;
