<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
	import { onMount } from 'svelte';

	let teamDataPromise = null;

	let head = null;
	let faculty = null;
	let student = null;

	onMount(() => {
		teamDataPromise = fetch(`https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/team.json`)
			.then(res => {
				if (!res.ok) {
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				return res.json();
			})
			.then(teamArray => {

				head = teamArray.filter(member => member.category.toLowerCase() === "head");
				faculty = teamArray.filter(member => member.category.toLowerCase() === "faculty");
				student = teamArray.filter(member => member.category.toLowerCase() === "student");

				return teamArray;
			})
			.catch(e => {
				console.error("Error fetching team data:", e);
				throw e;
			});
	});

</script>

<PageParent>
	<div class="font-notable min-h-screen text-black overflow-y-auto"
			 style="background-color: {data[3].complementaryColor};">
		<header class="pt-10 pb-6 px-8">
			<h1 class="font-notable font-bold text-5xl lg:text-8xl leading-none">
				Team
			</h1>
			<p class="font-moda mt-3 text-lg">
				Let’s collaborate and build something big together.
			</p>
		</header>

		{#await teamDataPromise}
			<div class=" w-full h-full p-5 text-center text-xl font-bold">
				Loading team data...
			</div>
		{:then team}
			{#if head && head.length > 0}
				<h2 class="text-3xl font-bold p-5 w-full text-center">Administration</h2>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 font-moda p-5">
					{#each head as member (member.name)}
						{@render mainCard(member)}
					{/each}
				</div>
			{/if}

			{#if faculty && faculty.length > 0}
				<h2 class="text-3xl font-bold p-5 mt-8 w-full text-center">Faculty & Conveners</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-moda p-5">
					{#each faculty as member (member.name)}
						{@render mainCard(member)}
					{/each}
				</div>
			{/if}

			{#if student && student.length > 0}
				<h2 class="text-3xl font-bold p-5 mt-8 w-full text-center">Student Coordinators & Members</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-moda p-5">
					{#each student as member (member.name)}
						{@render mainCard(member)}
					{/each}
				</div>
			{/if}

		{:catch e}
			<div class="p-5 text-center text-xl text-red-600">
				<p>An error occurred loading the team data:</p>
				<p>{e.message}</p>
			</div>
		{/await}

		<div class="h-16"></div>
	</div>
</PageParent>


{#snippet mainCard(member)}
	<div class="w-full">
		<div class="
		relative rounded-lg shadow-lg flex flex-col items-center justify-end
		p-6 overflow-hidden group
		hover:shadow-2xl transition-all duration-300
		max-w-[400px] mx-auto aspect-[3/4]
		text-black
	">

			<!-- Background Image -->
			<img
				src={member.photo}
				alt={member.name}
				class="absolute inset-0 w-full h-full object-cover
             transition-transform duration-300 group-hover:scale-110"
			/>

			<!-- Overlay for better readability -->
			<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-[-1]"></div>

			<!-- Text Content -->
			<div class="text-center  drop-shadow-md">
				<h3 class="text-xl font-bold">{member.name}</h3>
				<p class="text-sm text-gray-800">{member.category}</p>
				{#if member.role}
					<p class="text-xs text-gray-900 italic mt-1">{member.role}</p>
				{/if}
			</div>
		</div>
	</div>
{/snippet}
