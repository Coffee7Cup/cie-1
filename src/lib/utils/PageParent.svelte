<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BackwardArrow from '@svelte-parts/icons/feather/arrow-left/index.js';

	const {children} = $props()

</script>

<button class="flex justify-center items-center
		fixed left-3 top-3
		px-2 p-1.5 backdrop-blur-sm bg-white/30 rounded-2xl text-xl z-10
		transition ease-in-out duration-200
		hover:scale-110"
				onclick={() => {goto(resolve(''))}}
>
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<BackwardArrow inline={false}/>
		</span>
	Home
</button>

<div>
	{@render children()}
</div>
<style>
    :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-y: scroll !important;
    }
</style>

