<template>
	<header>
		<div class="top-menu-dashboard">
			<div class="top-menu-items">About</div>
			<div class="top-menu-items">Option</div>
			<div class="top-menu-items">Logout</div>
			<div class="dashboard-dark-mode">
				<i class="fa-solid fa-moon"></i>
			</div>
		</div>
	</header>
	<main>
		<section>
			<div class="add-task">
				<h3>add task</h3>
				<div class="section-add-task">
					<input type="text" placeholder="What do you want to save" class="dashboard-input-text" />
					<button onclick="save">add task</button>
				</div>
			</div>
		</section>
	</main>
</template>
<script></script>
<style scoped>
.top-menu-dashboard {
	display: flex;
	justify-content: flex-end;
}

.top-menu-items {
	padding: 15px;
}

.top-menu-items:hover {
	color: red;
	cursor: pointer;
}

.section-add-task {
	display: flex;
	justify-content: center;
	min-width: 100%;
}

.add-task {
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.dashboard-dark-mode{
	
}
.dashboard-input-text {
	padding: 10px;
	min-width: 40%;
}
</style>
