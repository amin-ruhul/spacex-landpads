<script lang="ts">
	import { Navbar, NavBrand } from 'flowbite-svelte';
	import logo from '$lib/assets/logo.png';

	import '../app.css';
	let { children } = $props();
</script>


<Navbar border class="py-4 bg-white">
	<NavBrand href="/" class="mx-auto">
		<img src={logo} class="h-6 md:h-[2.375rem]" alt="space x logo" />
	</NavBrand>
</Navbar>


{@render children()}
