<template>
  <div>
    <form @submit.prevent="updateRoom">
      <label for="name">Name:</label>
      <input v-model="formData.name" type="text" required>

      <label for="description">Description:</label>
      <input v-model="formData.description" type="text" required>

      <label for="price">Price:</label>
      <input v-model="formData.price" type="number" required>

      <label for="capacity">Capacity:</label>
      <input v-model="formData.capacity" type="number" required>

      <label for="num_bed">Number of Beds:</label>
      <input v-model="formData.num_bed" type="number" required>

      <label for="room_image">Room Image:</label>
      <input v-model="formData.room_image" type="url">

      <button type="submit">Update Room</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        description: "",
        price: 0,
        capacity: 0,
        num_bed: 0,
        room_image: "",
      },
    };
  },
  methods: {
    updateRoom() {
      // Emit an event to the parent component to handle the update
      this.$emit("updateRoom", this.formData);
    },
  },
};
</script>
