import express from "express";
import bodyParser from "body-parser";
import hotelRoutes from "./routes/hotelRoutes.js";

// komplette Applikation wird hier initalisiert
// der Port auf der sie läuft ist 4000
const app = express();
const port = 4000;

app.use(bodyParser.json());

//routes sind immer /hotels und alles andere wirft den fehler 404 "not Found"
app.use("/hotels", hotelRoutes);
app.all("*", (req, res) => res.sendStatus(404));

//Ausgabe auf welchem Port der Server läuft
app.listen(port, () => {
  console.log(`Server läuft auf: http://localhost:${port}`);
});
