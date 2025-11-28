<script>
import { data } from '$lib/data.js';
import Marquee from '$lib/utils/Marquee.svelte';
import {fly} from 'svelte/transition'

let {currentIndex = $bindable()} = $props()

</script>

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
