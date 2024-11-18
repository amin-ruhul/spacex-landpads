<script lang="ts">
	let { status } = $props();
</script>

<p
	class="inline-block rounded-md px-[10px] py-[2px] text-xs font-medium capitalize"
	class:bg-green-100={status === 'active'}
	class:text-green-800={status === 'active'}
	class:bg-red-100={status === 'retired'}
	class:text-red-800={status === 'retired'}
	class:bg-primary-100={status === 'under construction'}
	class:text-primary-800={status === 'under construction'}
>
	{status}
</p>
