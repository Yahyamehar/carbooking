import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));
app.use(bodyParser.json());

// MongoDB Atlas connection string (replace with your credentials)
const mongoDBAtlasUri =
  "mongodb+srv://Yahya786:Loco786@cluster0.khli0cv.mongodb.net/PROJECT0";

mongoose.connect(mongoDBAtlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const Item = mongoose.model("car", itemSchema);

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error while signing up:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the password is correct using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If the password is valid, create a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      "your-secret-key", // Replace with a secure secret key in production
      { expiresIn: "1h" } // Token expiration time
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Check if the token is present
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, "your-secret-key");

    // Attach user information to the request for later use
    req.user = decodedToken;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    console.error("Error while authenticating user:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Example of using the middleware in a route
app.get("/secure-route", authenticateUser, (req, res) => {
  res.json({ message: "This is a secure route", user: req.user });
});

// Define a mongoose model for your items
app.post("/cars", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error while saving item:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

// GET endpoint to retrieve all records
app.get("/cars", (req, res) => {
  Item.find({})
    .exec()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      console.error("Error while retrieving items:", err);
      res.status(500).send(err.message || "Internal Server Error");
    });
});

// GET endpoint to retrieve a specific record by ID
app.get("/cars/:id", (req, res) => {
  const productId = req.params.id;
  Item.findById(productId)
    .then((product) => {
      if (!product) {
        res.status(404).send("Product not found");
      } else {
        res.status(200).json(product);
      }
    })
    .catch((err) => {
      console.error("Error while retrieving item by ID:", err);
      res.status(500).send(err.message || "Internal Server Error");
    });
});

const Reservation = mongoose.model("Reservation", {
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
app.post("/api/reservations", async (req, res) => {
  try {
    const newItem = new Reservation(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error while saving reservation:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

// Update a reservation by ID
app.put("/api/reservations/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedReservation) {
      res.status(404).send("Reservation not found");
    } else {
      res.status(200).json(updatedReservation);
    }
  } catch (error) {
    console.error("Error while updating reservation:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

// Delete a reservation by ID
app.delete("/api/reservations/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedReservation = await Reservation.findByIdAndRemove(id);

    if (!deletedReservation) {
      res.status(404).send("Reservation not found");
    } else {
      res.status(200).json({ message: "Reservation deleted successfully" });
    }
  } catch (error) {
    console.error("Error while deleting reservation:", error);
    res.status(500).send(error.message || "Internal Server Error");
  }
});

// Retrieve all reservations
app.get("/api/reservations", (req, res) => {
  Reservation.find({})
    .exec()
    .then((reservations) => {
      res.status(200).json(reservations);
    })
    .catch((err) => {
      console.error("Error while retrieving reservations:", err);
      res.status(500).send(err.message || "Internal Server Error");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
