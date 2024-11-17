<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex h-screen flex-col items-center justify-center space-y-2 text-red-500">
	<h1 class="text-2xl font-bold">Something went wrong</h1>
	<p>{$page.error?.message}</p>

	<Button href="/">Try again</Button>
</div>
