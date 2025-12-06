<script>
	import { data } from '$lib/data.js';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BackwardArrow from '@svelte-parts/icons/feather/arrow-left/index.js';

	// Placeholder for submission logic
	let name = "";
	let email = "";
	let message = "";

	function submitForm() {
		alert("Message submitted! (Hook backend here)");
	}
</script>

<div
	class="min-h-screen text-black overflow-y-auto"
	style="background-color: {data[4].complementaryColor};"
>
	<button class="flex justify-center items-center
		fixed right-4 bottom-4
		p-2 backdrop-blur-sm bg-black/40 rounded-2xl text-2xl z-10
		transition ease-in-out duration-200
		hover:scale-110"
					onclick={() => {goto(resolve(''))}}
	>
		<span class="w-[30px] h-[30px] flex items-center justify-center">
			<BackwardArrow inline={false}/>
		</span>
		Home
	</button>

	<header class="pt-10 pb-6 px-8">
		<h1 class="font-notable font-bold text-5xl lg:text-8xl leading-none">
			Contact
		</h1>
		<p class="font-moda mt-3 text-lg">
			Let’s collaborate and build something big together.
		</p>
	</header>

	<section class="px-8 lg:px-24 py-10 grid gap-14 lg:grid-cols-2">
		<!-- Left: Info Cards -->
		<div class="space-y-6">

			<!-- Email -->
			<div class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow p-6 flex items-center gap-4">
				<div class="text-3xl">📧</div>
				<div>
					<h3 class="font-notable text-xl">Email</h3>
					<p class="font-moda text-sm opacity-80">cie@college.com</p>
				</div>
			</div>

			<!-- Phone -->
			<div class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow p-6 flex items-center gap-4">
				<div class="text-3xl">📞</div>
				<div>
					<h3 class="font-notable text-xl">Phone</h3>
					<p class="font-moda text-sm opacity-80">+91 98765 43210</p>
				</div>
			</div>

			<!-- Address -->
			<div class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow p-6 flex items-center gap-4">
				<div class="text-3xl">📍</div>
				<div>
					<h3 class="font-notable text-xl">Address</h3>
					<p class="font-moda text-sm opacity-80">
						G. Pulla Reddy Engineering College,<br />
						Kurnool, Andhra Pradesh
					</p>
				</div>
			</div>

			<!-- QR or Map -->
			<div class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow overflow-hidden">
				<img
					src="https://placehold.co/600x350?text=QR+%2F+Map"
					alt="QR or Map"
					class="w-full h-auto"
				/>
			</div>

		</div>

		<!-- Right: Contact Form -->
		<div class="rounded-3xl bg-white/70 backdrop-blur border border-black/10 shadow-lg p-8 space-y-6">
			<h2 class="font-notable text-3xl mb-2">Send us a message</h2>

			<div class="space-y-5">
				<input
					bind:value={name}
					type="text"
					placeholder="Your Name"
					class="w-full p-3 rounded-xl border border-black/20 bg-white/90 font-moda"
				/>

				<input
					bind:value={email}
					type="email"
					placeholder="Email"
					class="w-full p-3 rounded-xl border border-black/20 bg-white/90 font-moda"
				/>

				<textarea
					bind:value={message}
					rows="5"
					placeholder="Message"
					class="w-full p-3 rounded-xl border border-black/20 bg-white/90 font-moda"
				></textarea>
			</div>

			<button
				onclick={submitForm}
				class="w-full font-moda text-lg font-bold bg-black text-white py-3 rounded-xl hover:bg-gray-900 hover:scale-105 transition-all duration-150"
			>
				Submit
			</button>

			<p class="text-xs opacity-70 text-center">
				This form is a placeholder — integrate with backend or service later.
			</p>
		</div>

	</section>

	<div class="h-20"></div>
</div>


<style>
    :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-y: scroll !important;
    }
</style>