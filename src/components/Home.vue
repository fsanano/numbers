<template lang="pug">
	div
		.form
			input(type="text"  class = "inp" maxlength = "7" autocomplete="off")


		.res

</template>

<script>
	export default{

	}
</script>

<style lang="stylus">
	body
		font-family: 'Special Elite', cursive;
		font-size: 12px;
		background: url("../assets/ricepaper2.png") 0 0 repeat;
		position: relative;

	li
		display block
		list-style-type: none;
		color: #2d2d2d;


	*:focus
		outline: none;

	.res
		margin 7% 0 0 0
		display flex
		flex-flow row wrap
		justify-content center
		text-align center
		padding 0 20px
		box-sizing border-box

	.num
		// width 18%
		box-sizing border-box
		display inline-block
		padding 10px
		margin 0 5px 10px 5px
		border 1px dashed #ccc
		background: rgba(132, 123, 116, 0.15);
		border-radius 5px 8px 13px 21px
		li
			padding 5px 20px
			display block
			font-size 15px
			&.title
				font-size 30px
				margin 0 0px 5px 0
				display inline-block
			&.numType
				font-size 30px
				float right
				display inline-block
				padding 0
				margin -5px 0 0 0
			i
				font-size 17px
				font-style normal
				display inline-block
				float: left;
				width: 35px;
				margin: -5px 0 0 -32px;

	.logo
		font-size: 3em;
		text-align: right;
		padding: 20px;
		// text-transform: uppercase;
		margin:  0;

	.form
		position: absolute;
		width: 20%;
		height: 60px;
		top: 40%;
		right: 0;
		left: 0;
		// bottom: 0;
		margin: auto;

	.inp
		width: 100%;
		padding: 3px 10px;
		background: transparent;
		border: 0;
		border-bottom: 1px solid #2d2d2d;
		font-size: 4em;
		text-align: center;
		box-sizing: border-box;



	foote
		position: fixed;
		bottom: 0;
		left: 0;


</style>
