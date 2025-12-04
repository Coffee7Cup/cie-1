<script>
	import { data } from '$lib/data.js';
</script>

<div
	class="min-h-screen text-black"
	style="background-color: {data[0].complementaryColor};"
>
	<!-- Title -->
	<header class="pt-10 pb-6 px-8">
		<h1
			class="
				font-notable font-bold
				text-5xl lg:text-8xl
			"
		>
			About Us
		</h1>
	</header>

	<!-- Mission + Vision -->
	<section class="grid gap-12 lg:grid-cols-2 px-8 lg:px-24 py-12">
		<div class="space-y-4 bg-white/40 hover:scale-105 transition duration-200 ease-in-out p-10 rounded-3xl">
			<h2 class="font-notable text-4xl lg:text-6xl font-bold ">
				Mission
			</h2>
			<p class="font-moda text-lg lg:text-xl tracking-wide leading-relaxed max-w-prose">
				To build an ecosystem that supports innovative ideas,
				incubates startups, and creates employment and
				entrepreneurial opportunities for students, faculty,
				and researchers through successful ventures.
			</p>
		</div>

		<div class="space-y-4 bg-white/40 hover:scale-110 transition duration-200 ease-in-out p-10 rounded-3xl">
			<h2 class="font-notable text-4xl lg:text-6xl font-bold">
				Vision
			</h2>
			<p class="font-moda text-lg lg:text-xl tracking-wide leading-relaxed max-w-prose">
				To be a Center of Excellence fostering synergy between
				academia and industry — fueling entrepreneurial mindset,
				innovation, self-reliance, and research that contributes
				to national development.
			</p>
		</div>
	</section>

	<!-- Why Join Us -->
	<section class="px-8 lg:px-24 py-12">
		<h2 class="font-notable text-4xl lg:text-6xl font-bold mb-6">
			Why Join Us?
		</h2>

		<div class="grid gap-6 md:grid-cols-3 font-moda text-base lg:text-xl tracking-wide leading-relaxed">
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				We offer resources, mentorship, and labs to transform
				your innovative ideas into real-world solutions.
			</div>
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				Connect with industry experts, investors, and startup
				leaders through events and collaborations.
			</div>
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				Gain hands-on skills, leadership opportunities, and
				confidence to build your own startup.
			</div>
		</div>
	</section>

	<!-- What We Do -->
	<section class="px-8 lg:px-24 py-12">
		<h2 class="font-notable text-4xl lg:text-6xl font-bold mb-6">
			What We Do
		</h2>

		<div class="grid gap-6 md:grid-cols-3 font-moda text-base lg:text-xl tracking-wide leading-relaxed">
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				Incubation support for emerging startups and
				at-scale products.
			</div>
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				Organize hackathons, workshops, competitions, and
				innovation challenges.
			</div>
			<div class="p-6 rounded-2xl bg-white/40 backdrop-blur border border-black/10 hover:scale-105 transition duration-200 ease-in-out">
				Provide funding guidance, prototype development,
				intellectual property support, and networking.
			</div>
		</div>
	</section>

	<!-- Footer Padding -->
	<div class="h-20"></div>
</div>
