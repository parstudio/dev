<template>
	<div class="wrapper">
		<div>
			<router-link to="/portfolio">Parstudio</router-link>
		</div>
		<div>
			<router-link to="/contact">Contact</router-link>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.wrapper {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	overflow-x: hidden;
}
</style>
