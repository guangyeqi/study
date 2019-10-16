<template>
	<div class="hello">
		<button class="get" @click="getInfo">get</button>
		<button class="set" @click="setInfo">set</button>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			async getInfo(e) {
				console.log("TCL: getInfo -> e", e);
				let $ajax=this.$ajax;
				console.log("TCL: getInfo -> $ajax", $ajax)
				const res= await $ajax.get({
					params: {
						token:'1234567890'
					},
					data:{
						id:123
					}
				});
                console.log("TCL: getInfo -> res", res)


			},
			async setInfo(e) {
				console.log("TCL: setInfo -> e", e)
				let $ajax=this.$ajax;
				console.log("TCL: getInfo -> $ajax", $ajax);
				const res= await $ajax.set({
					params: {
						token:'1234567890'
					},
					data:{
						id:123
					}
				});
                console.log("TCL: getInfo -> res", res)

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.hello {
		overflow: hidden;
		button {
			display: block;
			margin:30px 0;
			width: 150px;
			height: 50px;
		}
	}
</style>
