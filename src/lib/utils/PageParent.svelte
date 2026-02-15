<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BackwardArrow from '@svelte-parts/icons/feather/arrow-left/index.js';

	const {children} = $props()

</script>

<button class="flex justify-center items-center
		fixed right-4 bottom-4
		px-3 p-2.5 backdrop-blur-sm bg-white/30 rounded-2xl text-xl z-10
		transition ease-in-out duration-200
		hover:scale-110"
			onclick={() => {goto(resolve(''))}}
>
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<BackwardArrow inline={false}/>
		</span>
	Back
</button>

<div class="page-scroll">
	{@render children()}
</div>
<style>
    .page-scroll {
        height: 100dvh;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>

