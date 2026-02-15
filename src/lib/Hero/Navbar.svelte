<script>
	import { data } from '$lib/data.js';
	import { Menu, X as Cross, Sun, Moon } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme.js';

	let { currentIndex = $bindable() } = $props();

	let menuOpen = $state(false);

	export function openMenu(node, { duration = 300, delay = 0 } = {}) {
		return {
			duration,
			delay,
			css: (t) => `
				transform: scaleY(${t});
				transform-origin: bottom;
			`
		};
	}
</script>

<nav
	class="
		px-5
		border border-(--border-color)
		fixed left-1/2 -translate-x-1/2
		bottom-[calc(env(safe-area-inset-bottom)+1rem)]
		flex flex-col gap-2 items-center justify-center
		z-9999
		w-full lg:w-[550px]
		pointer-events-auto
	"
>
	{#if menuOpen}
		<div
			transition:openMenu
			class="
				w-full
				rounded-xl overflow-hidden
				bg-(--bg-color)
				flex flex-col items-center justify-center
				shadow-2xl border border-(--border-color)
			"
		>
			<button
				class="
					w-full py-3 text-(--text-color) text-base sm:text-lg
					hover:bg-(--accent-color) transition text-center cursor-pointer
					border-b border-(--border-color) last:border-none
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
						w-full py-3 text-(--text-color) text-base sm:text-lg
						hover:bg-(--accent-color) transition
						text-center cursor-pointer
						border-b border-(--border-color) last:border-none
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
			rounded-xl px-4 py-2
			bg-(--bg-color) shadow-lg
			border border-(--border-color)
			flex items-center justify-between
		"
	>
		<button class="text-base sm:text-lg text-(--text-color) font-medium cursor-pointer">
			{currentIndex === 0 ? 'Home' : data[currentIndex - 1].name[0]}
		</button>

		<div class="flex items-center gap-2">
			<button
				onclick={toggleTheme}
				class="
					w-10 h-10 flex items-center justify-center
					text-(--text-color) hover:bg-(--accent-color) rounded-lg transition
					active:scale-90 cursor-pointer
				"
				aria-label="Toggle dark mode"
			>
				{#if $theme === 'light'}
					<Moon size={20} />
				{:else}
					<Sun size={20} />
				{/if}
			</button>

			<button
				onclick={() => {
					menuOpen = !menuOpen;
				}}
				class="
					w-10 h-10 flex items-center justify-center
					text-(--text-color) hover:bg-(--accent-color) rounded-lg transition
					active:scale-90 cursor-pointer
				"
			>
				{#if menuOpen}
					<Cross size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>
</nav>

<style>
	/* Makes taps respond immediately – important for mobile */
	* {
		touch-action: manipulation;
	}
</style>
