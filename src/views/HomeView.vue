<template>
    <div class="container-fluid home">
        <div class="row">
            <div class="col-12">
                <img src="../assets/alogo.png" alt="logo" class="img-fluid" />
            </div>
        </div>
    </div>
    <br>
    <div class="about">
        <h1>ABOUT OUR COMPANY</h1>
    </div>
    <div class="detail">
        <p>
            Highlight your unique selling points. What sets your company apart from the competition? Do you have a wide
            range of vehicles to choose from, or do you specialize in luxury or eco-friendly options? Make sure to highlight
            these unique features in your description. Emphasize convenience and customer service. Renting a car should be a
            seamless and stress-free experience for customers. So let them know that your company goes above and beyond to
            make the process easy!
        </p>

    </div>
    <div class="about">
        <h1>OFFERS</h1>
    </div>
    <div class="detail">
        <p> See our special offers and get our vehicles for affordable prices. </p>
    </div>
    <div class="grid-container">
        <div class="vehicle-card" v-for="car in cars" :key="car.id">
            <div class="details">
                <div class="info">
                    <div class="thumb-gallery">
                        <img class="first" :src="car.img" alt="Car Image" />
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
                        <h4>$ {{ car.price }}</h4>
                    </div>
                    <div class="ctas">
                        <a href="#" class="btn primary">{{ car.more }}</a>
                        <a @click="rentdetail" class="btn secondary">{{ car.rent }}</a>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="desc">
                        <p>{{ car.description }}</p>
                    </div>
                    <div class="specs">
                        <div class="spec mpg">
                            <span>{{ car.city }}</span>
                            <p>{{ car.top }}</p>
                        </div>
                        <div class="spec mpg">
                            <span>{{ car.speed }}</span>
                            <p>{{ car.speeds }}</p>
                        </div>
                        <div class="spec mpg">
                            <span>{{ car.horse }}</span>
                            <p>{{ car.power }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="about">
        <h1> TESTIMONIALS </h1>
    </div>
    <div class="detail">
        <p> Read what our customers have to say about our vehicles and services.</p>
    </div>
    <div>

        <section class="testimonial text-center">
            <div class="container">

                <div class="heading white-heading">
                    Our Great Customer Reviews
                </div>
                <div id="testimonial4"
                    class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                    data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="testimonial4_slide">
                                <img src="../assets/imran.jpg" class="img-circle img-responsive" />
                                <p>I've been using Advantage Company for all my business trips for the past year and I
                                    couldn't
                                    be happier. The cars are always in top condition and the staff is incredibly helpful and
                                    friendly. I highly recommend Advantage Company to anyone in need of a reliable rental
                                    car.
                                </p>
                                <h4>Imran Khan</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimonial4_slide">
                                <img src="../assets/imran.jpg" class="img-circle img-responsive" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <h4>Client 2</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimonial4_slide">
                                <img src="../assets/imran.jpg" class="img-circle img-responsive" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <h4>Client 3</h4>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </section>

    </div>
    <div>
        <h1 class="about"> CONTACT US </h1>
    </div>
    <div class="detail">
        <p> Check Our loction and contact Us. </p>
    </div>
    <div>

        <div class="container-fluid p-0 m-0">
            <div class="row no-gutters">
                <div class="col-12">
                    <div class="position-absolute p-5 bg-white  text-center shadow-lg map-box2">
                        <h3>+351-555-2770</h3>
                        <div class=" mt-4">
                            <address>
                                <strong>Twitter, Inc.</strong><br>
                                1355 Market St, Suite 900<br>
                                Lisbon, PT 94103<br>
                                <abbr title="Phone">P:</abbr> (+351) 456-7890
                            </address>

                            <address class="mb-5">
                                <strong>Email</strong><br>
                                <a href="mailto:#" class="text-secondary">Advantage@hotmail.com</a>
                            </address>
                            <a href="" class="btnn btn-outline-danger btn-lg w-100 d-block">Send Message</a>
                        </div>
                    </div>
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=portugal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                                href="https://connectionsgame.org/">Connections NYT</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <section class="contact-area" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="contact-content text-center">
                            <a href="#"><img src="../assets/alogo.png" alt="logo"></a>
                            <p>We have great services, our rental company is full fill with professional staff and our Cars
                                is
                                in great condition to rent </p>
                            <div class="hr"></div>
                            <h1> Our Location </h1>
                            <h6> Avenida Pedro Alvares Cabral 5 2700-856</h6>
                            <h6>+351 920393685<span>|</span>+351 920393685</h6>
                            <div class="contact-social">
                                <ul>
                                    <li><a class="hover-target" :href="facebookLink"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li><a class="hover-target" :href="linkedinLink"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li><a class="hover-target" :href="githud"><i class="fab fa-github"></i></a></li>
                                    <li><a class="hover-target" :href="behanceLink"><i class="fab fa-behance"></i></a></li>
                                    <li><a class="hover-target" :href="pinterestLink"><i class="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; 2019 <img src="../assets/alogo.png" alt="logo"> All Rights Reserved.</p>
            </footer>
        </section>

    </div>
</template>
  
<script>
import Image1 from "../assets/630d.jpg";
import Image2 from "../assets/gmc.webp";
import Image3 from "../assets/golf.jpg";
import Image4 from "../assets/gwagon.webp";
import Image5 from "../assets/hilux.png";
import Image6 from "../assets/hundai.webp";
import Image7 from "../assets/i4.jpg";
import Image8 from "../assets/m3.png";
import Image9 from "../assets/rs7.png";
import Image10 from "../assets/vitz.png";
import Image11 from "../assets/camary.png";
import Image12 from "../assets/bigvan.jpg";


export default {
    name: 'HomeView-',
    data() {
        return {

            cars: [
                {
                    id: 1,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image6,
                },
                {
                    id: 2,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image8,
                },
                {
                    id: 3,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image3,
                },
                {
                    id: 4,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image3,
                },
                {
                    id: 5,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image5,
                },
                {
                    id: 6,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image6,
                },
                {
                    id: 7,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image7,
                },
                {
                    id: 8,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image8,
                },
                {
                    id: 9,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image9,
                },
                {
                    id: 10,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image10,
                },
                {
                    id: 11,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image11,
                },
                {
                    id: 12,
                    name: 'Camary',
                    price: 50.00,
                    more: 'Model Details',
                    rent: 'Car for Rent',
                    description: 'Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar',
                    city: 'Cities',
                    top: '9/14 mpg',
                    speed: '0-60',
                    speeds: '2.23 seconds',
                    horse: 'Horsepower',
                    power: '1500 hp',
                    img: Image12,
                },


            ],

            facebookLink: 'https://www.facebook.com/your-profile',
            linkedinLink: 'https://www.linkedin.com/in/your-profile',
            githubLink: 'https://github.com/your-username',
            behanceLink: 'https://www.behance.net/your-username',
            pinterestLink: 'https://www.pinterest.com/your-username',
        };
    },
    methods: {
        Select(car) {
            console.log(`${car.name} Is Selected for the Rent! ${car.price}`);
        },
        rentdetail() {
            this.$router.push('/Resoform')
        }
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

@media (max-width: 768px) {

    /* Adjust the font size for better readability on small screens */
    body {
        font-size: 14px;
    }

    /* Modify the grid-container to stack items vertically on small screens */
    .grid-container {
        grid-template-columns: 1fr;
    }

    /* Make the vehicle cards full-width on small screens */
    .vehicle-card {
        width: 100%;
        margin: 0 0 20px 0;
    }

    /* Adjust other styles as needed for small screens */
}


section {
    padding: 60px 0;
    /* min-height: 100vh;*/
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.contact-area {
    border-bottom: 1px solid #000000;
}

.contact-content p {
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;
}

.contact-content p::after {
    background: #ffffff;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
}

.contact-content h6 {
    color: #070a0e;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}

.contact-content span {
    color: #05070a;
    margin: 0 10px;
}

.contact-social {
    margin-top: 30px;
}

.contact-social>ul {
    display: inline-flex;
}

.contact-social ul li a {
    border: 1px solid #000000;
    color: #000000;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
}

.contact-social ul li a:hover {
    border: 1px solid #ffffff;
    color: #FAB702;
}

.contact-content img {
    max-width: 210px;
}


.mapouter {
    position: relative;
    text-align: right;
    width: 600px;
    height: 400px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 900px;
    height: 400px;
}

.gmap_iframe {
    width: 900px !important;
    height: 400px !important;
}

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
    height: 1300px;
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
    color: #000000;
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

.about {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    /* Increase font size for emphasis */
    margin-top: 40px;
    /* Add more top margin for spacing */
    color: #000000;
    /* Change text color to a dark gray for readability */
    text-transform: uppercase;
    /* Uppercase text for a stylish look */
    letter-spacing: 2px;
    /* Add letter spacing for a modern touch */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    /* Apply a subtle text shadow for depth */
    position: relative;
    /* Create a positioning context for the line */
}

.about::before {
    content: "";
    position: absolute;
    top: -10px;
    /* Adjust the position of the line */
    left: 48%;
    /* Center the line horizontally */
    width: 80px;
    /* Set the width of the line */
    height: 4px;
    /* Set the height and thickness of the line */
    background-color: red;
    /* Red line color */
}

.detail {
    text-align: center;
    margin: 40px;
    /* Increase margin on all sides for more spacing */
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 20px;
    /* Increase font size for readability */
    line-height: 1.8;
    /* Improve line spacing for readability */
    color: #000000;
    /* Change text color to a slightly darker gray for readability */

    /* Add a subtle background color to the detail section */
    background-color: #f9f9f9;
    padding: 30px;
    /* Increase padding for more visual separation */
    border-radius: 10px;
    /* Round the corners for a modern look */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    /* Enhance the box shadow for depth */
}

/* Add a hover effect to the detail section */
.detail:hover {
    transform: scale(1.02);
    /* Slightly scale up on hover for interactivity */
    transition: transform 0.3s ease;
    /* Add a smooth transition effect */
}


.home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-image: url('../assets/car.jpg');
    /* Updated image path */
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 70vh;
    /* Reduced the min-height for better content placement */
    color: #fff;
    /* Set text color to white for better contrast */
}

@media (max-width: 767px) {
    /* Adjust styles for screens smaller than 767px wide */
    .home {
        min-height: 50vh; /* Adjusted min-height for smaller screens */
    }
}



img {
    width: 100%;
    /* Make the logo image responsive */
    max-width: 620px;
    /* Limit the maximum width of the logo */
    height: auto;
}

.heading {
    text-align: center;
    color: #000000;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    margin-bottom: 70px;
    text-transform: uppercase;
    z-index: 999;
}

.white-heading {
    color: #ffffff;
}

.heading:after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    height: 40px;
    width: 180px;
    border-radius: 4px;
    transform: translateX(-50%);
    background: url(img/heading-line.png);
    background-repeat: no-repeat;
    background-position: center;
}

.white-heading:after {
    background: url(https://i.ibb.co/d7tSD1R/heading-line-white.png);
    background-repeat: no-repeat;
    background-position: center;
}

.heading span {
    font-size: 18px;
    display: block;
    font-weight: 500;
}

.white-heading span {
    color: #ffffff;
}

/*-----Testimonial-------*/

.testimonial:after {
    position: absolute;
    top: -0 !important;
    left: 0;
    content: " ";
    background: url(img/testimonial.bg-top.png);
    background-size: 100% 100px;
    width: 100%;
    height: 100px;
    float: left;
    z-index: 99;
}

.testimonial {
    min-height: 375px;
    position: relative;
    background: url('../assets/back1.jpg');
    padding-top: 50px;
    padding-bottom: 50px;
    background-position: center;
    background-size: cover;
}

#testimonial4 .carousel-inner:hover {
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

#testimonial4 .carousel-inner:active {
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

#testimonial4 .carousel-inner .item {
    overflow: hidden;
}

.testimonial4_indicators .carousel-indicators {
    left: 0;
    margin: 0;
    width: 100%;
    font-size: 0;
    height: 20px;
    bottom: 15px;
    padding: 0 5px;
    cursor: e-resize;
    overflow-x: auto;
    overflow-y: hidden;
    position: absolute;
    text-align: center;
    white-space: nowrap;
}

.testimonial4_indicators .carousel-indicators li {
    padding: 0;
    width: 14px;
    height: 14px;
    border: none;
    text-indent: 0;
    margin: 2px 3px;
    cursor: pointer;
    display: inline-block;
    background: #ffffff;
    -webkit-border-radius: 100%;
    border-radius: 100%;
}

.testimonial4_indicators .carousel-indicators .active {
    padding: 0;
    width: 14px;
    height: 14px;
    border: none;
    margin: 2px 3px;
    background-color: #9dd3af;
    -webkit-border-radius: 100%;
    border-radius: 100%;
}

.testimonial4_indicators .carousel-indicators::-webkit-scrollbar {
    height: 3px;
}

.testimonial4_indicators .carousel-indicators::-webkit-scrollbar-thumb {
    background: #eeeeee;
    -webkit-border-radius: 0;
    border-radius: 0;
}

.testimonial4_control_button .carousel-control {
    top: 175px;
    opacity: 1;
    width: 40px;
    bottom: auto;
    height: 40px;
    font-size: 10px;
    cursor: pointer;
    font-weight: 700;
    overflow: hidden;
    line-height: 38px;
    text-shadow: none;
    text-align: center;
    position: absolute;
    background: transparent;
    border: 2px solid #ffffff;
    text-transform: uppercase;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: all 0.6s cubic-bezier(0.3, 1, 0, 1);
    transition: all 0.6s cubic-bezier(0.3, 1, 0, 1);
}

.testimonial4_control_button .carousel-control.left {
    left: 7%;
    top: 50%;
    right: auto;
}

.testimonial4_control_button .carousel-control.right {
    right: 7%;
    top: 50%;
    left: auto;
}

.testimonial4_control_button .carousel-control.left:hover,
.testimonial4_control_button .carousel-control.right:hover {
    color: #000;
    background: #fff;
    border: 2px solid #fff;
}

.testimonial4_header {
    top: 0;
    left: 0;
    bottom: 0;
    width: 550px;
    display: block;
    margin: 30px auto;
    text-align: center;
    position: relative;
}

.testimonial4_header h4 {
    color: #ffffff;
    font-size: 30px;
    font-weight: 600;
    position: relative;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.testimonial4_slide {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    margin: auto;
    padding: 20px;
    position: relative;
    text-align: center;
}

.testimonial4_slide img {
    top: 0;
    left: 0;
    right: 0;
    width: 136px;
    height: 136px;
    margin: auto;
    display: block;
    color: #f2f2f2;
    font-size: 18px;
    line-height: 46px;
    text-align: center;
    position: relative;
    border-radius: 50%;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
}

.testimonial4_slide p {
    color: #ffffff;
    font-size: 20px;
    line-height: 1.4;
    margin: 40px 0 20px 0;
}

.testimonial4_slide h4 {
    color: #ffffff;
    font-size: 22px;
}

.testimonial .carousel {
    padding-bottom: 50px;
}

.testimonial .carousel-control-next-icon,
.testimonial .carousel-control-prev-icon {
    width: 35px;
    height: 35px;
}


body {
    font-family: 'Roboto', sans-serif;
}

.btnn {
    padding: 14px 26px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.btn-danger {
    background-color: #e34c43;
    border-color: #e34c43;
}

#gmap_canvas {
    filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="g"><feColorMatrix type="matrix" values="0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0 0 0 1 0"/></filter></svg>#g');
    -webkit-filter: grayscale(90%);
    filter: grayscale(90%);
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayScale=1);
}

.map-box2 {
    z-index: 9999;
    right: 60px;
    width: 360px;
}
</style>
  