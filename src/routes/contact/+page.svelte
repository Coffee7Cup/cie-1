<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { resolve } from '$app/paths';

	// Placeholder for submission logic
	let name = '';
	let email = '';
	let message = '';

	function submitForm() {
		alert('Message submitted! (Hook backend here)');
	}
</script>

<PageParent>
	<div class="min-h-screen text-(--text-color) relative z-1">
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1 class="font- Russo-One font-bold text-5xl lg:text-8xl leading-none relative z-10">
				Contact
			</h1>
			<p class="font-moda mt-4 text-xl text-(--secondary-text) relative z-10">
				Let’s collaborate and build something big together.
			</p>
		</header>

		<section class="px-8 lg:px-20 py-10 grid gap-14 lg:grid-cols-2 relative z-10">
			<!-- Left: Info Cards -->
			<div class="space-y-6">
				<!-- Email -->
				<div
					class="rounded-2xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) shadow-sm p-6 flex items-center gap-6 hover:bg-(--accent-color)/50 transition-colors duration-300"
				>
					<div class="text-4xl">📧</div>
					<div>
						<h3 class="font- Russo-One text-xl mb-1 text-(--text-color)">Email</h3>
						<p class="font-moda text-lg text-(--secondary-text)">cie@gprec.ac.in</p>
					</div>
				</div>

				<!-- Phone -->
				<div
					class="rounded-2xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) shadow-sm p-6 flex items-center gap-6 hover:bg-(--accent-color)/50 transition-colors duration-300"
				>
					<div class="text-4xl">📞</div>
					<div>
						<h3 class="font- Russo-One text-xl mb-1 text-(--text-color)">Phone</h3>
						<p class="font-moda text-lg text-(--secondary-text)">+91 98765 43210</p>
					</div>
				</div>

				<!-- Address -->
				<div
					class="rounded-2xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) shadow-sm p-6 flex items-center gap-6 hover:bg-(--accent-color)/50 transition-colors duration-300"
				>
					<div class="text-4xl">📍</div>
					<div>
						<h3 class="font- Russo-One text-xl mb-1 text-(--text-color)">Address</h3>
						<p class="font-moda text-lg text-(--secondary-text) leading-relaxed">
							G. Pulla Reddy Engineering College,<br />
							Kurnool, Andhra Pradesh
						</p>
					</div>
				</div>

				<!-- QR or Map -->
				<a
					class="block rounded-2xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
					href="https://maps.app.goo.gl/8ZUkbVvQoH4YBdGU7"
					target="_blank"
				>
					<img
						src={resolve('/assets/imgs/img.png')}
						alt="QR or Map"
						class="w-full h-auto grayscale-20 group-hover:grayscale-0 transition-all duration-500"
					/>
				</a>
			</div>

			<!-- Right: Contact Form -->
			<div
				class="rounded-3xl bg-(--bg-color)/60 backdrop-blur-md border border-(--border-color) shadow-xl p-8 space-y-8"
			>
				<h2 class="font- Russo-One text-3xl mb-2 text-(--text-color)">Send us a message</h2>

				<div class="space-y-6">
					<div class="space-y-2">
						<label for="name" class="block text-sm font-semibold text-(--secondary-text) ml-1"
							>Name</label
						>
						<input
							id="name"
							bind:value={name}
							type="text"
							placeholder="Your Name"
							class="w-full p-4 rounded-xl border border-(--border-color) bg-(--bg-color)/80 text-(--text-color) font-moda focus:outline-none focus:ring-2 focus:ring-(--text-color)/10 transition-all"
						/>
					</div>

					<div class="space-y-2">
						<label for="email" class="block text-sm font-semibold text-(--secondary-text) ml-1"
							>Email</label
						>
						<input
							id="email"
							bind:value={email}
							type="email"
							placeholder="Your Email"
							class="w-full p-4 rounded-xl border border-(--border-color) bg-(--bg-color)/80 text-(--text-color) font-moda focus:outline-none focus:ring-2 focus:ring-(--text-color)/10 transition-all"
						/>
					</div>

					<div class="space-y-2">
						<label for="message" class="block text-sm font-semibold text-(--secondary-text) ml-1"
							>Message</label
						>
						<textarea
							id="message"
							bind:value={message}
							rows="5"
							placeholder="Tell us what's on your mind..."
							class="w-full p-4 rounded-xl border border-(--border-color) bg-(--bg-color)/80 text-(--text-color) font-moda focus:outline-none focus:ring-2 focus:ring-(--text-color)/10 transition-all resize-none"
						></textarea>
					</div>
				</div>

				<button
					onclick={submitForm}
					class="w-full font- Russo-One text-lg font-bold bg-(--text-color) text-(--bg-color) py-4 rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
				>
					Submit Message
				</button>

				<p class="text-xs text-(--secondary-text) text-center italic">
					This form is a placeholder — integrate with backend or service later.
				</p>
			</div>
		</section>

		<div class="h-32"></div>
	</div>
</PageParent>
