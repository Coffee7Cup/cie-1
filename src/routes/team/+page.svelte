<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';

	// Temporary mock data — replace with real team list later
	const high = [
		{
			name: "Alex Johnson",
			role: "President",
			img: "https://placehold.co/600x600"
		},
		{
			name: "Priya Sharma",
			role: "Vice President",
			img: "https://placehold.co/600x600"
		}
	];

	const medium = [
		{
			name: "Rahul Mehta",
			role: "Tech Lead",
			img: "https://placehold.co/500x500"
		},
		{
			name: "Emma Garcia",
			role: "Design Lead",
			img: "https://placehold.co/500x500"
		},
		{
			name: "Sara Ali",
			role: "Events Lead",
			img: "https://placehold.co/500x500"
		}
	];

	const members = [
		{ name: "John Doe", img: "https://placehold.co/300x300" },
		{ name: "Ayesha", img: "https://placehold.co/300x300" },
		{ name: "Karthik", img: "https://placehold.co/300x300" },
		{ name: "Riya", img: "https://placehold.co/300x300" },
		{ name: "Ravi", img: "https://placehold.co/300x300" },
		{ name: "Anna", img: "https://placehold.co/300x300" }
	];
</script>

<PageParent>
	<div
		class="min-h-screen text-black overflow-y-auto"
		style="background-color: {data[3].complementaryColor};"
	>
		<header class="pt-10 pb-6 px-8">
			<h1 class="font-notable font-bold text-5xl lg:text-8xl leading-none">
				Team
			</h1>
			<p class="font-moda mt-3 text-lg">
				Driven by passion. Built by collaboration.
			</p>
		</header>

		<!-- High Roles -->
		<section class="px-8 lg:px-24 py-10">
			<h2 class="font-notable text-3xl lg:text-5xl mb-6">Leadership</h2>

			<div class="grid gap-10 md:grid-cols-2 place-items-center">
				{#each high as p,i (i)}
					<article class="rounded-3xl bg-white/70 backdrop-blur border border-black/10 shadow-lg p-5 w-full max-w-md text-center">
						<img
							src={p.img}
							alt={p.name}
							class="w-full h-72 object-cover rounded-2xl border border-black/10"
						/>
						<h3 class="font-notable text-3xl mt-4">{p.name}</h3>
						<p class="font-moda opacity-80 text-lg">{p.role}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- Medium Level -->
		<section class="px-8 lg:px-24 pb-10">
			<h2 class="font-notable text-3xl lg:text-5xl mb-6">Core Team</h2>

			<div class="grid gap-10 md:grid-cols-3 place-items-center">
				{#each medium as m,i (i)}
					<article class="rounded-2xl bg-white/60 backdrop-blur border border-black/10 shadow p-4 w-full max-w-sm text-center">
						<img
							src={m.img}
							alt={m.name}
							class="w-full h-56 object-cover rounded-xl border border-black/10"
						/>
						<h3 class="font-notable text-xl mt-3">{m.name}</h3>
						<p class="font-moda opacity-80 text-sm">{m.role}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- Members -->
		<section class="px-8 lg:px-24 pb-20">
			<h2 class="font-notable text-3xl lg:text-5xl mb-6">Members</h2>

			<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
				{#each members as mem,i (i)}
					<article class="rounded-xl bg-white/50 backdrop-blur border border-black/10 p-3 w-full text-center">
						<img
							src={mem.img}
							alt={mem.name}
							class="w-full h-40 object-cover rounded-lg border border-black/10"
						/>
						<p class="font-moda font-semibold mt-2 text-sm">{mem.name}</p>
					</article>
				{/each}
			</div>
		</section>
	</div>
</PageParent>
