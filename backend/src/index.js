import express from "express";
import bodyParser from "body-parser";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import mongoose from "mongoose";

// komplette Applikation wird hier initalisiert
// der Port auf der sie läuft ist 4000
const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes sind immer /hotels und alles andere wirft den fehler 404 "not Found"
app.use("/hotels", hotelRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

//routes sind immer /rooms und alles andere wirft den fehler 404 "not Found"
app.use("/rooms", roomRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

//routes sind immer /employees und alles andere wirft den fehler 404 "not Found"
app.use("/employees", employeeRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));


mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});
//Ausgabe auf welchem Port der Server läuft
app.listen(port, () => {
  console.log(`Server läuft auf: http://localhost:${port}`);
});
