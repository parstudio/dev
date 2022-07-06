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
			<div class="count">
				<span>{{ state.count + 1 }}</span>
			</div>
			<div class="detail" @mousewheel="contentWheelEvent" ref="detail">
				<div class="content" ref="content">
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
import { ref, reactive } from "vue";

const detail = ref();
const content = ref();
let INDEX = 0;
const state = reactive({
	count: 0,
});
const contentWheelEvent = (event) => {
	const LENGTH = content.value.children.length;
	//scroll up
	if (event.deltaY < 0) INDEX <= 0 ? (INDEX = 0) : INDEX--;
	//scroll down
	if (event.deltaY > 0) INDEX >= LENGTH - 1 ? (INDEX = LENGTH - 1) : INDEX++;
	state.count = INDEX;
	const x = content.value.clientWidth * INDEX;
	detail.value.scrollLeft = x;
};
</script>

<style scoped>
@import "@/css/portfolio.css";
</style>
