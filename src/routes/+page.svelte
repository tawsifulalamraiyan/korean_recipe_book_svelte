<script lang="ts">
	import { goto } from '$app/navigation';
	import Reviews from '../layouts/Reviews.svelte';

	const handleDownload = () => {
		goto('/confirmform');
	};
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 text-gray-800">
	<!-- Header -->
	<header
		class="sticky top-0 z-50 border-b border-orange-200 bg-white/90 shadow-sm backdrop-blur-sm"
	>
		<div class="container mx-auto flex items-center justify-between px-4 py-4">
			<div class="flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-xl text-white shadow-md"
				>
					🍳
				</div>
				<span class="text-xl font-bold text-gray-800">CookBook Library</span>
			</div>
			<nav class="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
				<a href="#recipes" class="transition hover:text-orange-600">Recipes</a>
				<a href="#features" class="transition hover:text-orange-600">Features</a>
				<a href="#reviews" class="transition hover:text-orange-600">Reviews</a>
				<a href="#contact" class="transition hover:text-orange-600">Contact</a>
			</nav>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-16 max-lg:py-10">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Column -->
			<div>
				<div
					class="mb-6 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
				>
					📚 FREE PDF Download
				</div>

				<h1
					class="mb-6 text-5xl leading-tight font-extrabold text-gray-900 max-sm:text-5xl lg:text-6xl"
				>
					Master the Art of
					<span class="text-orange-600"> Home Cooking</span>
				</h1>

				<p class="mb-8 text-lg leading-relaxed text-gray-700">
					Discover over <strong>500+ recipes</strong> curated by world-class chefs. Each recipe is tested
					to perfection, with step-by-step instructions and vivid images to inspire your inner chef —
					from comfort food to gourmet dishes.
				</p>

				<div class="mb-8 flex flex-col gap-4 sm:flex-row">
					<button
						on:click={handleDownload}
						class="flex transform items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-red-600 disabled:opacity-50"
					>
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
						>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
							<polyline points="7 10 12 15 17 10"></polyline>
							<line x1="12" y1="15" x2="12" y2="3"></line>
						</svg>
						<span class="max-sm:text-[17px]">Download Free PDF</span>
					</button>

					<button
						class="rounded-xl border-2 border-orange-500 px-8 py-4 text-lg font-bold text-orange-600 transition-all duration-200 hover:bg-orange-50"
					>
						Preview Book
					</button>
				</div>

				<div class="flex items-center gap-8 text-sm text-gray-600">
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class=" max-sm:text-xs">No Sign Up Required</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="max-sm:text-xs">Instant Access</span>
					</div>
				</div>
			</div>

			<!-- Right Column -->
			<div class="relative">
				<div class="relative transform transition-transform duration-300 hover:scale-105">
					<img
						src="/book.png"
						alt="Cookbook Cover"
						class="ml-40 w-[270px] rounded-2xl border-4 border-white shadow-2xl max-sm:ml-0"
					/>

					<div
						class="absolute -top-4 -right-4 rotate-12 transform rounded-full bg-yellow-400 px-6 py-3 font-bold text-yellow-900 shadow-lg max-sm:-top-1 max-sm:right-45 max-sm:rotate-30"
					>
						FREE PDF
					</div>
				</div>
			</div>
		</div>

		<!-- Features -->
		<div id="features" class="mt-20 grid gap-6 md:grid-cols-4">
			{#each [{ icon: '📖', title: '500+ Recipes', desc: 'From basics to advanced dishes' }, { icon: '🎯', title: 'Step-by-Step', desc: 'Clear photo instructions for every meal' }, { icon: '⏱️', title: 'Quick & Easy', desc: 'Meals ready in under 30 minutes' }, { icon: '🌱', title: 'All Diets', desc: 'Vegan, keto, gluten-free included' }] as feature}
				<div
					class="rounded-xl border border-orange-100 bg-white p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="mb-3 text-4xl">{feature.icon}</div>
					<h3 class="mb-2 font-bold text-gray-900">{feature.title}</h3>
					<p class="text-sm text-gray-600">{feature.desc}</p>
				</div>
			{/each}
		</div>

		<section class=" mt-10 flex items-center justify-center">
			<img
				src="/bookcover.png"
				alt="Cookbook Cover"
				class="w-[700px] rounded-2xl border-4 border-white shadow-2xl"
			/>
		</section>

		<!-- Reviews -->
		<section id="reviews" class="mt-20">
			<Reviews />
		</section>

		<!-- Stats -->
		<div class="mt-16 rounded-2xl border border-orange-100 bg-white p-8 shadow-lg">
			<div class="grid gap-8 text-center md:grid-cols-3">
				<div>
					<div class="mb-2 text-4xl font-bold text-orange-600">250K+</div>
					<div class="font-medium text-gray-600">Downloads</div>
				</div>
				<div>
					<div class="mb-2 text-4xl font-bold text-orange-600">4.9/5</div>
					<div class="font-medium text-gray-600">Average Rating</div>
				</div>
				<div>
					<div class="mb-2 text-4xl font-bold text-orange-600">98%</div>
					<div class="font-medium text-gray-600">Would Recommend</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="mt-20 border-t border-orange-100 bg-white py-8 text-center text-gray-600">
		<p>© {new Date().getFullYear()} CookBook Library. All rights reserved.</p>
	</footer>
</div>
