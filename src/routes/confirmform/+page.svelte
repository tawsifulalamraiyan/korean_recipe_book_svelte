<script lang="ts">
	import axios from 'axios';
	import Spinner from '../../components/Spinner.svelte';
	import { toast } from '$lib/stores/toast.js';

	let name = '';
	let email = '';
	let phonenumber = '';
	let review = '';
	let error = '';
	let Loading = false;
	let success = '';
	const pdfUrl = '/book.pdf';

	const handlesubmit = async () => {
		try {
			Loading = true;
			error = '';
			success = '';

			setTimeout(() => {
				success = '';
				error = '';
			}, 4000);

			if (!name || !email || !phonenumber || !review) {
				toast.error('Please fill the details');
				error = ' Please fill the details.';
				Loading = false;
				return;
			}

			const res = await axios.post('/api/userdata', { name, email, phonenumber, review });
			const data = res.data;
			if (data.success) {
				const link = document.createElement('a');
				link.href = pdfUrl;
				link.download = 'korean_recipe_book.pdf';
				link.click();
			}
			console.log(res.data);

			toast.success('Submitted successfully');
			success = '✅ Form submitted successfully! Your data has been saved.';

			name = '';
			email = '';
			phonenumber = '';
			review = '';
		} catch (error) {
			console.log(error);
			error = '❌ Something went wrong. Please try again.';
			toast.error('Submission failed');
		} finally {
			Loading = false;
		}
	};
</script>

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
>
	<!-- Decorative Background Elements -->
	<div
		class="absolute top-0 left-0 h-96 w-96 animate-pulse rounded-full bg-orange-200 opacity-30 mix-blend-multiply blur-3xl filter"
	></div>
	<div
		class="absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-amber-200 opacity-30 mix-blend-multiply blur-3xl filter"
		style="animation-delay: 2s;"
	></div>
	<div
		class="absolute top-1/2 left-1/2 h-96 w-96 animate-pulse rounded-full bg-yellow-200 opacity-30 mix-blend-multiply blur-3xl filter"
		style="animation-delay: 4s;"
	></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<!-- Main Content -->
		<main class="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div class="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
				<!-- Left Section - Book Preview -->
				<section class="hidden flex-col items-center justify-center space-y-8 lg:flex">
					<div class="relative">
						<!-- Floating Badge -->
						<div
							class="absolute -top-6 -right-6 z-10 animate-bounce rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-bold text-white shadow-lg"
						>
							FREE PDF 📚
						</div>

						<!-- Book Image -->
						<div class="relative transform transition-transform duration-300 hover:scale-105">
							<img
								src="/book.png"
								alt="Cookbook Cover"
								class="w-full max-w-sm rounded-2xl border-8 border-white shadow-2xl"
							/>
							<!-- Glow Effect -->
							<div
								class="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/20 to-transparent"
							></div>
						</div>
					</div>

					<!-- Features List -->
					<div class="w-full max-w-sm space-y-4">
						<div
							class="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-md backdrop-blur-sm"
						>
							<div
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-gray-800">500+ Recipes</p>
								<p class="text-sm text-gray-600">Comprehensive cookbook</p>
							</div>
						</div>

						<div
							class="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-md backdrop-blur-sm"
						>
							<div
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-gray-800">Instant Access</p>
								<p class="text-sm text-gray-600">Download immediately</p>
							</div>
						</div>

						<div
							class="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-md backdrop-blur-sm"
						>
							<div
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-gray-800">100% Free</p>
								<p class="text-sm text-gray-600">No hidden charges</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Right Section - Form -->
				<section class="w-full">
					<form on:submit={handlesubmit}>
						<input type="text" placeholder="Your Name" bind:value={name} />
						<input type="email" placeholder="Email address" bind:value={email} />
						<input type="number" bind:value={phonenumber} placeholder="Phone Number" />
						<textarea placeholder="Write a review...." bind:value={review}></textarea>
						<button type="submit">Submit and Download</button>
					</form>

					<!-- Mobile Book Preview -->
					<div class="mt-8 flex justify-center lg:hidden">
						<div class="relative max-w-xs">
							<div
								class="absolute -top-4 -right-4 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg"
							>
								FREE 📚
							</div>
							<img
								src="/book.png"
								alt="Cookbook Cover"
								class="w-full rounded-2xl border-4 border-white shadow-2xl"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>

		<!-- Footer -->
		<footer class="relative z-10 py-6 text-center">
			<p class="text-sm text-gray-600">
				© 2025 Raiyan Keyword | Built with <span class="text-red-500">❤️</span> using Svelte
			</p>
		</footer>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Inter', 'Segoe UI', sans-serif;
	}
</style>
