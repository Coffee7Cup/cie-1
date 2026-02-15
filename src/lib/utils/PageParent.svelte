<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import BackwardArrow from '@svelte-parts/icons/feather/arrow-left/index.js';

	const { children } = $props();
</script>

<div
	class="fixed inset-0 bg-size-[64px_64px] bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] opacity-50 z-0 pointer-events-none"
></div>

<button
	class="flex justify-center items-center
		fixed right-4 bottom-4
		px-4 py-2 bg-(--bg-color) border border-(--border-color) rounded-xl text-base font-medium text-(--text-color) z-10000 shadow-xl
		transition ease-in-out duration-200
		hover:scale-105 active:scale-95 cursor-pointer"
	onclick={() => {
		goto(resolve(''));
	}}
>
	<span class="w-[18px] h-[18px] flex items-center justify-center mr-2">
		<BackwardArrow inline={false} />
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
