<template>
    <div class="reservation-container">
        <h1 class="page-title">Car Reservation Detail</h1>
        <div class="search-bar">
            <input type="text" v-model="search" class="search-input" placeholder="Search Products" />
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Vehicle</th>
                    <th>First Name</th>
                    <th @click="sortTable('lastName')">Last Name</th>
                    <th>Email</th>
                    <th @click="sortTable('carPrice')">Price</th>
                    <th @click="sortTable('pickuptime')">Pick up Time</th>
                    <th @click="sortTable('pickupdate')">Pickup Date</th>
                    <th @click="sortTable('phoneNumber')">Phone</th>
                    <th @click="sortTable('city')">City</th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in filteredProducts" :key="product._id">
                    <td>
                        <img :src="product.carimageUrl" alt="Product" class="product-image" />
                    </td>
                    <td>{{ product.firstName }}</td>
                    <td>{{ product.lastName }}</td>
                    <td>{{ product.email }}</td>
                    <td class="price">{{ formatCurrency(product.carPrice) }}</td>
                    <td class="time">{{ formatTime(product.pickuptime) }}</td>
                    <td class="date">{{ formatDate(product.pickupdate) }}</td>
                    <td class="phone">{{ formatPhoneNumber(product.phoneNumber) }}</td>
                    <td>{{ product.city }}</td>
                    <td>
                        <button class="delete-button" @click="deleteReservation(product._id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import axios from 'axios';
import libphonenumber from 'google-libphonenumber';

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export default {
    name: "ReservationList",
    data() {
        return {
            products: [],
            search: "",
            sortKey: "lastName",
            sortOrder: 1, // 1 for ascending, -1 for descending
        };
    },
    computed: {
        sortedProducts() {
            return this.products.sort((a, b) => {
                const x = a[this.sortKey];
                const y = b[this.sortKey];
                return this.sortOrder * ((x < y) ? -1 : (x > y) ? 1 : 0);
            });
        },
        filteredProducts() {
            return this.sortedProducts.filter(product =>
                product.firstName.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },
    methods: {
        sortTable(key) {
            if (this.sortKey === key) {
                this.sortOrder *= -1;
            } else {
                this.sortKey = key;
                this.sortOrder = 1;
            }
        },
        formatCurrency(value) {
            // Format value as currency (e.g., $100.00)
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(value);
        },
        formatTime(value) {
            // Format time in Portugal time zone (e.g., 12:30 PM)
            const date = new Date(value);
            return isNaN(date) ? value : new Intl.DateTimeFormat('pt-PT', {
                hour: 'numeric',
                minute: '2-digit',
            }).format(date);
        },
        formatDate(value) {
            // Format date (e.g., Jan 01, 2023) if value is a valid date
            const date = new Date(value);
            return isNaN(date) ? value : new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }).format(date);
        },
        formatPhoneNumber(value) {
            try {
                const parsedPhoneNumber = phoneUtil.parse(value, 'ZZ'); // 'ZZ' stands for unknown region
                return phoneUtil.format(parsedPhoneNumber, libphonenumber.PhoneNumberFormat.INTERNATIONAL);
            } catch (e) {
                // Handle parsing errors or use a default format
                return value;
            }
        },
        deleteReservation(id) {
            if (confirm('Are you sure you want to delete this reservation?')) {
                axios
                    .delete(`http://localhost:4000/api/reservations/${id}`)
                    .then((response) => {
                        // Handle the successful deletion of the reservation
                        console.log(response.data.message);
                        // Optionally, you can update the reservation list by fetching the updated data from the server.
                        this.fetchReservations();
                    })
                    .catch((error) => {
                        // Handle the error if the deletion fails
                        console.error(error);
                    });
            }
        },

        fetchReservations() {
            axios.get('http://localhost:4000/api/reservations').then((res) => {
                this.products = res.data;
            });
        },
    },
    mounted() {
        axios.get('http://localhost:4000/api/reservations').then(res => {
            this.products = res.data;
        });
    },
};
</script>
  
<style scoped>
.reservation-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.search-bar {
    margin-bottom: 20px;
    text-align: center;
}

.search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.delete-button {
    background-color: #e74c3c;
    /* Red background color */
    color: white;
    /* White text color */
    padding: 8px 16px;
    /* Padding around the text */
    border: none;
    /* No border */
    border-radius: 4px;
    /* Rounded corners */
    cursor: pointer;
    /* Cursor style on hover */
    font-size: 14px;
    /* Font size */
    transition: background-color 0.3s;
    /* Smooth background color transition on hover */

    /* Add more styles for better appearance */
}

.delete-button:hover {
    background-color: #c0392b;
    /* Darker red on hover */
}

.table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

th {
    background-color: #f0f0f0;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
}

th:hover {
    background-color: #e0e0e0;
}

tr:hover {
    background-color: #f5f5f5;
}

td,
th {
    padding: 10px;
    text-align: center;
}

.product-image {
    max-width: 120px;
    max-height: 60px;
    display: block;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.price {
    font-weight: bold;
    color: #007BFF;
}

.time {
    font-style: italic;
    color: #28a745;
}

.date {
    color: #6c757d;
}

.phone {
    color: #dc3545;
}</style>