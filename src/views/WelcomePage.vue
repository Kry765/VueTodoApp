<script></script>
<template>
	<!--TOP MENU-->
	<nav>
		<div class="top-menu">
			<i class="fa-solid fa-bars burger-icon"></i>
			<ul class="items-top-menu">
				<a href="#home"><li>home</li></a>
				<a
					><li><router-link to="/register">Register</router-link></li></a
				>
				<a href="#aboutus"><li>about us</li></a>
				<a href="#goals"><li>goals</li></a>
				<a href="#contact"><li>contact us</li></a>
				<a><li>log in</li></a>
			</ul>
		</div>
	</nav>
	<!--START HOME-->
	<header>
		<div class="welcomepage-background center-items" id="home">
			<div class="welcomepage-shadow-background"></div>
			<!--MOVING ARROW-->
			<div class="down-angle">
				<i class="fa-sharp fa-solid fa-angle-down arrow-down"></i>
			</div>
			<!--MOVING ARROW-->
			<div class="welcomepage-header">
				<h1 class="all-header-h1">interactive task scheduler</h1>
				<p>Start your Good Morning with a plan</p>
				<router-link to="register"
					><input type="button" class="welcomepage-register-btn" value="get started"
				/></router-link>
			</div>
		</div>
	</header>
	<!--END HOME-->
	<main>
		<section>
			<div class="center-items section-aboutus" id="aboutus">
				<div class="text-center">
					<h1 class="all-header-h1" v-motion-slide-visible-top>About Us</h1>
					<div class="mobile-center-items center-items" v-motion-slide-visible-top>
						<p class="welcomepage-aboutus-space">
							We are a young team that helps each user prepare a list of tasks regardless of the age of the user
						</p>
						<img class="mobile-img" src="../../public/aboutus1-mobile.jpg" alt="old people" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="center-items goals" id="goals">
				<div>
					<div class="text-center">
						<h1 class="all-header-h1" v-motion-slide-visible-top>Goals</h1>
					</div>
					<div>
						<div class="center-items mobile-goals">
							<div class="text-center mobile-center-items goals-card" v-motion-slide-visible-top>
								<i class="fa-solid fa-fire about-icon"></i>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet id fugit qui libero similique.
									Libero, unde facilis aliquam sunt eius cupiditate, quod impedit totam assumenda alias sequi nulla
									obcaecati.
								</p>
							</div>
							<div class="text-center mobile-center-items goals-card" v-motion-slide-visible-top>
								<i class="fa-regular fa-calendar-check about-icon"></i>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet id fugit qui libero similique.
									Libero, unde facilis aliquam sunt eius cupiditate, quod impedit totam assumenda alias sequi nulla
									obcaecati.
								</p>
							</div>
							<div class="text-center mobile-center-items" v-motion-slide-visible-top>
								<i class="fa-solid fa-person-walking-with-cane about-icon"></i>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, deserunt ad voluptate deleniti
									dolores nostrum repellat blanditiis tempora dolore odit optio tenetur vitae officiis magni eaque
									eligendi alias ducimus! Ad.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer>
		<div class="center-items section-contact">
			<div id="contact">
				<h1 class="text-center all-header-h1" v-motion-slide-visible-top>Contact us</h1>
				<p class="text-center contact-h1-p">You have more question? Send messeage</p>
				<div class="right-items">
					<div v-motion-slide-visible-top>
						<input class="radius-input" type="text" placeholder="E-mail" />
						<br />
						<textarea class="radius-input textarea-input" placeholder="Your messeage"></textarea>
						<input type="button" class="welcomepage-register-btn contact-btn" value="send" />
					</div>
					<div v-motion-slide-visible-top>
						<p><i class="fa-solid fa-envelope contact-space"> </i>krzysztof.kleka@poczta.onet.pl</p>
						<p><i class="fa-brands fa-facebook-messenger contact-space"></i>Krzysztof Klęka</p>
						<p><i class="fa-brands fa-discord contact-space"></i>Kry765#5652</p>
						<p><i class="fa-solid fa-mobile-screen-button contact-space"></i> 123 456 789</p>
						<p><i class="fa-brands fa-github contact-space"></i>Kry765</p>
					</div>
					<!-- <div>
					<a href="#"><li>home</li></a>
					<a href="#"><li>register</li></a>
					<a href="#"><li>about us</li></a>
					<a href="#"><li>contact us</li></a>
					<a href="#"><li>log in</li></a>
				</div> -->
				</div>
				<p class="text-center">&Copy All right reserved</p>
			</div>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
/*COLOR*/

$light-text-color: #dff6ff;

/*OTHER  STYLE*/
.center-items {
	display: flex;
	justify-content: center;
	align-items: center;
}

.right-items {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.text-center {
	text-align: center;
}
.about-icon {
	font-size: 150px;
	margin: 15px;
}
.all-header-h1 {
	text-transform: uppercase;
	font-weight: bold;
	color: $light-text-color;
	font-size: 46px;
}
/*TOP-MENU*/
.top-menu {
	position: fixed;
	top: 0;
	background-color: #1363df;
	width: 100%;
	opacity: 0.8;
	z-index: 3;
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
}
.burger-icon {
	display: none;
}
/*WELCOMEPAGE-BACKGROUND*/
.welcomepage-background {
	position: static;
	top: 0;
	background-image: url('../../public/todo-lists-desktop.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	z-index: -1;
	.welcomepage-shadow-background {
		position: absolute;
		top: 0;
		background-color: rgba(58, 71, 129, 0.6);
		width: 100%;
		height: 100vh;
	}
	.welcomepage-header {
		text-align: center;
		z-index: 1;
		color: $light-text-color;
	}
}
/*MOVING ARROW*/
@keyframes angle {
	33% {
		margin-top: 0px;
	}
	66% {
		margin-bottom: 10px;
	}

	100% {
		margin-top: 0px;
	}
}
.down-angle {
	position: fixed;
	bottom: 0;
	color: #dff6ff;
	z-index: 4;
	font-size: 48px;
	transition: 0.3s;
	animation-duration: 1.8s;
	animation-iteration-count: infinite;
	animation-name: angle;
}
.down-angle:hover {
	color: #06283d;
	cursor: pointer;
}
/*REGISTER BUTTON - HOME */
.welcomepage-register-btn {
	background-color: #1363df;
	color: $light-text-color;
	min-width: 120px;
	padding: 15px 10px;
	margin: 30px 0;
	text-transform: uppercase;
	border-radius: 10px;
	border-style: none;
	z-index: 4;
	transition: 0.3s;
	font-size: 16px;
	font-weight: bold;
}
.welcomepage-register-btn:hover {
	background-color: #06283d;
	color: #1363df;
	cursor: pointer;
}
/*SECTION - ABOUT US*/
.section-aboutus {
	background-color: #1363df;
	color: $light-text-color;
	height: 120vh;
}
.welcomepage-aboutus-space {
	margin: 20px 30px;
	font-size: 24px;
}

/*SECTION - GOALS*/
.goals {
	background-color: #333;
	color: $light-text-color;
	height: 120vh;
}

/*SECTION - CONTACT*/
.section-contact {
	background-color: #000;
	color: $light-text-color;
	align-items: center;
	padding: 25px;
	height: 100%;
}

.radius-input {
	border-radius: 15px;
	padding: 10px;
	border-style: none;
	min-width: 50vw;
	margin: 10px 20px;
}

.contact-space {
	padding: 15px 10px;
}

.contact-h1-p {
	padding-top: 10px;
	margin: 30px;
}

.textarea-input {
	min-height: 40vh;
}

.contact-btn {
	display: block;
	position: relative;
	left: 50%;
}

@media only screen and (max-width: 768px) {
	/*OTHER - MOBILE STYLE*/
	.mobile-center-items {
		display: block;
	}

	/*TOP MENU*/
	.top-menu {
		.items-top-menu {
			display: none;
		}
	}
	.burger-icon {
		display: block;
		font-size: 36px;
		padding: 15px;
		color: #dff6ff;
	}

	/*HOME*/

	.welcomepage-background {
		background-image: url('../../public/todo-lists-mobile.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.welcomepage-aboutus-space {
		font-size: 24px;
		text-align: center;
	}

	.right-items {
		display: block;
		text-align: center;
	}

	.mobile-img {
		width: 80vw;
	}

	.radius-input {
		width: 80vw;
	}

	/*SECTION - GOALS*/
	.goals {
		height: 100%;
		padding: 20px 40px;
	}

	.mobile-goals {
		display: block;
	}
}
</style>
