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

<nav
	class="
		fixed bottom-4 left-1/2 -translate-x-1/2
		flex flex-col gap-2 items-center justify-center
		z-[5]
		w-[90vw] sm:w-[100vw] md:w-[50vw] max-w-[500px]
	"
>
	{#if menuOpen}
		<div
			transition:openMenu
			class="
				w-full
				rounded-2xl overflow-hidden
				backdrop-blur-md bg-black/50
				flex flex-col items-center justify-center
				shadow-xl border border-white/10
			"
		>
			<button
				class="
					w-full py-3 text-white text-base sm:text-lg
					hover:bg-white/10 transition text-center cursor-pointer
					border-b border-white/5 last:border-none
				"
				onclick={() => {
					currentIndex = 0;
					menuOpen = false;
				}}
			>
				Home
			</button>

			{#each data as item, i (i)}
				<button
					class="
						w-full py-3 text-white text-base sm:text-lg
						hover:bg-white/10 transition
						text-center cursor-pointer
						border-b border-white/5 last:border-none
					"
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

	<div
		class="
			w-full
			rounded-2xl px-4 py-3
			backdrop-blur-md bg-black/60 shadow-lg
			border border-white/10
			flex items-center justify-between
		"
	>
		<button class="text-lg sm:text-xl text-white font-semibold cursor-pointer">
			{currentIndex === 0 ? "Home" : data[currentIndex - 1].name}
		</button>

		<button
			onclick={() => menuOpen = !menuOpen}
			class="
				w-10 h-10 flex items-center justify-center
				text-white hover:text-gray-400 transition
				active:scale-90
			"
		>
			{#if menuOpen}
				<Cross inline={false} class="w-7 h-7" />
			{:else}
				<Menu inline={false} class="w-7 h-7" />
			{/if}
		</button>
	</div>
</nav>
