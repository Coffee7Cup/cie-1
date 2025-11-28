<script>
import { data } from '$lib/data.js';
import Menu from '@svelte-parts/icons/feather/menu/Menu.svelte'
import Cross from '@svelte-parts/icons/feather/x'

let {currentIndex = $bindable()} = $props()

let menuOpen = $state(false)
export function openMenu(node, { duration = 300, delay = 0 } = {}) {
	return {
		duration,
		delay,
		css: (t) => `
      transform: scaleY(${t});
      transform-origin: top;
    `
	};
}
</script>

<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-1 items-center justify-center z-[999]">

	{#if menuOpen}
		<div
			transition:openMenu
			class="w-[50vw] max-w-[500px] rounded-2xl backdrop-blur-md bg-black/40 flex flex-col items-center justify-center shadow-xl border border-white/10 overflow-hidden"
		>
			<button
				class="w-full py-3 text-white text-lg font-medium hover:bg-white/10 transition text-center cursor-pointer border-b border-white/5 last:border-none"
				onclick={() => {
								currentIndex = 0;
								menuOpen = false;
							}}
			>
				Home
			</button>
			{#each data as item, i (i)}
				<button
					class="w-full py-3 text-white text-lg font-medium hover:bg-white/10 transition text-center cursor-pointer border-b border-white/5 last:border-none"
					onclick={() => {
								currentIndex = i + 1;
								menuOpen = false;
							}}
				>
					{item.name}
				</button>
			{/each}
		</div>
	{/if}

	<div class="w-[50vw] max-w-[500px] rounded-2xl backdrop-blur-md bg-black/40 flex items-center justify-between shadow-lg px-5 py-3 border border-white/10">

		<button class="text-2xl text-white font-semibold cursor-pointer">
			{currentIndex === 0 ? "Home" : data[currentIndex - 1].name}
		</button>

		<button
			onclick={() => menuOpen = !menuOpen}
			class="w-10 h-10 flex items-center justify-center text-white hover:text-gray-400 transition"
		>
			{#if menuOpen}
				<Cross inline={false} class="w-7 h-7" />
			{:else}
				<Menu inline={false} class="w-7 h-7" />
			{/if}
		</button>
	</div>

</nav>