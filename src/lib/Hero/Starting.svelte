<script>
	import { onMount } from "svelte";
    import gsap from "gsap";
    import SplitText from "gsap/SplitText";


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
"
></div>
<div class="w-screen h-screen inset-0 flex flex-col justify-center items-center z-10 text-center px-6 ">
	<h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-anim" >
		Center for <span class="font-serif italic text-gray-800">Innovation</span>
		<br />
	</h1>
	<h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-anim" >
		and <span class="font-serif italic text-gray-800">Incubation</span>
	</h1>
</div>