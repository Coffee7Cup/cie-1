<script>
	import { data } from '$lib/data.js';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BackwardArrow from '@svelte-parts/icons/feather/arrow-left/index.js';

	// Temporary event list — update later with real events
	const events = [
		{
			name: "Hackathon 2025",
			desc: "24-hour build challenge to solve real industry problems.",
			img: "https://placehold.co/600x400"
		},
		{
			name: "Startup Showcase",
			desc: "Pitch your startup idea to investors and industry leaders.",
			img: "https://placehold.co/600x400"
		},
		{
			name: "Tech Fireside",
			desc: "Conversations with founders, product engineers & innovators.",
			img: "https://placehold.co/600x400"
		}
	];
</script>

<div
	class="min-h-screen text-black overflow-y-auto"
	style="background-color: {data[2].complementaryColor};"
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
	<!-- Title -->
	<header class="pt-10 pb-6 px-8">
		<h1
			class="
				font-notable font-bold
				text-5xl lg:text-8xl
				leading-none
			"
		>
			Events
		</h1>
		<p class="font-moda mt-3 text-lg">
			Create. Compete. Connect. Grow together.
		</p>
	</header>

	<!-- Cards -->
	<section class="px-8 lg:px-24 py-10">
		<div class="grid gap-10 md:grid-cols-3">

			{#each events as item}
				<article class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-200">
					<img
						src={item.img}
						alt={item.name}
						class="w-full h-48 object-cover"
						loading="lazy"
					/>
					<div class="p-5 space-y-2">
						<h3 class="font-notable text-2xl lg:text-3xl">
							{item.name}
						</h3>
						<p class="font-moda text-sm lg:text-base opacity-80 leading-relaxed">
							{item.desc}
						</p>
					</div>
				</article>
			{/each}

		</div>
	</section>

	<div class="h-16"></div>
</div>


<style>
    :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-y: scroll !important;
    }
</style>