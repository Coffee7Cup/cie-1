<script>
	import { data } from '$lib/data.js';
	import Menu from '@svelte-parts/icons/feather/menu/Menu.svelte';
	import Cross from '@svelte-parts/icons/feather/x';
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
		border border-black
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line
							x1="12"
							y1="21"
							x2="12"
							y2="23"
						></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line
							x1="18.36"
							y1="18.36"
							x2="19.78"
							y2="19.78"
						></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"
						></line><line x1="4.22" y1="18.36" x2="5.64" y2="19.78"></line><line
							x1="18.36"
							y1="4.22"
							x2="19.78"
							y2="5.64"
						></line></svg
					>
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
					<Cross inline={false} class="w-6 h-6" />
				{:else}
					<Menu inline={false} class="w-6 h-6" />
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
