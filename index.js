import express from "express";
import bodyParser from "body-parser";
import hotelRoutes from "./routes/hotelRoutes.js";

// complete application is here
const app = express();
const port = 4000;

app.use(bodyParser.json());

//routes are /books & everything else throws a 404
app.use("/hotels", hotelRoutes);
app.all("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
