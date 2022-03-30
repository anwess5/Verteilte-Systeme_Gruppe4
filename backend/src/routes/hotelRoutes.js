import express from "express";
import {
  getHotels,
  getHotelsByName,
  getHotelsByCity,
  addHotel,
  newHotelValidators,
  replaceStars,
  deleteHotel,
} from "./controllers/hotelControllers.js.js.js";
import {
  getRooms,
  getRoomsByName,
  getRoomsByAvailability,
  addRoom,
  changeRoom,
  deleteRoom,
} from "./controllers/roomControllers.js.js.js";
import {
  getEmployees,
  getEmployeebyJob,
  getEmployeeByLastname,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "./controllers/employeeControllers.js.js.js";
const router = express.Router();
//-----------------------------------------------------------Hotel-------------------------------------------------------------------------
//get-Methoden für das anzeigen von allen Hotels,
// desweiteren Anzeigen von einem speziellen Hotel gesucht nach dem Hotelnamen
//man kann auch alle Hotels aus einer Stadt ausgeben
router.get("/", getHotels);
router.get("/search", getHotelsByName);
router.get("/search", getHotelsByCity);
router.post("/", newHotelValidators, addHotel);

//put/Patch fehlt
//Delete Fehl
//------------------------------------------------------------Room-------------------------------------------------------------------------
router.get("/", )
//------------------------------------------------------------Employees--------------------------------------------------------------------




export default router;
