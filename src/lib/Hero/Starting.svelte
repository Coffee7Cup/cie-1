<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	import Canvas from '$lib/canvas/Canvas.svelte';
	import BulbBackground from '$lib/Hero/BulbBackground.svelte';
	import Attempt3 from '$lib/Hero/Attempt3.svelte';


	onMount(() => {
		let split = new SplitText(".text-anim", { type: "chars, words" });

		gsap.from(split.chars, {
			y: 30,
			opacity: 0,
			stagger: 0.05,
			duration: 0.4,
			ease: "power3.out"
		});
	});
</script>

<div
	class="
  absolute h-full w-full
  bg-[linear-gradient(to_right,#80808055_1px,transparent_1px),linear-gradient(to_bottom,#80808055_1px,transparent_1px)]
  bg-[size:54px_54px]
  mask-[radial-gradient(circle,white_10%,transparent_60%)]
  z-0
"
></div>

<div class="
  absolute
  h-[50vh] lg:h-[85%]
  w-full lg:w-[70%]
  top-[30vh] lg:top-0
  left-1/2 lg:left-auto
  -translate-x-1/2 lg:translate-x-0
  right-auto lg:right-[-10%]
  z-[1] pointer-events-none overflow-visible
">
	<Attempt3/>
</div>


<div class="
		w-screen h-screen
 		inset-0 flex flex-col-reverse
 		justify-end lg:justify-start
 		z-[3] px-6
  	relative py-24">
	<h1 class="text-4xl lg:text-8xl font-bold text-anim relative z-[3] font-notable" >
		CENTER FOR
		<br />
		INNOVATION AND
		<br/>
		ENTREPRENEURSHIP
	</h1>
</div>


