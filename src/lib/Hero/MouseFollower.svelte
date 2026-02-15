<script>
	import { data } from '$lib/data.js';
	import ForwardArrow from '@svelte-parts/icons/feather/arrow-right';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { currentIndex = $bindable() } = $props();

	let followerEl = null;

	function followMouse(e) {
		if (followerEl) {
			followerEl.style.display = 'block';
			moveFollower(e);
		}
	}

	function moveFollower(e) {
		if (!followerEl) return;
		followerEl.style.left = `${e.clientX + 15}px`;
		followerEl.style.top = `${e.clientY - 50}px`;
	}

	function destroyFollower() {
		if (followerEl) {
			followerEl.style.display = 'none';
		}
	}
</script>

<!--this is the element that hover around-->
<span
	bind:this={followerEl}
	class="fixed p-2 bg-(--bg-color)/80 backdrop-blur-md border border-(--border-color) rounded-lg shadow-xl text-sm font-medium text-(--text-color) z-10000 pointer-events-none hidden transition-opacity duration-200"
	style="position: fixed;"
>
	<span class="flex items-center justify-around w-full gap-2 px-1">
		{currentIndex !== 0 ? data[currentIndex - 1].name[0] : 'Home'}
		<span class="w-[16px] h-[16px] flex items-center justify-center opacity-70">
			<ForwardArrow inline={false} />
		</span>
	</span>
</span>

<button
	onmouseenter={(e) => followMouse(e)}
	onmousemove={moveFollower}
	onmouseleave={destroyFollower}
	onclick={() => {
		if (currentIndex !== 0) {
			goto(resolve(`${data[currentIndex - 1].route}`));
		}
	}}
	class="
		fixed top-1/2
		-translate-y-1/2
		w-full lg:w-1/2 h-[70vh]
		z-1
		rounded-[20%]
		bg-transparent
		hover:backdrop-blur-[2px]
		hover:cursor-pointer
		transition-all duration-300
		{currentIndex === 0 ? 'hidden' : ''}
		{(currentIndex - 1) % 2 === 0 ? 'lg:left-0' : 'lg:right-0'}
		left-1/2 lg:translate-x-0 -translate-x-1/2
	"
	aria-label="View Details"
>
</button>
