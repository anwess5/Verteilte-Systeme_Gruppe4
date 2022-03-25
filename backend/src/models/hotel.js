import mongoose from "mongoose";

//Erstellung eines Schema´s wie ein Datenbank-Eintrag Hotel aufgebaut ist
const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  stars: Number,
  rooms: Number,
  restaurant: Boolean
});

export const Hotel = mongoose.model("Hotel", hotelSchema);
