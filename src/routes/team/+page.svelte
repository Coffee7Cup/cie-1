<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { onMount } from 'svelte';

	let teamDataPromise = null;

	let head = null;
	let faculty = null;
	let student = null;

	onMount(() => {
		teamDataPromise = fetch(
			`https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/team.json`
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				return res.json();
			})
			.then((teamArray) => {
				head = teamArray.filter((member) => member.category.toLowerCase() === 'head');
				faculty = teamArray.filter((member) => member.category.toLowerCase() === 'faculty');
				student = teamArray.filter((member) => member.category.toLowerCase() === 'student');

				return teamArray;
			})
			.catch((e) => {
				console.error('Error fetching team data:', e);
				throw e;
			});
	});
</script>

<PageParent>
	<div class="min-h-screen text-(--text-color) relative z-1">
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1 class="font- Russo-One font-bold text-5xl lg:text-8xl leading-none relative z-10">
				Team
			</h1>
			<p class="font-moda mt-4 text-xl text-(--secondary-text) relative z-10">
				Let’s collaborate and build something big together.
			</p>
		</header>

		<section class="px-8 lg:px-20 py-10 relative z-10">
			{#await teamDataPromise}
				<div class="w-full py-20 text-center">
					<p class="text-xl font-medium animate-pulse">Loading team data...</p>
				</div>
			{:then team}
				{#if head && head.length > 0}
					<div class="mb-16">
						<h2
							class="text-2xl lg:text-4xl font- Russo-One font-bold mb-10 border-b border-(--border-color) pb-4"
						>
							Administration
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
							{#each head as member (member.name)}
								{@render mainCard(member)}
							{/each}
						</div>
					</div>
				{/if}

				{#if faculty && faculty.length > 0}
					<div class="mb-16">
						<h2
							class="text-2xl lg:text-4xl font- Russo-One font-bold mb-10 border-b border-(--border-color) pb-4 text-left"
						>
							Faculty & Conveners
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{#each faculty as member (member.name)}
								{@render mainCard(member)}
							{/each}
						</div>
					</div>
				{/if}

				{#if student && student.length > 0}
					<div class="mb-16">
						<h2
							class="text-2xl lg:text-4xl font- Russo-One font-bold mb-10 border-b border-(--border-color) pb-4 text-left"
						>
							Student Coordinators
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{#each student as member (member.name)}
								{@render mainCard(member)}
							{/each}
						</div>
					</div>
				{/if}
			{:catch e}
				<div class="py-20 text-center text-red-500">
					<p class="text-xl font-medium">An error occurred loading the team data</p>
					<p class="text-sm opacity-70 mt-2">{e.message}</p>
				</div>
			{/await}
		</section>

		<div class="h-32"></div>
	</div>
</PageParent>

{#snippet mainCard(member)}
	<div class="w-full">
		<div
			class="
				relative rounded-2xl shadow-sm flex flex-col items-center justify-end
				p-6 overflow-hidden group h-[450px]
				bg-(--bg-color) border border-(--border-color)
				transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
			"
		>
			<!-- Background Image -->
			<img
				src={member.photo}
				alt={member.name}
				class="absolute inset-0 w-full h-full object-cover grayscale-30 group-hover:grayscale-0
              transition-all duration-500 group-hover:scale-105"
			/>

			<!-- Overlay -->
			<div
				class="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300"
			></div>

			<!-- Text Content -->
			<div class="relative z-20 w-full text-left">
				<h3 class="text-xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
				<p class="text-sm text-white/80 font-medium mb-1">{member.category}</p>
				{#if member.role}
					<p class="text-xs text-white/60 italic font-medium">{member.role}</p>
				{/if}
			</div>
		</div>
	</div>
{/snippet}
