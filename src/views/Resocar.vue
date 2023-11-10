
<template>
    <hr>
    <h1 class="header-text"> Book Your Car</h1>
    <hr>
    <div class="d-flex justify-content-center">
        <b-form inline class="search-form">
            <b-form-input v-model="search" placeholder="Search Your Car"
                class="search-input custom-search-input"></b-form-input>
            <b-button type="submit" variant="primary" class="search-button custom-search-button ml-2">Search</b-button>
        </b-form>
    </div>
    <div style="margin-left: 2rem;">
        <b-button type="button" variant="primary" class="custom-search-button mr-2" @click="sortByLowPrice">Low
            Price &darr; </b-button>
        <b-button type="button" variant="primary" class="custom-search-button" @click="sortByHighPrice">High
            Price &uarr; </b-button>
    </div>

    <br>
    <br>
    <div class="grid-container">
        <div class="vehicle-card" v-for="car in filteredCars" :key="car.id">
            <div class="details">
                <div class="info">
                    <div class="thumb-gallery">
                        <img class="first" :src="car.imageUrl
                            " alt="Car Image" />
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
                    <div class="ctas">
                        <a href="#" class="btn primary"> {{ car.more }}</a>
                        <a @click="gotoresoCar(car)" class="btn secondary"> {{ car.rent }}</a>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="desc">
                        <p> {{ car.description }}
                        </p>
                    </div>
                    <div class="specs">
                        <div class="spec mpg">
                            <span> {{ car.city }}</span>
                            <p> {{ car.top }}</p>
                        </div>
                        <div class="spec mpg">
                            <span> {{ car.speed }}</span>
                            <p> {{ car.speeds }}</p>
                        </div>
                        <div class="spec mpg">
                            <span> {{ car.horse }}</span>
                            <p> {{ car.power }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>Copyright &copy; 2019 <img src="../assets/alogo.png" alt="logo"> All Rights Reserved.</p>
    </footer>
</template>
  
<script>
import axios from "axios";


export default {
    name: 'Resocar',
    data() {
        return {
            cars: [
            ],
            search: '',
        };
    },
    methods: {

        Select(car) {
            console.log(`${car.name} Is Selected for the Rent! ${car.price}`);
        },
        rentdetail() {
            this.$router.push('/Resoform')

        },
        sortByLowPrice() {
            this.cars.sort((a, b) => a.price - b.price)

        },
        sortByHighPrice() {
            this.cars.sort((a, b) => b.price - a.price)
        },
        gotoresoCar(car) {
            this.$router.push({ name: 'resoform', params: { carId: car._id }, props: { resoform: car } });
            console.log(`resoform`)
        }

    },
    computed: {
        filteredCars() {
            return this.cars.filter((car) => {
                return car.name.match(this.search)
            });
        }
    },
    mounted() {
        axios.get("http://localhost:4000/cars").then(res => {
            this.cars = res.data
            console.log(res)
        })
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700');


.search-form {
    background-color: #eaeeff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
    width: 100%;
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
}

.search-button {
    border-radius: 0 15px 5px 0;
    font-size: 16px;
}

.custom-search-input {
    background-color: #fff;
    /* Change the background color */
    border: 2px solid #FF5733;
    /* Add a border */
    border-radius: 5px;
    /* Add border radius */
    font-size: 16px;
    /* Adjust font size */
    padding: 10px;
    /* Adjust padding */
    color: #333;
    /* Change text color */
    transition: border-color 0.3s ease;
    /* Add a smooth border color transition */
}

.custom-search-button.low-price {
    background-color: #FF5733;
}

.custom-search-button.high-price {
    background-color: #FF5733;
}

.custom-search-input:focus {
    border-color: #FF4400;
    /* Change the border color on focus */
}

.custom-search-button {
    background-color: #FF5733;
    /* Change the background color */
    color: #fff;
    /* Change the text color */
    border: none;
    /* Remove the border */
    border-radius: 5px;
    /* Add border radius */
    font-size: 18px;
    /* Increase font size */
    padding: 10px 20px;
    /* Increase padding for a larger button */
    transition: background-color 0.3s ease;
    /* Add a smooth hover effect */
}

.custom-search-button:hover {
    background-color: #FF4400;
    /* Change the background color on hover */
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

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
    /* Adjust the max-width as needed */
    width: 1200px;
    margin: 0 auto;
    height: 700px;
}

.header-text {
    text-align: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    font-size: 36px;
    color: #ffffff;
    /* A contrasting color */
    background: linear-gradient(45deg, #FFC300, #FF5733);
    /* Gradient with your chosen colors */
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(216, 0, 0, 0.7);
    display: inline-block;
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

.wrapper {
    width: 840px;
    margin: 0 auto;
    height: 1200px;
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
}

.vehicle-card:hover {
    z-index: 2;
    -webkit-transform: translate(0px, -10px);
    transform: translate(0, -10px);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
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
    height: 490px;
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
    fill: #E20000;
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