import { check, validationResult } from "express-validator";
import { Hotel } from "../models/hotel.js";


//_______________________Hotel______________________________________
//soll alle Hotels ausgeben
export const getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.status(200).send(hotels);
};
//soll alle Hotels ausgeben mit einem gesuchten Name
export const getHotelsByName = async (req, res) => {
  let hotel = await Hotel.find({ name: req.query.name });
  res.status(200).send(hotel);
};
//soll alle Hotels ausgegeben in einer angegebenen Stadt
export const getHotelsByCity = async (req, res) => {
  let hotel = await Hotel.find({ name: req.query.city });
  res.status(200).send(hotel);
};

//fügt ein Hotel hinzu, funktioniert nur wenn zu einem Hotel mindestens der Name, die Stadt und die Sternekategorie angegeben ist,
// wenn das erfolgreich ist füge das Hotel zu der Collection hinzu, andernfalls gibt es den Fehlercode 400 aus
export const addHotel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const hotel = new Hotel({
    name: req.body.name,
    city: req.body.city,
    stars: req.body.stars,
    rooms: req.body.rooms,
    restaurant: req.body.restaurant,
  });
 
hotel.save(hotel).then((todo) => res.status(201).send(todo));
}

// Hotel bekommt neue Sternekategorie 
export const replaceStars = async (req, res) => {
  const stars = await Hotel.replaceOne({name: req.query.name}, {stars: req.query.stars});
  res.status(200).send(hotel);
};
// Hotel geht insolvent
export const deleteHotel = async (req, res) => {
  const hotel = await Hotel.remove({name: req.query.name})
  res.status(200).send(hotel);
};


// diese Inhalte werden für eine erfolgreiche Erstellung eines Hotels benötigt
export const newHotelValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("city").notEmpty().withMessage("City field required"),
  check("stars").notEmpty().withMessage("Stars field required"),
];












