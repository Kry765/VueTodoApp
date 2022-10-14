<template>
	<main>
		<section class="left">
			<h2>Zaloguj się</h2>
		</section>
		<section class="right">
			<img src="../../public/logo.png" alt="logo" class="logo" />
			<form @submit.prevent="Login">
				<div>
					<input v-model="email" type="text" placeholder="email" />
				</div>
				<div>
					<input v-model="password" placeholder="password" type="password" />
				</div>
				<button class="submit" @click="Register">Register</button>
			</form>
		</section>
	</main>
</template>
<script>
import firebase from 'firebase/app'
import { ref } from 'vue'

export default {
	setup() {
		const email = ref('')
		const password = ref('')

		const Login = () => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.then(data => console.Console.log(data))
		}

		return {
			Login,
		}
	},
}
</script>
<style scoped>
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
</style>
