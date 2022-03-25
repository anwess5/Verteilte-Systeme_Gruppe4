import express from "express";
import {
    getEmployees, 
    getEmployeebyJob ,
    getEmployeeByLastname ,
    addEmployee,
    newEmployeeValidators,
} from "./controllers/roomControllers.js.js.js";

const router = express.Router();

//get-Methoden für das anzeigen von allen Hotels,
// desweiteren Anzeigen von einem speziellen Hotel gesucht nach dem Hotelnamen
//man kann auch alle Hotels aus einer Stadt ausgeben
router.get("/", getEmployees);
router.get("/search", getEmployeebyJob);
router.get("/search", getEmployeeByLastname);
router.post("/", newEmployeeValidators, addEmployee);
//put/Patch fehlt
//Delete Fehl

export default router;

