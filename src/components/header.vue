<template>
	<header>
		<ul class="header__menu">
			<li></li>
		</ul>
		<a class = "logo">Numb<sup>e</sup>r the<sub>o</sub>R(y)</a>
	</header>
</template>

<script>
	export default {
		name: 'headercomponent',
		data: function () {
			return {
				menu: [
					{
						txt: 'Odd/Event',
						status: true
					},
					{
						txt: 'Base',
						status: true,
						subMenu: [
							{}
						]
					}
				]
			}
		}
	}
</script>

<style lang="stylus">
	.logo
		display block
		font-size: 3em;
		text-align: right;
		padding: 20px;
		margin:  0;
</style>
