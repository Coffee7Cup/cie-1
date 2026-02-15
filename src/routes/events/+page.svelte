<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// let events = null;

	let events = [
		{
			name: 'Kreative',
			file: 'Kreative',
			coverImg: 'https://drive.google.com/uc?id=1ZF0Zp-w-hli21Mqgo1Q_yPi0c2V5YS92',
			description:
				'Kreative is the central annual festival for innovation and cultural showcase, bringing together students from various disciplines for competitions, workshops, and inter-departmental events.',
			date: '',
			upcoming: false,
			registrationLink: null
		},
		{
			name: 'Innov8',
			file: 'Innov8',
			coverImg: 'https://drive.google.com/uc?id=18G7ZQLkjI3qYczJagqg-HJWIUwNFeNva',
			description:
				'A central technical competition or theme promoting innovation, often including hackathons and project showcases where participants build real-world solutions.',
			date: 'TBD',
			upcoming: true,
			registrationLink: null,
			html: "<p style='background-color: red;'>Hello im yash<p>"
		},
		{
			name: 'Hola Amigos',
			file: 'HolaAmigos',
			coverImg: 'https://drive.google.com/uc?id=1Fm10PbpjNvhoRSp4y4g4OiOhABKUNdwm',
			description:
				'A social, fun, and casual event designed for students to interact, participate in games, enjoy music, and promote a relaxed, friendly atmosphere among peers.',
			date: 'TBD',
			upcoming: false,
			registrationLink: null
		}
	];

	// onMount(() => {
	// 	events = fetch(
	// 		"https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/events/events.json"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			upcomming = res.filter((item) => item.upcoming === true);
	// 			return res.filter((item) => item.upcoming === false);
	// 		})
	// 		.catch((e) => console.log(e));
	// });
</script>

<PageParent>
	<div class="min-h-screen text-(--text-color) relative z-1">
		<!-- Title -->
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1 class="font- Russo-One font-bold text-5xl lg:text-8xl leading-none relative z-10">
				Events
			</h1>
			<p class="font-moda mt-4 text-xl text-(--secondary-text) relative z-10">
				Create. Compete. Connect. Grow together.
			</p>
		</header>

		<!-- Cards -->
		<section class="px-8 lg:px-20 py-10 relative z-10">
			<div class="flex flex-col gap-10">
				{#await events}
					<div class="w-full py-20 text-center">
						<p class="text-xl font-medium animate-pulse">Loading event data...</p>
					</div>
				{:then eventsData}
					<!-- Upcoming First -->
					{#if eventsData.filter((item) => item.upcoming).length > 0}
						{#each eventsData.filter((item) => item.upcoming) as event}
							{@render eventCard(event)}
						{/each}
					{/if}

					<!-- Past Events -->
					{#each eventsData.filter((item) => !item.upcoming) as event}
						{@render eventCard(event)}
					{/each}
				{/await}
			</div>
		</section>

		<div class="h-32"></div>
	</div>
</PageParent>

{#snippet eventCard(item)}
	<div class="w-full">
		{#if item.upcoming}
			<div class="w-full h-px bg-red-500/30 mb-6"></div>
			<div class="text-xl font- Russo-One font-bold text-red-500 mb-4 tracking-tighter uppercase">
				Upcoming
			</div>
		{/if}

		<article
			class="
				w-full flex flex-col md:flex-row gap-8
				bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color)
				rounded-2xl p-6 shadow-sm
				hover:shadow-xl hover:scale-[1.01] transition-all duration-300
				overflow-hidden mb-8
				lg:h-[400px]
			"
		>
			<!-- Left Content -->
			<div class="flex flex-col justify-between w-full md:w-1/2 font-moda">
				<div class="space-y-4">
					<h3 class="text-3xl lg:text-4xl font- Russo-One font-bold text-(--text-color)">
						{item.name}
					</h3>
					<p class="text-lg lg:text-xl text-(--secondary-text) leading-relaxed line-clamp-4">
						{item.description}
					</p>
					<div class="flex items-center text-sm font-medium text-(--secondary-text) opacity-70">
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							></path></svg
						>
						{item.date || 'Date TBD'}
					</div>

					{#if item.html}
						<div class="text-lg mt-2 text-(--text-color)">
							{@html item.html}
						</div>
					{/if}
				</div>

				<div class="mt-6">
					{#if item.upcoming}
						<a
							href={item.registrationLink}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/20"
						>
							Register Here
							<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path></svg
							>
						</a>
					{:else}
						<button
							class="inline-flex items-center px-6 py-3 bg-(--text-color) text-(--bg-color) rounded-xl font-bold hover:opacity-90 transition-all shadow-lg cursor-pointer"
							onclick={() => goto(resolve(`/events/${item.name.replaceAll(/\s+/g, '')}`))}
						>
							View Gallery
							<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path></svg
							>
						</button>
					{/if}
				</div>
			</div>

			<!-- Right Image -->
			<div
				class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-xl border border-(--border-color)"
			>
				<img
					src={item.coverImg}
					alt={item.name}
					class="w-full h-full object-cover"
				/>
			</div>
		</article>

		{#if item.upcoming}
			<div class="w-full h-px bg-(--border-color) mb-12"></div>
		{/if}
	</div>
{/snippet}
