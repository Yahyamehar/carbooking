<template>
    <hr>
    <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="#"><img src="../assets/alogo.png" alt="logo"></a>
                        <p>We have great services, our rental company is full fill with professional staff and our Cars is
                            in great condition to rent </p>
                        <div class="hr"></div>
                        <h1> Our Location </h1>
                        <h6> Avenida Pedro Alvares Cabral 5 2700-856</h6>
                        <h6>+351 920393685<span>|</span>+351 920393685</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" :href="facebookLink"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" :href="linkedinLink"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" :href="githubLink"><i class="fab fa-github"></i></a></li>
                                <li><a class="hover-target" :href="behanceLink"><i class="fab fa-behance"></i></a></li>
                                <li><a class="hover-target" :href="pinterestLink"><i class="fab fa-pinterest-p"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =============== 1.9 Contact Area End ====================-->
    <!-- =============== 1.9 Footer Area Start ====================-->
    <footer>
        <p>Copyright &copy; 2019 <img src="../assets/alogo.png" alt="logo"> All Rights Reserved.</p>
    </footer>
</template>

<script>
export default {
    name: 'Address-',
    data() {
        return {
            facebookLink: 'https://www.facebook.com/your-profile',
            linkedinLink: 'https://www.linkedin.com/in/your-profile',
            githubLink: 'https://github.com/your-username',
            behanceLink: 'https://www.behance.net/your-username',
            pinterestLink: 'https://www.pinterest.com/your-username',
        }
    },
}
</script>


<style scoped>
img {
    max-width: 100%;
    height: auto;
    width: 20rem;
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
    width: 44px;
}
</style>