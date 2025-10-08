<script lang="ts">
	export let color: string = 'border-amber-500'; // Change spinner color
</script>

<main class="flex flex-col items-center justify-center text-gray-700">
	<!-- Spinner -->
	<div class={`border-4 border-t-transparent ${color}  animate-spin `}></div>
</main>
