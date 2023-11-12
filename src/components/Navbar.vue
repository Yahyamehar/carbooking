<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" style="height: 60px;">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <img @click="home" style="cursor: pointer; margin: 5px auto;" src="../assets/alogo.png" alt="logo" height="50" width="150" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="home" class="nav-item">
            <BIcon icon="house-door-fill"></BIcon> Home
          </b-nav-item>
          <b-nav-item @click="Address">Address</b-nav-item>
          <b-nav-item @click="Reservationform">Reservation</b-nav-item>
          <b-nav-item href="#">Vehicles</b-nav-item>
          <b-nav-item @click="electric">Electric Vehicles</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item @click="booking" class="my-booking-item"> My Booking </b-nav-item>
            <b-form-input size="sm" placeholder="Search" class="search-input"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <div>
            <b-nav-item-dropdown text="Lang" right class="dropdown">
              <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('es')">ES</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('ru')">RU</b-dropdown-item>
              <b-dropdown-item @click="changeLanguage('fa')">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>

          <b-nav-item-dropdown right class="user-dropdown">
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
import { BIcon } from 'bootstrap-vue';

export default {
  name: 'Navbar',
  data() {
    return {
      selectedLanguage: 'en',
    }
  },
  methods: {
    Address() {
      this.$router.push("/address");
    },
    booking() {
      this.$router.push("/Mybooking");
    },
    reso() {
      this.$router.push("/Reservation");
    },
    home() {
      this.$router.push("/");
    },
    electric() {
      this.$router.push("/Electriccar");
    },
    Reservationform() {
      this.$router.push("/resocar");
    },
    admin() {
      this.$router.push("/Admin");
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
.nav-item {
  font-size: 16px;
  margin-right: 15px;
  color: #ffffff;
}

.nav-item:hover {
  color: #007bff;
}

.dropdown {
  color: #ffffff;
}

.dropdown-item {
  color: #343a40;
}

.dropdown-item:hover {
  background-color: #007bff;
  color: #ffffff;
}

.my-booking-item {
  font-weight: bold;
  color: #007bff;
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

.search-input {
  border: 1px solid #ffffff;
}
</style>
