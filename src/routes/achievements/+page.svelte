<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let achievementsPromise;

	onMount(() => {
		achievementsPromise = fetch(
			'https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/achievements/achievements.json'
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.catch((error) => {
				console.error('Failed to fetch events:', error);
				return [];
			});
	});
</script>

<PageParent>
	<div class="min-h-screen text-(--text-color) relative z-1">
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1
				class="
				font- Russo-One font-bold
				text-5xl lg:text-8xl relative z-10
				leading-none
			"
			>
				Achievements
			</h1>
			<p class="font-moda mt-4 text-xl text-(--secondary-text) relative z-10">
				Innovation in action — ideas that become reality.
			</p>
		</header>

		<section class="px-8 lg:px-20 py-10 relative z-10">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#await achievementsPromise}
					<div class="col-span-full py-20 text-center">
						<p class="text-xl font-medium animate-pulse">Loading gallery...</p>
					</div>
				{:then achievements}
					{#each achievements as achievement}
						<button
							class="
   						relative rounded-xl shadow-sm flex flex-col items-center justify-end
						  p-6 overflow-hidden group
     					bg-(--bg-color) border border-(--border-color)
     					h-[400px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
						"
							aria-label="View Achievement"
							onclick={() =>
								goto(resolve(`/achievements/${achievement.name.replaceAll(/\s+/g, '')}`))}
						>
							<img
								src={achievement.coverImg}
								alt={achievement.name}
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>

							<div
								class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"
							></div>

							<div class="relative z-20 w-full text-left">
								<h3 class="text-xl font-bold text-white mb-2">
									{achievement.name || 'Achievement Title'}
								</h3>
								<p class="text-sm text-white/80 line-clamp-2 mb-2">
									{achievement.description || ''}
								</p>
								<div class="flex items-center text-xs text-white/60 font-medium">
									<span>{achievement.date || 'Date N/A'}</span>
								</div>
							</div>
						</button>
					{/each}
				{:catch error}
					<div class="col-span-full py-20 text-center text-red-500">
						<p class="text-xl font-medium">An error occurred loading the achievements</p>
						<p class="text-sm opacity-70 mt-2">{error.message}</p>
					</div>
				{/await}
			</div>
		</section>

		<div class="h-32"></div>
	</div>
</PageParent>
