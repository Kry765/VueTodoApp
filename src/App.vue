<template>
	<nav>
		<router-view />
	</nav>
</template>
<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import '@firebase/auth'
import firebase from 'firebase/app'

export default {
	setup() {
		const router = useRouter()
		const route = useRoute()

		onBeforeMount(() => {
			firebase.auth().onAuthStateChanged(user => {
				if (!user) {
					router.replace('/login')
				} else if (route.path == '/login' || route.path == '/register') {
					router.replace('/')
				}
			})
		})
	},
}
</script>
<style lang="scss">
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Red Hat Display', sans-serif;
}
</style>
