import { check, validationResult } from "express-validator";

const hotels = [
  {
    id: 1,
    name: "Best Western ",
    city: "Karlsruhe",
    rooms: 49,
    restaurant: true
  },
  {
    id: 2,
    name: "Royal Hotel",
    city: "Stuttgart",
    rooms: 25,
    restaurant: true 
  }
];
export const getHotels = (req, res) => {
  res.status(200).send(hotels);
};
export const getHotelsById = (req, res) => {
  let hotel = hotels.find((b) => b.id == req.params.id);
  res.status(200).send(hotel);
};
export const getHotelsByName = (req, res) => {
  let result = hotels.filter((hotel) => hotel.name == req.query.name);
  res.status(200).send(result);
};

export const addHotel = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  hotels.push(req.bod);
  res.status(201).send(`Added ${hotel.title} to hotel collection`);
};

// attached as second param in a route
export const newHotelValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("city").notEmpty().withMessage("City field required"),
];
