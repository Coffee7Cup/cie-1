<script>
	import { onMount } from 'svelte';
	import Canvas from '$lib/utils/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import { data } from '$lib/data.js';
	import Navbar from '$lib/Hero/Navbar.svelte';
	import Background from '$lib/Hero/Background.svelte';
	import MouseFollower from '$lib/Hero/MouseFollower.svelte';
	import { heroIndex } from '$lib/store.js';

	let bgColor = $derived(data[$heroIndex - 1]?.complementaryColor || '#ffffff');
	let sections = $state([]);
	let scrollDirection = $state(null);
	let swipeStartCoord = null;
	let isScrolling = $state(false);

	let scrollAccumulator = $state(0);
	const SCROLL_THRESHOLD = 200; //Veryyy important to avoid multiple page scrolls ***

	function updateIndexAndScroll(direction) {
		if (isScrolling) return;

		let newIndex = $heroIndex;

		if (direction === 'down' && $heroIndex < sections.length - 1) {
			newIndex = $heroIndex + 1;
		} else if (direction === 'up' && $heroIndex > 0) {
			newIndex = $heroIndex - 1;
		}

		if (newIndex !== $heroIndex) {
			isScrolling = true;
			scrollDirection = direction;
			$heroIndex = newIndex;
			scrollAccumulator = 0;

			setTimeout(() => {
				isScrolling = false;
			}, 500);
		}
	}

	function onScroll(e) {
		e.preventDefault();

		if (isScrolling) return;

		scrollAccumulator += e.deltaY;

		if (scrollAccumulator >= SCROLL_THRESHOLD) {
			updateIndexAndScroll('down');
		} else if (scrollAccumulator <= -SCROLL_THRESHOLD) {
			updateIndexAndScroll('up');
		}

		if ((scrollAccumulator > 0 && e.deltaY < 0) || (scrollAccumulator < 0 && e.deltaY > 0)) {
			scrollAccumulator = e.deltaY;
		}
	}

	function onSwipeStart(e) {
		if (e.touches.length === 1) {
			swipeStartCoord = e.touches[0].clientY;
		}
	}

	function onSwipeEnd(e) {
		if (swipeStartCoord === null || isScrolling) return;

		const endCoord = e.changedTouches[0].clientY;
		let diff = swipeStartCoord - endCoord;

		if (diff > 50) {
			updateIndexAndScroll('down');
		} else if (diff < -50) {
			updateIndexAndScroll('up');
		}

		swipeStartCoord = null;
	}

	$effect(() => {
		if (sections[$heroIndex]) {
			sections[$heroIndex].scrollIntoView({ behavior: 'smooth' });
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

<MouseFollower bind:currentIndex={$heroIndex} />

<Background bind:currentIndex={$heroIndex} {scrollDirection} />

<Navbar bind:currentIndex={$heroIndex} />

<div bind:this={sections[0]} class="relative w-full h-full">
	<Starting />
</div>

{#each data as item, i (i)}
	<div
		bind:this={sections[i + 1]}
		class="relative w-full h-full flex flex-col lg:flex-row items-center justify-center px-10 gap-10 {i %
			2 !==
		0
			? 'lg:flex-row'
			: 'lg:flex-row-reverse'}"
	>
		<!-- Text Content -->
		<div
			class="z-10 bg-(--bg-color)/50 backdrop-blur-sm p-6 rounded-2xl border border-(--border-color) max-w-md"
		>
			<h2 class="text-4xl lg:text-6xl font-bold mb-4 font- RUSSO-ONE text-(--text-color)">
				{item.name[0]}
			</h2>
			<p class="text-xl lg:text-2xl text-(--secondary-text)">
				{item.description}
			</p>
			{#if item.description_fr}
				<p class="text-lg lg:text-xl text-(--secondary-text) mt-2 italic font-moda">
					{item.description_fr}
				</p>
			{/if}
		</div>

		<!-- 3D Element Container with Radial Gradient -->
		<div
			class="relative w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center overflow-visible"
		>
			<div
				class="absolute w-full h-full rounded-full opacity-50 z-0 blur-3xl"
				style="background: radial-gradient(circle, {item.color} 0%, transparent 70%);"
			></div>
			<Canvas name={item._3d_name} settings={item.settings} />
		</div>
	</div>
{/each}

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden; /* i dont know y this is important...without this the scroll behaviour (home screen - snapping) is not working*/
		/*		i guess there is no way around this... the gemini says that overflow : hidden prevent the default browser behavior, and that what i want*/
	}
</style>
