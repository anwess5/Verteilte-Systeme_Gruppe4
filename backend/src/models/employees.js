import mongoose from "mongoose";

//Erstellung eines Schema´s wie ein Datenbank-Eintrag Hotel aufgebaut ist
const employeeSchema = new mongoose.Schema({
  hotel_id: Number,
  first_name: String,
  last_name: String,
  job: String,
  work_experience: String
});
export const Employee = mongoose.model("Employee", employeeSchema);