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

			const link = document.createElement('a');
			link.href = pdfUrl;
			link.download = 'korean_recipe_book.pdf'; // name of the downloaded file
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			const res = await axios.post('/api/userdata', { name, email, phonenumber, review });

			console.log(res.data);

			toast.success('Submitted successfully');
			success = '✅ Form submitted successfully! Your data has been saved.';

			name = '';
			email = '';
			phonenumber = '';
			review = '';
		} catch (err) {
			console.log(err);
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
					<div
						class="rounded-3xl border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-10"
					>
						<!-- Header -->
						<div class="mb-8 text-center">
							<div
								class="mb-4 inline-block rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-sm font-bold text-white"
							>
								🎉 Limited Time Offer
							</div>
							<h1 class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
								Get Your Free <span class="text-orange-600">Cookbook</span>
							</h1>
							<p class="text-gray-600">
								Fill in your details below to download your premium cookbook instantly.
							</p>
						</div>

						<!-- Form -->
						<form on:submit|preventDefault={handlesubmit} class="space-y-5">
							<!-- Name Input -->
							<div class="relative">
								<label for="name" class="mb-2 block text-sm font-semibold text-gray-700">
									Full Name
								</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
										<svg
											class="h-5 w-5 text-gray-400"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											viewBox="0 0 24 24"
										>
											<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											></path>
										</svg>
									</div>
									<input
										id="name"
										type="text"
										placeholder="John Doe"
										bind:value={name}
										class="w-full rounded-xl border-2 border-gray-200 py-3 pr-4 pl-12 text-gray-800 transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none"
									/>
								</div>
							</div>

							<!-- Email Input -->
							<div class="relative">
								<label for="email" class="mb-2 block text-sm font-semibold text-gray-700">
									Email Address
								</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
										<svg
											class="h-5 w-5 text-gray-400"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											viewBox="0 0 24 24"
										>
											<path
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											></path>
										</svg>
									</div>
									<input
										id="email"
										type="email"
										placeholder="john@example.com"
										bind:value={email}
										class="w-full rounded-xl border-2 border-gray-200 py-3 pr-4 pl-12 text-gray-800 transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none"
									/>
								</div>
							</div>

							<!-- Phone Input -->
							<div class="relative">
								<label for="phone" class="mb-2 block text-sm font-semibold text-gray-700">
									Phone Number
								</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
										<svg
											class="h-5 w-5 text-gray-400"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											viewBox="0 0 24 24"
										>
											<path
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											></path>
										</svg>
									</div>
									<input
										id="phone"
										type="tel"
										placeholder="+1 (555) 000-0000"
										bind:value={phonenumber}
										class="w-full rounded-xl border-2 border-gray-200 py-3 pr-4 pl-12 text-gray-800 transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none"
									/>
								</div>
							</div>

							<!-- Review Textarea -->
							<div class="relative">
								<label for="review" class="mb-2 block text-sm font-semibold text-gray-700">
									Why do you want this cookbook? (Optional)
								</label>
								<textarea
									id="review"
									bind:value={review}
									rows="4"
									class="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-800 transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none"
									placeholder="I want to improve my cooking skills and learn new recipes..."
								></textarea>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								class="flex w-full transform items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-orange-600 hover:to-red-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
								disabled={Loading}
							>
								{#if Loading}
									<Spinner />
									<span>Submitting...</span>
								{:else}
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
									<span>Download My Free Cookbook</span>
								{/if}
							</button>

							<!-- Error Message -->
							{#if error}
								<div
									class="flex items-center gap-3 rounded-xl border-2 border-red-200 bg-red-50 p-4"
								>
									<svg
										class="h-5 w-5 flex-shrink-0 text-red-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clip-rule="evenodd"
										></path>
									</svg>
									<p class="text-sm font-medium text-red-800">{error}</p>
								</div>
							{/if}

							<!-- Success Message -->
							{#if success}
								<div
									class="flex items-center gap-3 rounded-xl border-2 border-green-200 bg-green-50 p-4"
								>
									<svg
										class="h-5 w-5 flex-shrink-0 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<p class="text-sm font-medium text-green-800">{success}</p>
								</div>
							{/if}
						</form>

						<!-- Trust Badges -->
						<div class="mt-8 border-t border-gray-200 pt-6">
							<div class="flex items-center justify-center gap-6 text-xs text-gray-500">
								<div class="flex items-center gap-2">
									<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Secure & Safe</span>
								</div>
								<div class="flex items-center gap-2">
									<svg class="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
										></path>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
									</svg>
									<span>No Spam</span>
								</div>
								<div class="flex items-center gap-2">
									<svg class="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>100% Free</span>
								</div>
							</div>
						</div>
					</div>

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
