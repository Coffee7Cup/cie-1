<script>
	import { data } from '$lib/data.js';
	import Marquee from '$lib/utils/Marquee.svelte';
	import { compress, depress } from '$lib/utils/CompressDepress.js';

	const { currentIndex, scrollDirection } = $props();

	let animationIn = $derived(scrollDirection === 'down' ? compress : depress);
	let animationOut = $derived(scrollDirection === 'down' ? depress : compress);
</script>

<!-- BIG TITLE - LEFT -->
<div
	class="
		fixed z-3
		left-4
		top-7 lg:top-6
		text-5xl lg:text-8xl
		font-bold leading-snug
		px-2 max-w-[700px]
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
		fixed z-3
		left-4 right-4
		bottom-28 lg:bottom-24
		text-right
		text-3xl lg:text-[2.4rem]
		font-bold leading- snug
		px-2 max-w-[600px] ml-auto
		pointer-events-none
		font-moda
	"
	out:animationIn
	in:animationOut
>
	<span>{data[currentIndex - 1].description_long}</span>
</div>

<!-- MOVING MARQUEE BG -->
<div
	class="
		fixed w-full h-full
		top-[45%] z-1 opacity-50 sm:opacity-65
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
