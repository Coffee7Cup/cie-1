<script>
	import {data} from '$lib/data.js';
	import {page} from '$app/state'
	import PageParent from '$lib/utils/PageParent.svelte';

  const  galleryName  = page.params.slug;

  const json = fetch(`https://raw.githubusercontent.com/coffee7cup/ciewebrepo/main/events/${galleryName.replace(/\s+/g, "")}.json`)
  .then(res => res.json())
	.catch(err => console.log(err));
</script>


<div class="w-full h-full"
		 style="background-color: {data[1].complementaryColor}"
>
	<div>
		<div class="text-8xl font-notable p-6 w-full pt-9">{galleryName}</div>
		{#await json}
			<div class=" w-full h-full p-5 text-center text-xl font-bold">
				Loading team data...
			</div>
		{:then json}
			<div class = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-4">
				{#each json as item,i (i)}
					<div class="flex">
						<img src={item} alt={galleryName} class="w-full h-full object-cover rounded-2xl hover:shadow-xl transition-all duration-200"/>
					</div>
				{/each}
			</div>
		{/await}
	</div>
</div>

