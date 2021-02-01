<template>
  <div class="card-wrapper">
    <div v-for="(data, index) in userAddressess" :key="index" class="card">
      <div class="card-header">Sample Road</div>
      <div class="card-body">
        <div class="delete-edit-icons">
          <div @click="editCard(index)" class="edit-text">
            <i class="fas fa-edit"></i> edit
          </div>
          <div @click="deleteCard(index)" class="delete-text">
            <i class="fas fa-trash-alt"></i> delete
          </div>
        </div>
        <div class="card-address">
          <div class="address-text">{{ data.add }}</div>
          <div v-if="data.isEdit" class="edit-message">{{ editMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["userAddressess"],
  data() {
    return {
      userEdit: false,
      editMessage: "(EDITED)"
    };
  },
  methods: {
    editCard(index) {
      this.$emit("editCard", index);
    },
    deleteCard(index) {
      this.$emit("deleteCard", index);
    }
  }
};
</script>
