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
				const res= await this.$ajax.get({
					params: {
						token:'1234567890'
					},
					data:{
						id:123
					}
				});


			},
			async setInfo(e) {
				const res= await this.$ajax.set({
					params: {
						token:'1234567890'
					},
					data:{
						id:123
					}
				});

			}
		}
	}
</script>

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
