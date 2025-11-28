<script>
	import { onMount } from 'svelte';
	import Canvas from '$lib/canvas/Canvas.svelte';
	import Starting from '$lib/Hero/Starting.svelte';
	import { data } from '$lib/data.js';
	import Navbar from '$lib/Hero/Navbar.svelte';
	import Background from '$lib/Hero/Background.svelte';
	import ForwardArrow from '@svelte-parts/icons/feather/arrow-right'

	// Runes
	let bgColor = $state('#ffffff');
	let currentIndex = $state(0);
	let sections = $state([]);
	let isScrolling = $state(false);

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
		bgColor = data[currentIndex - 1]?.complementaryColor || '#ffffff';
	});

	onMount(() => {
		window.addEventListener('wheel', onScroll, { passive: false });
		return () => window.removeEventListener('wheel', onScroll);
	});

	let followerEl = null;

	function followMouse(e) {
		if (followerEl) {
			followerEl.style.display = 'block';
			moveFollower(e);
		}
	}

	function moveFollower(e) {
		if (!followerEl) return;
		followerEl.style.left = `${e.clientX + 15}px`;
		followerEl.style.top = `${e.clientY - 50}px`;
	}

	function destroyFollower() {
		if (followerEl) {
			followerEl.style.display = 'none';
		}
	}
</script>

<div
	class="relative w-screen h-screen overflow-hidden"
	style="background-color: {bgColor}; transition: background-color 1s ease;"
>
	<!-- Follower tooltip -->
	<span
		bind:this={followerEl}
		class="fixed p-2 bg-black border-black/70 rounded-lg text-md text-white z-[999] pointer-events-none hidden"
		style="position: fixed;"
	>
		<span class="flex items-center justify-around w-full gap-2">
			{currentIndex !== 0 ? data[currentIndex-1].name : "Home"}
			<span class="w-[20px] h-[20px] flex items-center justify-center">
				<ForwardArrow inline={false}/>
		</span>
		</span>
  </span>

	<!-- Background animations and text -->
	<div class="absolute top-0 left-0 h-screen w-screen">
		<Background bind:currentIndex={currentIndex} />
		<Navbar bind:currentIndex={currentIndex}/>
	</div>

	<!-- Scrollable sections -->
	<div class="absolute top-0 left-0 scroll-container h-screen w-screen z-[990]">
		<div bind:this={sections[0]} class="w-screen h-screen relative">
			<Starting />
		</div>

		{#each data as item, i (i)}
			<div bind:this={sections[i + 1]} class="w-screen h-screen relative pointer-events-none">
				<button
					onmouseenter={(e) => followMouse(e)}
					onmousemove={moveFollower}
					onmouseleave={destroyFollower}
					class="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[90vh] h-[90vh]
            rounded-[40%]
						mask-[radial-gradient(circle,black_40%,transparent_70%)]
            bg-transparent
            opacity-0
            pointer-events-auto
            hover:opacity-100
            hover:bg-black/10
            hover:backdrop-blur-sm
            hover:cursor-pointer
            transition-all duration-300
          "
				>
					<span class="sr-only">{item.name}</span>
				</button>
				<Canvas name={item._3d_name} settings={item.settings} />
			</div>
		{/each}
	</div>
</div>