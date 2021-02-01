<template>
  <div class="address">
    <header>Header</header>
    <main>
      <aside>Sidebar</aside>
      <section>
        <div class="header-block">
          <h3>Addressess</h3>
          <button class="add-address-cta" @click="addAdress">
            Add address
          </button>
        </div>
        <card
          :userAddressess="userAddressess"
          @deleteCard="deleteCard"
          @editCard="editCard"
        ></card>
      </section>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Card from "./card.vue";
import { userAddressess } from "../data/userAddressess";

export default {
  data() {
    return {
      userAddressess: userAddressess
    };
  },
  created() {
    if (localStorage.userAddressess) {
      this.userAddressess = JSON.parse(localStorage.getItem("userAddressess"));
    } else {
      localStorage.setItem(
        "userAddressess",
        JSON.stringify(this.userAddressess)
      );
    }
  },
  methods: {
    addAdress() {
      this.userAddressess.push({
        add: "Sample Road Sample Address 1st main street United Kingdom",
        isEdit: false
      });
      localStorage.setItem(
        "userAddressess",
        JSON.stringify(this.userAddressess)
      );
    },
    editCard(index) {
      this.userAddressess[index].isEdit = true;
      localStorage.setItem(
        "userAddressess",
        JSON.stringify(this.userAddressess)
      );
    },
    deleteCard(index) {
      this.userAddressess.splice(index, 1);
      localStorage.setItem(
        "userAddressess",
        JSON.stringify(this.userAddressess)
      );
    }
  },
  components: {
    Card
  }
};
</script>

<style>
header,
footer {
  color: #fff;
  background-color: #07242d;
  padding: 10px 30px;
  position: fixed;
  left: 0;
  right: 0;
  text-transform: uppercase;
  z-index: 1;
}
header {
  top: 0;
}
footer {
  bottom: 0;
}
main {
  display: flex;
}
aside {
  color: #fff;
  background-color: #183278;
  width: 200px;
  height: 100vh;
  text-transform: uppercase;
  padding: 50px 30px;
  position: fixed;
  left: 0;
  top: 0;
}
section {
  width: calc(100% - 200px);
  margin: 40px 0 0 200px;
  padding: 30px;
}
.card-wrapper {
  display: flex;
  flex-flow: row wrap;
}
.card {
  box-shadow: 0 2px 6px 0 rgba(53, 53, 54, 0.25);
  min-width: 220px;
  width: calc(25% - 15px);
  margin: 0 15px 15px 0;
}
.card .card-header {
  color: #fff;
  background-color: #08b1d5;
  padding: 10px 15px;
  border-radius: 4px 4px 0 0;
}
.card .card-body {
  padding: 15px;
  position: relative;
}
.delete-edit-icons {
  position: absolute;
  top: 10px;
  right: 10px;
}
.header-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.add-address-cta {
  color: #fff;
  background-color: #08b1d5;
  border: 1px solid #08b1d5;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}
h3 {
  margin: 0;
}
.card-address {
  margin-right: 100px;
}
.address-text {
  line-height: 1.5;
}
.edit-text {
  color: #08b1d5;
}
.delete-text {
  color: lightcoral;
}
.edit-text,
.delete-text {
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1.4;
}
.edit-message {
  color: #000;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
