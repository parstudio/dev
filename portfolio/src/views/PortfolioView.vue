<template>
	<div class="wrapper">
		<div class="thumnailWrap">
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
			<div class="card">
				<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
			</div>
		</div>
		<div class="detailWrap">
			<div class="detail">
				<img src="@/assets/CLIO/210901K_CLIO-4208.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.wrapper {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.thumnailWrap {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	padding: 20px;
	place-items: center;
	border-right: 1px solid #eee;
}
.thumnailWrap > .card:hover:before {
	opacity: 0.6;
}
.thumnailWrap > .card {
	display: grid;
	place-items: start center;
	position: relative;
	transition: opacity 0.4s;
	cursor: pointer;
}
.thumnailWrap > .card::before {
	content: "";
	text-align: center;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(238, 238, 238);
	opacity: 0;
}

.thumnailWrap > .card > img {
	cursor: pointer;
	width: 100%;
	object-fit: contain;
}
.detailWrap {
	width: 100%;
	height: 100vh;
	padding: 20px;
	display: grid;
	place-items: start center;
}

.detailWrap .detail img {
	width: 100%;
	object-fit: contain;
}
</style>
