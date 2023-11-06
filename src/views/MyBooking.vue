<template>
  <div class="my-booking">
    <h1 class="title">My Bookings</h1>

    <!-- Display current booking section -->
    <div v-if="currentBooking" class="booking-details">
      <div class="photo">
        <img :src="currentBooking.carPhoto" alt="Car Photo" />
      </div>
      <div class="info">
        <h2 class="booking-title">{{ currentBooking.title }}</h2>
        <h3 class="car-name">{{ currentBooking.carName }}</h3>
        <p class="car-detail">{{ currentBooking.carDetail }}</p>
        <p class="total-price">Total Price: ${{ currentBooking.totalPrice }}</p>

        <!-- Additional car details with icons -->
        <div class="additional-details">
          <h4 class="section-title">Booking Dates</h4>
          <p>Start Date: {{ currentBooking.startDate }}</p>
          <p>End Date: {{ currentBooking.endDate }}</p>

          <h4 class="section-title">Car Features</h4>
          <ul class="features">
            <li>
              <i class="fas fa-check"></i> GPS Navigation
            </li>
            <li>
              <i class="fas fa-check"></i> Bluetooth Audio
            </li>
            <li>
              <i class="fas fa-check"></i> Leather Seats
            </li>
            <li>
              <i class="fas fa-check"></i> Sunroof
            </li>
            <li>
              <i class="fas fa-check"></i> Parking Sensors
            </li>
            <!-- Add more features with icons as needed -->
          </ul>
        </div>
      </div>

      <!-- Payment details on the right -->
      <div class="payment-details">
        <h4 class="section-title">Payment Details</h4>
        <div class="payment-item">
          <p>Base Price</p>
          <p class="price">$ {{ currentBooking.totalPrice }}</p>
        </div>
        <div class="payment-item">
          <p>Insurance Cost</p>
          <p class="price">$ {{  currentBooking.insuranceCost }}</p>
        </div>
        <div class="payment-item">
          <p>Service Fee</p>
          <p class="price">$ {{  currentBooking.serviceFee }}</p>
        </div>
        <div class="payment-item">
          <p>Tax (10%)</p>
          <p class="price">$ {{ calculateTax( currentBooking.totalPrice) }}</p>
        </div>
        <div class="payment-item">
          <p>Total per Day</p>
          <p class="price">$ {{ calculateTotalPerDay( currentBooking.totalPrice) }}</p>
        </div>
        <div class="payment-item total">
          <p>Final Total</p>
          <p class="price">$ {{ calculateFinalTotal( currentBooking.totalPrice) }}</p>
        </div>
      </div>
    </div>
    <hr>

    <!-- Display previous booking section with the same information as current booking -->
    <div v-if="previousBooking" class="booking-details">
      <div class="photo">
        <img :src="previousBooking.carPhoto" alt="Car Photo" />
      </div>
      <div class="info">
        <h2 class="booking-title">{{ previousBooking.title }}</h2>
        <h3 class="car-name">{{ previousBooking.carName }}</h3>
        <p class="car-detail">{{ previousBooking.carDetail }}</p>
        <p class="total-price">Total Price: ${{ previousBooking.totalPrice }}</p>

        <!-- Additional car details with icons -->
        <div class="additional-details">
          <h4 class="section-title">Booking Dates</h4>
          <p>Start Date: {{ previousBooking.startDate }}</p>
          <p>End Date: {{ previousBooking.endDate }}</p>
          <h4 class="section-title">Car Features</h4>
          <ul class="features">
            <li>
              <i class="fas fa-check"></i> GPS Navigation
            </li>
            <li>
              <i class="fas fa-check"></i> Bluetooth Audio
            </li>
            <li>
              <i class="fas fa-check"></i> Leather Seats
            </li>
            <li>
              <i class="fas fa-check"></i> Sunroof
            </li>
            <li>
              <i class="fas fa-check"></i> Parking Sensors
            </li>
            <!-- Add more features with icons as needed -->
          </ul>
        </div>
      </div>

      <!-- Payment details on the right -->
      <div class="payment-details">
        <h4 class="section-title">Payment Details</h4>
        <div class="payment-item">
          <p>Base Price</p>
          <p class="price">$ {{ previousBooking.totalPrice }}</p>
        </div>
        <div class="payment-item">
          <p>Insurance Cost</p>
          <p class="price">$ {{ previousBooking.insuranceCost }}</p>
        </div>
        <div class="payment-item">
          <p>Service Fee</p>
          <p class="price">$ {{ previousBooking.serviceFee }}</p>
        </div>
        <div class="payment-item">
          <p>Tax (10%)</p>
          <p class="price">$ {{ calculateTax(previousBooking.totalPrice) }}</p>
        </div>
        <div class="payment-item">
          <p>Total per Day</p>
          <p class="price">$ {{ calculateTotalPerDay(previousBooking.totalPrice) }}</p>
        </div>
        <div class="payment-item total">
          <p>Final Total</p>
          <p class="price">$ {{ calculateFinalTotal(previousBooking.totalPrice) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Image1 from "../assets/puelec2.png";
import Image2 from "../assets/puelec2.png";

export default {
  name: "MyBooking",
  data() {
    return {
      currentBooking: {
        title: "Current Booking",
        carName: "Your Current Car",
        carDetail: "Details about your current car",
        carPhoto: Image1,
        totalPrice: 1000,
        startDate: "2023-11-01",
        endDate: "2023-11-10",
        insuranceCost: 50,
        serviceFee: 25,
      },
      previousBooking: {
        title: "Previous Booking",
        carName: "Your Previous Car",
        carDetail: "Details about your previous car",
        carPhoto: Image2, // You can replace this with the actual photo for the previous booking
        totalPrice: 126.90,
        startDate: "2023-10-01",
        endDate: "2023-10-10",
        insuranceCost: 50,
        serviceFee: 25,
      },
    };
  },
  methods: {
    calculateTax(totalPrice) {
      // Calculate 10% tax
      return (totalPrice * 0.1).toFixed(2);
    },
    calculateTotalPerDay(totalPrice) {
      // Assuming a 5-day rental
      return (totalPrice / 5).toFixed(2);
    },
    calculateFinalTotal(totalPrice) {
      const tax = totalPrice * 0.1;
      const totalPerDay = totalPrice / 5;
      return (totalPrice + tax + totalPerDay).toFixed(2);
    },
  },
};
</script>

<style scoped>


.payment-details .section-title {
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
}

.payment-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.payment-item .price {
  font-weight: bold;
}

.payment-item.total {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

.my-booking {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.booking-details {
  display: flex;
  margin-bottom: 20px;
}

.photo {
  flex: 1;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.info {
  flex: 1;
  text-align: left;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.payment-details {
  flex: 1;
  text-align: left;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}


/* Additional styling for payment details */
.payment-details .section-title {
  font-size: 20px;
  margin-top: 20px;
  color: #007bff;
  /* Primary color for section titles */
}

.payment-details p {
  margin-bottom: 10px;
  color: #555;
  /* Slightly darker text color */
}

.my-booking {
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.booking-details {
  display: flex;
  margin-bottom: 20px;
}

.photo {
  flex: 1;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.info {
  flex: 2;
  text-align: left;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.booking-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  /* Dark text color */
}

.car-name {
  font-size: 20px;
  color: #007bff;
  /* Primary color */
}

.car-detail {
  margin: 10px 0;
  color: #666;
  /* Slightly darker text color */
}

.total-price {
  font-weight: bold;
  color: #2ecc71;
  /* Green color for the price */
}

.section-title {
  font-size: 20px;
  margin-top: 20px;
  color: #007bff;
  /* Primary color for section titles */
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  color: #555;
  /* Slightly darker text color */
}

.features i {
  margin-right: 5px;
  color: #2ecc71;
  /* Green color for icons */
}
</style>
