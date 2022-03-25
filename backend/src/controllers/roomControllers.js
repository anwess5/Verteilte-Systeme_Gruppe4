import { check, validationResult } from "express-validator";
import { Room } from "../models/room.js";
//_________________________Room_________________________
//soll alle Raume ausgeben
export const getRooms = async (req, res) => {
    const rooms = await Room.find();
    res.status(200).send(hotels);
  };
  //soll alle Raäume eines Hotels ausgeben 
  export const getRoomByHotel = async (req, res) => {
    let room = await Room.find({ hotel_id: req.query.hotel_id });
    res.status(200).send(room);
  };
  //soll alle Räume ausgegeben mit einer bestimmten verfügbarkeit
  export const getHotelsByAvailability = async (req, res) => {
    let room = await Hotel.find({ availability: req.query.availability });
    res.status(200).send(hotel);
  };
  
  //Raum ändern wenn Raum einen anderen Preis bekommt
  //Raum ändern wenn sich die Verfügbarkeit ändert
  
  
  // diese Inhalte werden für eine erfolgreiche Erstellung eines Raumes benötigt
  export const newHRoomValidators = [
    check("hotel_id").notEmpty().withMessage("Hotel_Id field required"),
    check("type").notEmpty().withMessage("Type field required"),
    check("price").notEmpty().withMessage("Price field required"),
  ];
  