<script>
	import { data } from '$lib/data.js';

	// Temporary mock project cards — replace or connect dynamically later
	const projects = [
		{
			name: "Smart Campus",
			desc: "AI-powered attendance + resource management system.",
			img: "https://placehold.co/600x400"
		},
		{
			name: "Drone Delivery",
			desc: "Automated delivery system using quad-rotors.",
			img: "https://placehold.co/600x400"
		},
		{
			name: "Eco Watch",
			desc: "City-wide pollution tracking using IoT sensors.",
			img: "https://placehold.co/600x400"
		}
	];
</script>

<div
	class="min-h-screen text-black overflow-y-auto"
	style="background-color: {data[1].complementaryColor};"
>
	<!-- Title -->
	<header class="pt-10 pb-6 px-8">
		<h1
			class="
				font-notable font-bold
				text-5xl lg:text-8xl
				leading-none
			"
		>
			Projects
		</h1>
		<p class="font-moda mt-3 text-lg">
			Innovation in action — ideas that become reality.
		</p>
	</header>

	<!-- Cards -->
	<section class="px-8 lg:px-24 py-10">
		<div class="grid gap-10 md:grid-cols-3">

			{#each projects as item}
				<!-- Card Snippet -->
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
