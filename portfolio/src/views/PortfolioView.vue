<template>
	<div id="portfolio-wrapper">
		<div class="left-container">
			<div class="category">
				<span class="logo">
					<router-link to="/">Par Studio</router-link>
				</span>
				<span>Still Life</span>
				<span>Beauty</span>
				<span>Food</span>
				<span>Video</span>
			</div>
			<div class="thumnail">
				<div class="card">
					<div class="hover-content">
						<span>CLIO</span>
					</div>
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
				</div>
				<div class="card">
					<div class="hover-content">
						<span>CLIO</span>
					</div>
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
				</div>
				<div class="card">
					<div class="hover-content">
						<span>CLIO</span>
					</div>
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
				</div>
				<div class="card">
					<div class="hover-content">
						<span>CLIO</span>
					</div>
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
				</div>
				<div class="card">
					<div class="hover-content">
						<span>CLIO</span>
					</div>
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="" />
				</div>
			</div>
		</div>
		<div class="right-container">
			<button>
				<span>INFO</span>
			</button>
			<div class="detail" @mousewheel="contentWheelEvent" ref="content">
				<div class="content">
					<img src="@/assets/CLIO/210901K_CLIO-0024.jpg" alt="img1" />
					<img src="@/assets/CLIO/210901K_CLIO-4155.jpg" alt="img1" />
					<img src="@/assets/CLIO/210901K_CLIO-4177.jpg" alt="img1" />
					<img src="@/assets/CLIO/210901K_CLIO-4192.jpg" alt="img1" />
					<img src="@/assets/CLIO/210901K_CLIO-4208.jpg" alt="img1" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const content = ref();
const SPEED = 1.5;

const contentWheelEvent = (event) => {
	const y = parseInt(event.deltaY * SPEED);
	content.value.scrollLeft += y;
};
</script>

<style scoped>
@import "@/css/portfolio.css";
</style>
