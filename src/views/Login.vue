<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card my-5">
                        <form class="card-body cardbody-color p-lg-5">
                            <div class="text-center">
                                <img src="../assets/alogo.png"
                                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px"
                                    alt="profile" />
                            </div>

                            <div class="mb-3">
                                <label for="Email">Email</label>
                                <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                                    placeholder="User Name" />
                            </div>
                            <div class="mb-3">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="password" />
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
export default {
    name: 'Login-',

    methods: {
        signup(){
            this.$router.push('/register');
        }
    }
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
