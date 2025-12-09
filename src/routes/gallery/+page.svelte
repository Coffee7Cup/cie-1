<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const eventsPromise = fetch("https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/events/events.json")
		.then(res => {
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
			return res.json();
		})
		.catch(error => {
			console.error("Failed to fetch events:", error);
			return [];
		});

</script>

<PageParent>
	<div
		class="min-h-screen text-black overflow-y-auto"
		style="background-color: {data[1].complementaryColor};"
	>
		<header class="pt-10 pb-6 px-8">
			<h1
				class="
				font-notable font-bold
				text-5xl lg:text-8xl
				leading-none
			"
			>
				Gallery
			</h1>
			<p class="font-moda mt-3 text-lg">
				Innovation in action — ideas that become reality.
			</p>
		</header>

		<section class="px-8 lg:px-24 py-10">
			<div class="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
				{#await eventsPromise}
					<p>Loading gallery...</p>
				{:then events}
					{#each events as event}
						<div class="
   						relative rounded-lg shadow-lg flex flex-col items-center justify-end
						  p-6 overflow-hidden group
    					hover:shadow-2xl transition-all duration-300
    					bg-transparent
    					h-[400px]
						"
								 onclick={() => goto(resolve(`/gallery/${event.name}`))}
						>
							<img
								src={event.coverImg}
								alt="Event Cover"
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>

							<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[-1]"></div>

							<h3 class="text-xl font-bold text-white drop-shadow-md">
								{event.name || 'Event Title'}
							</h3>
							<p class="mt-1 text-sm text-gray-200 drop-shadow-sm">
								{event.date || 'Date N/A'}
							</p>
						</div>
					{/each}
				{:catch error}
					<p class="text-red-600">
						An error occurred loading the events: {error.message}
					</p>
				{/await}
			</div>
		</section>

		<div class="h-16"></div>
	</div>
</PageParent>
