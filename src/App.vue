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
	body
		font-family: 'Special Elite', cursive;
		font-size: 12px;
		background: url("assets/ricepaper2.png") 0 0 repeat;
		position: relative;

	*:focus
		outline: none;

</style>
