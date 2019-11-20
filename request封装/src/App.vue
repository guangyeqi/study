<template>
	<div id="app">
		<HelloWorld />
		<Tree></Tree>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld'
	import Tree from '@/components/tree'
	export default {
		name: 'App',
		components: {
			HelloWorld,
			Tree
		}
	}
</script>

<style></style>
