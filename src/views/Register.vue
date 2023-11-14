<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card my-5">
                        <form class="card-body cardbody-color p-lg-5" @submit.prevent="signup">
                            <div class="text-center">
                                <img src="../assets/alogo.png"
                                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px"
                                    alt="profile" />
                            </div>

                            <div class="mb-3">
                                <label for="Name">Full Name</label>
                                <input v-model="fullName" type="text" class="form-control" id="FullName"
                                    placeholder="Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="Email">Email</label>
                                <input v-model="email" type="text" class="form-control" id="Email"
                                    placeholder="Email or Phone" />
                            </div>
                            <div class="mb-3">
                                <label for="Password">Password</label>
                                <input v-model="password" type="password" class="form-control" id="password"
                                    placeholder="Password" />
                            </div>
                            <div class="mb-3">
                                <label for="Re-Password">Re-Password</label>
                                <input v-model="rePassword" type="password" class="form-control" id="rePassword"
                                    placeholder="Re-password" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                                    Sign Up
                                </button>
                            </div>
                            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                                Already Have an Account?
                                <p @click="login" class="fw-bold" style="color: red;"> Login </p>
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
    name: "Signup",

    data() {
        return {
            fullName: "",
            email: "",
            password: "",
            rePassword: "",
        };
    },
    methods: {
        async signup() {
            try {
                if (this.password !== this.rePassword) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Passwords do not match',
                    });
                    return;
                }

                const response = await axios.post("http://localhost:4000/api/signup", {
                    username: this.fullName,
                    email: this.email,
                    password: this.password,
                });

                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successful',
                    text: 'You can now log in with your credentials.',
                });

                this.$router.push("/login");
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Signup Failed',
                    text: error.response.data.message,
                });
            }
        },

        login() {
            this.$router.push("/login");
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
  