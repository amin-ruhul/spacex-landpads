<script lang="ts">
  import {page} from "$app/stores"
  import {Button} from "flowbite-svelte"
</script>

<div class="flex flex-col items-center justify-center h-screen text-red-500 space-y-2">
  <h1 class="text-2xl font-bold ">Something went wrong</h1>
  <p>{$page.error?.message}</p>

	<Button href="/">Try again</Button>
</div>

  