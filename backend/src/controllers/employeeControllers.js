import { check, validationResult } from "express-validator";
import { Employee } from "../models/employees.js";


//_____________________Employee___________________________________
//soll alle Mitarbeiter ausgeben
export const getEmployees = async (req, res) => {
  const employee = await Employee.find();
  res.status(200).send(employee);
};
//soll alle Mitarbeiter mit bestimmten Beruf ausgeben
export const getEmployeebyJob = async (req, res) => {
  let employee = await Employee.find({ job: req.query.job });
  res.status(200).send(employee);
};
//soll alle Mitarbeietr mit bestimmten Nachnamen ausgeben
export const getEmployeeByLastname = async (req, res) => {
  let employee = await Employee.find({ last_Name: req.query.last_Name });
  res.status(200).send(employee);
};

//fügt einen Neuen Mitarbeiter ein, in dem mindestens das Hotel, den Vor- und Nachname und Job-Bezeichnung angegeben ist
// wenn das erfolgreich ist füge das Hotel zu der Collection hinzu, andernfalls gibt es den Fehlercode 400 aus
export const addEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const employee = new Employee({
    hotel_id: req.body.hotel_id,
    first_name: req.body.first_name,
    last_Name: req.body.last_Name,
    job: req.body.job,
  });

  employee.save(employee).then((todo) => res.status(201).send(todo));
};

//mitarbeiter bearbeiten
//Mitarbeiter löschen

// diese Inhalte werden für eine erfolgreiche Erstellung eines Mitarbeiters benötigt
export const newEmployeeValidators = [
  check("hotel_id").notEmpty().withMessage("Hotel_Id field required"),
  check("first_Name").notEmpty().withMessage("First Name field required"),
  check("last_Name").notEmpty().withMessage("Last Name field required"),
  check("job").notEmpty().withMessage("Job field required"),
];

