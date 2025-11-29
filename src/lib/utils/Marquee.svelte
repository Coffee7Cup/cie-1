<script>
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';

	let { speed = 50, text } = $props();

	let marquee;
	let wrapper;
	let animation;

	function setupMarquee() {
		if (!marquee || !wrapper || !text || text.length === 0) return;

		// Clear existing cloned elements (keep only the original template)
		const allSpans = marquee.querySelectorAll('.text');
		allSpans.forEach((span, index) => {
			if (index >= text.length) {
				span.remove();
			}
		});

		const template = marquee.querySelector('.text');
		if (!template) return;

		let iterations = 0;
		const maxIterations = 100;
		
		while (marquee.scrollWidth <= wrapper.offsetWidth * 2 && iterations < maxIterations) {
			text.forEach((txt) => {
				const span = template.cloneNode(false);
				span.textContent = `• ${txt}`;
				marquee.appendChild(span);
			});
			iterations++;
		}

		const distance = marquee.scrollWidth / 2;
		const duration = distance / speed;

		if (animation) {
			animation.kill();
		}

		animation = gsap.to(marquee, {
			x: -distance,
			duration,
			ease: 'none',
			repeat: -1,
			modifiers: {
				x: gsap.utils.unitize((x) => parseFloat(x) % -distance)
			},
		});
	}

	// React to text changes
	$effect(() => {
		// Access text to make this effect reactive
		if (text && marquee && wrapper) {
			requestAnimationFrame(() => {
				setupMarquee();
			});
		}
	});

	onMount(() => {
		window.addEventListener('resize', setupMarquee);

		return () => {
			window.removeEventListener('resize', setupMarquee);
		};
	});

	onDestroy(() => {
		if (animation) {
			animation.kill();
		}
	});
</script>

<div bind:this={wrapper} class="marquee-wrapper">
	<div class="marquee" bind:this={marquee}>
		{#each text as item ,i (i)}
			<span class="text font-notable">• {item}</span>
		{/each}
	</div>
</div>

<style>
	.marquee-wrapper {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.marquee {
		display: inline-flex;
		gap: 1rem;
		will-change: transform;
	}

	.text, :global(.text) {
		font-size: 6rem;
		font-weight: 800;
		white-space: nowrap;
	}
</style>