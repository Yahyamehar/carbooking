<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card my-5">
                        <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">
                            <div class="text-center">
                                <img src="../assets/alogo.png"
                                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px"
                                    alt="profile" />
                            </div>

                            <div class="mb-3">
                                <label for="Email">Email</label>
                                <input v-model="email" type="text" class="form-control" id="email"
                                    placeholder="Enter Your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="Password">Password</label>
                                <input v-model="password" type="password" class="form-control" id="password"
                                    placeholder="Password" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                                    Login
                                </button>
                            </div>
                            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                                Not Registered?
                                <p @click="signup" class="fw-bold" style="color: red;"> Create an Account</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        async login() {
            try {
                const response = await axios.post("http://localhost:4000/api/login", {
                    email: this.email,
                    password: this.password,
                });

                const { token } = response.data;
                localStorage.setItem("token", token);

                const itemId = this.$route.query.carId;

                if (itemId) {
                    await this.$router.push({ name: 'resoform', params: { carId: itemId } });
                } else {
                    await this.$router.push('/');
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.response.data.message,
                });
                // Handle login failure (show error message, redirect, etc.)
            }
        },
        signup() {
            this.$router.push("/register");
        },
    },
};
</script>
  
<style scoped>
.container {
    width: 60rem;
}

.btn-color {
    background-color: #0e1c36;
    color: #fff;
}

.profile-image-pic {
    height: 130px;
    width: 350px;
    object-fit: cover;
}

.cardbody-color {
    background-color: #ffffff;
}

p {
    text-decoration: none;
    cursor: pointer;
}
</style>
  