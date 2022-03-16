import { check, validationResult } from "express-validator";

const hotels = [
  {
    id: 1,
    name: "Best Western ",
    city: "Karlsruhe",
    stars: 5,
    rooms: 49,
    restaurant: true
  },
  {
    id: 2,
    name: "Royal Hotel",
    city: "Stuttgart",
    stars: 4 ,
    rooms: 25,
    restaurant: true 
  }
];

//soll alle Hotels ausgeben
export const getHotels = (req, res) => {
  res.status(200).send(hotels);
};
//soll alle Hotels ausgeben mit einem gesuchten Name
export const getHotelsByName = (req, res) => {
  let hotel = hotels.find((hotel) => hotel.name == req.params.name);
  res.status(200).send(hotel);
};
//soll alle Hotels ausgegeben in einer angegebenen Stadt
export const getHotelsByCity = (req, res) => {
  let result = hotels.filter((hotel) => hotel.city == req.query.city);
  res.status(200).send(result);
};
//fügt ein Hotel hinzu, funktioniert nur wenn zu einem Hotel mindestens der Name, die Stadt und die Sternekategorie angegeben ist,
// wenn das erfolgreich ist füge das Hotel zu der Collection hinzu, andernfalls gibt es den Fehlercode 400 aus
export const addHotel = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  hotels.push(req.bod);
  res.status(201).send(`Added ${hotel.title} to hotel collection`);
};

// diese Inhalte werden für eine erfolgreiche Erstellung eines Hotels benötigt
export const newHotelValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("city").notEmpty().withMessage("City field required"),
  check("stars").notEmpty().withMessage("Stars field required"),
];
