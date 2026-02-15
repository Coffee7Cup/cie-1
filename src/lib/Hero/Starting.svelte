<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import SplitText from 'gsap/SplitText';
	import Attempt3 from '$lib/Hero/Attempt3.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	onMount(() => {
		let split = new SplitText('.text-anim', { type: 'chars, words' });

		gsap.from(split.chars, {
			y: 30,
			opacity: 0,
			stagger: 0.05,
			duration: 0.4,
			ease: 'power3.out'
		});
	});
</script>

<div
	class="
  absolute h-full w-full
  bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)]
  bg-size-[64px_64px]
  mask-[radial-gradient(circle,white_10%,transparent_60%)]
  z-0 pointer-events-none opacity-50
"
></div>

<div
	class="
  absolute
  h-[50vh] lg:h-[85%]
  w-full lg:w-[50%]
  top-[40vh] lg:top-0
  right-[50%] lg:right-0
  translate-x-1/2 lg:translate-x-0
  z-1 pointer-events-none overflow-visible
"
>
	<div
		class="
	absolute w-[120%] h-[120%]
	bg-radial from-[#fbbf24] to-transparent
	z-[-1]
	-translate-x-1/10
	-translate-y-1/4
	opacity-40
	blur-3xl
"
	></div>
	<Attempt3 />
</div>

<div
	class="
		w-full h-full
 		inset-0 flex flex-col-reverse
 		justify-end lg:justify-start
 		z-3 px-6 lg:px-20
  	relative py-14 lg:py-26
"
>
	<button
		class="
			font-moda bg-(--text-color) text-(--bg-color) font-lg lg:font-xl rounded-md
			w-[150px] mt-4 p-2 lg:p-3
			hover:scale-105 transition-all duration-200 cursor-pointer
"
		onclick={() => goto(resolve('/events'))}
	>
		See events
	</button>

	<h1
		class="text-3xl lg:text-[6rem] font-bold text-anim relative z-3 font- Russo-One text-(--text-color) leading-tight"
	>
		CENTER FOR
		<br />
		INNOVATION AND
		<br />
		ENTREPRENEURSHIP
	</h1>
</div>
