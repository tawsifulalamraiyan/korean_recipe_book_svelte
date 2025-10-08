<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	// Initialize as an array
	let review: { name: string; email: string; review: string }[] = [];
	let loading = true;

	onMount(async () => {
		try {
			const res = await axios.get('/api/userdata');
			// Store the fetched data
			review = res.data;
			loading = false;
		} catch (error) {
			console.error('Failed to fetch user data:', error);
			loading = false;
		}
	});
</script>

<div class="min-h-screen px-4 py-12 max-sm:px-1">
	<div class="mx-auto max-w-5xl max-sm:w-full">
		<!-- Header -->
		<div class="mb-8 text-center md:mb-12">
			<h1 class="mb-3 px-4 text-3xl font-bold text-gray-900 sm:text-4xl md:mb-4 md:text-5xl">
				What Readers Are Saying!
			</h1>
			<p class="px-4 text-base text-gray-600 md:text-lg">
				See what our amazing customers are saying
			</p>
			<div class="mt-4 flex items-center justify-center gap-1 px-4">
				{#each Array(5) as _}
					<svg class="h-6 w-6 fill-yellow-400 sm:h-8 sm:w-8" viewBox="0 0 24 24">
						<path
							d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						/>
					</svg>
				{/each}
				<span class="ml-2 text-xl font-bold text-gray-700 sm:ml-3 sm:text-2xl">4.9/5</span>
			</div>
		</div>

		{#if loading}
			<!-- Loading State -->
			<div class="py-20 text-center">
				<div
					class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"
				></div>
				<p class="mt-4 text-gray-600">Loading reviews...</p>
			</div>
		{:else if review.length === 0}
			<!-- Empty State -->
			<div class="rounded-2xl bg-white py-20 text-center shadow-md">
				<div class="mb-4 text-6xl">💬</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-700">No reviews yet</h3>
				<p class="text-gray-500">Be the first to share your experience!</p>
			</div>
		{:else}
			<!-- Reviews Grid -->
			<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
				{#each review as item, index}
					<div
						class="transform rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-4"
					>
						<!-- Header -->
						<div class="mb-3 flex items-start justify-between sm:mb-4">
							<div class="flex items-center gap-2 sm:gap-3">
								<!-- Avatar -->
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-500 text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg"
								>
									{item.name.charAt(0).toUpperCase()}
								</div>
								<div class="min-w-0">
									<h3 class="truncate text-base font-bold text-gray-900 sm:text-lg">{item.name}</h3>
									<p class="truncate text-xs text-gray-500 sm:text-sm">{item.email}</p>
								</div>
							</div>
							<!-- Quote Icon -->
							<svg
								class="h-6 w-6 flex-shrink-0 text-amber-200 sm:h-8 sm:w-8"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
								/>
							</svg>
						</div>

						<!-- Stars -->
						<div class="mb-3 flex gap-1">
							{#each Array(5) as _}
								<svg class="h-4 w-4 fill-yellow-400 sm:h-5 sm:w-5" viewBox="0 0 24 24">
									<path
										d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
									/>
								</svg>
							{/each}
						</div>

						<!-- Review Text -->
						<p class="text-sm leading-relaxed text-gray-700 italic sm:text-base">
							"{item.review}"
						</p>

						<!-- Footer -->
						<div
							class="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500 sm:mt-4 sm:pt-4"
						>
							<span>Verified Customer</span>
							<span>✓</span>
						</div>
					</div>
				{/each}
			</div>

			<!-- Stats Footer -->
			<div
				class="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-md sm:mt-12 sm:rounded-2xl sm:p-8"
			>
				<div class="grid grid-cols-3 gap-4 text-center sm:gap-8">
					<div>
						<div class="mb-1 text-2xl font-bold text-amber-600 sm:mb-2 sm:text-3xl">
							{review.length}+
						</div>
						<div class="text-xs font-medium text-gray-600 sm:text-sm">Total Reviews</div>
					</div>
					<div>
						<div class="mb-1 text-2xl font-bold text-amber-600 sm:mb-2 sm:text-3xl">98%</div>
						<div class="text-xs font-medium text-gray-600 sm:text-sm">Satisfaction Rate</div>
					</div>
					<div>
						<div class="mb-1 text-2xl font-bold text-amber-600 sm:mb-2 sm:text-3xl">4.9</div>
						<div class="text-xs font-medium text-gray-600 sm:text-sm">Average Rating</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
