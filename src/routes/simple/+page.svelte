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
	<!-- Animated Background Elements -->
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
	<div
		class="absolute top-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-red-200 opacity-20 mix-blend-multiply blur-3xl filter"
		style="animation-delay: 1s;"
	></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<!-- Main Content -->
		<main class="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div class="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
				<!-- Left Section - Book Preview -->
				<section class="hidden flex-col items-center justify-center space-y-8 lg:flex">
					<div class="relative">
						<!-- Floating Badge with pulse animation -->
						<div
							class="absolute -top-6 -right-6 z-10 animate-bounce rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-2xl"
						>
							FREE PDF 📚
						</div>

						<!-- Book Image with enhanced effects -->
						<div
							class="relative transform transition-all duration-500 hover:scale-110 hover:rotate-2"
						>
							<div
								class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-75 blur-2xl"
							></div>
							<img
								src="/book.png"
								alt="Cookbook Cover"
								class="relative w-full max-w-sm rounded-2xl border-8 border-white shadow-2xl"
							/>
							<!-- Shimmer Effect -->
							<div
								class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
							></div>
						</div>
					</div>

					<!-- Enhanced Features List -->
					<div class="w-full max-w-sm space-y-4">
						<div
							class="group flex items-center gap-4 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									viewBox="0 0 24 24"
								>
									<path d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<div>
								<p class="text-lg font-bold text-gray-800">500+ Recipes</p>
								<p class="text-sm text-gray-600">Comprehensive cookbook</p>
							</div>
						</div>

						<div
							class="group flex items-center gap-4 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									></path>
								</svg>
							</div>
							<div>
								<p class="text-lg font-bold text-gray-800">Instant Access</p>
								<p class="text-sm text-gray-600">Download immediately</p>
							</div>
						</div>

						<div
							class="group flex items-center gap-4 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</div>
							<div>
								<p class="text-lg font-bold text-gray-800">100% Free</p>
								<p class="text-sm text-gray-600">No hidden charges</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Right Section - Enhanced Form -->
				<section class="w-full">
					<div class="mx-auto w-full max-w-md">
						<!-- Header with gradient text -->
						<div class="mb-8 text-center">
							<h1
								class="mb-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent"
							>
								Get Your Free Cookbook
							</h1>
							<p class="text-gray-600">
								Share your thoughts and unlock 500+ delicious recipes instantly! 🍳
							</p>
						</div>

						<form
							on:submit={handlesubmit}
							class="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
						>
							<!-- Decorative corner accents -->
							<div
								class="absolute top-0 left-0 h-20 w-20 rounded-br-full bg-gradient-to-br from-orange-400/20 to-transparent"
							></div>
							<div
								class="absolute right-0 bottom-0 h-20 w-20 rounded-tl-full bg-gradient-to-tl from-pink-400/20 to-transparent"
							></div>

							<div class="relative space-y-5">
								<h2 class="mb-6 text-center text-2xl font-bold text-gray-800">Leave a Review</h2>

								<!-- Name Input -->
								<div class="group relative">
									<div
										class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-orange-500"
									>
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											></path>
										</svg>
									</div>
									<input
										type="text"
										placeholder="Your Name"
										bind:value={name}
										class="w-full rounded-xl border-2 border-gray-200 bg-white/50 py-3 pr-4 pl-12 transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-orange-200 focus:outline-none"
									/>
								</div>

								<!-- Email Input -->
								<div class="group relative">
									<div
										class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-orange-500"
									>
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											></path>
										</svg>
									</div>
									<input
										type="email"
										placeholder="Email Address"
										bind:value={email}
										class="w-full rounded-xl border-2 border-gray-200 bg-white/50 py-3 pr-4 pl-12 transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-orange-200 focus:outline-none"
									/>
								</div>

								<!-- Phone Input -->
								<div class="group relative">
									<div
										class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 transition-colors group-focus-within:text-orange-500"
									>
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											></path>
										</svg>
									</div>
									<input
										type="number"
										placeholder="Phone Number"
										bind:value={phonenumber}
										class="w-full rounded-xl border-2 border-gray-200 bg-white/50 py-3 pr-4 pl-12 transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-orange-200 focus:outline-none"
									/>
								</div>

								<!-- Review Textarea -->
								<div class="group relative">
									<div
										class="absolute top-3 left-4 text-gray-400 transition-colors group-focus-within:text-orange-500"
									>
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											></path>
										</svg>
									</div>
									<textarea
										rows="4"
										placeholder="Write your review..."
										bind:value={review}
										class="w-full resize-none rounded-xl border-2 border-gray-200 bg-white/50 py-3 pr-4 pl-12 transition-all duration-300 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-orange-200 focus:outline-none"
									></textarea>
								</div>

								<!-- Submit Button -->
								<button
									type="submit"
									disabled={Loading}
									class="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-70"
								>
									<span class="relative z-10 flex items-center justify-center gap-2">
										{#if Loading}
											<svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
												<circle
													class="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													stroke-width="4"
												></circle>
												<path
													class="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Processing...
										{:else}
											<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
												></path>
											</svg>
											Submit and Download
										{/if}
									</span>
									<!-- Button shimmer effect -->
									<div
										class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
									></div>
								</button>

								<!-- Success/Error Messages -->
								{#if success}
									<div
										class="animate-bounce rounded-xl bg-green-100 p-4 text-center text-sm font-semibold text-green-700 shadow-lg"
									>
										{success}
									</div>
								{/if}
								{#if error}
									<div
										class="animate-bounce rounded-xl bg-red-100 p-4 text-center text-sm font-semibold text-red-700 shadow-lg"
									>
										{error}
									</div>
								{/if}
							</div>
						</form>

						<!-- Trust Indicators -->
						<div class="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
							<div class="flex items-center gap-2">
								<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>Secure</span>
							</div>
							<div class="flex items-center gap-2">
								<svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>No Spam</span>
							</div>
							<div class="flex items-center gap-2">
								<svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>Instant</span>
							</div>
						</div>
					</div>

					<!-- Mobile Book Preview -->
					<div class="mt-12 flex justify-center lg:hidden">
						<div class="relative max-w-xs">
							<div
								class="absolute -top-4 -right-4 z-10 animate-bounce rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
							>
								FREE 📚
							</div>
							<div
								class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-50 blur-xl"
							></div>
							<img
								src="/book.png"
								alt="Cookbook Cover"
								class="relative w-full rounded-2xl border-4 border-white shadow-2xl"
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
