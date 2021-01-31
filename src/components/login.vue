<template>
  <div class="login">
    <div class="login-box">
      <h1 class="text-center">Login</h1>
      <div class="form-group-box">
        <label for="username">UserName</label>
        <input
          type="text"
          class="input-box"
          placeholder="Enter Username"
          v-model="username"
        />
      </div>
      <div class="form-group-box">
        <label for="password">Password</label>
        <input
          type="password"
          class="input-box"
          placeholder="Enter Password"
          v-model="password"
        />
      </div>
      <p v-if="!isValid">{{ message }}</p>
      <button class="btn-login" @click="userLogin">Login</button>
    </div>
  </div>
</template>

<script>
import userData from "../data/user-data.json";

export default {
  data() {
    return {
      username: "",
      password: "",
      userData: userData,
      message: null
    };
  },
  methods: {
    userLogin() {
      const isValid = this.userData.users.some(element => {
        return (
          element.username == this.username && element.password == this.password
        );
      });
      if (!isValid) {
        this.message = "username/password are not correct";
      } else {
        this.message = null;
        this.username = "";
        this.password = "";
        window.location.href = "http://localhost:8080/address";
      }
    }
  }
};
</script>

<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid #a3a3a3;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(53, 53, 54, 0.25);
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%;
  padding: 50px;
}
.form-group-box {
  margin-bottom: 20px;
}
.form-group-box label {
  display: block;
  color: #454545;
  margin: 0;
}
.form-group-box input {
  display: block;
  color: #454545;
  border: 1px solid #454545;
  padding: 5px 10px;
  margin: 0;
}
h1 {
  text-align: center;
  margin: 0 0 15px;
}
.btn-login {
  display: block;
  width: 150px;
  font-size: 15px;
  padding: 5px 10px;
}
</style>
