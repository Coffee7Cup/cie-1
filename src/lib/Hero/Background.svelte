<script>
	import { data } from '$lib/data.js';
	import Marquee from '$lib/utils/Marquee.svelte';
	import {compress , depress} from '$lib/utils/CompressDepress.js'

	let { currentIndex = $bindable(), scrollDirection } = $props();

	// ✅ CORRECT: $derived calculates BEFORE rendering
	let animationIn = $derived(scrollDirection === 'down' ? compress : depress);
	let animationOut = $derived(scrollDirection === 'down' ? depress : compress);

</script>

<!-- BACKGROUND ELEMENTS (pointer interactions disabled) -->
<div
	class="wavy-circle pointer-events-none
	bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
	opacity-40 animate-slow-spin fixed z-[1]
	top-0 left-0
	-translate-x-1/3 -translate-y-1/2
	lg:-translate-y-1/3
	w-[80vw] sm:w-full"
></div>

<div
	class="wavy-box pointer-events-none
	bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
	opacity-40 animate-slow-spin fixed z-[1]
	bottom-0 right-0
	translate-x-1/3 translate-y-1/2
	lg:translate-y-1/3

	w-full sm:w-full"
></div>

{#if currentIndex !== 0}
	{#key currentIndex}

		<!-- BIG TITLE - LEFT -->
		<div
			class="
				fixed z-[3]
				left-4 right-4
				top-7 lg:top-6
				text-5xl lg:text-8xl
				font-bold leading-snug
				px-2 max-w-[600px]
				font-notable
				pointer-events-none
			"
			out:animationIn
			in:animationOut

		>
			<span>{data[currentIndex - 1].name[0]}</span>
		</div>

		<!-- DESCRIPTION - RIGHT -->
		<div
			class="
				fixed z-[3]
				left-4 right-4
				bottom-28 lg:bottom-24
				text-right
				text-3xl lg:text-4xl
				font-bold leading- snug
				px-2 max-w-[600px] ml-auto
				pointer-events-none
				font-moda
			"
			out:animationIn
			in:animationOut
		>
			<span>{data[currentIndex - 1].description_fr}</span>
		</div>

		<!-- MOVING MARQUEE BG -->
		<div
			class="
				fixed w-full h-full
				top-[45%] z-[1] opacity-50 sm:opacity-65
				pointer-events-none
			"
		>
			<Marquee
				speed={300}
				text={[data[currentIndex - 1].description]}
				key={currentIndex}
				{scrollDirection}
			/>
		</div>

	{/key}
{/if}

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
