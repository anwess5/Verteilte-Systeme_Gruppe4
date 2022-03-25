import mongoose from "mongoose";

//Erstellung eines Schema´s wie ein Datenbank-Eintrag Room aufgebaut ist
const roomSchema = new mongoose.Schema({
  hotel_id: Number,
  type: String,
  size: String,
  price: Number,
  availability: String,
  balcony: Boolean,
});

export const Room = mongoose.model("Room", roomSchema);