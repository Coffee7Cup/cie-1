<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';

  const res = fetch("https://github.com/ciegprec/web-repo/main/events/data.json").then(res => {
    let txt = res.body()
    const json = JSON.parse(txt)
    return json
  })

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


<PageParent>

	<div
		class="min-h-screen text-black overflow-y-auto"
		style="background-color: {data[2].complementaryColor};"
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
				Events
			</h1>
			<p class="font-moda mt-3 text-lg">
				Create. Compete. Connect. Grow together.
			</p>
		</header>

		<!-- Cards -->
		<section class="px-8 lg:px-24 py-10">
			<div class="grid gap-10 md:grid-cols-3">

				{#each events as item,i (i)}
          {@render card(item)}
				{/each}

			</div>
		</section>

		<div class="h-16"></div>
	</div>

</PageParent>

{#snippet card(item)}
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

{/snippet}
