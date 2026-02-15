<script>
	import Desc_Marquee from '$lib/Hero/Desc_Marquee.svelte';

	let { currentIndex = $bindable(), scrollDirection } = $props();
</script>

<!-- BACKGROUND ELEMENTS (pointer interactions disabled) -->
<!-- 
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
		<Desc_Marquee {currentIndex} {scrollDirection}/>
	{/key}
{/if}
-->

<style>
</style>
