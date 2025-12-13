<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let events = null;
	let upcomming = [];

	onMount(() => {
		events = fetch(
			"https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/events/events.json"
		)
			.then((res) => res.json())
			.then((res) => {
				upcomming = res.filter((item) => item.upcoming === true);
				return res.filter((item) => item.upcoming === false);
			})
			.catch((e) => console.log(e));
	});
</script>

<PageParent>
	<div
		class="min-h-screen text-black overflow-y-auto"
		style="background-color: {data[2].complementaryColor};"
	>
		<!-- Title -->
		<header class="pt-10 pb-6 px-8">
			<h1 class="font-notable font-bold text-5xl lg:text-8xl leading-none">Events</h1>
			<p class="font-moda mt-3 text-lg">Create. Compete. Connect. Grow together.</p>
		</header>

		<!-- Cards -->
		<section class="px-8 lg:px-24 py-10">
			<div class="flex flex-col">
				{#await events}
					<div class="w-full p-5 text-center text-xl font-bold">
						Loading event data...
					</div>
				{:then eventsData}

					<!-- Upcoming First -->
					{#if upcomming.length > 0}
						{#each upcomming as event}
							{@render eventCard(event)}
						{/each}
					{/if}

					<!-- Past Events -->
					{#each eventsData as event}
						{@render eventCard(event)}
					{/each}

				{/await}
			</div>
		</section>

		<div class="h-16"></div>
	</div>
</PageParent>

{#snippet eventCard(item)}

	<div class="w-full">

		{#if item.upcoming}
			<div class="w-full h-[2px] bg-red-700 mb-9"></div>
			<div class="text-2xl font-notable font-bold text-red-500">Upcoming</div>
		{/if}

		<article
			class="
				w-full flex flex-col md:flex-row gap-6
				bg-white/20 rounded-xl p-6 shadow-md
				hover:shadow-xl transition-all duration-300
				overflow-hidden mb-10
				lg:h-[400px]
			"
		>
			<!-- Left Content -->
			<div class="flex flex-col justify-between w-full md:w-1/2 font-moda">
				<div>
					<h3 class="text-3xl font-notable font-bold">{item.name}</h3>
					<p class="text-base opacity-80 leading-relaxed">{item.description}</p>
					<p class="text-sm opacity-60">{item.date}</p>

					{#if item.html}
						<div class="text-lg mt-2">
							{@html item.html}
						</div>
					{/if}
				</div>

				<div class="mt-4">
					{#if item.upcoming}
						<a
							href={item.registrationLink}
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-600 underline text-lg hover:opacity-80"
						>
							Register Here →
						</a>
					{:else}
						<button
							class="px-4 py-2 bg-black text-white rounded-lg text-sm
							hover:scale-105 transition-transform"
							onclick={() => goto(resolve(`/events/${item.slug || item.name}`))}
						>
							View Gallery →
						</button>
					{/if}
				</div>
			</div>

			<!-- Right Image -->
			<div class="w-full md:w-1/2 h-48 md:h-auto overflow-hidden rounded-lg">
				<img
					src={item.coverImg}
					alt={item.name}
					class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
				/>
			</div>

		</article>

		{#if item.upcoming}
			<div class="w-full h-[2px] bg-red-700 mb-9"></div>
		{/if}

	</div>

{/snippet}
