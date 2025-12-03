<script>
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
	import {compress, depress} from '$lib/utils/CompressDepress.js'

	let { speed = 50, text, scrollDirection } = $props();

	let animationIn = $derived(scrollDirection === 'down' ? compress : depress);
	let animationOut = $derived(scrollDirection === 'down' ? depress : compress);

	let marquee;
	let wrapper;
	let animation;
	let resizeTimeout;

	function setupMarquee() {
		if (!marquee || !wrapper || !text || text.length === 0) return;

		// Kill existing animation before setup
		if (animation) {
			animation.kill();
		}

		// Clear existing cloned elements
		const allSpans = marquee.querySelectorAll('.text');
		allSpans.forEach((span, index) => {
			if (index >= text.length) {
				span.remove();
			}
		});

		const template = marquee.querySelector('.text');
		if (!template) return;

		// Clone enough times to fill 3x viewport width for seamless loop
		const targetWidth = wrapper.offsetWidth * 3;
		let iterations = 0;
		const maxIterations = 50;

		while (marquee.scrollWidth < targetWidth && iterations < maxIterations) {
			text.forEach((txt) => {
				const span = template.cloneNode(false);
				span.textContent = `• ${txt}`;
				marquee.appendChild(span);
			});
			iterations++;
		}

		// Force browser to calculate layout
		void marquee.offsetWidth;

		const distance = marquee.scrollWidth / 2;
		const duration = distance / speed;

		// Use GSAP ticker for smoother animation on mobile
		gsap.ticker.fps(60);

		animation = gsap.to(marquee, {
			x: -distance,
			duration,
			ease: 'none',
			repeat: -1,
			force3D: true, // Hardware acceleration
			modifiers: {
				x: gsap.utils.unitize((x) => parseFloat(x) % -distance)
			},
		});
	}

	function handleResize() {
		// Debounce resize for better performance
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			setupMarquee();
		}, 150);
	}

	// React to text changes
	$effect(() => {
		if (text && marquee && wrapper) {
			// Use requestAnimationFrame for smooth initialization
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setupMarquee();
				});
			});
		}
	});

	onMount(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(resizeTimeout);
		};
	});

	onDestroy(() => {
		if (animation) {
			animation.kill();
		}
		clearTimeout(resizeTimeout);
	});
</script>

<div
	bind:this={wrapper}
	class="marquee-wrapper"
	out:animationIn
	in:animationOut
>
	<div class="marquee" bind:this={marquee}>
		{#each text as item, i (i)}
			<span class="text font-notable">• {item}</span>
		{/each}
	</div>
</div>

<style>
    .marquee-wrapper {
        width: 100%;
        position: relative;
        overflow: hidden;
        /* Prevent layout shifts */
        contain: layout style paint;
    }

    .marquee {
        display: inline-flex;
        gap: 1rem;
        /* Critical for smooth animation */
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        perspective: 1000px;
        -webkit-perspective: 1000px;
        /* Optimize rendering */
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
    }

    .text {
        /* Responsive font size */
        font-size: clamp(2rem, 8vw, 4rem);
        font-weight: 800;
        white-space: nowrap;
        /* Improve text rendering */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        /* Prevent selection to avoid mobile interaction issues */
        user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    /* Mobile-specific optimizations */
    @media (max-width: 768px) {
        .marquee {
            gap: 0.75rem;
        }

        .text {
            font-size: clamp(2.5rem, 6vw, 3rem);
        }
    }
</style>