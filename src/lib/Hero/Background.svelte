<script>
	import { data } from '$lib/data.js';
	import Marquee from '$lib/utils/Marquee.svelte';
	import {fly, slide} from 'svelte/transition'

	let {currentIndex = $bindable()} = $props()

</script>

<div
	class="wavy-circle bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-[1] top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[80vw] sm:w-screen"
></div>
<div
	class="wavy-box bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 animate-slow-spin fixed z-[1] bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-screen sm:w-screen"
></div>
{#if currentIndex !== 0}
		{#key currentIndex}
			<div
				class="
		fixed z-[3]
		left-4 right-4

		top-14
		md:top-32
		lg:top-6

		text-4xl sm:text-3xl md:text-4xl lg:text-8xl
		font-bold leading-snug

		px-2 max-w-[600px]

		font-notable
	"
				transition:fly={{ x: -20, duration: 500 }}
			>
				{#if currentIndex > 0}
					<span>{data[currentIndex - 1].name[0]}</span>
				{/if}
			</div>

			<div
				class="
		fixed z-[3]
		left-4 right-4

		bottom-28
		sm:bottom-32
		lg:bottom-24

		text-right

		text-3xl sm:text-3xl md:text-2xl lg:text-3xl
		font-bold leading-snug

		px-2 max-w-[600px] ml-auto
	"
				transition:fly={{ x: 20, duration: 500 }}
			>
				{#if currentIndex > 0}
					<span>{data[currentIndex - 1].description_fr}</span>
				{/if}
			</div>


			<div
				class="fixed w-screen h-screen top-[45%] z-[1] opacity-50 sm:opacity-65"
				transition:fly={{ y: 20, duration: 400 }}
			>
				<Marquee speed={300} text={[data[currentIndex - 1].description]} key = {currentIndex}/>
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