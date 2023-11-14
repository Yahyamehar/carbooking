<template>
    <div class="row">
        <div class="vehicle-card" v-if="car !== null">
            <div class="details">
                <div class="info">
                    <div class="thumb-gallery">
                        <img class="first" :src="car.imageUrl" alt="Car Image" />
                    </div>

                    <h3>{{ car.name }}</h3>
                    <div class="stars" data-stars="1">
                        <svg height="22" width="20" class="star rating" data-rating="5">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                style="fill-rule:nonzero;" />
                        </svg>
                        <svg height="22" width="20" class="star rating" data-rating="2">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                style="fill-rule:nonzero;" />
                        </svg>
                        <svg height="22" width="20" class="star rating" data-rating="3">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                style="fill-rule:nonzero;" />
                        </svg>
                        <svg height="22" width="20" class="star rating" data-rating="4">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                style="fill-rule:nonzero;" />
                        </svg>
                        <svg height="22" width="20" class="star rating" data-rating="5">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                                style="fill-rule:nonzero;" />
                        </svg>
                    </div>
                    <div class="price">
                        <span>Price Starting at</span>
                        <h4> ${{ car.price }}</h4>
                    </div>

                    <div style="clear:both;"></div>
                    <div class="desc">
                        <p> {{ car.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <form @submit.prevent="submitReservation">
            <div class="row jumbotron box8">
                <div class="col-sm-12 mx-t3 mb-4">
                    <h2 class="text-center text-info">Car Reservation Form</h2>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="name-f">First Name</label>
                    <input v-model="Reservation.firstName" type="text" class="form-control" name="fname" id="name-f"
                        placeholder="Enter your first name." required />
                    <div class="text-danger">{{ errors.firstName }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="name-l">Last Name</label>
                    <input v-model="Reservation.lastName" type="text" class="form-control" name="lname" id="name-l"
                        placeholder="Enter your last name." required />
                    <div class="text-danger">{{ errors.lastName }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="email">Email</label>
                    <input v-model="Reservation.email" type="email" class="form-control" name="email" id="email"
                        placeholder="Enter your email." required />
                    <div class="text-danger">{{ errors.email }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="address-1">Address Line-1</label>
                    <input v-model="Reservation.address1" type="text" class="form-control" name="Locality" id="address-1"
                        placeholder="Locality/House/Street no." required />
                    <div class="text-danger">{{ errors.address1 }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="City">City</label>
                    <input v-model="Reservation.city" type="text" class="form-control" name="City" id="City"
                        placeholder="Village/City Name." required />
                    <div class="text-danger">{{ errors.city }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="Country">Resident of Portugal</label>
                    <select v-model="Reservation.isPortugal" class="form-control custom-select browser-default" required>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <div class="text-danger">{{ errors.isPortugal }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="Date">PickUp Date</label>
                    <input v-model="Reservation.pickupdate" type="date" class="form-control" id="Date" required />
                    <div class="text-danger">{{ errors.pickupdate }}</div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="Date">Return Date</label>
                    <input v-model="Reservation.returndate" type="date" class="form-control" id="Date" required />
                    <div class="text-danger">{{ errors.returndate }}</div>
                </div>
                <div class="col-sm-2 form-group">
                    <label for="pickuptime">Pickup Time</label>
                    <select v-model="Reservation.pickuptime" class="form-control browser-default custom-select" required>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                    </select>
                    <div class="text-danger">{{ errors.pickuptime }}</div>
                </div>
                <div class="col-sm-2 form-group">
                    <label for="age">Your Age</label>
                    <select v-model="Reservation.age" class="form-control browser-default custom-select" required>
                        <option value="18+">18+</option>
                        <option value="18 - 25">18 - 25</option>
                        <option value="25 - 30">25 - 30</option>
                        <option value="30 - 38">30 - 38</option>
                        <option value="38 - 50">38 - 50</option>
                        <option value="50 - 65">50 - 65</option>
                    </select>
                    <div class="text-danger">{{ errors.age }}</div>
                </div>
                <div class="col-sm-2 form-group">
                    <label for="countryCode">Country code</label>
                    <select v-model="Reservation.countryCode" class="form-control browser-default custom-select" required>
                        <option value="PT (+351)">PT (+351)</option>
                        <option value="UK (+44)">UK (+44)</option>
                        <!-- Add options for other countries -->
                    </select>
                    <div class="text-danger">{{ errors.countryCode }}</div>
                </div>
                <div class="col-sm-4 form-group">
                    <label for="tel">Phone</label>
                    <input v-model="Reservation.phoneNumber" type="tel" class="form-control" id="tel"
                        placeholder="Enter Your Contact Number." required />
                    <div class="text-danger">{{ errors.phoneNumber }}</div>
                </div>
                <div class="col-sm-12">
                    <input v-model="Reservation.isAccepted" type="checkbox" class="form-check d-inline" id="chb" required />
                    <label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.</label>
                    <div class="text-danger">{{ errors.isAccepted }}</div>
                </div>
                <div class="col-sm-12 form-group mb-0">
                    <button type="submit" class="btn btn-primary float-right">Submit</button>
                </div>
            </div>
        </form>
    </div>

    <footer>
        <p>Copyright &copy; 2019 <img src="../assets/alogo.png" alt="logo"> All Rights Reserved.</p>
    </footer>
</template>

<script>
import axios from "axios";

export default {
    name: "Resoform",
    props: ['carId'],
    data() {
        return {
            car: null,
            Reservation: {
                firstName: '',
                lastName: '',
                email: '',
                address1: '',
                city: '',
                isPortugal: '',
                pickupdate: '',
                returndate: '',
                age: '',
                pickuptime: '',
                countryCode: '',
                phoneNumber: '',
                isAccepted: false,
                carimageUrl: '', // Added car-related fields
                carPrice: 0,     // Added car-related fields
                carName: '',     // Added car-related fields
            },
            errors: {},
        };
    },
    methods: {
        async submitReservation() {
            this.$router.push('/loading');
            this.errors = {};
            const errors = this.validateForm();

            if (Object.keys(errors).length === 0) {
                // Assign car data to the Reservation object
                this.Reservation.carimageUrl = this.car.imageUrl;
                this.Reservation.carPrice = this.car.price;
                this.Reservation.carName = this.car.name;

                // Submit the reservation data to the server
                try {
                    const response = await axios.post('http://localhost:4000/api/reservations', this.Reservation);
                    console.log(response);
                } catch (error) {
                    console.error('POST request failed:', error);
                }
            } else {
                this.errors = errors;
            }
        },
        validateForm() {
            const errors = {};
            // Validate each form field
            if (!this.Reservation.firstName) {
                errors.firstName = "First Name is required.";
            }
            if (!this.Reservation.lastName) {
                errors.lastName = "Last Name is required.";
            }
            if (!this.Reservation.email) {
                errors.email = "Email is required.";
            } else if (!this.isValidEmail(this.Reservation.email)) {
                errors.email = "Invalid email format.";
            }
            if (!this.Reservation.address1) {
                errors.address1 = "Address Line-1 is required.";
            }
            if (!this.Reservation.city) {
                errors.city = "City is required.";
            }
            if (this.Reservation.isPortugal === '') {
                errors.isPortugal = "Resident of Portugal is required.";
            }
            if (!this.Reservation.pickupdate) {
                errors.pickupdate = "PickUp Date is required.";
            }
            if (!this.Reservation.returndate) {
                errors.returndate = "Return Date is required.";
            }
            if (!this.Reservation.pickuptime) {
                errors.pickuptime = "Pickup Time is required.";
            }
            if (!this.Reservation.age) {
                errors.age = "Age is required.";
            }
            if (!this.Reservation.countryCode) {
                errors.countryCode = "Country code is required.";
            }
            if (!this.Reservation.phoneNumber) {
                errors.phoneNumber = "Phone is required.";
            }
            if (!this.Reservation.isAccepted) {
                errors.isAccepted = "You must accept the terms and conditions.";
            }
            return errors;
        },
        isValidEmail(email) {
            // Basic email validation regex
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
        },
    },
    mounted() {
        const id = this.$route.params.carId;

        // Fetch car data
        axios.get('http://localhost:4000/cars/' + id)
            .then(response => {
                this.car = response.data;
            })
            .catch(error => {
                console.error('Failed to fetch car data:', error);
            });
    },
};
</script>

<style scoped>
footer {
    background: #ffffff;
    color: #000000;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 80px;
}

label {
    font-weight: 600;
    color: #666;
}

body {
    background: #f1f1f1;
}

.box8 {
    box-shadow: 0px 0px 5px 1px #999;
}

.mx-t3 {
    margin-top: -3rem;
}

section,
footer {
    background: #ffffff;
    color: #000000;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 80px;
}




ul {
    margin: 0;
    padding: 0;
}

ul li {
    margin: 0;
    padding: 0;
    list-style: none;
}

.vehicle-card {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 335px;
    overflow: visible;
    z-index: 1;
    border-radius: 2px;
    margin: 0 20px 20px 0;
    cursor: pointer;
    margin-left: 190px;
    margin-top: 20px;
}


.vehicle-card .details {
    position: absolute;
    height: 335px;
    width: 240px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
}

.vehicle-card .details:hover {
    -webkit-transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    height: 370px;
    width: 240px;
}

.vehicle-card .info {
    margin: 10px;
}

.vehicle-card .ctas {
    margin: 10px 0;
}

.thumb-gallery {
    height: 150px;
}

.thumb-gallery img {
    position: absolute;
    width: 240px;
}

.thumb-gallery img.first {
    opacity: 1;
}

.vehicle-card:hover .thumb-gallery img.second {
    opacity: 0;
    -webkit-transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/*styling*/
.stars {
    margin: 10px 0;
}

.star polygon {
    fill: #0b00e2;
}

.vehicle-card h3 {
    margin: 0;
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    letter-spacing: -.5px;
}

.vehicle-card .price span {
    font-family: "Helvetica", Arial, sans-serif;
    color: #999;
    font-size: .75rem;
}

.vehicle-card .price h4 {
    margin: 0;
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
    color: #222;
    font-size: 1.25rem;
}

.vehicle-card .desc p {
    color: #666;
    font-size: 1rem;
    line-height: 1.25rem;
}

.vehicle-card .specs {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    margin: 20px 0;
    padding: 10px 0;
}

.specs .spec {
    display: inline-block;
    margin-right: 10px;
}

.specs span {
    font-family: "Helvetica", Arial, sans-serif;
    color: #999;
    font-size: .75rem;
}

.specs p {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}

.specs p span {
    font-size: .75rem;
    margin-left: 2px;
    font-weight: normal;
}

.btn {
    display: block;
    padding: 0 10px;
    float: left;
    font-size: .75rem;
    font-family: "Helvetica", Arial, sans-serif;
    text-decoration: none;
    height: 30px;
    width: 100px;
    text-align: center;
    border-radius: 2px;
    font-weight: bold;
    -webkit-box-sizing: border-box;
    /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;
    /* Firefox, other Gecko */
    box-sizing: border-box;
    /* Opera/IE 8+ */
}

.primary {
    background-color: #1383b3;
    color: #fff;
    margin-right: 10px;
    line-height: 30px;
}

.secondary {
    background-color: #fff;
    color: #1383b3;
    border: 2px solid #1383b3;
    line-height: 26px;
}
</style>
