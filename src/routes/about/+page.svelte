<script>
	import { data } from '$lib/data.js';
	import PageParent from '$lib/utils/PageParent.svelte';
</script>

<PageParent>
	<div class="min-h-screen text-(--text-color) relative z-1">
		<!-- Title -->
		<header class="pt-20 pb-10 px-8 lg:px-20 relative overflow-hidden">
			<div
				class="absolute top-0 right-0 w-96 h-96 bg-radial from-(--accent-color) to-transparent opacity-40 -translate-y-1/2 translate-x-1/2 blur-3xl z-0"
			></div>
			<h1
				class="
				font- Russo-One font-bold
				text-5xl lg:text-8xl relative z-10
			"
			>
				About Us
			</h1>
		</header>

		<!-- Mission + Vision -->
		<section class="grid gap-12 lg:grid-cols-2 px-8 lg:px-20 py-12 relative z-10">
			<div
				class="space-y-4 bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:scale-[1.02] transition duration-300 ease-in-out p-10 rounded-2xl shadow-sm"
			>
				<h2 class="font- Russo-One text-3xl lg:text-5xl font-bold">Mission</h2>
				<p
					class="font-moda text-lg lg:text-xl tracking-wide leading-relaxed max-w-prose text-(--secondary-text)"
				>
					To build an ecosystem that supports innovative ideas, incubates startups, and creates
					employment and entrepreneurial opportunities for students, faculty, and researchers
					through successful ventures.
				</p>
			</div>

			<div
				class="space-y-4 bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:scale-[1.02] transition duration-300 ease-in-out p-10 rounded-2xl shadow-sm"
			>
				<h2 class="font- Russo-One text-3xl lg:text-5xl font-bold">Vision</h2>
				<p
					class="font-moda text-lg lg:text-xl tracking-wide leading-relaxed max-w-prose text-(--secondary-text)"
				>
					To be a Center of Excellence fostering synergy between academia and industry — fueling
					entrepreneurial mindset, innovation, self-reliance, and research that contributes to
					national development.
				</p>
			</div>
		</section>

		<!-- Why Join Us -->
		<section class="px-8 lg:px-20 py-12 relative z-10">
			<h2 class="font- Russo-One text-3xl lg:text-5xl font-bold mb-8">Why Join Us?</h2>

			<div
				class="grid gap-6 md:grid-cols-3 font-moda text-base lg:text-xl tracking-wide leading-relaxed"
			>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					We offer resources, mentorship, and labs to transform your innovative ideas into
					real-world solutions.
				</div>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					Connect with industry experts, investors, and startup leaders through events and
					collaborations.
				</div>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					Gain hands-on skills, leadership opportunities, and confidence to build your own startup.
				</div>
			</div>
		</section>

		<!-- What We Do -->
		<section class="px-8 lg:px-20 py-12 relative z-10">
			<h2 class="font- Russo-One text-3xl lg:text-5xl font-bold mb-8">What We Do</h2>

			<div
				class="grid gap-6 md:grid-cols-3 font-moda text-base lg:text-xl tracking-wide leading-relaxed"
			>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					Incubation support for emerging startups and at-scale products.
				</div>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					Organize hackathons, workshops, competitions, and innovation challenges.
				</div>
				<div
					class="p-6 rounded-xl bg-(--bg-color)/40 backdrop-blur-md border border-(--border-color) hover:bg-(--accent-color)/50 transition duration-300 ease-in-out"
				>
					Provide funding guidance, prototype development, intellectual property support, and
					networking.
				</div>
			</div>
		</section>

		<!-- Footer Padding -->
		<div class="h-32"></div>
	</div>
</PageParent>
