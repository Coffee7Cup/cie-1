<script>
	import { data } from '$lib/data.js';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import PageParent from '$lib/utils/PageParent.svelte';

	const achievementName = page.params.achievements;

	let json = null;

	onMount(() => {
		json = fetch(
			`https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/achievements/${achievementName.replace(/\s+/g, '')}.json`
		)
			.then((res) => res.json())
			.catch((err) => console.log(err));
	});
</script>

<PageParent>
	<div class="w-full min-h-screen text-(--text-color) relative z-1">
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1 class="text-4xl lg:text-7xl font- Russo-One font-bold relative z-10 leading-tight">
				{galleryName ? galleryName : achievementName}
			</h1>
		</header>

		<div class="px-8 lg:px-20 pb-20 relative z-10">
			{#await json}
				<div class="w-full py-20 text-center">
					<p class="text-xl font-medium animate-pulse">Loading gallery...</p>
				</div>
			{:then images}
				{#if images && images.length > 0}
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{#each images as img, i (i)}
							<div
								class="aspect-square overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-color) shadow-sm hover:shadow-xl transition-all duration-500 group"
							>
								<img
									src={img}
									alt="{achievementName} - Image {i + 1}"
									class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>
						{/each}
					</div>
				{:else}
					<div class="py-20 text-center opacity-60">
						<p class="text-xl">No images found in this gallery.</p>
					</div>
				{/if}
			{/await}
		</div>
	</div>
</PageParent>
