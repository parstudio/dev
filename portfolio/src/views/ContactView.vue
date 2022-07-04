<template>
	<div class="wrapper">
		<h1 class="title">Contact Us</h1>
		<div class="outer">
			<div class="left">
				<div class="leftBox">
					<ul>
						<li>+82 10 4560 0488</li>
						<li><a href="parstudio.kr@gmail.com">parstudio.kr@gmail.com</a></li>
						<li>
							<a href="https://www.instagram.com/parstudio.kr/">
								@parstudio.kr
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<input type="text" />
				<!--<router-link to="/">Parstudio</router-link>-->
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.wrapper {
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
}
.title {
	position: absolute;
	top: 1em;
	font-size: 3em;
}
.outer {
	display: flex;
}
.left {
	background-color: rgb(214, 214, 214);
	width: 50vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.leftBox {
	width: 50%;
	border-left: 1px solid black;
	padding-left: 10px;
}
.leftBox ul {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
.leftBox a {
	border: none;
	padding: 0;
}
.right {
	background-color: ivory;
	width: 50vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.right a {
	width: 7em;
}
</style>
