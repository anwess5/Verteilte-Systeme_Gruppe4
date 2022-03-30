import { check, validationResult } from "express-validator";
import { Room } from "../models/room.js";
//_________________________Room_________________________
//soll alle Räume ausgeben
export const getRooms = async (req, res) => {
    const rooms = await Room.find();
    res.status(200).send(hotels);
  };
  //soll alle Räume eines Hotels ausgeben 
  export const getRoomByHotel = async (req, res) => {
    let room = await Room.find({ hotel_id: req.query.hotel_id });
    res.status(200).send(room);
  };
  //soll alle Räume ausgegeben mit einer bestimmten verfügbarkeit
  export const getRoomsByAvailability = async (req, res) => {
    let room = await Hotel.find({ availability: req.query.availability });
    res.status(200).send(hotel);
  };
  
  //Raum ändern wenn Raum einen anderen Preis bekommt
  //Raum ändern wenn sich die Verfügbarkeit ändert

  //Raum hinzufügen
  export const addRoom = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const room = new Room({
      hotel_id: req.body.hotel_id,
      type: req.body.type,
      size: req.body.size,
      price: req.body.price,
      availability: req.body.availability,
      balcony: req.body.balcony
    });
    room.save(room).then((todo) => res.status(201).send(todo));
  }
  // Raum ändern 
  export const changeRoom = async (req, res) => {
  const price = await Room.replaceOne({id: req.query.id}, {price: req.query.price});
  res.status(200).send(Room);
};
// Raum löschen
export const deleteRoom = async (req, res) => {
  const room = await Room.remove({id: req.query.id})
  res.status(200).send(Room);
};
  //Raum ändern
  //Raum löschen
  
  
  // diese Inhalte werden für eine erfolgreiche Erstellung eines Raumes benötigt
  export const newHRoomValidators = [
    check("hotel_id").notEmpty().withMessage("Hotel_Id field required"),
    check("type").notEmpty().withMessage("Type field required"),
    check("price").notEmpty().withMessage("Price field required"),
  ];
  
  