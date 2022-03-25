import express from "express";
import {
  getHotels,
  getHotelsByName,
  getHotelsByCity,
  addHotel,
  newHotelValidators,
} from "./controllers/hotelControllers.js.js.js";

const router = express.Router();

//get-Methoden für das anzeigen von allen Hotels,
// desweiteren Anzeigen von einem speziellen Hotel gesucht nach dem Hotelnamen
//man kann auch alle Hotels aus einer Stadt ausgeben
router.get("/", getHotels);
router.get("/search", getHotelsByName);
router.get("/search", getHotelsByCity);
router.post("/", newHotelValidators, addHotel);

export default router;
