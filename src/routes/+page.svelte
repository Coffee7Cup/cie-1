<script>
	import { onMount } from 'svelte';
	import Canvas from '$lib/canvas/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import { data } from '$lib/data.js';
	import Navbar from '$lib/Hero/Navbar.svelte';
	import Background from '$lib/Hero/Background.svelte';
	import MouseFollower from '$lib/Hero/MouseFollower.svelte';

	// Runes
	let bgColor = $state('#ffffff');
	let currentIndex = $state(0);
	let sections = $state([]);
	let isScrolling = $state(false);

	function onScroll(e) {
		if (isScrolling) return;
		isScrolling = true;

		currentIndex = e.deltaY > 0
			? Math.min(currentIndex + 1, data.length)
			: Math.max(currentIndex - 1, 0);

		setTimeout(() => {
			isScrolling = false;
		}, 800);
	}

	let swipeY = null;

	function onSwipeStart(e) {
		swipeY = e.touches[0].clientY;
	}

	function onSwipeEnd(e) {
		const endY = e.changedTouches[0].clientY;
		if (swipeY === null) return;

		const diff = swipeY - endY;

		if (Math.abs(diff) < 30) return; // Ignore tiny swipes/taps

		if (diff > 0) {
			currentIndex = Math.min(currentIndex + 1, data.length);
		} else {
			currentIndex = Math.max(currentIndex - 1, 0);
		}

		swipeY = null;
	}

	$effect(() => {
		const el = sections[currentIndex];
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
		bgColor = data[currentIndex - 1]?.complementaryColor || '#ffffff';
	});

	onMount(() => {
		window.addEventListener('wheel', onScroll, { passive: false })
		window.addEventListener('touchstart', onSwipeStart, { passive: false })
		window.addEventListener('touchend', onSwipeEnd, { passive: false })
		return () => {
			window.removeEventListener('wheel', onScroll)
			window.removeEventListener('touchstart', onSwipeStart)
			window.removeEventListener('touchend', onSwipeEnd)
		}
	});

</script>

<div
	class="relative w-screen h-screen overflow-hidden"
	style="background-color: {bgColor}; transition: background-color 1s ease;"
>

	<!-- Follower tooltip -->
	<MouseFollower bind:currentIndex={currentIndex}/>

	<!-- Background animations and text -->
	<Background bind:currentIndex={currentIndex} />
	<Navbar bind:currentIndex={currentIndex}/>

	<!-- Scrollable sections -->
	<div bind:this={sections[0]} class="w-screen h-screen relative">
		<Starting />
	</div>

	{#each data as item, i (i)}
		<div bind:this={sections[i + 1]} class="w-screen h-screen relative pointer-events-none z-[3]">
			<Canvas name={item._3d_name} settings={item.settings} />
		</div>
	{/each}
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');

    :global(.font-notable) {
        font-family: 'Notable', sans-serif;
    }
</style>
