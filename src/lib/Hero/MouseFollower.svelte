<script>
	import {data} from '$lib/data.js'
	import ForwardArrow from '@svelte-parts/icons/feather/arrow-right'
	import {goto} from '$app/navigation'
	import {resolve} from '$app/paths'


	let {currentIndex = $bindable()} = $props()

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
	class="fixed p-2 bg-black/30 backdrop-blur-sm border-black/20 border-1 rounded-lg text-md text-white z-[4] pointer-events-none hidden"
	style="position: fixed;"
>
	<span class="flex items-center justify-around w-full gap-2">
		{currentIndex !== 0 ? data[currentIndex-1].name : "Home"}
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<ForwardArrow inline={false}/>
		</span>
	</span>
</span>

<button
	onmouseenter={(e) => followMouse(e)}
	onmousemove={moveFollower}
	onmouseleave={destroyFollower}
	onclick={() => {
		goto(resolve(`${data[currentIndex - 1].route}`))
		console.log(`${data[currentIndex - 1].name}`)
	}}
	class="
				fixed top-1/2 left-1/2
				-translate-x-1/2 -translate-y-1/2
				w-[90vh] h-[70vh]
				z-[2]
				rounded-[40%]
				mask-[radial-gradient(circle,black_40%,transparent_60%)]
				bg-transparent
				opacity-0
<!--				hover:opacity-100-->
				hover:bg-black/10
				hover:backdrop-blur-sm
				hover:cursor-pointer
				transition-all duration-300
			"
	aria-label="ss"
	style={currentIndex !== 0 ? `display : hidden` : `display : none;` }>
</button>