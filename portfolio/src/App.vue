<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />

	<h1>혜련이가 참고할 사이트</h1>
	<a href="https://parstudiokr.wixsite.com/parstudio" target="_blank"
		>기존 포트폴리오 형식</a
	>
	<br />
	<a href="https://saybyuk.com/" target="_blank">레이아웃 구조 원했던 사이트</a>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
