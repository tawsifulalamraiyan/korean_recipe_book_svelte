<script lang="ts">
	import { toast } from '$lib/stores/toast.js';
	import type { Toast } from '$lib/stores/toast.js';
	import { fly } from 'svelte/transition';

	// Auto-subscribe to toast store
	// `$toast` automatically gives the current value — no need to declare it manually
	$: toastList = $toast;

	function getPositionClass(position: string) {
		switch (position) {
			case 'top-right':
				return 'top-4 right-4 items-end';
			case 'top-center':
				return 'top-4 left-1/2 -translate-x-1/2 items-center';
			case 'top-left':
				return 'top-4 left-4 items-start';
			case 'bottom-right':
				return 'bottom-4 right-4 items-end';
			case 'bottom-center':
				return 'bottom-4 left-1/2 -translate-x-1/2 items-center';
			case 'bottom-left':
				return 'bottom-4 left-4 items-start';
			default:
				return 'top-4 right-4 items-end';
		}
	}
</script>

{#each ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as pos}
	<div class="fixed z-50 flex flex-col space-y-2 {getPositionClass(pos)}">
		{#each $toast.filter((t) => t.position === pos) as t (t.id)}
			<div
				in:fly={{ y: -20, duration: 200 }}
				out:fly={{ y: 20, duration: 200 }}
				class="rounded-lg border-l-2 bg-amber-50 px-4 py-2 text-sm font-medium text-black shadow-lg"
				class:border-green-500={t.type === 'success'}
				class:border-red-400={t.type === 'error'}
				class:border-blue-500={t.type === 'info'}
			>
				{t.message}
			</div>
		{/each}
	</div>
{/each}
