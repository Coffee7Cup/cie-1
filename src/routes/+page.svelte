<script>
	import { onMount } from 'svelte';
	import Canvas from '$lib/utils/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import { data } from '$lib/data.js';
	import Navbar from '$lib/Hero/Navbar.svelte';
	import Background from '$lib/Hero/Background.svelte';
	import MouseFollower from '$lib/Hero/MouseFollower.svelte';

	let currentIndex = $state(0);
	let bgColor = $derived(data[currentIndex - 1]?.complementaryColor || '#ffffff')
	let sections = $state([]);
	let observer = null;
	let scrollDirection = $state(null);

	function handleIntersection(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const index = sections.indexOf(entry.target);
				if (index !== -1 && currentIndex !== index) {
					scrollDirection = index > currentIndex ? 'down' : 'up';
					currentIndex = index;
				}
			}
		});
	}

	onMount(() => {
		observer = new IntersectionObserver(handleIntersection, {
			root: null,
			threshold: 0.1,
		});

		sections.forEach(section => {
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	});




</script>

<div
	class="fixed w-full h-full overflow-hidden pointer-events-none"
	style="background-color: {bgColor}; transition: background-color 1s ease;"
>
</div>

<!--<MouseFollower bind:currentIndex={currentIndex}/>-->

<Background bind:currentIndex={currentIndex} {scrollDirection} />

<Navbar bind:currentIndex={currentIndex}/>

<div class="snap-y snap-mandatory snap-always snap-align-none h-full w-full overflow-y-scroll relative">
	<div bind:this={sections[0]} class="snap-start w-full h-full">
		<Starting />
	</div>

	{#each data as item, i (i)}
		<div bind:this={sections[i + 1]} class="snap-start w-full h-full">
			<Canvas name={item._3d_name} settings={item.settings} />
		</div>
	{/each}

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

    :global(.font-notable) {
        font-family: 'Notable', sans-serif;
    }

    :global(.font-moda) {
        font-family: 'Russo One', sans-serif;
    }

    :global(.scale-y-10) {
        transform: scaleY(1.9);
        transform-origin: center;
    }

    :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
    }

</style>