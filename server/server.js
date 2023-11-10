import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));

// MongoDB Atlas connection string (replace with your credentials)
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const Item = mongoose.model("car", itemSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

const mongoDBAtlasUri =
  "mongodb+srv://Yahya786:Loco786@cluster0.khli0cv.mongodb.net/PROJECT0";

// Connect to MongoDB Atlas
mongoose.connect(mongoDBAtlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose model for your items
app.post("/cars", async (req, res) => {
  console.log("Received POST request with data:", req.body);
  try {
    const newItem = new Item(req.body);
    console.log("New item to be saved:", newItem);
    const savedItem = await newItem.save();
    console.log("Saved item:", savedItem);
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error while saving item:", error);
    res.status(500).send(error);
  }
});

// GET endpoint to retrieve all records
app.get("/cars", (req, res) => {
  Item.find({})
    .exec()
    .then((items) => {
      return res.status(200).json(items);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

app.get('/cars/:id', (req, res) => {
  const productId = req.params.id;
console.log(productId);
  Item.findById(productId)
  .then((product) => {
    console.log(product);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      return res.status(200).json(product);

    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('An error occurred');
  });

});

const Reservation = mongoose.model('Reservation', {
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address1: String,
  address2: String,
  postalCode: String,
  city: String,
  isPortugal: String,
  pickupdate: String,
  returndate: String,
  age: String,
  pickuptime: String,
  returntime: String,
  countryCode: String,
  isAccepted: Boolean,
  carName: String,
  carPrice: Number,
  carimageUrl: String,
});

// Create a route for creating a reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const newItem = new Reservation(req.body);
    console.log("New item to be saved:", newItem);
    const savedItem = await newItem.save();
    console.log("Saved item:", savedItem);
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error while saving item:", error);
    res.status(500).send(error);
  }
});
app.put('/api/reservations/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedReservation = await Reservation.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedReservation) {
      return res.status(404).send('Reservation not found');
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error('Error while updating reservation:', error);
    res.status(500).send(error);
  }
});

// Create a route for deleting a reservation by ID
app.delete('/api/reservations/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedReservation = await Reservation.findByIdAndRemove(id);

    if (!deletedReservation) {
      return res.status(404).send('Reservation not found');
    }

    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error while deleting reservation:', error);
    res.status(500).send(error);
  }
});

// Modify the GET route to retrieve reservations
app.get('/api/reservations', (req, res) => {
  Reservation.find({})
    .exec()
    .then((reservations) => {
      return res.status(200).json(reservations);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

app.get("/api/reservations", (req, res) => {
  Reservation.find({})
    .exec()
    .then((items) => {
      return res.status(200).json(items);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
  });
  
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
