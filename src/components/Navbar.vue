<template>
  <div class="container-fluid">
    <b-navbar toggleable="md" style="height: 60px">
      <!-- Mobile navigation toggle button -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <img @click="home" style="cursor: pointer;" src="../assets/alogo.png" alt="logo" height="70" width="190" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="home">Home</b-nav-item>
          <b-nav-item @click="Address(ad)">Address</b-nav-item>
          <b-nav-item @click="Reservationform(rs)">Reservation</b-nav-item>
          <b-nav-item href="#">Vehicles</b-nav-item>
          <b-nav-item @click="electric">Electric Vehicles</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item @click="booking" class="my-booking-item"> My Booking </b-nav-item>
            <b-form-input size="sm" class="mr-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <div>
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('es')">ES</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('ru')">RU</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('fa')">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>


          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item @click="signForm" href="#">Sign Up</b-dropdown-item>
            <b-dropdown-item @click="loginform">Login</b-dropdown-item>
            <b-dropdown-item @click="admin"> Admin </b-dropdown-item>
            <b-dropdown-item @click="reso"> Reservation </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>



  
<script>
import { BIcon, BIconCamera } from 'bootstrap-vue';


export default {
  name: 'Navbar-',
  data() {
    return {
      selectedLanguage: 'en',
    }

  },
  methods: {
    Address(ad) {
      this.$router.push("/address")

    },
    booking() {
      this.$router.push("/Mybooking")
    },
    reso() {
      this.$router.push("/Reservation")
    },
    home() {
      this.$router.push("/")

    },
    electric() {
      this.$router.push("/Electriccar")
    },
    Reservationform(ad) {
      this.$router.push("/resocar")
    },
    admin() {
      this.$router.push("/Admin")

    },
    showModal() {
      this.$bvModal.msgBoxOk('Modal from @vue/compat');
    },
    loginform() {
      this.$router.push("/login");
    },
    signForm() {
      this.$router.push("/Register");
    },
    changeLanguage(language) {
      this.i18n.locale = language; // This will change the language
    },
  },
};
</script>

<style scoped>
.my-booking-item {
  font-weight: bold;
  color: #007bff;
  /* Change the color to your preference */
  text-transform: uppercase;
  font-size: 18px;
  padding: 2px 6px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  margin-right: 4px;
}

.my-booking-item:hover {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
  cursor: pointer;
}
</style>

