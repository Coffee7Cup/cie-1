<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import gsap from 'gsap';
	import SplitText from 'gsap/SplitText';
	import Canvas from '$lib/canvas/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import Marquee from '$lib/utils/Marquee.svelte';
	import { data } from '$lib/data.js';
	import { flip } from 'svelte/animate';

	function flipX(node, { duration = 500, delay = 0 }) {
		return {
			duration,
			delay,
			css: (t) => {
				const eased = cubicOut(t);
				return `
					transform: perspective(1000px) rotateX(${(1 - eased) * 90}deg);
					opacity: ${eased};
				`;
			}
		};
	}

	// Runes
	let bgColor = $state('#ffffff');
	let currentIndex = $state(0);

	let sections = $state([]);

	let isScrolling = $state(false) ;

function onScroll(e) {
	if (isScrolling) return;
	isScrolling = true;

	e.preventDefault();
	currentIndex = e.deltaY > 0
		? Math.min(currentIndex + 1, data.length)
		: Math.max(currentIndex - 1, 0);

	setTimeout(() => {
		isScrolling = false;
	}, 800);
}


	$effect(() => {
		const el = sections[currentIndex];
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
		bgColor=data[currentIndex - 1]?.complementaryColor || '#ffffff';
	});

	onMount(() => {
		window.addEventListener('wheel', onScroll, { passive: false });
		return () => window.removeEventListener('wheel', onScroll);
	});
</script>

<div
	class="relative w-screen h-screen overflow-hidden"
	style="background-color: {bgColor}; transition: background-color 1s ease;"
>
	<div class="absolute top-0 left-0 h-screen w-screen">
		<div
			class="wavy-circle bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-screen"
		></div>
		<div
			class="wavy-box bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-10 bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-screen"
		></div>
		{#if currentIndex !== 0}
			{#key currentIndex}
			<div
				class="fixed top-[10vh] left-[5vw] z-10 max-w-[400px] text-2xl font-bold"
				transition:fly={{ x: -20, duration: 500 , }}
			>
				<span >{data[currentIndex - 1].description}</span>
			</div>

			<div
				class="fixed bottom-[10vh] right-[3vw] z-10 max-w-[400px] text-2xl font-bold"
				transition:fly={{ x: -20, duration: 500 }}
			>
				<span>{data[currentIndex - 1].description_fr}</span>
			</div>

			<div
				class="fixed w-screen h-screen top-[45%] z-10 opacity-65"
				transition:fly={{ y: 20, duration: 400 }}
			>
				<Marquee speed={300} text={data[currentIndex - 1].name} key = {currentIndex}/>
			</div>
			{/key}
		{/if}
	</div>

	<!-- Scrollable sections -->
	<div class="absolute top-0 left-0 scroll-container h-screen w-screen z-20">
		<div bind:this={sections[0]} class="w-screen h-screen relative">
			<Starting />
		</div>

		{#each data as item, i}
			<div bind:this={sections[i + 1]} class="w-screen h-screen relative pointer-events-none">
				<Canvas name={item._3d_name} settings={item.settings} />
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes slow-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.animate-slow-spin {
		animation: slow-spin 20s linear infinite;
	}
</style>
