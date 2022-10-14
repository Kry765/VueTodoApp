<template>
  <main>
    <!--NAVBAR-->
    <nav>
      <div class="top-menu">
        <i class="fa-solid fa-bars burger-icon"></i>
        <ul class="items-top-menu">
          <a href="#home"
            ><li><router-link to="/">Home</router-link></li></a
          >
          <a
            ><li><router-link to="/register">Register</router-link></li></a
          >
        </ul>
      </div>
    </nav>
    <!--START MAIN SECTION-->
    <section class="left">
      <h2>ZDJĘCIE TŁA</h2>
    </section>
    <section class="right">
      <img src="../../public/logo.png" alt="logo" class="logo" />
      <h1>Login Page</h1>
      <!-- FORMULARZ -->
      <form @submit.prevent="Register">
        <div>
          <input v-model="email" type="text" placeholder="email" />
        </div>
        <div>
          <input v-model="password" placeholder="password" type="password" />
        </div>
        <div>
          <input name="terms" type="checkbox" />
          <label for="terms">terms of service</label>
        </div>
        <button class="submit" @click="Register">Register</button>
        <p>Don't have an account?</p>
        <router-link to="/register">Register</router-link>
      </form>
    </section>
  </main>
</template>
<!-- SCRIPT -->
<script>
import firebase from 'firebase/app';
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };

    return {
      Register,
      email,
      password,
    };
  },
};
</script>
<!-- CSS -->
<style lang="scss" scoped>
$light-text-color: #dff6ff;
main {
  display: flex;
  flex-direction: row;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  text-align: center;
}
.left {
  background-color: rgb(181, 163, 215);
  padding-top: 30%;
}
.right {
  background-color: rgb(196, 196, 196);
}
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

.logo {
  height: 200px;
  width: 200px;
  margin-top: 15vh;
  margin-bottom: 8vh;
}
input {
  padding: 0.8em 1.1em;
  margin-top: 1.5em;
  border: solid 1px grey;
}

label {
  margin-left: 5px;
}

.submit {
  width: 30%;
  background-color: #47b5ff;
  color: #06283d;
  border: solid 0px;
  border-radius: 2px;
}

.submit:hover {
  background-color: #06283d;
  color: #47b5ff;
}
/*NAVBAR*/
.top-menu {
  position: fixed;
  top: 0;
  background-color: #1363df;
  width: 100%;
  opacity: 0.8;
  z-index: 3;
}
.items-top-menu {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

ul a {
  color: $light-text-color;
  z-index: 5;
  margin: 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
  list-style-type: none;
}

ul a:hover {
  color: #06283d;
  cursor: pointer;
}
.burger-icon {
  display: none;
}
</style>
