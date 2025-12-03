<script>
	import { onMount } from 'svelte';
	import Canvas from '$lib/utils/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import { data } from '$lib/data.js';
	import Navbar from '$lib/Hero/Navbar.svelte';
	import Background from '$lib/Hero/Background.svelte';
	import MouseFollower from '$lib/Hero/MouseFollower.svelte';

	let currentIndex = $state(0);
	let bgColor = $derived(data[currentIndex - 1]?.complementaryColor || '#ffffff');
	let sections = $state([]);
	let scrollDirection = $state(null);
	let swipeStartCoord = null;
	let isScrolling = $state(false);

	function updateIndexAndScroll(direction) {
		if (isScrolling) return;

		scrollDirection = direction;
		let newIndex = currentIndex;

		if (direction === "down" && currentIndex < sections.length - 1) {
			newIndex = currentIndex + 1;
		} else if (direction === "up" && currentIndex > 0) {
			newIndex = currentIndex - 1;
		}

		if (newIndex !== currentIndex) {
			currentIndex = newIndex;
			isScrolling = true;
			setTimeout(() => {
				isScrolling = false;
			}, 1000);
		}
	}

	function onScroll(e) {
		if (e.type === 'wheel') {
			e.preventDefault();

			if (e.deltaY > 0) {
				updateIndexAndScroll("down");
			} else if (e.deltaY < 0) {
				updateIndexAndScroll("up");
			}
		}
	}

	// Start touch swipe
	function onSwipeStart(e) {
		if(e.touches.length === 1) {
			swipeStartCoord = e.touches[0].clientY;
		}
	}

	function onSwipeEnd(e) {
		if (swipeStartCoord === null) return;

		const endCoord = e.changedTouches[0].clientY;
		let diff = swipeStartCoord - endCoord;

		if (diff > 50) {
			updateIndexAndScroll("down");
		} else if (diff < -50) {
			updateIndexAndScroll("up");
		}

		swipeStartCoord = null;
	}

	$effect(() => {
		if (sections[currentIndex]) {
			sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
		}
	});

	onMount(() => {
		window.addEventListener('wheel', onScroll, { passive: false });
		window.addEventListener('touchstart', onSwipeStart, { passive: false });
		window.addEventListener('touchend', onSwipeEnd, { passive: false });

		return () => {
			window.removeEventListener('wheel', onScroll);
			window.removeEventListener('touchstart', onSwipeStart);
			window.removeEventListener('touchend', onSwipeEnd);
		};
	});
</script>

<div
	class="fixed w-full h-full overflow-hidden pointer-events-none"
	style="background-color: {bgColor}; transition: background-color 1s ease;"
>
</div>

<MouseFollower bind:currentIndex={currentIndex} />

<Background bind:currentIndex={currentIndex} {scrollDirection} />

<Navbar bind:currentIndex={currentIndex}/>

<div bind:this={sections[0]} class="relative w-full h-full">
	<Starting />
</div>

{#each data as item, i (i)}
	<div bind:this={sections[i + 1]} class="relative w-full h-full">
		<Canvas name={item._3d_name} settings={item.settings} />
	</div>
{/each}

<style>
    /* ... (Your styles remain the same) ... */
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
        overflow: hidden;
    }
</style>