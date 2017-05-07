<template>
	<div id="app">
		<headercomponent></headercomponent>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="stylus">
	html
		height 100%
	body
		height 100%
		margin 0
		position: relative;
		font-family: 'Special Elite', cursive;
		font-size: 12px;
		background: url("assets/ricepaper2.png") 0 0 repeat;

	*:focus
		outline: none;

</style>
