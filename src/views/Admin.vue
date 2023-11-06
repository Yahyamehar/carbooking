<template>
  <div class="grid-container">
    <h1 class="page-title">Advantage Rent a Car Admin Panel</h1>
    <button class="add-button" @click="openDialog">Add Car Detail</button>
    <dialog :open="isOpen" @close="closeDialog" class="add-dialog">
      <h2 class="dialog-title">Add Item</h2>
      <form @submit.prevent="addItem" class="form">
        <div class="form-group">
          <label for="name" class="label">Name:</label>
          <input type="text" id="name" v-model="item.name" required class="input" />
        </div>

        <div class="form-group">
          <label for="price" class="label">Rent:</label>
        </div>
        <div class="form-group">
          <label for="price" class="label">Price:</label>
          <input type="number" id="price" v-model="item.price" required class="input" />
        </div>
        <div class="form-group">
          <label for="description" class="label">Description:</label>
          <textarea id="description" v-model="item.description" required class="input textarea"></textarea>
        </div>

        <div class="form-group">
          <label for="image" class="label">Image:</label>
          <input type="file" id="image" @change="uploadImage" accept="image/*" class="input" />
          <img :src="imageUrl" v-if="imageUrl" alt="Uploaded Image" class="uploaded-image" />
        </div>
        {{ isFormValid }}
        <button class="submit-button" type="submit" :disabled="!isFormValid"
          :class="{ 'disabled': !isFormValid }">Add</button>

        <button class="close-button" @click="closeDialog">Close</button>
      </form>
    </dialog>

    <div class="item-cards">
      <div class="item-card" v-for="(item, index) in items" :key="index">
        <div class="item-card-inner">
          <img :src="item.imageUrl" alt="Item Image" class="item-image" />
          <div class="item-details">
            <h2 class="item-title">Name: {{ item.name }}</h2>
            <p class="item-price">Price: ${{ item.price }}</p>
            <p class="item-description">Description: {{ item.description }}</p>
          </div>
          <div class="item-actions">
            <button class="edit-button" @click="editItem(index)">Edit</button>
            <button class="delete-button" @click="deleteItem(index)">Delete</button>
          </div>
        </div>
        <div v-if="selectedItemindex === index">
          <div class="item-edit">
            <h2 class="edit-title">Edit Item</h2>
            <form @submit.prevent="saveItem">
              <div class="form-group">
                <label for="name" class="label">Name:</label>
                <input type="text" id="name" v-model="item.name" required />
              </div>

              <div class="form-group">
                <label for="price" class="label">Price:</label>
                <input type="number" id="price" v-model="item.price" required />
              </div>

              <div class="form-group">
                <label for="description" class="label">Description:</label>
                <textarea id="description" v-model="item.description" required></textarea>
              </div>

              <div class="form-group">
                <label for="image" class="label">Image:</label>
                <input type="file" id="image" @change="uploadImage" accept="image/*" />
                <img :src="imageUrl" v-if="imageUrl" alt="Uploaded Image" class="uploaded-image" />
              </div>

              <button class="save-button" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'AddItemDialog',

  data() {
    return {
      isOpen: false,
      selectedItemindex: null,
      item: {
        name: "",
        price: 0,
        description: "",
        imageUrl: null,
      },
      cloudinaryCloudName: 'dn53r9vax', // Replace with your Cloudinary cloud name
      cloudinaryUploadPreset: 't7rcabyn', // Replace with your Cloudinary upload preset
      items: [
      ], // Array to store added items
    };
  },
  methods: {
    openDialog() {
      this.isOpen = true;
    },
    closeDialog() {
      this.isOpen = false;
      this.item = {
        name: "",
        price: 0,
        description: "",
        imageUrl: null
      };
    },
    async uploadImage(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', this.cloudinaryUploadPreset);

      try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${this.cloudinaryCloudName}/image/upload`, formData);

        if (response.status === 200) {
          this.item.imageUrl = response.data.secure_url;
        } else {
          alert.error('Error uploading image to Cloudinary');
        }
      } catch (error) {
        alert.error('Error uploading image:', error);
      }
    },
    addItem() {
      // Create a card for the added item
      const newItemCard = {
        name: this.item.name,
        price: this.item.price,
        description: this.item.description,
        imageUrl: this.item.imageUrl,
      };
      axios.post("http://localhost:3000/cars", newItemCard).then(response =>{

        console.log(response.json());

      });

      this.items.push(newItemCard);

      // Close the dialog
      this.closeDialog();
    },
    editItem(index) {
      this.selectedItemIindex = index;
      this.item.name = this.items[index].name;
      this.item.price = this.items[index].price;
      this.item.description = this.items[index].description;
      this.item.imageUrl = this.items[index].imageUrl;

      this.openDialog();

    },
    saveItem() {
      if (this.selectedItemIindex !== null) {
        this.items[this.selectedItemIindex] = {
          name: this.item.name,
          price: this.items.price,
          description: this.item.description,
          imageUrl: this.item.imageUrl
        };
        this.selectedItemIndex = null;
        this.item = {
          name: "",
          price: 0,
          description: "",
          imageUrl: null
        };


        // Close the dialog
        this.closeDialog();
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  },
  computed: {
    isFormValid() {
      return this.item.name !== "" && this.item.price > 0 && this.item.description !== "" && this.item.imageUrl !== null;
    }
  }

};
</script>

<style scoped>
.grid-container {
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
}

.add-button {
  padding: 12px 20px;
  font-size: 18px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}

.form {
  text-align: left;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
}

.textarea {
  resize: vertical;
}

/* Update button styles */
.submit-button,
.close-button {
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button {

  color: #fff;
  margin-right: 10px;
  background-color: #007bff;
  /* Default button color */
}

.submit-button.disabled {
  background-color: #ccc;
  /* Disabled button color */
  cursor: not-allowed;
  /* Change cursor to not-allowed */
  /* Add more styles for the disabled button here */
}

.close-button {
  background-color: #dc3545;
  color: #fff;
}

.submit-button:hover {
  background-color: #0056b3;
}

.close-button:hover {
  background-color: #c82333;
}

/* Additional styling for the uploaded image */
.uploaded-image {
  max-width: 100%;
  max-height: 200px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Style the page title */
.page-title {
  font-size: 36px;
  color: #007BFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.add-dialog {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.dialog-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin: 15px 0;
}

.label {
  font-size: 16px;
  font-weight: bold;
}

.input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.uploaded-image {
  max-width: 100%;
  max-height: 200px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button,
.close-button {
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button {

  color: #fff;
  margin-right: 10px;
}

.close-button {
  background-color: #dc3545;
  color: #fff;
}

.submit-button:hover {
  background-color: #0056b3;
}

.close-button:hover {
  background-color: #c82333;
}

.item-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.page-title {
  font-size: 36px;
  color: #007BFF;
  /* Adjust the color as desired */
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  justify-content: center;
}

.item-card {
  width: 300px;
  margin: 15px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.item-card:hover {
  transform: scale(1.05);
}

.item-title {
  font-size: 24px;
  margin: 10px 0;
}

.item-price {
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
}

.item-description {
  font-size: 16px;
  margin: 10px 0;
}

.item-image {
  max-width: 100%;
  max-height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 15px;
}

.item-card {
  /* ... (existing styles) ... */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-actions {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 15px;
}

.edit-button,
.delete-button {
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button {
  background-color: #28a745;
  color: #fff;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
}

.edit-button:hover,
.delete-button:hover {
  filter: brightness(0.9);
}
</style>