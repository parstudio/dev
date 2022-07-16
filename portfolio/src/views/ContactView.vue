<template>
	<div class="contact wrapper">
		<h1 class="title">Contact Us</h1>
		<div class="outer">
			<div class="left">
				<div class="hoverBack"></div>
				<div class="leftBox">
					<ul>
						<li>
							<font-awesome-icon icon="fa-solid fa-phone" />
							<p>+82 10 4560 0488</p>
						</li>
						<li>
							<font-awesome-icon icon="fa-solid fa-envelope" />
							<a href="parstudio.kr@gmail.com">parstudio.kr@gmail.com</a>
						</li>
						<li>
							<font-awesome-icon icon="fa-brands fa-instagram-square" />
							<!--<font-awesome-icon icon="fa-brands fa-instagram" />-->
							<a href="https://www.instagram.com/parstudio.kr/">
								@parstudio.kr
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<div class="hoverBack"></div>
				<div class="inputWrap">
					<div class="inputTop">
						<h3>New Question</h3>
						<button title="submit"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
					</div>
					<input type="email" placeholder="enter your email..." />
					<input type="text" placeholder="enter the name..." />
					<textarea cols="50" rows="13" placeholder="blah blah" style="resize: none;"></textarea>
					<!--<router-link to="/">Parstudio</router-link>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
